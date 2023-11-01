import React, {useEffect, useState} from 'react'
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
    TableContainer,
    HStack,
    Tr,
    Tbody,
    Thead,
    Icon,
    Wrap,
    WrapItem,
    Avatar,
    Modal,
    ModalHeader,
    ModalBody,
    ModalContent,
    Stack,
    ModalFooter,
    ModalOverlay,
    ModalCloseButton,
    InputGroup,
    Input,
    InputLeftElement,
    InputRightElement,
    color
  } from "@chakra-ui/react";
  import {CiMail} from 'react-icons/ci'
  import {AiOutlineBell} from 'react-icons/ai'
  import { useNavigate } from 'react-router-dom';
 import { app } from '../../firebase/Firebase';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { collection, where, query, getDocs, addDoc, getFirestore } from 'firebase/firestore';

const Complaints = () => {
    const navigate = useNavigate()
    const [merchants, setMerchants] =useState([])
    const [merchantId, setMerchantId] = useState('')
    const [chatDataCache, setChatDataCache] = useState({});

    const db= getFirestore(app)
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

      async function getUsersWithRole(role) {
        const currentUserId = await getCurrentUserUid();
      
        try {
          const usersCollection = collection(db, 'users');
          const querySnapshot = await getDocs(usersCollection);
      
          const users = [];
          querySnapshot.forEach((doc) => {
            const user = doc.data();
            if(user.role == role){
              users.push({
                id: doc.id, 
                ...user,
              });
            }
             
          });
      
          setMerchants(users); 
      
          return users;
        } catch (error) {
          console.error('Error fetching users:', error);
          throw error;
        }
      }
      
    
useEffect(() => {
  const cachedChatData = localStorage.getItem('chatData');
  if (cachedChatData) {
    setChatDataCache(JSON.parse(cachedChatData));
  }
}, []);

// Function to save chat data to local storage
const saveChatDataToLocalStorage = (data) => {
  localStorage.setItem('chatData', JSON.stringify(data));
};

// ...

const onMerchantClick = async (merchantId) => {
  const currentUserId = await getCurrentUserUid();
  const chatRef = collection(db, 'chats');
  const sortedUserIds = [currentUserId, merchantId].sort();

  // Check if a chat already exists in the cache
  const cachedChatData = chatDataCache[merchantId];

  if (cachedChatData) {
    // Chat data is already cached; navigate to the existing chat
    navigate('/user/chat', { state: { chatData: cachedChatData } });
  } else {
    // Check if a chat exists with either direction
    const chatQuery = query(
      chatRef,
      where('users', 'array-contains', sortedUserIds)
    );

    try {
      const querySnapshot = await getDocs(chatQuery);

      if (querySnapshot.size > 0) {
        // Chat already exists; navigate to the existing chat
        const chatDoc = querySnapshot.docs[0];
        const chatData = chatDoc.data();

        // Cache the chat data
        const updatedChatDataCache = {
          ...chatDataCache,
          [merchantId]: { id: chatDoc.id, ...chatData },
        };
        setChatDataCache(updatedChatDataCache);

        // Save the updated chat data cache to local storage
        saveChatDataToLocalStorage(updatedChatDataCache);

        navigate('/user/chat', { state: { chatData: { id: chatDoc.id, ...chatData } }});
      } else {
        // No chat exists, create a new chat from currentUser to merchant
        const newChatData = {
          users: sortedUserIds,
        };

        const newChatRef = await addDoc(chatRef, newChatData);
        const newChatId = newChatRef.id;

        // Cache the chat data
        const updatedChatDataCache = {
          ...chatDataCache,
          [merchantId]: { id: newChatId, ...newChatData },
        };
        setChatDataCache(updatedChatDataCache);

        // Save the updated chat data cache to local storage
        saveChatDataToLocalStorage(updatedChatDataCache);

        navigate('/user/chat', { state: { chatData: { id: newChatId, ...newChatData } }});
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
};

      
      
      
      
      useEffect(()=>{
        getUsersWithRole("Customer Care")
      }, [])

      useEffect(()=>{
        console.log(merchants);
      },[merchants])

    
      
      

  
  
  return (
    <Container
    maxWidth="4xl"
    // py="20px"
    minHeight="100vh"
    minWidth="83.4vw"
    bg={useColorModeValue("#F4F5F8", "#050223")}
    color={useColorModeValue("gray.900", "white")}
    position={[null, null, null, null, 'absolute']}
    left={['0', '0', '0', "16.2%"]}
    overflowX={'hidden'}
  >
    <Flex justifyContent={'space-between'} direction="column" gap={10} position={[null, null, null, 'relative']}>

        <Flex gap={10} justifyContent={'space-between'} px={10} direction={'column'}>
            <Box>
                <Heading fontFamily={'Hellix-Medium'} fontSize={'30px'}>Complaints</Heading>
            </Box>
            </Flex>

            <Box px={10}>
                      
        <Card bg={useColorModeValue("", "#141139")}>
            <CardBody>
                <Flex direction={'column'} gap={10} >
                {merchants.map((merchant, index)=>{
                                return(
                    <Flex onClick={()=>{
                        onMerchantClick(merchant.id)
                    }} cursor={'pointer'} justifyContent={'space-between'} alignItems={'center'}>
                    
                        <Flex key={index} gap={4} alignItems={'center'}>
                            
                                    <Box>
                                    <Wrap>
                                    <WrapItem>
                                        <Avatar name={`${merchant.firstName} ${merchant.lastName}`} size='lg' src={merchant.userDp ? merchant.userDp : ''} />
                                        </WrapItem>
                                </Wrap>
                                    </Box>

                                    
                        <Flex direction={'column'}>
                        <Text>{`${merchant.firstName} ${merchant.lastName}`}</Text>
                        <Text>I am christine and am unable to login to my dashboard...</Text>
                    </Flex>
                                
                           
                       
                        </Flex> 
                        <Text>4 days ago</Text>
                    </Flex>
                    )  })}
                </Flex>
            </CardBody>
        </Card>
            </Box>

        </Flex>

        </Container>
  )
}

export default Complaints