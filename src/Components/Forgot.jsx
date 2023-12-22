import React, {useState} from 'react'
import logo from './assets/logo.png'
import logoWhite from './assets/digi.png'
import { getAuth, sendPasswordResetEmail, fetchSignInMethodsForEmail } from "firebase/auth";
import { app } from './firebase/Firebase';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  Text,
  Button,
  useColorModeValue,
  Image,
  useColorMode,
  Heading,
  Input,
} from '@chakra-ui/react'


const Forgot = () => {
  const [email, setEmail] =useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  
  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const auth = getAuth(app);
    const actionCodeSettings = {
      url: `https://digimart-exchange.vercel.app/reset`,
      handleCodeInApp: true,
    };
  
    try {
      // Attempt to send the password reset email
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      navigate('/verify', { state: { email } });
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  
  return (
    <Flex
    maxWidth="4xl"
    p="20px"
    minHeight="100vh"
    minWidth="100vw"
    bg={useColorModeValue("#F4F5F8", "#050223")}
    color={useColorModeValue("gray.900", "white")}
    overflowX={'hidden'}
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
<Heading>Forgot your password?</Heading>
<Box>
<Text >Enter your email,and we'll send a link to get </Text>
<Text textAlign={'center'}>back into your account</Text>
</Box>
<Input type='email' required
value={email} onChange={(e)=> setEmail(e.target.value)}
 placeholder='Email Address'  w={['85vw', '85vw', '85vw', '28vw']}
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
  isLoading={isLoading}  disabled={isLoading}
  onClick={handleClick} loadingText='submitting'>Submit</Button>
</Flex>
</Flex>



    </Flex>
  )
}

export default Forgot
