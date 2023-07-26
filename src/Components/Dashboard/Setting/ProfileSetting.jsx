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
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { ProfileModal } from "../Setting";

export default function UserProfileEdit() {
  return (
    <Flex
      minH={"10vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={4}
      >
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  bottom="10px"
                  colorScheme={useColorModeValue("gray", "teal")}
                  aria-label="remove Image"
                  icon={<EditIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <ProfileModal w="full" />
            </Center>
          </Stack>
        </FormControl>
        <Stack direction={["column", "row"]}>
          <Box>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Ugwu" type="text" />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Chidinma" type="text" />
            </FormControl>
          </Box>
        </Stack>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="telephone" isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            placeholder="+2347042263618"
            _placeholder={{ color: "gray.500" }}
            type="tel"
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
