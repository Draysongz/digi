import React, {useState} from 'react'
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
    Icon,
    Wrap,
    WrapItem,
    Avatar,
    InputGroup,
    Input,
    InputLeftElement,
    InputRightElement,
    useColorModeValue,
    FormLabel,
    InputRightAddon,
  } from "@chakra-ui/react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import {AiOutlineBell} from 'react-icons/ai'
  import { getAuth, reauthenticateWithCredential, updatePassword, EmailAuthProvider } from "firebase/auth";
import { app } from '../../Components/firebase/Firebase';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Userbar from '../../Userbar';
import MessageModal from '../MessageModal/MessageModal';
import { getDoc, doc, increment, getFirestore, updateDoc } from 'firebase/firestore';
import NotificationModal from '../Notifications/NotificationModal';

const Password = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const auth = getAuth(app);
  const db= getFirestore(app)
  const user = auth.currentUser;
  console.log(user.uid)
  const navigate = useNavigate();

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login");
      navigate("/login");
      return;
    }

    try {
      if(newPassword.toLowerCase() === confirmNewPassword.toLowerCase()){
        const credentials = EmailAuthProvider.credential(user.email, password);
        await reauthenticateWithCredential(user, credentials);
        await updatePassword(user, newPassword);
        const userRef = doc(db, 'users', user.uid)
        const userDoc = await getDoc(userRef)
        const userData = userDoc.data();
        const notifications = userData.notifications || [];
  
        // Add a new notification to the array
        notifications.push({
          message: "Password Change successful",
          timestamp: new Date(), // Set the timestamp in your code
        });
  
        // Update the notifications and increment unreadNotifications
        await updateDoc(userRef, {
          notifications,
          unreadNotifications: increment(1),
        });
        toast.success("Password updated");
      }else{
        toast.error("Passwords Don't Match")
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Error updating password: " + error.message); // Provide a more detailed error message
    }
  };


  return (
    <Container
    maxWidth="4xl"
    // py="20px"
    minHeight="100vh"
    minWidth="78vw"
    bg={useColorModeValue("#F4F5F8", "#050223")}
    color={useColorModeValue("gray.900", "white")}
    position={[null, null, null, null, 'absolute']}
    left={['0', '0', '0', "21%"]}
    overflowX={'hidden'}
  >
    <Flex justifyContent={'space-between'} direction="column" gap={10} position={[null, null, null, 'relative']}>

    <Card borderLeftRadius={'0px'}  w={['90vw', '70vw', '77vw']}  bg={useColorModeValue('gray.50', "#050223")}
        ml={'-1.2%'} mt={'-1.5%'}>
            <CardBody>
                <Flex gap={5} alignItems={'center'} justifyContent={['space-around', 'space-around', 'flex-end']}>
                    <MessageModal/>
                    <NotificationModal />
                   <Userbar/>

                </Flex>
            </CardBody>
        </Card>


        <Flex gap={10} justifyContent={'space-between'} px={10} direction={'column'}>
            <Box>
                <Heading fontFamily={'Hellix-Medium'}  fontSize={'30px'}>Password Setting</Heading>
            </Box>
            </Flex>

            <Flex gap={10} px={10} direction={'column'}>
               <Box>
               <FormLabel fontFamily={'Hellix-Medium'}  fontSize={'24px'} 
                fontWeight={'500'}>Current password</FormLabel>
                <InputGroup>
               <Input fontSize='lg'  value={password}  type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
               variant={'filled'} borderColor={'#000'}  w={'60vw'} h={'10vh'}/>
                 <InputRightAddon h={"10vh"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightAddon>
              </InputGroup>
               </Box>

               <Box>
               <FormLabel fontFamily={'Hellix-Medium'}  fontSize={'24px'} 
                fontWeight={'500'}>New password</FormLabel>
                <InputGroup>
               <Input fontSize='lg' value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type={showNewPassword ? "text" : "password"} 
                variant={'filled'} borderColor={'#000'}  w={'60vw'} h={'10vh'}/>
                  <InputRightAddon h={"10vh"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowNewPassword((showNewPassword) => !showNewPassword)
                  }
                >
                  {showNewPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightAddon>
                </InputGroup>
               </Box>

               <Box>
               <FormLabel fontFamily={'Hellix-Medium'}  fontSize={'24px'} 
                fontWeight={'500'}>Confirm password</FormLabel>
                <InputGroup>
               <Input fontSize='lg' value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                type={showConfirmPassword ? "text" : "password"}
                variant={'filled'} borderColor={'#000'}  w={'60vw'} h={'10vh'}/>
                  <InputRightAddon h={"10vh"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowConfirmPassword((showConfirmPassword) =>
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightAddon>
                </InputGroup>
               </Box>
               
               <Box pb={2} >
               <Button 
               w={'60vw'}
               type="submit"
              loadingText="Submitting"
              size="md"
              bg={"#1808A3"}
              color={"white"}
              _hover={{
                bg: "#31CD31",
              }}
              rounded={"md"}
              onClick={handlePasswordChange}>Submit</Button>
               </Box>
               
            </Flex>
        </Flex>
        </Container>
  )
}

export default Password