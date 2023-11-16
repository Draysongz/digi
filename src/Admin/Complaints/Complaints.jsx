import React, { useEffect, useState } from 'react';
import {
  Container,
  Flex,
  Card,
  CardBody,
  Box,
  Text,
  Spacer,
  Heading,
  Button,
  useColorModeValue,
  Icon,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { CiMail } from 'react-icons/ci';
import { AiOutlineBell } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { app } from '../../Components/firebase/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Userbar from '../../Userbar';
import { collection, where, query, doc, getDoc, getDocs, onSnapshot, getFirestore, collectionGroup, orderBy, limit } from 'firebase/firestore';
import MessageModal from '../MessageModal/MessageModal';
import NotificationModal from '../Notifications/NotificationModal';

const Complaints = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const [receivers, setReceivers] = useState({}); 
  const [messageCounts, setMessageCounts] = useState({});
  const [lastMessages, setLastMessages] = useState({});

  const db = getFirestore(app);
  const auth = getAuth();

  async function getCurrentUserUid() {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          unsubscribe();
          resolve(user.uid);
        } else {
          resolve(null);
        }
      });
    });
  }

  async function getChatsForAdmin() {
    try {
      const chatCollection = collection(db, 'chats');
      const adminUid = await getCurrentUserUid();
  
      // Query for chats where the admin is one of the participants
      const chatQuery = query(chatCollection, where('users', 'array-contains', adminUid));
  
      // Create a snapshot listener
      const unsubscribe = onSnapshot(chatQuery, (querySnapshot) => {
        const chats = [];
        querySnapshot.forEach((doc) => {
          const chatData = doc.data();
          chats.push({
            id: doc.id,
            ...chatData,
          });
        });
  
        // Update your chat list with the new data
        setChats(chats);
      });
  
      // You can return the unsubscribe function if needed to stop the listener
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching chats:', error);
      throw error;
    }
  }
   

  useEffect(() => {
    // Fetch chats for the currently logged in admin
    getChatsForAdmin();
    
  }, []);

  async function getUserByUserId(userId) {
    try {
      const userRef = doc(db, 'users', userId);
      const userSnapshot = await getDoc(userRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        return userData
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }


  useEffect(() => {
    async function fetchReceiverData() {
      const receiverData = {};

      for (const chat of chats) {
        const receiverId = chat.users[1];
        const receiver = await getUserByUserId(receiverId);
        
        if (receiver) {
          receiverData[receiverId] = receiver;
        }
      }

      setReceivers(receiverData);
    }

    fetchReceiverData(); // Fetch receiver data and update the state
  }, [chats]);



  useEffect(() => {
    async function fetchLastMessages() {
      const lastMessageData = {};

      for (const chat of chats) {
        const chatId = chat.id; // Assuming your chat object has an "id" property
        const chatDocRef = doc(db, "chats", chat.id); // Assuming "chats" is the collection for chat documents
        const messagesCollectionRef = collection(chatDocRef, "messages");
        const q = query(
          messagesCollectionRef,
          orderBy("timestamp", "asc"),
          limit(1)
        );
        const messageSnapshot = await getDocs(q);
       
        if (!messageSnapshot.empty) {
          const lastMessage = messageSnapshot.docs[0].data();
          lastMessageData[chatId] = lastMessage;
        }
      }

      setLastMessages(lastMessageData);
    }

    fetchLastMessages(); // Fetch last messages and update the state
  }, [chats]);
  
  useEffect(()=>{
    console.log(receivers)
  }, [receivers])

  return (
    <Container
      maxWidth="4xl"
      minHeight="100vh"
      minWidth="79vw"
      bg={useColorModeValue("#F4F5F8", "#050223")}
    color={useColorModeValue("gray.900", "white")}
      overflowX={'hidden'}
      position={[null, null, null, null, 'absolute']}
       left={['0', '0', '0', "21%"]}
    >
      {/* Your header content here */}
      <Flex gap={10} direction={'column'}>
      <Card borderLeftRadius={'0px'} ml={'-1.2%'} mt={'2px'}>
        <CardBody>
          <Flex gap={5} alignItems={'center'} justifyContent={'flex-end'}>
            <MessageModal />
            <NotificationModal />
            <Userbar />
          </Flex>
        </CardBody>
      </Card>

      
      
      <Card>
  <CardBody>
    <Flex gap={8} direction={'column'}>
      {chats.map((chat, index) => {
        const receiver = receivers[chat.users[1]]; // Assuming you have a receiverId in your chat data
        const lastMessage = lastMessages[chat.id];
        console.log(lastMessage)

        if (receiver && lastMessage) {
          return (
            <Flex
              onClick={() => {
                navigate('/admin/chat', { state: { chat } });
              }}
              key={index}
              cursor={'pointer'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Flex gap={4} alignItems={'center'}>
                <Box>
                  <Wrap>
                    <WrapItem>
                      <Avatar
                        name={`${receiver.firstName} ${receiver.lastName}`}
                        size='lg'
                        src={receiver.userDp ? receiver.userDp : ''}
                      />
                    </WrapItem>
                  </Wrap>
                </Box>
                <Flex direction={'column'}>
                  <Text>{`${receiver.firstName} ${receiver.lastName}`}</Text>
                  <Text>{lastMessage.text} </Text>
                </Flex>
              </Flex>
              <Text>{new Date(lastMessage.timestamp.seconds * 1000).toLocaleString()}</Text>
            </Flex>
          );
        } else {
          return null;
        }
      })}
    </Flex>
  </CardBody>
</Card>


      </Flex>
    </Container>
  );
};

export default Complaints;
