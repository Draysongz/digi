import { useEffect } from 'react';
import { getFirestore, doc, updateDoc, collection, query, where, onSnapshot, getDocs, collectionGroup } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function TransactionLoadBalancer() {
  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch the sub-admins' IDs from Firestore
        const usersRef = collection(db, 'users');
        const subAdminsQuery = query(usersRef, where('role', '==', 'sub-admin'));

        const subAdminsSnapshot = await getDocs(subAdminsQuery);
        const subAdmins = [];

        subAdminsSnapshot.forEach((doc) => {
          subAdmins.push(doc.id);
        });

        if (subAdmins.length === 0) {
          console.error('No sub-admins available to assign transactions.');
          return;
        }

        console.log(subAdmins)
        const transactionsRef = collectionGroup(db, 'transactions');
        const pendingTransactionsQuery = query(transactionsRef, where('status', '==', 'pending'));

        // Monitor pending transactions
        const unsubscribe = onSnapshot(pendingTransactionsQuery, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              const transaction = change.doc.data();
              assignTransactionToSubAdmin(subAdmins, transaction, change.doc.id);
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

  // Assign a transaction to a random sub-admin
  const assignTransactionToSubAdmin = async (subAdmins, transaction, transactionId) => {
    const randomSubAdminId = subAdmins[Math.floor(Math.random() * subAdmins.length)];

    // Update the transaction with the assigned sub-admin's ID
    const db = getFirestore();
    const transactionRef = doc(db, 'transactions', transactionId);
    await updateDoc(transactionRef, { assignedTo: randomSubAdminId, status: 'assigned' });
  };

  return null;
}

export default TransactionLoadBalancer;
