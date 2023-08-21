import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Button,
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
} from "@chakra-ui/react";
import successful from "../CryptoAssets/successful.png";
import { useState } from "react";
import { NotifIcon } from "../../NotifBadge";
import { SideBarFunc } from "../../SideBarFunc";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../Goback";
import { ChevronDownIcon, CopyIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/Firebase";

export default function BuyCheckout() {
  const navigate = useNavigate();
  const [accountNumber, setAccountNumber] = useState(0);
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [transactionSaved, setTransactionSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const { state } = location;
  const { coinUnit, cryptoSymbol, amount, downloadURL, transactionHash } =
    state;

  const db = getFirestore(app);
  const auth = getAuth();
  const user = auth.currentUser;

  function getCurrentFormattedDate() {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = currentDate.getFullYear().toString();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const amOrPm = hours >= 12 ? "pm" : "am";
    const formattedHours = (hours % 12 || 12).toString(); // Convert to 12-hour format
    const formattedDate = `${day}-${month}-${year}`;
    const formattedTime = `${formattedHours}:${minutes}${amOrPm}`;

    return { date: formattedDate, time: formattedTime };
  }
  const { date, time } = getCurrentFormattedDate();

  const createTransaction = async (e) => {
    try {
      await addDoc(collection(db, "transactions"), {
        userId: user.uid,
        coinUnit: coinUnit,
        cryptoSymbol: cryptoSymbol,
        amount: `₦${amount}`,
        transactionHash: transactionHash,
        Imageproof: downloadURL,
        details: {
          bankName: bankName,
          accountNumber: accountNumber,
          accountName: accountName,
        },
        status: "pending",
        transactionType: "sell",
        Date: date,
        Time: time,
      });
      setTransactionSaved(true);
    } catch (error) {
      console.log(error);
    }
  };
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
            <Box justifyContent={"space-between"} minW={"35em"}>
              <Heading size={"md"} color="#1808A3">
                Checkout
              </Heading>
              <Text maxW={{ base: "20em", md: "30em" }}>
                Kindly make a payment of N00,000 to the account details below
              </Text>

              <br></br>
              <Text color={"gray.500"}>Input account below</Text>
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
                    pointerEvents="auto"
                    children={<CopyIcon color="gray" />}
                    borderRightRadius="lg"
                    placeholder="copy"
                  />
                  <Input
                    type="number"
                    placeholder="1465675651"
                    borderRadius="10px"
                    onChange={(e) => setAccountNumber(e.target.value)}
                    value={accountNumber}
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
                    onChange={(e) => setBankName(e.target.value)}
                    value={bankName}
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
                    type="test"
                    placeholder="John Doe"
                    borderRadius="10px"
                    onChange={(e) => setAccountName(e.target.value)}
                    value={accountName}
                  />
                </InputGroup>
              </Stack>
              <Button
                onClick={() => {
                  navigate("/buyproof");
                  createTransaction();
                }}
                width={{ base: "15rem", md: "25rem" }}
                height={"50px"}
                color="#fff"
                bg="#1808A3"
                _hover={{
                  bg: "#3626c7",
                }}
                rounded={"2xl"}
                my={5}
              >
                Continue
              </Button>

              {transactionSaved}
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
