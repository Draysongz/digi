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
import { collection, where, query, doc, getDoc, onSnapshot,  getFirestore } from 'firebase/firestore';

const Complaints = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const [receiver, setReceiver] = useState([])
  const [messageCounts, setMessageCounts] = useState({});

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
        setReceiver(userData); // Update the receiver state
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }


  useEffect(() => {
    chats.forEach((chat) => {
      const receiverId = chat.users[1];
      getUserByUserId(receiverId);
    });
  }, [chats]);
  
  useEffect(()=>{
    console.log(receiver)
  }, [receiver])

  return (
    <Container
      maxWidth="4xl"
      minHeight="100vh"
      minWidth="79vw"
      bg={useColorModeValue("#F4F5F8", "gray.700")}
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
            <Icon as={CiMail} boxSize={6} />
            <Icon as={AiOutlineBell} boxSize={6} />
            <Wrap>
              <WrapItem>
                <Avatar name='Admin' size='sm' src='https://your-admin-avatar-url' />
              </WrapItem>
            </Wrap>
          </Flex>
        </CardBody>
      </Card>

      
      
        <Card>
          <CardBody>
            <Flex gap={8} direction={'column'}>
         {chats.map((chat, index)=>{
          return(
            <Flex    onClick={() => {
              navigate('/admin/chat', { state: { chat } });
            }}  key={index}  cursor={'pointer'} justifyContent={'space-between'} alignItems={'center'}>
          
              <Flex  gap={4} alignItems={'center'}>
                  
                          <Box>
                          <Wrap>
                          <WrapItem>
                              <Avatar name={`${receiver.firstName} ${receiver.lastName}`} size='lg' src={receiver.userDp ? receiver.userDp: ''} />
                              </WrapItem>
                      </Wrap>
                          </Box>



                          {receiver && receiver.map((receiver, index)=>{
                            return(
                              <Flex key={index} direction={'column'}>
                              <Text>{`${receiver.firstName} ${receiver.lastName}`}</Text>
                              <Text>I am christine and am unable to login to my dashboard...</Text>
                          </Flex>
                            )
                          })}
           
                      
                 
             
              </Flex> 
              <Text>4 days ago</Text>
          </Flex>
          )
         })}
         </Flex>
          </CardBody>
        </Card>

      </Flex>
    </Container>
  );
};

export default Complaints;
