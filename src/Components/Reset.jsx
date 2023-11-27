import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import './css/reset.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth';
import {toast} from 'react-toastify'
import { app } from './firebase/Firebase';
import logoWhite from './assets/digi.png'
import Lottie from 'lottie-react'; 
import animationData from './Animation.json'
import { Flex, Heading, Spinner,
  useColorModeValue,
    Box,
    Text,
    Button,
    Image,
    useColorMode,
    Input,
  }  from '@chakra-ui/react';

const Reset = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const navigate = useNavigate()

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const actionCode = searchParams.get('oobCode');
  console.log(actionCode)
  const auth = getAuth(app);

  useEffect(() => {
    const verifyActionCode = async () => {
      if (actionCode) {
        try {
          const email = await verifyPasswordResetCode(auth, actionCode);
          // The code is valid, and the associated email is retrieved
          const accountEmail = email;
          // Proceed with displaying the password reset form or any other necessary logic
          setIsVerified(true)
          console.log(accountEmail)
          
        } catch (error) {
          // Handle invalid or expired code
          console.error('Error verifying password reset code:', error);
        } finally {
          setIsLoading(false); // Set loading status to false after verification
          
          
        }
      }
    };

    verifyActionCode();
  }, [auth, actionCode]);

  const flexBg =useColorModeValue("#F4F5F8", "#050223");
  const flexCol = useColorModeValue("gray.900", "white");

  const resetPassword = async (e) => {
    e.preventDefault()
    const auth = getAuth(app);
    if(confirm !== password){
      toast.error('Passwords do not match')
    }else{
    try {
      await confirmPasswordReset(auth, actionCode, password);
      console.log('Password reset successful.');
      toast.success('Password reset successful')
      navigate('/login')
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error(error.message)
     
    }
  }
  };

  if (isLoading) {
    // Display a loading spinner while verifying the code
    <Flex align="center" justify="center" height="100vh">
    <Spinner size="xl" color="blue.500" />
  </Flex>
  }

  if (!isVerified) {
    // Display a blank page or a message when not verified
    return <Flex 
    maxWidth="4xl"
    p="20px"
    minHeight="100vh"
    minWidth="100vw"
    bg={flexBg}
    color={flexCol}
    overFlowX={'hidden'}
    direction={'column'}
    gap={3}>
       <Box alignSelf={'start'}>
      <Image src={
                colorMode === "light"
                  ? `${logo}`
                  : `${logoWhite}`
              } width={['150px', '200px']} />
    </Box>
    <Flex
    direction={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    gap={5}>
      <Flex justifyContent={'center'} maxH={'50vh'}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
      </Flex>
      <Heading textAlign={'center'}>Invalid code or expired link.</Heading>
      <Button bg={'#1808A3'} borderRadius={'full'} minH={'7vh'} 
      color={'white'} w={['85vw', '85vw', '85vw', '27vw']} 
  _hover={{bg : '#31CD31'}}><Link to='/forgot'>Resend Link</Link></Button>
    </Flex>
         
    </Flex>
  }

  return (
    <Flex
    maxWidth="4xl"
    p="20px"
    minHeight="100vh"
    minWidth="100vw"
    bg={flexBg}
    color={flexCol}
    overFlowX={'hidden'}
    direction={'column'}
    gap={10}
    >
    <Box alignSelf={'start'}>
      <Image src={
                colorMode === "light"
                  ? `${logo}`
                  : `${logoWhite}`
              } width={['150px', '200px']} />
    </Box>
<Flex
justifyContent={'center'}
direction={'column'}
minH={"60vh"}
py={10}>
<Flex
direction={'column'}
justifyContent={'center'}
alignItems={'center'}
gap={5}
>
<Heading>Reset your password</Heading>
<Box>
<Text >To reset your password, enter a new password</Text>
<Text textAlign={'center'}>in the box below</Text>
</Box>
<Input type='password' required
value={password} onChange={(e)=> setPassword(e.target.value)}
 placeholder='New password' borderRadius={'full'}  w={['85vw', '85vw', '85vw', '28vw']}
 minH={'5vh'} 
 color={'black'}  variant={'outline'}
 background={'white'} _placeholder={
  {
    color: 'grey'
  }
 } />
 <Input type='password' required
value={confirm} onChange={(e)=> setConfirm(e.target.value)}
 placeholder='Re-type new password' borderRadius={'full'}  w={['85vw', '85vw', '85vw', '28vw']}
 minH={'5vh'} 
 color={'black'}  variant={'outline'}
 background={'white'} _placeholder={
  {
    color: 'grey'
  }
 } />
 <Button type='submit'
  bg={'#1808A3'} borderRadius={'full'} minH={'7vh'} color={'white'} w={['85vw', '85vw', '85vw', '27vw']} 
  _hover={{bg : '#31CD31'}} 
  isLoading={isLoading} 
  onClick={resetPassword} loadingText='submitting'>Submit</Button>
</Flex>
</Flex>
    </Flex>
  );
};

export default Reset;
