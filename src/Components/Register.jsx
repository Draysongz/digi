import React, {useState} from 'react'
import './css/register.css'
import logo from './assets/logoWhite.png'
import GImage from './assets/GImage.png'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import { app,  } from './firebase/Firebase'
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import {
  Flex,
  Box,
  Text,
  Button,
  Heading,
  Image,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
 Select,
 Center,
 HStack
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import frame from './assets/frame.png'
import girls from './assets/girls.png'
import {FcGoogle} from 'react-icons/fc'

const Register = () => {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const[firstname, setFirstname] = useState('')
  const[gender, setGender] = useState('')
  const [lastname, setLastname] = useState('')
  const [countryCode, setCountryCode]= useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePasswordToggle = ()=>{
    setShowPassword(!showPassword)
  }

  const handleConfirmToggle =()=>{
    setShowConfirm(!showConfirm)
  }
  
  const formattedCountryCode= countryCode? countryCode: '+234'
  console.log(`${formattedCountryCode}${phone}`);
  const fullPhone = `${formattedCountryCode}${phone}`



const navigate= useNavigate()
const onSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true)
  const auth = getAuth(app);

  if (password !== confirm) {
    console.log('Passwords do not match');
    toast.error('Passwords do not match');
  } else {
    try {
      // Create user with email and password
      await setTimeout(()=>{
        setIsLoading(false)}, 3000)
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;

      // Save additional user details to Firestore using the userId as the document ID
      const db = getFirestore(app);
      await setDoc(doc(db, 'users', user.uid), {
        firstName: firstname,
        lastName: lastname,
        Email: email,
        Number: fullPhone,
        Gender: gender,

      });

      toast.success('Registration successful');
      navigate('/login');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      await setTimeout(()=>{
        setIsLoading(false)}, 4000)
      toast.error(`Error: ${errorMessage}`);
      console.log(error);
    }
  }
};


 
  const loginWithGoogle = async (e)=>{
    e.preventDefault()

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      const Credentials = GoogleAuthProvider.credentialFromResult(result)
      const token = Credentials.accessToken
      const user =result.user
      console.log(user, token)
      toast('registration successful')
    } catch (error) {
      // Handle Errors here.
     
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(`${errorCode}, ${errorMessage}`, email, credential)
    }
  }
  return (
    <Flex
    maxWidth="4xl"
    minHeight="100vh"
    minWidth={['70vw', '98vw', "98.7vw", "98.7vw"]}
    bgSize={'cover'}
    bgRepeat={'no-repeat'}
    bg={'#080339'}
    dir={'row'}>
      <Flex direction={'column'} bgImage={frame} bgSize={'cover'} p='20px' gap={5} w={'50%'}>
        <Box>
          <Image src={logo} alt='logo' />
        </Box>
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Image src={girls} alr='girls' width={'80'} />
        </Flex>
      </Flex>

      <Flex bg={'white'} w={['100%', '100%', '100%', '50%']} p='20px' direction={'column'}>
      <Heading fontFamily={'Lato sans-serif'} >Register</Heading> 
      <FormControl p='10px' >
      <Center mt='1rem'>
          <Flex direction='column' gap={3} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>

          <Input variant={'flushed'} w={['85vw','85vw', '85vw', '28vw']} placeholder='First name' onChange={(e)=>setFirstname(e.target.value)} value={firstname} isRequired/>
          <Input variant={'flushed'} w={['85vw','85vw', '85vw', '28vw']} isRequired placeholder='Last name' onChange={(e)=>setLastname(e.target.value)} value={lastname}/>
          <Input variant={'flushed'} w={['85vw','85vw', '85vw', '28vw']} placeholder='Email address' onChange={(e)=>setEmail(e.target.value)} value={email} isRequired/>
          <HStack>
            <Select w={'7vw'} variant={'flushed'} onChange={(e)=>setCountryCode(e.target.value)} value={countryCode} >
            <option data-image='./assets/naija.svg' value='+234'>+234</option>
            <option value='+1'>+1</option>
            </Select>
            <Input type='tel' w={['78vw','78vw', '78vw', '20vw']} placeholder='9012345678'onChange={(e)=>setPhone(e.target.value)} value={phone} variant={'flushed'} isRequired/>
          </HStack>
          <Select onChange={(e)=>setGender(e.target.value)} value={gender} variant={'flushed'} isRequired>
            <option>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
          <InputGroup size='md'>
            <Input type={showPassword ? "text" : "password"} variant={'flushed'} pr='4.5rem'placeholder='Password' isRequired onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <InputRightElement width={'4.5rem'} onClick={handlePasswordToggle} cursor={'pointer'}>
              {showPassword ? <ViewIcon/>: <ViewOffIcon/> }
            </InputRightElement>
          </InputGroup>
          <InputGroup size='md'>
            <Input type={showConfirm ? "text" : "password"} variant={'flushed'} pr='4.5rem'placeholder='Confirm password'onChange={(e)=>setConfirm(e.target.value)} value={confirm} isRequired/>
            <InputRightElement width={'4.5rem'} onClick={handleConfirmToggle} cursor={'pointer'}>
              {showConfirm ? <ViewIcon/>: <ViewOffIcon/> }
            </InputRightElement>
          </InputGroup>
          <Flex direction={'column'} gap={3}>
          <Button bg={'#1808A3'} borderRadius={'full'} minH={'7vh'} color={'white'} w={['85vw', '85vw', '85vw', '27vw']} _hover={{bg : '#31CD31'}} isLoading={isLoading} onClick={onSubmit}loadingText='creating'>CREATE AN ACCOUNT</Button>
          <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <hr style={{display: 'block', width : '5vw', border : '1px solid #C9C9C', 'marginTop' : '.3rem'}} />
            <Text>or</Text>
            <hr  style={{display: 'block', width : '5vw', border : '1px solid #C9C9C', 'marginTop' : '.3rem'}}  />
          </Flex>
          <Button color={'black'} border={'1px solid #00296B'}  borderRadius={'full'}  minH={'7vh'} w={['85vw', '85vw', '85vw', '27vw']} _hover={{bg : '#31CD31', color: 'white'}} variant={'outline'} onClick={loginWithGoogle} leftIcon={<FcGoogle/>}>Signup with Google</Button>
          </Flex>
          <HStack mt={'-.8rem'}>
          <Text color={'#666'} >Already have an account?</Text>
          <Link to='/login'><Text color={'#31CD31'}>Login</Text></Link>
          </HStack>
            </Flex>
            </Center>
      </FormControl>
      </Flex>
    </Flex>
  )
}

export default Register