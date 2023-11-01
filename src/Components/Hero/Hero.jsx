import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  HStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRole } from "../../RoleProvider";
import { useEffect } from "react";

export default function SplitScreen() {
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
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"}>
              Trade with Confidence
              <br /> and Ease Today 
            </Text>
          </Heading>

          <Text fontSize={{ base: "md", lg: "lg" }}>
            Trade with confidence and ease on Digimart, the leading P2P crypto
            exchange.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
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
