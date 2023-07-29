import React, {useState} from 'react'
import './css/register.css'
import logo from './assets/logoWhite.png'
import GImage from './assets/GImage.png'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import { app,  } from './firebase/Firebase'
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import {
  Flex,
  Box,
  Text,
  Button,
  Heading,
  Image,
  Container
} from '@chakra-ui/react'
import frame from './assets/frame.png'
import girls from './assets/girls.png'

const Register = () => {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const[firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handlePasswordToggle = ()=>{
    setShowPassword(!showPassword)
  }

  const handleConfirmToggle =()=>{
    setShowConfirm(!showConfirm)
  }
const navigate= useNavigate()
  const onSubmit = async (e)=>{
    e.preventDefault()
    const auth = getAuth(app)
    if(password !== confirm){
      console.log('passswords do not match')
      toast.error('Passwords do not match')
    }
    else{
      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user
        const db = getFirestore(app);
        const savedUser = await addDoc(collection(db, "users"), {
          firstName: firstname,
          lastName : lastname,
          Email: email,
          Number: phone
        });
        console.log(savedUser)
        console.log(user)
        toast.success('registration successful')
        navigate('/login')
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message
        toast.error(`code : ${errorCode}, msg: ${errorMessage}`)
        console.log(error)
      }
    }
    
  }

 
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

    </Flex>
  )
}

export default Register