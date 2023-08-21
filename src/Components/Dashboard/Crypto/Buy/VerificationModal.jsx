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
import { useNavigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";

export default function VerificationModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

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
                  Oops
                </Heading>
                <Text align={"center"}>
                  Kindly verify your identity to be able to buy crypto
                </Text>
              </Box>

              <Button
                height={"54px"}
                color="#fff"
                bg="#1808A3"
                _hover={{
                  bg: "#3626c7",
                }}
                rounded={"2xl"}
                onClick={() => navigate("/verificationpg")}
              >
                Start Verification
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
