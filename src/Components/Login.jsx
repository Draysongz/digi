import React, { useState } from "react";
import logo from "./assets/logoWhite.png";
import { Link } from "react-router-dom";
import { app } from "./firebase/Firebase";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
  border,
  useColorModeValue,
  color,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import frame from "./assets/frame2.png";
import smilingMan from "./assets/smilingMan.png";
import framet from "./assets/frame3.png";
import { FcGoogle } from "react-icons/fc";
import { increment, arrayUnion } from "firebase/firestore";
import { getDoc, getFirestore, doc, updateDoc, addDoc, serverTimestamp } from "firebase/firestore";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const auth = getAuth(app);
    try {
      // Simulate a 5-second delay before setting isLoading to false
      await new Promise((resolve) => setTimeout(resolve, 5000));
  
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
  
      // Fetch the user's role from Firestore based on their UID
      const db = getFirestore(app);
      const userRef = doc(db, "users", user.uid);
  
      const userDoc = await getDoc(userRef);
      const userRole = userDoc.data().role;
  
      if(userRole === 'Sub-admin' || userRole === 'Admin' || userRole === 'Customer Care' || userRole === 'Merchant') {
        // Redirect to the admin dashboard
        navigate("/admin/dashboard");
      } else if (userRole === "user") {
        // Redirect to the user dashboard
        navigate("/dashboard");
      } else {
        console.log('role not found');
      }
        // Get the current notifications array
        const userData = userDoc.data();
        const notifications = userData.notifications || [];
  
        // Add a new notification to the array
        notifications.push({
          message: "You've successfully logged in",
          timestamp: new Date(), // Set the timestamp in your code
        });
  
        // Update the notifications and increment unreadNotifications
        await updateDoc(userRef, {
          notifications,
          unreadNotifications: increment(1),
        });
      toast.success("Login successful");
    } catch (error) {
      console.log(error);
  
      // Simulate a 4-second delay before setting isLoading to false
      await new Promise((resolve) => setTimeout(resolve, 4000));
  
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  
  
  
  
  
  return (
    <Flex
      maxWidth="4xl"
      minHeight="100vh"
      minWidth={["70vw", "98vw", "98.7vw", "98.7vw"]}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bg={useColorModeValue("#080339", "#1808A3")}
      dir={"row"}
     
    >
      {/* left side */}
      <Flex
        direction={"column"}
        display={["none", "none", "none", "block"]}
        bgImage={frame}
        bgSize={"cover"}
        p="20px"
        gap={5}
        w={"50%"}
      >
        <Box>
          ,
          <Image src={logo} alt="logo" />
        </Box>

        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          pos={"relative"}
        >
          <Box>
            <Center>
              <Image src={smilingMan} alt="smiling man" width={"65%"} />
            </Center>
          </Box>

          {/* <Box bgImage={framet} bgSize={"cover"} pos={"absolute"} mt={"27rem"}>
            <Heading
              fontFamily={"Hellix-medium"}
              fontStyle={"normal"}
              color={"white"}
            >
             Got a surprise for YOU! <br/>
            
            </Heading>
            <Text
              mt="2rem"
              color={"white"}
              fontFamily={"Hellix-medium"}
              fontSize={"22px"}
            >
               Earn crypto in $MART tokens for <span style={{color : 'blue'}}>FREE! </span>When you create an account with DigiMart Exchange
            </Text>
          </Box> */}
        </Flex>
      </Flex>

      {/* right side */}
      <Flex
        w={["100%", "100%", "100%", "50%"]}
        p="20px"
        direction={"column"}
        bg={useColorModeValue("white", "#050223")}
        color={useColorModeValue("gray.900", "white")}
      >
        <Heading fontFamily={"Hellix-medium"}>Welcome back!</Heading>
        <FormControl p="10px">
          <Center mt="5rem">
            <Flex
              direction="column"
              gap={10}
              alignItems={"center"}
              justifyContent={"center"}
              justifyItems={"center"}
            >
              <Input
                variant={"flushed"}
                w={["85vw", "85vw", "85vw", "28vw"]}
                placeholder="Email address"
               
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                _placeholder={{
                  color : useColorModeValue("", "white")
                }}
              />
              <InputGroup size="md">
                <Input
                  type={showPassword ? "text" : "password"}
                  variant={"flushed"}
                  pr="4.5rem"
                  _placeholder={{
                    color : useColorModeValue("", "white")
                  }}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <InputRightElement
                  width={"4.5rem"}
                  onClick={handlePasswordToggle}
                  cursor={"pointer"}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </InputRightElement>
              </InputGroup>
              <Link to="/forgot">
                <Text
                  textAlign={"right"}
                  ml={["11rem", "11rem", "32rem", "16rem"]}
                  mt={"-2rem"}
                  color={"#31CD31"}
                >
                  forgot password?
                </Text>
              </Link>
              <Flex direction={"column"} gap={10}>
                <Button
                  bg={"#1808A3"}
                  borderRadius={"full"}
                  minH={"7vh"}
                  color={"white"}
                  w={["85vw", "85vw", "85vw", "27vw"]}
                  _hover={{ bg: "#31CD31" }}
                  isLoading={isLoading}
                  onClick={loginUser}
                  loadingText="Logging in"
                >
                  Login
                </Button>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  alignContent={"center"}
                >
                  <hr
                    style={{
                      display: "block",
                      width: "5vw",
                      border: "1px solid #C9C9C",
                      marginTop: ".3rem",
                    }}
                  />
                  <Text>or</Text>
                  <hr
                    style={{
                      display: "block",
                      width: "5vw",
                      border: "1px solid #C9C9C",
                      marginTop: ".3rem",
                    }}
                  />
                </Flex>
                <Button
                  color={useColorModeValue("black", "white")}
                  border={"1px solid #00296B"}
                  borderRadius={"full"}
                  minH={"7vh"}
                  w={["85vw", "85vw", "85vw", "27vw"]}
                  _hover={{ bg: "#31CD31", color: "white" }}
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                >
                  Signup with Google
                </Button>
              </Flex>
              <Link to="/register">
                <Text color={"#31CD31"} mt={"-2rem"}>
                  Don't have an account? Register
                </Text>
              </Link>
            </Flex>
          </Center>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
