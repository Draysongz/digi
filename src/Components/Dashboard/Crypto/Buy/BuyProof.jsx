import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Stack,
  Image,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Input,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { NotifIcon } from "../../NotifBadge";
import { SideBarFunc } from "../../SideBarFunc";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../Goback";
import successful from "./../CryptoAssets/successful.png";
import FileUpload from "./../FileUpload";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function BuyProof() {
  const navigate = useNavigate();
  const [transactionHash, setTransactionHash] = useState("");
  const [downloadURL, setDownloadURL] = useState("");
  const location = useLocation();
  const [transactionSaved, setTransactionSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { state } = location;
  const { coinUnit, cryptoSymbol, amount } = state;

  const goBack = () => {
    navigate(-1);
  };

  const handleUploadComplete = (url) => {
    setDownloadURL(url);
    console.log(url);
  };

  useEffect(() => {
    console.log("Updated downloadURL:", downloadURL);
    // Perform any actions using the updated downloadURL here, if needed
  }, [downloadURL]);

  return (
    <>
      <Flex
        h={["100vh", "100vh", "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="scroll"
        bg={useColorModeValue("gray.50", "gray.800")}
        color={useColorModeValue("gray.900", "white")}
      >
        <SideBarFunc />
        <Box
          alignItems="center"
          justifyContent="center"
          mt={10}
          mx={"10vw"}
          minW={"60vw"}
        >
          <Stack>
            {" "}
            <BackButton />
            <Flex justifyContent="space-between" marginBottom={10}>
              <Box spacing={"5"}>
                {" "}
                <Heading size={{ base: "md", md: "lg" }}>
                  Buy Cryptocurrency
                </Heading>
                <br></br>
              </Box>

              <NotifIcon />
            </Flex>
            <Box>
              <Heading size={"md"} color="#1808A3">
                Upload payment proof
              </Heading>
              <Text mb={5}>Kindly upload payment proof to recieve crypto</Text>

              <br></br>

              <Text color={"gray.500"}>Upload transanction screenshot</Text>
              <FileUpload onUploadComplete={handleUploadComplete} />
              <Button
                onClick={() =>
                  navigate({
                    state: {
                      coinUnit,
                      cryptoSymbol,
                      amount,
                      downloadURL,
                      transactionHash,
                    },
                  })
                }
                width={"240px"}
                color="#fff"
                bg="#1808A3"
                _hover={{
                  bg: "#3626c7",
                }}
                rounded={"2xl"}
                mb={20}
              >
                Continue
              </Button>
              {transactionSaved && (
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
                          <Text textAlign={"center"}>
                            Kindly wait afew minutes, while your order is being
                            processed...
                          </Text>
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
              )}
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
