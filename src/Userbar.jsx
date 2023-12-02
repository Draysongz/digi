import React from 'react'
import {
Flex,
Box,
Text,
Button,
Wrap,
WrapItem,
Avatar,
Popover,
PopoverTrigger,
PopoverContent,
PopoverBody,
CardBody,
PopoverArrow,
Icon,
useDisclosure,
useColorModeValue,
Circle,
Card,
CloseButton,
Switch,  
HStack
} from '@chakra-ui/react'
import {  CheckIcon, CopyIcon } from '@chakra-ui/icons';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { app } from './Components/firebase/Firebase';
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import userBG from './Components/assets/userBG.png'
import { MdSettings} from 'react-icons/md'
import LogoutModal from './Components/Dashboard/LogoutModal'

const Userbar = () => {
    const navigate = useNavigate()
    const [userdata, setUserdata]= useState([])
    const { isOpen, onToggle, onClose } = useDisclosure()
    const [userId, setUserId] = useState()
    const [copied, setCopied] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const db = getFirestore(app);
    useEffect(() => {
      const auth = getAuth();
    
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.uid);
          setUserId(user.uid)
          
          const docRef = doc(db, 'users', user.uid);
    
          // Listen for changes to the user's document
          const unsubscribeDoc = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data();
              console.log('User data:', userData);
              setUserdata(userData);
            } else {
              console.log('User document not found.');
            }
          });
    
          return () => {
            unsubscribeDoc(); // Clean up the document listener
          };
        } else {
          navigate('/login');
        }
      });
      return () => {
        unsubscribe(); // Clean up the auth listener
      };
    }, []);

    const toggleCheckedStatus = ()=>{
      setIsChecked(!isChecked)
      console.log(isChecked);
    }

    useEffect(()=>{
      let userRef
      const manageOnlineStatus = async ()=>{
        if(isChecked === false && userId != null){
          userRef = doc(db, "users", userId);
          await updateDoc(userRef, {
            online: true
          });
        }else if (isChecked === true & userId != null){
          userRef = doc(db, "users", userId);
          await updateDoc(userRef, {
            online: false
          });
        }
      }

      manageOnlineStatus()
     
    }, [isChecked])

    const handleCopy = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied', text);
        setCopied(true); // Set copied to true after successful copy

        
      } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        setCopied(false); // Set copied to false if copying fails
      }
    };

    function obfuscateEmail(email) {
      if (typeof email !== 'string' || !email.includes('@')) {
        return email; // Return the original email if it's not a string or doesn't contain '@'
      }
      const atIndex = email.indexOf('@');
      const obfuscatedPart = email.substring(0, Math.min(atIndex, 3)) + '*'.repeat(Math.max(atIndex - 8, 0));
      return obfuscatedPart + email.substring(atIndex);
    }

    useEffect(() => {
      if (copied) {
        const timer = setTimeout(() => {
          setCopied(false);
        }, 20000);
    
        return () => {
          clearTimeout(timer); // Clear the timer if the component unmounts or copied changes
        };
      }
    }, [copied]);
    
    
  return (
    <Box >
      <Popover placement='bottom-start' trigger="click" isOpen={isOpen} >
  <PopoverTrigger>
  <Wrap cursor={'pointer'} onClick={onToggle}>
                        <WrapItem>
                            <Avatar name={`${userdata.firstName} ${userdata.lastName}`} size='sm' src={userdata.userDp ? userdata.userDp : ''} />
                            </WrapItem>
                    </Wrap>
  </PopoverTrigger>
  <PopoverContent w={['fit-content', 'fit-content', '23vw']} >
    <Card bg={useColorModeValue("", "#050223")} w={['fit-content', 'fit-content', '23vw']}>
      <CardBody borderRadius={'none'} py={0} px={'0'} >
        <Flex bgImage={userBG} bgColor={'#12067A'} 
        borderTopRadius={'md'}
        bgRepeat={'no-repeat'}  direction={'column'} p={3} h={'fit-content'}>
        <Circle alignSelf={'flex-end'} boxShadow={'md'}
         size='25px' bg={useColorModeValue("white", "#050223")} onClick={()=> onClose()}>
          <CloseButton  _hover={{
      bgColor: 'transparent'
    }}  />
          </Circle>

          <Flex alignItems={'center'} gap={5}>
          <Wrap >
                        <WrapItem>
                            <Avatar border={'4px solid grey '} name={`${userdata.firstName} ${userdata.lastName}`} size={['md', 'md', 'lg']} src={userdata.userDp ? userdata.userDp : ''} />
                            </WrapItem>
                    </Wrap>

                    <Flex direction={'column'} gap={1}>
                      <Text fontSize={['md', 'md', 'lg']} color={'white'}>{userdata.firstName} {userdata.lastName}</Text>
                      <Flex alignItems={'center'} gap={4}>
                      <Text  fontSize={'sm'} color={'white'}> UID : {userId && userId.slice(0,12)}...</Text>
                      {copied ? (<CheckIcon color={'green.300'}/>) : (<CopyIcon cursor={'pointer'} color={'white'} onClick={()=>handleCopy(userId)}/> )
                      }
                      
                      </Flex>
                      <Text fontSize={'sm'} color={'white'}>{userdata && obfuscateEmail(userdata.Email)}</Text>
                     

                    </Flex>

          </Flex>
          </Flex>
 
   
     
    <PopoverArrow />
    
    <PopoverBody>

    <Flex gap={8} direction={'column'} py={5}>
    <Link to='/admin/password'>
     <Flex gap={4}  px={3}>
     
      <Icon color={'#3F3F46'} as={ MdSettings} boxSize={6} />
      <Text>Account Settings </Text>
     

     </Flex>
     </Link>
     <Flex gap={4} direction={'column'}>
      <LogoutModal />
      <Flex direction={'column'}px={5}>
      <HStack>
        <Text>Online</Text>
        <Switch size={'md'} colorScheme={isChecked ? 'yellow' : 'yellow'} onChange={toggleCheckedStatus}/>
        <Text>Away</Text>
      </HStack>
     </Flex>
     </Flex>

     <Button _hover={{
      bgColor : '',

     }}
     borderRadius={'full'} bgColor={'#12067A'} color={'white'}>
      <Link to='/admin/profile'>View Profile</Link></Button>
    </Flex>
    </PopoverBody>
    </CardBody>
    </Card>
  </PopoverContent>
</Popover>
        

                
    </Box>
  )
}

export default Userbar

// export function mobileUserBar ()=>{

// }