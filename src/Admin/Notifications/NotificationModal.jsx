import {
    Link,
    Icon,
    Text,
    Box,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    CardBody,
    PopoverArrow,
    PopoverCloseButton,
    useColorModeValue,  
    useDisclosure,
    Heading,
    Flex,
  WrapItem,
  Avatar,
  Wrap,
  Circle,
    Card,
    CloseButton 
  } from "@chakra-ui/react";
  import './notis.css'
  import { format } from "timeago.js";
  import { useState, useEffect } from "react";
  import { CiMail } from "react-icons/ci";
import {AiOutlineBell} from 'react-icons/ai'
import { app } from '../../Components/firebase/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, where, query, doc, getDoc, getDocs, onSnapshot, getFirestore,  orderBy, limit, updateDoc } from 'firebase/firestore';


const NotificationModal = () => {
    const { isOpen, onToggle, onClose } = useDisclosure()
    const [notifications, setNotifications] = useState([])
    const [unRead, setUnread] = useState()


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

    async function getNotifications() {
        try {
          const userId = await getCurrentUserUid();
          console.log(userId);
      
          // Reference to the user's document
          const userRef = doc(db, 'users', userId);
      
          // Create a real-time listener for the user document
          const unsubscribe = onSnapshot(userRef, (userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              setUnread(userData.unreadNotifications)
      
              // Check if the user document has a "notifications" field
              if (userData && userData.notifications) {
                const sortedNotifications = userData.notifications.slice().sort((a, b) => {
                    return b.timestamp - a.timestamp; // Descending order
                  });
        
                  setNotifications(sortedNotifications);
              } else {
                console.log('No notifications found for the user.');
              }
            } else {
              console.log('User document not found.');
            }
          });
      
          // Return the unsubscribe function to stop the listener when needed
          return unsubscribe;
        } catch (error) {
          console.log(error);
        }
    }

    async function markNotificationRead(){
        onToggle()
        const userId= await getCurrentUserUid()
        try {
            const userRef = doc(db, 'users', userId)
            const userDoc = await getDoc(userRef)
          

            const unreadNotifications=  0
            
            await updateDoc(userRef, {
                unreadNotifications: unreadNotifications
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getNotifications()
    }, [])

    useEffect(()=>{
        console.log(notifications)
        
    }, [notifications])

    useState(()=>{
        console.log(unRead)
    }, [unRead])
  return (
    <Popover  placement='bottom-start' trigger="click" isOpen={isOpen} >
  <PopoverTrigger>
    <Button bg={'transparent'} onClick={markNotificationRead} _hover={{
      bgColor: 'transparent'
    }}> 
    <Flex> <Icon as={AiOutlineBell} boxSize={6} /> 
    <Text>{unRead !== 0 && unRead}</Text></Flex>
    </Button>
    
  </PopoverTrigger>
  <PopoverContent >
    <Card bg={useColorModeValue("white", '#050223')} >
      <CardBody borderRadius={'none'} py={3} px={2} >
        <Flex justifyContent={'flex-end'} p={3}>
        <Circle boxShadow={'md'} size='30px' bg='white' color={'black'} onClick={()=> onClose()}>
          <CloseButton  _hover={{
      bgColor: 'transparent'
    }}  />
          </Circle>
          </Flex>
 
    <Flex h='7vh' justifyContent={'space-between'}  alignItems={'center'} p={2}   bg={ useColorModeValue('#E8E6F6', "#141139")}>
        <Heading as={'h3'} fontWeight={'bold'}
        fontSize={'lg'} fontFamily={'Hellix-Medium'} >Notifications</Heading>
      </Flex>
     
    <PopoverArrow />
    
    <PopoverBody maxHeight={'50vh'} overflowY={'auto'} className="scrollable-container">

    <Flex gap={8} direction={'column'} className="scrollable-content">
     {notifications && notifications.map((notification)=>{
        return (<Flex gap={4} alignItems={'center'}>
            <Icon as={CiMail} color={'blue'} boxsize={6} />
            <Flex direction={'column'}>
                <Text >{notification.message}</Text>
                <Text>{notification.timestamp && format(notification.timestamp.toMillis())}</Text>
            </Flex>
        </Flex>
        )
     })}
    </Flex>
    </PopoverBody>
    </CardBody>
    </Card>
  </PopoverContent>
</Popover>
  )
}

export default NotificationModal