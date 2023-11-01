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
  VStack,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Center,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import successful from "./../CryptoAssets/successful.png";
import { ChevronLeftIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import NotificationModal from "../../../../Admin/Notifications/NotificationModal";
import { SideBarFunc } from "../../SideBarFunc";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../Goback";

export default function BvnPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
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
        <Box alignItems="center" justifyContent="center" mt={10} mx={"10vw"}>
          <Stack>
            {" "}
            <BackButton />
            <Flex justifyContent="space-between" marginBottom={10}>
              <Box spacing={"5"}>
                {" "}
                <Heading size={"lg"}>Buy Cryptocurrency</Heading>
              </Box>

              <NotificationModal/>
            </Flex>
            <Box mb={5} alignItems={"center"} justifyContent={"center"}>
              <VStack justifyContent={"center"} minW="60vw">
                <Heading
                  size={"md"}
                  textAlign="center"
                  mb={"70px"}
                  color={"#1808A3"}
                >
                  Bank Verification Number (BVN)
                </Heading>
                <Text>Enter your eleven digit BVN</Text>

                <Box>
                  <InputGroup
                    bgColor="#fff"
                    border="Highlight"
                    borderColor="#fff"
                    borderRadius="10px"
                    mr={2}
                    width={{ base: "15rem", md: "25rem" }}
                    height={"60px"}
                  >
                    <InputLeftElement
                      height={"60px"}
                      pointerEvents="none"
                      children={<ArrowDownIcon color="gray" />}
                      borderRightRadius="lg"
                    />
                    <Input
                      width={"25rem"}
                      height={"60px"}
                      type="number"
                      placeholder={""}
                      borderRadius="10px"
                    />
                  </InputGroup>

                  <br />

                  <Button
                    marginTop={5}
                    onClick={() => {
                      onOpen();
                    }}
                    height={"50px"}
                    width={{ base: "15rem", md: "25rem" }}
                    color="#fff"
                    bg="#1808A3"
                    _hover={{
                      bg: "#3626c7",
                    }}
                    rounded={"2xl"}
                  >
                    Verify
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
                            <Heading
                              size={"md"}
                              align={"center"}
                              mx={10}
                              mb={5}
                            >
                              Verification Received
                            </Heading>
                            <Center>
                              <Image p={5} src={successful} boxSize="150px" />
                            </Center>{" "}
                            <Text color={"gray.500"}>
                              Your Verification has been successfully made.
                            </Text>
                          </Box>

                          <Button
                            onClick={() => navigate("/buyconverter")}
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
                </Box>
              </VStack>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
