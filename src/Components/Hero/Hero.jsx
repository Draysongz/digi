import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  HStack,
  Box
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRole } from "../../RoleProvider";
import { useEffect, useState } from "react";
import './hero.css'

export default function SplitScreen() {
  const words = ["Swiftly", "Safely", "Confidently", "With EASE!"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  const { checkUserRole, userRole } = useRole();

  // Log the user's role
  console.log("User Role:", userRole);

  // Check if the user's role is "user"
  const isUserRole = checkUserRole("user");
  console.log("Is User Role:", isUserRole);
 
  const navigate = useNavigate();
  return (
    <Stack
      maxH={"100vh"}
      direction={{ base: "column", md: "row" }}
      bgImage="url('./images/map image.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bg={useColorModeValue("white", "#080339")}
     
      // color={useColorModeValue("gray.600", "white")}
    >
      <HStack spacing={6}
      w={'full'} 
      bgImage="url('./images/map image.png')"
      flexDir={['column', 'column', 'row']}
      >
      <Flex
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
        color={useColorModeValue("#1808A3", "gray.200")}
      >
        <Stack
          spacing={6}
          w={"full"}
          maxW={"lg"}
          align={{ base: "center", md: "flex-start" }}
        >
          <Box 
      className="wrapper"
      fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}
    >
      <Text>Trade your digital assets</Text>
      <Box
        className={'words'}
        color={'#31CD31'}
        display="flex" // Ensure the words are displayed in a row
      >
        {words.map((word, index) => (
          <span
            key={index}
            className={currentWordIndex === index ? 'visible' : 'hidden'}
            style={{
              animation: currentWordIndex === index
                ? 'slideIn 2s ease-in-out forwards'
                : 'slideOut 2s ease-in-out forwards',
            }}
          >
            {word}
          </span>
        ))}
      </Box>
    </Box>

          <Flex mt={'-5%'} >
            <Text>DigiMart Exchange has got you covered on 
              <span style={{color : '#31CD31', fontSize: 'x-large', fontStyle: 'italic'}}>"hassel-free"</span> transactions
              of any volume.... We're the leading trading & exchange platform for a reason!
            </Text>
          </Flex>
          <Stack  direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              alignSelf={"center"}
              rounded={"full"}
              width="150px"
              size="sm"
              bg={"#1808A3"}
              color={"white"}
              _hover={{
                bg: "#31CD31",
              }}
              onClick={() => navigate("/options")}
              cursor="pointer"
            >
              Trade Now
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}  mr={'10px'}>
        <Image

          alt={"Login Image"}
          // objectFit={"fill"}
          padding={['20px', '30px','40px']}
          src={"./images/Group 1000001411.png"}
          width={'100'}
          
        />
      </Flex>
      </HStack>
    </Stack>
  );
}
