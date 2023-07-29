import React, {useState} from 'react'
import logo from './assets/logoWhite.png'
import {Link} from 'react-router-dom'
import { app } from './firebase/Firebase'
import { signInWithEmailAndPassword,  getAuth } from '@firebase/auth'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {
  Flex,
  Box,
  Text,
  Button,
  Heading,
  Center,
  Image,
  FormControl,
  InputGroup,
  InputRightElement,
  Input,
  border
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import frame from './assets/frame2.png'
import smilingMan from './assets/smilingMan.png'
import framet from './assets/frame3.png'
import {FcGoogle} from 'react-icons/fc'


const Login = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading]= useState(false)

  const handlePasswordToggle = ()=>{
    setShowPassword(!showPassword)
  }

  const navigate = useNavigate()

  const loginUser = async (e)=>{
    e.preventDefault()
    setIsLoading(true)
    const auth = getAuth(app)
    try {
      await setTimeout(()=>{
        setIsLoading(false)}, 3000)
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredentials.user
      console.log(user)      
      toast.success('login successful')
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      await setTimeout(()=>{
        setIsLoading(false)}, 4000)
      toast.error(error.message)
      
      
    }
  }
  return (
    <Flex
    maxWidth="4xl"
    minHeight="100vh"
    minWidth={['70vw', '98vw', "98.7vw", "98.7vw"]}
    bg={'#080339'}
    bgSize={'cover'}
    bgRepeat={'no-repeat'}
    dir={'row'}> 

    {/* left side */}
      <Flex direction={'column'} display={['none', 'none', 'none', 'block']} bgImage={frame} bgSize={'cover'} p='20px' gap={5} w={'50%'}>
      <Box>, 
          <Image src={logo} alt='logo' />
        </Box>

        <Flex direction={'column'} justifyContent={'center'} alignContent={'center'}  pos={'relative'} >
          <Box >
            <Center>
          <Image src={smilingMan} alt='smiling man' width={'65%'} />
          </Center>
          </Box>
     

          <Box bgImage={framet}  bgSize={'cover'} pos={'absolute'} mt={'23rem'} >
            <Heading fontFamily={'Lato sans-serif'} fontStyle={'normal'} color={'white'}>Invite 5 friends and get access<br/>to free crypto</Heading>
            <Text mt='2rem' color={'white'} fontFamily={'Lato sans-serif'} fontSize={'22px'}>Login and continue transanction</Text>
          </Box>
        </Flex>

       
      </Flex>

      {/* right side */}
      <Flex bg={'white'} w={['100%', '100%', '100%', '50%']} p='20px' direction={'column'}>
        <Heading fontFamily={'Lato sans-serif'} >Welcome back!</Heading> 
        <FormControl p='10px' >
        <Center mt='5rem'>
          <Flex direction='column' gap={10} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
          <Input variant={'flushed'} w={['85vw','85vw', '85vw', '28vw']} placeholder='Email address' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <InputGroup size='md'>
            <Input type={showPassword ? "text" : "password"} variant={'flushed'} pr='4.5rem'placeholder='Password'onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <InputRightElement width={'4.5rem'} onClick={handlePasswordToggle} cursor={'pointer'}>
              {showPassword ? <ViewIcon/>: <ViewOffIcon/> }
            </InputRightElement>
          </InputGroup>
          <Link to='/forgot'><Text textAlign={'right'} ml={['11rem', '11rem', '32rem', '16rem']} mt={'-2rem'} color={'#31CD31'}>forgot password?</Text></Link>
          <Flex direction={'column'} gap={10}>
          <Button bg={'#1808A3'} borderRadius={'full'} minH={'7vh'} color={'white'} w={['85vw', '85vw', '85vw', '27vw']} _hover={{bg : '#31CD31'}} isLoading={isLoading} onClick={loginUser}loadingText='Logging in'>Login</Button>
          <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <hr style={{display: 'block', width : '5vw', border : '1px solid #C9C9C', 'marginTop' : '.3rem'}} />
            <Text>or</Text>
            <hr  style={{display: 'block', width : '5vw', border : '1px solid #C9C9C', 'marginTop' : '.3rem'}}  />
          </Flex>
          <Button color={'black'} border={'1px solid #00296B'}  borderRadius={'full'}  minH={'7vh'} w={['85vw', '85vw', '85vw', '27vw']} _hover={{bg : '#31CD31', color: 'white'}} variant={'outline'} leftIcon={<FcGoogle/>}>Signup with Google</Button>
          </Flex>
          <Link to='/register'><Text color={'#31CD31'} mt={'-2rem'}>Don't  have an  account? Register</Text></Link>
          </Flex>
          </Center>
          
        </FormControl>
      </Flex>
    </Flex>
  )
}

export default Login;
