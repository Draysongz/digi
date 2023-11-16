import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { ProfileModal } from "../Setting";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc, onSnapshot } from "firebase/firestore";
import { app } from "../../firebase/Firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function UserProfileEdit() {

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
    <Flex
      minH={"10vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "#141139")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "#050223")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={4}
      >
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src={userdata.userDp}>
              </Avatar>
            </Center>
            <Center w="full">
              <ProfileModal w="full"  />
            </Center>
          </Stack>
        </FormControl>
        <Stack direction={["column", "row"]}>
          <Box>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Ugwu" type="text" disabled value={userdata.firstName}  />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Chidinma" type="text"  disabled value={userdata.lastName}  />
            </FormControl>
          </Box>
        </Stack>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            disabled
            value={userdata.Email} 
            type="email"
          />
        </FormControl>
        <FormControl id="telephone" isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            placeholder="+2347042263618"
            _placeholder={{ color: "gray.500" }}
            type="tel"
            disabled value={userdata.Number} 
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={useColorModeValue("white", "white")}
            border={"1px solid"}
            color={"black"}
            w="full"
            _hover={{
              bg: "gray.200",
            }}
            rounded={"2xl"}
          >
            Discard
          </Button>
          <Button
            bg={"#1808A3"}
            color={"white"}
            w="full"
            _hover={{
              bg: "#31CD31",
            }}
            rounded={"2xl"}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
