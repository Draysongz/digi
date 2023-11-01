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
  useColorMode,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  Input,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Center,
  color,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NotifIcon } from "../../NotifBadge";
import { SideBarFunc } from "../../SideBarFunc";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../Goback";
import { ChevronDownIcon, CopyIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/Firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function BuyCheckout() {
  
  const bgColor = useColorModeValue("gray.50", "#050223");
  const textColor = useColorModeValue("gray.900", "white");
  const buttonColor = useColorModeValue("#1808A3", "#0B0449");
  const chetextColor = useColorModeValue("#1808A3", "white")
  const [accountData, setAccountData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const { state } = location;
  const { coinUnit, cryptoSymbol, amount } = state;

  const goBack = () => {
    navigate(-1);
  };

  const getDetails = async()=>{
    const db = getFirestore(app)

    const accountsCollection = collection(db, 'accounts')

    try {
      getDocs(accountsCollection)
        .then((querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          // Set the data in state
          setAccountData(data);
         
        })
        .catch((error) => {
          // Handle any errors
          throw new Error(error.message);
        })
        .finally(() => {
          // Set loading to false when the operation is complete
          setLoading(false);
        });
    } catch (error) {
      // Handle any errors from the try block
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(()=>{
    getDetails()
  }, [])

  if (accountData.length === 0) {
    return (
      <Flex align="center" justify="center" height="100vh">
        <Spinner size="xl" color="blue.500" thickness='4px'
  speed='0.65s'
  emptyColor='gray.200' />
      </Flex>
    );
  }
  console.log(accountData)

    // Function to copy the content to the clipboard
    const copyToClipboard = (content) => {
      navigator.clipboard.writeText(content)
        .then(() => {
          alert(`Copied: ${content}`);
        })
        .catch((error) => {
          console.error("Copy failed:", error);
        });
    };


  return (
    <>
      <Flex
        h={["100vh", "100vh", "130vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
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
              <Heading size={"md"} color= {chetextColor}>
                Checkout
              </Heading>
              <Text maxW={{ base: "20em", md: "30em" }}>
                Kindly make a payment of {`₦${amount}`} to the account details below
              </Text>

              <br></br>
              <Text color={"gray.500"}>Account Number</Text>
              <Stack justifyContent={"space-between"} spacing={5} mb={5}>
                <InputGroup
                  // value={copyText}
                  // onChange={handleCopyText}
                  bgColor="#fff"
                  mb={4}
                  border="none"
                  borderColor="#fff"
                  borderRadius="10px"
                  mr={2}
                  width={{ base: "20em", sm: "25em", md: "30em" }}
                
                >
                  {" "}
                  <InputRightElement
                    as={"button"}
                    // onClick={copyToClipboard}
                    onClick={() => copyToClipboard(accountData[0].Number)}
                    pointerEvents="auto"
                    children={<CopyIcon color="gray" />}
                    borderRightRadius="lg"
                    placeholder="copy"
                  />
                  <Input
                    type="number"
                    placeholder="1465675651"
                    borderRadius="10px"
                    value={accountData[0].Number}
                    isDisabled
                    _disabled={{color:'black'}}
                  />
                </InputGroup>

                <Text color={"gray.500"}>Bank Name</Text>
                <InputGroup
                  // value={copyText}
                  // onChange={handleCopyText}
                  bgColor="#fff"
                  mb={4}
                  border="none"
                  borderColor="#fff"
                  borderRadius="10px"
                  mr={2}
                  width={{ base: "20em", sm: "25em", md: "30em" }}
                >
                  <InputRightElement
                    as={"button"}
                    // onClick={copyToClipboard}
                    pointerEvents="auto"
                    children={<ChevronDownIcon color="gray" />}
                    borderRightRadius="lg"
                    placeholder="copy"
                    size="2xl"
                    color={"#000"}
                  />
                  <Input
                    type="text"
                    placeholder="Wema bank"
                    borderRadius="10px"
                    value={accountData[0].Bank}
                    isDisabled
                    _disabled={{color:'black'}}
                  />
                </InputGroup>

                <Text color={"gray.500"}>Account Name</Text>
                <InputGroup
                  // value={copyText}
                  // onChange={handleCopyText}
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
                    placeholder="John Doe"
                    borderRadius="10px"
                    value={accountData[0].Name}
                    isDisabled
                    _disabled={{color:'black'}}
                  />
                </InputGroup>
              </Stack>
              <Button
                onClick={() => {
                  navigate("/buyproof", {
                    state: { coinUnit, cryptoSymbol, amount, accountData },
                  })
                }}
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

            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
