import {
  Link,
  Icon,
  Text,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";

import { FiLogOut } from "react-icons/fi";

export default function LogoutModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Link
        onClick={onOpen}
        padding="10px"
        borderRadius="2xl"
        _hover={{
          textDecor: "none",
          bg: "#E8E6F6",
          color: "#1808A3",
        }}
        display={["none", "none", "flex", "flex", "flex"]}
      >
        <Icon as={FiLogOut} fontSize="4xl" p={1} />
        <Text
          p={1}
          fontSize="lg"
          display={["none", "none", "none", "flex", "flex"]}
        >
          Logout
        </Text>
      </Link>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"}></ModalHeader>
          <ModalCloseButton bg={"#1808A3"} color={"#fff"} rounded={"full"} />
          <ModalBody>
            <Stack>
              <Box alignSelf={"center"} mb={10}>
                {" "}
                <Heading size={"md"} align={"center"} mx={10} mb={5}>
                  You are attempting to logout of Digimart
                </Heading>
                <Text align={"center"}>Are you sure?</Text>
              </Box>

              <Button
                height={"54px"}
                color="#fff"
                bg="#1808A3"
                _hover={{
                  bg: "#3626c7",
                }}
                rounded={"2xl"}
              >
                Log out
              </Button>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function MobileLogoutModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Link
        _hover={{
          textDecor: "none",
          bg: "white",
          color: "#1808A3",
        }}
        padding="20px"
        display={["flex", "flex", "flex", "flex", "flex"]}
        onClick={onOpen}
      >
        <Icon as={FiLogOut} fontSize="4xl" p={1} />
        <Text
          p={1}
          fontSize="lg"
          display={["flex", "flex", "flex", "flex", "flex"]}
        >
          Logout
        </Text>
      </Link>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"}></ModalHeader>
          <ModalCloseButton bg={"#1808A3"} color={"#fff"} rounded={"full"} />
          <ModalBody>
            <Stack>
              <Box alignSelf={"center"} mb={10}>
                {" "}
                <Heading size={"md"} align={"center"} mx={10} mb={5}>
                  You are attempting to logout of Digimart
                </Heading>
                <Text align={"center"}>Are you sure?</Text>
              </Box>

              <Button
                height={"54px"}
                color="#fff"
                bg="#1808A3"
                _hover={{
                  bg: "#3626c7",
                }}
                rounded={"2xl"}
              >
                Log out
              </Button>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

{
  /* <Link
onClick={() => navigate("/logout")}
padding="10px"
borderRadius="2xl"
_hover={{
  textDecor: "none",
  bg: "#E8E6F6",
  color: "#1808A3",
}}
display={["none", "none", "flex", "flex", "flex"]}
>
<Icon as={FiLogOut} fontSize="4xl" p={1} />
<Text
  p={1}
  fontSize="lg"
  display={["none", "none", "none", "flex", "flex"]}
>
  Logout
</Text>
</Link> */
}
