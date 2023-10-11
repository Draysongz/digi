import React, { useState, useEffect } from 'react';
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
    Table,
    Th,
    Td,
    Icon,
    Wrap,
    WrapItem,
    Avatar,
    Modal,
    Input,
    VStack
  } from "@chakra-ui/react";
  import {CiMail} from 'react-icons/ci'
  import {AiOutlineBell} from 'react-icons/ai'
  import {AttachmentIcon} from '@chakra-ui/icons'
  import {RiSendPlaneFill} from 'react-icons/ri'
  import './chat.css'
  import { app } from '../../../Components/firebase/Firebase';
import { getFirestore, getDoc, doc, collection, where, query, orderBy, onSnapshot, serverTimestamp, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';

const Chat = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [receiver, setReceiver] = useState()
  const [receiverId, setReceiverId]= useState('')

  const location = useLocation()
  const {state}= location
  const {chatData} = state

 
  console.log(chatData)
  const navigate = useNavigate()
  
  
  const db= getFirestore(app)


  const auth= getAuth(app)

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
        const chatDocRef = doc(db, "chats", chatData.id); // Assuming "chats" is the collection for chat documents
        const messagesCollectionRef = collection(chatDocRef, "messages");
        const q = query(
          messagesCollectionRef,
          orderBy("timestamp", "asc")
        );
  
        const unsubscribeMessages = onSnapshot(q, (snapshot) => {
          const messageList = [];
          snapshot.forEach((doc) => {
            const messageData = doc.data();
            messageList.push(messageData);
          });
          setMessages(messageList);
        });
        
        // Return a cleanup function for the messages subscription
        return () => unsubscribeMessages();
      } else {
        // User is signed out
        setUser(null);
        navigate('/login')
        
      }
    });
  
    // Clean up the authentication subscription when component unmounts
    return () => unsubscribeAuth();
  }, [auth, chatData.id]);
  

  useEffect(() => {
    if (user && user.uid) {
      const userId = user.uid;
  
      if (chatData.users[0] === userId) {
        setReceiverId(chatData.users[1]);
      } else if (chatData.users[1] === userId) {
        setReceiverId(chatData.users[0]);
      }
  
      console.log("User ID:", userId);
      console.log(user);
    }
  }, [user, chatData]);
  
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
    if (receiverId) {
      // Make sure receiverId is not empty before attempting to fetch user data
      getUserByUserId(receiverId);
    }
  }, [receiverId]); // Trigger the fetch when receiverId changes

  useEffect(() => {
    console.log(receiver);
  }, [receiver]);

  const sendMessage = async () => {
    try {
      if (message.trim() !== '') {
        const messageData = {
          text: message,
          senderId: user.uid,
          receiverId: receiverId,
          timestamp: serverTimestamp(),
        };

        const chatDocRef = doc(db, "chats", chatData.id);
        const messagesCollectionRef = collection(chatDocRef, "messages");
        await addDoc(messagesCollectionRef, messageData);
        setMessage(''); // Clear the input field after sending
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };


  return (
    <Container
    maxWidth="4xl"
    // py="20px"
    minHeight="100vh"
    minWidth="84vw"
    bg={useColorModeValue("#F4F5F8", "gray.700")}
    color={useColorModeValue("gray.900", "white")}
    position={[null, null, null, null, 'absolute']}
    left={['0', '0', '0', "16%"]}
    overFlow-X={'hidden'}
  >
    <Flex justifyContent={'space-between'} direction="column" gap={10} position={[null, null, null, 'relative']}>
        <Card borderLeftRadius={'0px'}
        ml={'-1.2%'} mt={'2px'} >
            <CardBody>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Text  fontSize={'lg'}>{receiver ? `${receiver.firstName} ${receiver.lastName}`: 'hello'}</Text>
                  <Flex gap={5} >
                    <Icon as={CiMail} boxSize={6} />
                    <Icon as={AiOutlineBell} boxSize={6} />
                    <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                    </Wrap>
                    </Flex>

                </Flex>
            </CardBody>
        </Card>

        <VStack px={10} >
            <Flex w={'65vw'} h={'70vh'} 
            direction={'column'} gap={3}
            // border={'2px solid red'}
            >
               {messages.map((msg, index) => (
        <Text
          key={index}
          p={2}
          borderRadius="lg"
          className={msg.senderId === user.uid ? 'message-sent' : 'message-received'}
          w={'fit-content'}
          maxW={'25vw'}
          borderBottomRightRadius={msg.senderId === user.uid ? 'none' : 'lg'}
          borderBottomLeftRadius={msg.senderId === user.uid ? 'lg' : 'none'}
        >
          {msg.text}
        </Text>
      ))}
            </Flex>

            <Card>
                <CardBody w={'60vw'} h={'20vh'}>
                    <Flex alignItems={'center'} gap={10}>
                        <Box cursor={'pointer'}><AttachmentIcon/></Box>
                        <Box>
                            <Input w={'45vw'} borderRadius={'2xl'} bg={'#EBEBEB'} type='text'
                            _placeholder={{color: '#C4C4C4'}} placeholder='Type a text'  value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                        </Box>
                        <Box cursor={'pointer'}>
                            <Icon color={'#00296B'} onClick={sendMessage} as={RiSendPlaneFill} boxSize={6}/>
                        </Box>
                    </Flex>
                </CardBody>
            </Card>
        </VStack>
        </Flex>
        </Container>
  )
}

export default Chat

