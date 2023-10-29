import React from 'react'
import {
    Container,
    Flex,
    Card,
    CardBody,
    Box,
    Text,
    Heading,
    Button,
    Icon,
    Wrap,
    WrapItem,
    Avatar,
    Input,
    useColorModeValue,
    AvatarBadge,
    FormLabel,
    Stack,
  } from "@chakra-ui/react";
  import {CiMail} from 'react-icons/ci'
  import {AiOutlineBell} from 'react-icons/ai'
  import {EditIcon} from '@chakra-ui/icons'
  import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc, onSnapshot } from "firebase/firestore";
import { app } from '../../Components/firebase/Firebase';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ProfileModal } from '../../Components/Dashboard/Setting';
import Userbar from '../../Userbar';
import MessageModal from '../MessageModal/MessageModal';

const Profile = () => {
  
  const navigate = useNavigate()
  const [userdata, setUserdata]= useState([])
  useEffect(() => {
    const auth = getAuth();
  
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
        const db = getFirestore(app);
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
  return (
    <Container
    maxWidth="4xl"
    // py="20px"
    minHeight="100vh"
    minWidth="78vw"
    bg={useColorModeValue("#F4F5F8", "gray.700")}
    color={useColorModeValue("gray.900", "white")}
    position={[null, null, null, null, 'absolute']}
    left={['0', '0', '0', "21%"]}
    overFlow-X={'hidden'}
  >
    <Flex justifyContent={'space-between'} direction="column" gap={10} position={[null, null, null, 'relative']}>

    <Card borderLeftRadius={'0px'}
        ml={'-1.2%'} mt={'2px'} >
            <CardBody>
                <Flex gap={5} alignItems={'center'} justifyContent={'flex-end'}>
                    <MessageModal />
                    <Icon as={AiOutlineBell} boxSize={6} />
                    <Userbar />

                </Flex>
            </CardBody>
        </Card>

        <Flex gap={10} justifyContent={'space-between'} px={10} direction={'column'}>
            <Box>
                <Heading fontFamily={'Hellix-Medium'} fontSize={'30px'}>Profile</Heading>
            </Box>
            </Flex>

            

           <Flex direction={'column'} gap={5} px={10}>
            <Stack direction={'row'} alignItems={'center'}>
           <Wrap>
  <WrapItem>
  <Avatar name={`${userdata.firstName} ${userdata.lastName}`} size='xl' src={userdata.userDp ? userdata.userDp : ''} >
    </Avatar>
  </WrapItem>
</Wrap>
<ProfileModal w={'full'} />
</Stack>

                <Text fontSize={'xl'} fontWeight={'bold'}>{userdata ? `${userdata.firstName} ${userdata.lastName}` : ''}</Text>
            </Flex> 
            <Flex px={10} direction={'column'} gap={10}>
                <Flex gap={10}>
                    <Box>
                    <FormLabel fontSize='xl'>First Name</FormLabel>
                    <Input  fontSize='lg' variant={'filled'} 
                    borderColor={'#000'} type='text' w={'30vw'} h={'10vh'} value={userdata && userdata.firstName} disabled/>
                    </Box>
                    <Box>
                    <FormLabel fontSize='xl'>Last Name</FormLabel>
                    <Input fontSize='lg' type='text'  variant={'filled'} borderColor={'#000'}  
                    w={'30vw'} h={'10vh'} value={userdata && userdata.lastName} disabled/>
                    </Box>
                </Flex>

                <Box>
                <FormLabel fontSize='xl'>Email address</FormLabel>
                    <Input  fontSize='lg' variant={'filled'} 
                    borderColor={'#000'} type='email'w={'63vw'}  h={'10vh'} 
                    value={userdata && userdata.Email} disabled/>
                </Box>
                <Box>
                <FormLabel fontSize='xl'>Phone</FormLabel>
                    <Input  fontSize='lg' variant={'filled'} borderColor={'#000'} 
                    type='number'w={'63vw'}  h={'10vh'} value={parseFloat(userdata.Number)} disabled/>
                </Box>
            </Flex>

           <Flex justifyContent={'center'} px={10} pb={3} gap={10}>
            <Button
            borderRadius={'2xl'} 
             w={'15vw'} h={'8vh'} border={'2px solid #1808A3'} color={'#1808A3'} variant='outline'>Discard</Button>
            <Button
            _hover={{bgColor: '#1D7B1D', color:'white' }}
             borderRadius={'2xl'} color={'white'} w={'15vw'} h={'8vh'} bg={'#1808A3'}>Save</Button>
            </Flex> 
    </Flex>
    </Container>
  )
}

export default Profile