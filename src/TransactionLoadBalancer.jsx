import { useEffect } from 'react';
import { getFirestore, getDoc, doc, updateDoc, collection, query, where, onSnapshot, getDocs, collectionGroup, increment } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function TransactionLoadBalancer() {
  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch the online merchants' IDs from Firestore based on their roles and online status
        const usersRef = collection(db, 'users');
        const merchantRoles = ['Crypto Merchant', 'Paypal Merchant', 'Giftcard Merchant'];
        const merchantsQuery = query(usersRef, where('role', 'in', merchantRoles), where('online', '==', true));

        const merchantsSnapshot = await getDocs(merchantsQuery);
        const merchants = {};

        merchantsSnapshot.forEach((doc) => {
          const userData = doc.data();
          const role = userData.role;

          if (!merchants[role]) {
            merchants[role] = [];
          }

          merchants[role].push(doc.id);
        });

        // Ensure at least one online merchant is available for each role
        if (Object.values(merchants).some((merchantList) => merchantList.length === 0)) {
          console.error('No online Merchants available to assign transactions.');
          return;
        }

        console.log(merchants);

        const transactionsRef = collectionGroup(db, 'transactions');
        const pendingTransactionsQuery = query(transactionsRef, where('status', '==', 'pending'));

        // Monitor pending transactions
        const unsubscribe = onSnapshot(pendingTransactionsQuery, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              const transaction = change.doc.data();
              assignTransactionToMerchant(merchants, transaction, change.doc.id);
            }
          });
        });

        // Clean up the snapshot listener when unmounting
        return () => {
          unsubscribe();
        };
      }
    });
  }, []);

  // Assign a transaction to a random online merchant based on transaction type
  const assignTransactionToMerchant = async (merchants, transaction, transactionId) => {
      console.log('Transaction details:', transaction);
      console.log('Merchants available:', merchants);
      
    
    const { service } = transaction;
  
    const matchingMerchants = Object.keys(merchants).filter((role) => service.includes(role));
    if (matchingMerchants.length === 0) {
      console.error(`No online Merchant available to handle transactions of type ${service}`);
      return;
    }else{
      console.log(`${service}, ${matchingMerchants}`)
    }
    
    const randomMerchantId = merchants[matchingMerchants[0]][Math.floor(Math.random() * merchants[matchingMerchants[0]].length)];

  
    // Update the transaction with the assigned merchant's ID
    const db = getFirestore();
    const transactionRef = doc(db, 'transactions', transactionId);
    await updateDoc(transactionRef, { assignedTo: randomMerchantId, status: 'processing' });
    console.log('Assigned merchant ID:', randomMerchantId);
    await sendNotificationToMerchant(randomMerchantId, transactionId);
  };
  
  const sendNotificationToMerchant = async (merchantId, transactionId) => {
    const db = getFirestore();
    const userRef = doc(db, 'users', merchantId);

    try {
      // Get the current notifications array from the merchant's user document
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data();

      // Create a new notification
      const newNotification = {
        message: `You have a new transaction with ID ${transactionId}`,
        timestamp: new Date(),
      };

      // Update the notifications array in the user document
      if (userData && userData.notifications) {
        userData.notifications.push(newNotification);
      } else {
        userData.notifications = [newNotification];
      }

      // Update the user document with the new notifications
      await updateDoc(userRef, { notifications: userData.notifications, unreadNotifications: increment(1) });
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return null;
}

export default TransactionLoadBalancer;
