import {
  Link,
  Icon,
  Text,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  CardBody,
  PopoverArrow,
  PopoverCloseButton,
  Heading,
  Flex,
WrapItem,
Avatar,
Wrap,
Circle,
  Card,
  CloseButton 
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import { app } from '../../Components/firebase/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, where, query, doc, getDoc, getDocs, onSnapshot, getFirestore,  orderBy, limit } from 'firebase/firestore';

export default function MessageModal() {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const navigate= useNavigate()
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
<Popover placement='top-start' trigger="click" isOpen={isOpen} >
  <PopoverTrigger>
    <Button bg={'transparent'} onClick={onToggle} _hover={{
      bgColor: 'transparent'
    }}>  <Icon as={CiMail} boxSize={7} /></Button>
  </PopoverTrigger>
  <PopoverContent>
    <Card >
      <CardBody borderRadius={'none'} py={3} px={'0'} >
        <Flex justifyContent={'flex-end'} p={3}>
        <Circle boxShadow={'md'} size='30px' bg='white' onClick={()=> onClose()}>
          <CloseButton  _hover={{
      bgColor: 'transparent'
    }}  />
          </Circle>
          </Flex>
 
    <Flex h='10vh' justifyContent={'space-between'} alignItems={'center'} p={2}  bg={'#E8E6F6'}>
        <Heading as={'h3'} fontWeight={'bold'}
        fontSize={'lg'} fontFamily={'Hellix-Medium'} >Messages</Heading>
        <Flex alignItems={'center'} >
        <Text cursor={'pointer'} color={'#626262'} fontFamily={'Hellix-Medium'}>View all  </Text>
        <Icon as={ArrowForwardIcon} boxSize={4} />
        </Flex>
      </Flex>
     
    <PopoverArrow />
    
    <PopoverBody>

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
                        size='sm'
                        src={receiver.userDp ? receiver.userDp : ''}
                      />
                    </WrapItem>
                  </Wrap>
                </Box>
                <Flex direction={'column'}>
                  <Text fontSize={'md'}>{`${receiver.firstName} ${receiver.lastName}`}</Text>
                  <Text>{lastMessage.text} </Text>
                </Flex>
              </Flex>
              {/* <Text>{new Date(lastMessage.timestamp.seconds * 1000).toLocaleString()}</Text> */}
            </Flex>
          );
        } else {
          return null;
        }
      })}
    </Flex>
    </PopoverBody>
    </CardBody>
    </Card>
  </PopoverContent>
</Popover>
  );
}

export function MobileMessageModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

 
  return (
    <>
   <Popover trigger="hover" placement="bottom-start" >
  <PopoverTrigger>
    <Icon as={CiMail} fontSize="4xl" p={1} />
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverHeader>Header</PopoverHeader>
    <PopoverCloseButton />
    <PopoverBody>
      <Button colorScheme="blue">Button</Button>
    </PopoverBody>
  </PopoverContent>
</Popover>

</>
  )
}
