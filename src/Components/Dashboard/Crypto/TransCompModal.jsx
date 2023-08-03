import {
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
  Center,
  Image,
} from "@chakra-ui/react";
import successful from "./CryptoAssets/successful.png";


export default function TransCompModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        width={"240px"}
        color="#fff"
        bg="#1808A3"
        _hover={{
          bg: "#3626c7",
        }}
        rounded={"2xl"}
      >
        Continue
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent p={5}>
          <ModalHeader alignSelf={"center"}></ModalHeader>
          {/* <ModalCloseButton bg={"#1808A3"} color={"#fff"} rounded={"full"} /> */}
          <ModalBody>
            <Stack>
              <Box alignSelf={"center"} mb={10}>
                {" "}
                <Heading size={"md"} align={"center"} mx={10} mb={5}>
                  Transanction completed
                </Heading>
                <Center>
                  <Image p={5} src={successful} boxSize="150px" />
                </Center>
              </Box>

              <Button
                p={5}
                height={"34px"}
                color="#fff"
                bg="#1808A3"
                _hover={{
                  bg: "#3626c7",
                }}
                rounded={"full"}
              >
                OK
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
