import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Spinner,
    useDisclosure,
    useColorModeValue,
    InputGroup,
    Input,
    Modal,
    ModalBody,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Center
 
  } from "@chakra-ui/react";
  import {  useState } from "react";
  import { NotifIcon } from "../../NotifBadge";
  import { SideBarFunc } from "../../SideBarFunc";
  import { useNavigate } from "react-router-dom";
  import { BackButton } from "../../Goback";
  import successful from "./../CryptoAssets/successful.png";
  import { useLocation } from "react-router-dom";
  import { getAuth } from "firebase/auth";
  import { app } from "../../../firebase/Firebase";
  import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import NotificationModal from "../../../../Admin/Notifications/NotificationModal";

const BuyFinalCheckout = () => {
    const bgColor = useColorModeValue("gray.50", "#050223");
  const textColor = useColorModeValue("gray.900", "white");
  const buttonColor = useColorModeValue("#1808A3", "#0B0449");
  const chetextColor = useColorModeValue("#1808A3", "white")
  const [wallet, setWallet] = useState('')
  const [transactionSaved, setTransactionSaved] = useState(false)
  const {state} = useLocation()
  const {coinUnit, cryptoSymbol, downloadURL, accountData, amount} = state

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()

  const db = getFirestore(app)
  const auth = getAuth()
  const user = auth.currentUser

  const timestamp= Timestamp.now()

  const createTransaction = async(e)=>{

      // Validate the required fields before proceeding
      if (!wallet) {
        toast.error("Please fill in all the required fields.");
        return;
      }

      try {
        await addDoc(collection(db, 'transactions'), {
            userId: user.uid,
            coinUnit: coinUnit,
            cryptoSymbol: cryptoSymbol,
            amount: `₦${amount}`,
            paymentProof: downloadURL,
            receivingBank: accountData, 
            walletAddress: wallet,
            status: 'pending',
            transactionType: 'buy',
            time: timestamp,

          });
          setTransactionSaved(true);
      } catch (error) {
        toast.error(error)
        console.log(error)
      }

  }
  return (
   
    <>
    <Flex
      h={["100vh", "100vh", "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="auto"
      bg={ bgColor}
      color={textColor}
    >
      <SideBarFunc />
      <Box
        alignItems="center"
        justifyContent="center"
        mt={10}
        mx={"10vw"}
        minW={"60vw"}
        left={['0', '0', '0', "14%"]} position={[null, null, null, null, 'relative']}
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

            <NotificationModal/>
          </Flex>
          <Box justifyContent={"space-between"} minW={"35em"}>
            <Heading size={"md"} color={chetextColor}>
              Checkout
            </Heading>
            <Text maxW={{ base: "20em", md: "30em" }}>
              Kindly input your wallet address to get your crypto
            </Text>
            <Stack justifyContent={"space-between"} spacing={5} mt={10}>
              <Text color={"gray.500"}>Input wallet address</Text>
              <InputGroup
                bgColor="#fff"
                mb={4}
                border="none"
                borderColor="#fff"
                borderRadius="10px"
                mr={2}
                width={{ base: "20em", sm: "25em", md: "30em" }}
              >
                <Input
                  type="text"
                  placeholder="0x2373774803089Eda"
                  borderRadius="10px"
                  value={wallet}
                  color={'black'}
                  onChange={(e)=>setWallet(e.target.value)}
                />
              </InputGroup>
            </Stack>
            <Button
               onClick={()=>{onOpen(); createTransaction()}}
              width={{ base: "15rem", md: "25rem" }}
              height={"50px"}
              color="#fff"
              bg={buttonColor}
              _hover={{
                bg: "#3626c7",
              }}
              rounded={"2xl"}
              my={5}
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
                            Wallet address received
                          </Heading>
                          <Center>
                            <Image p={5} src={successful} boxSize="150px" />
                          </Center>
                          <Text textAlign={"center"}>
                            Kindly wait a few minutes, while your order is being
                            processed to your wallet
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
                          onClick={() => {
                            navigate("/crypto")}}
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



export default BuyFinalCheckout