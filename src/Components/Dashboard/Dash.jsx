import React, { useEffect, useState } from "react";
import {
  Container,
  Flex,
  SimpleGrid,
  Card,
  CardBody,
  Box,
  Text,
  Spacer,
  Heading,
  Image,
  Button,
  useColorModeValue,
  Table,
  Th,
  Td,
  TableContainer,
  HStack,
  Tr,
  Tbody,
  Thead
} from "@chakra-ui/react";
import amazon from "../assets/amazon.png";
import bitcard from "../assets/bitcard.png";
import bitcoin from "../assets/bitcoin.png";
import payD from "../assets/payD.svg";
import paypl from "../assets/paypl.png";
import gift from "../assets/gift.png";
import giftcard from "../assets/giftcard.png";
import { NotifIcon } from "./NotifBadge";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../firebase/Firebase";
import { getFirestore, collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Dash = ({userData}) => {
  const navigate= useNavigate()
  const auth = getAuth();
  const db = getFirestore(app);
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const cryptoImages = {
    BTC: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    ETH: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    LTC: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580',
    SOL: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422',
    USDT: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663',
    BSC:  'https://assets.coingecko.com/coins/images/31273/large/new_binance-peg-busd.png?1692097938',
    USDC: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
    XRP: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
    ADA: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
    TRX: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066',
    DOT: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644',
    MATIC: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
    SHIBA: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446',
    AVAX: 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1670992574',
    DAI: 'https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png?1687143508'

    // Add more entries for other cryptocurrencies
  };
  
 // Function to format time strings to "hh:mm" format
 const formatDateAndTime = (timestamp) => {
  const dateObject = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date
  const date = dateObject.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).replace(/\//g, "-");;

  const time = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return {
    formattedDate: date,
    formattedTime: time,
  };
};


const fetchTransactions = (user) => {
  console.log("Fetching transactions for user:", user.uid);
  const transactionsRef = collection(db, "transactions");
  const userTransactionsQuery = query(
    transactionsRef,
    where("userId", "==", user.uid),
    orderBy("time", "desc")
  );

  const unsubscribe = onSnapshot(userTransactionsQuery, (snapshot) => {
    const userTransactions = snapshot.docs.map((doc) => {
      const data = doc.data();
      const { formattedDate, formattedTime } = formatDateAndTime(data.time);
      return {
        ...data,
        formattedDate,
        formattedTime,
      };
    });
      console.log(userTransactions);
      setTransactions(userTransactions);
    });
  
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  };
  console.log(transactions)
  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
        fetchTransactions(user);
      } else {
        // User is signed out
        setUser(null);
        setTransactions([]);
      }
    });

    // Clean up the subscription when component unmounts
    return () => unsubscribe();
  }, [auth]);

 
  const tableBgColor = useColorModeValue("white", "gray.800");



  return (
    <Container
      maxWidth="4xl"
      py="20px"
      minHeight="100vh"
      minWidth="85vw"
      bg={useColorModeValue("#F4F5F8", "gray.700")}
      color={useColorModeValue("gray.900", "white")}
      position={[null, null, null, null, 'absolute']}
      left={['0', '0', '0', "14%"]}
    >
      <Flex p="20px" mt="20px" direction="column" gap={10} position={[null, null, null, 'relative']}>
        {/* top div */}
        <Box minW="80vw">
          <Flex>
            <Box>
              <Heading
                as="h3"
                fontSize={["20px", "28px", "40px"]}
                fontWeight="400"
                fontFamily="Lato, sans-Serif"
              >
                Hi {userData.firstName}, Welcome
              </Heading>
            </Box>
            <Spacer />

            <Box alignSelf="center" cursor="pointer">
              <NotifIcon />
            </Box>
          </Flex>
        </Box>

        {/* Services */}

        <SimpleGrid p="10px" spacing={10} minChildWidth="250px">
          <Card h="28vh" maxW="sm" bgImage={bitcard}>
            <CardBody
              bgColor="#0E0562"
              opacity={0.8999999761581421}
              borderRadius="lg"
              color="white"
            >
              <Flex alignItems="center" direction="column" p="5px" gap={5}>
                <Image src={bitcoin} alt="bitcoin" width="20" />
                <Button
                  _hover={{
                    bgColor: "transparent",
                    color: "white",
                    border: "2px solid green",
                  }}
                  bgColor="#FFF"
                  color={useColorModeValue("gray.900", "white")}
                  fontFamily="Lato, sans-Serif"
                  fontWeight="bold"
                  onClick={()=> navigate('/crypto')}
                >
                  Trade Crypto
                </Button>
              </Flex>
            </CardBody>
          </Card>

          <Card h="28vh" maxW="sm" bgImage={paypl}>
            <CardBody
              bgColor="#A52323"
              opacity={0.8999999761581421}
              borderRadius="lg"
              color="white"
            >
              <Flex alignItems="center" direction="column" p="5px" gap={5}>
                <Image src={payD} alt="paypal" width="20" />

                <Button
                  _hover={{
                    bgColor: "transparent",
                    color: "white",
                    border: "2px solid green",
                  }}
                  bgColor="#FFF"
                  fontFamily="Lato, sans-Serif"
                  fontWeight="bold"
                  minW="2.5rem"
                  w="8rem"
                >
                  Paypal
                </Button>
              </Flex>
            </CardBody>
          </Card>

          <Card h="28vh" maxW="sm" bgImage={gift} opacity={0.6999999761581421}>
            <CardBody
              bgColor="#165C16"
              opacity={0.8999999761581421}
              borderRadius="lg"
              color="white"
            >
              <Flex alignItems="center" direction="column" p="5px" gap={5}>
                <Image
                  src={giftcard}
                  alt="gift cards"
                  bgColor="white"
                  width="20"
                  borderRadius="8px"
                />
                <Button
                  bgColor="#FFF"
                  fontFamily="Lato, sans-Serif"
                  fontWeight="bold"
                  disabled={true}
                  minW="2.5rem"
                  w="8rem"
                >
                  Gift Cards
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </SimpleGrid>

        {/* Transaction records */}

       <Box gap={10}>
        <Heading
            as="h3"
            marginTop="-8px"
            fontWeight="400"
            fontFamily="Lato, sans-Serif"
            fontSize={["20px", "28px", "40px"]}
          >
            Recent Transactions
          </Heading>
         <Flex
            marginTop="4px"
            p={transactions.length > 0  ? '0px' : "10px"}
            border="2px solid"
            borderRadius="8px"
            minH="30vh"
            justifyContent="center"
            alignItems="center"
          >
             {transactions.length=== 0 ?  <Text
              textAlign="center"
              fontFamily="Lato, sans-Serif"
              fontSize={["16px", "22px", "28px"]}
              color="#626262"
            >
              Your recent transactions will appear here
            </Text> : 
            <TableContainer mt={3}  width={'100vw'}>
              <Table size={"lg"} variant={"unstyled"} borderRadius={"lg"}>
                {/* <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption> */}
                <Thead
                  bg="black"
                  border={" 1px white solid"}
                  borderRadius={"4xl"}
                >
                  <Tr>
                    <Th color={"white"}>Item</Th>
                    <Th color={"white"}>Status</Th>
                    <Th color={"white"}>Date</Th>
                    <Th color={"white"} isNumeric>
                      Amount
                    </Th>
                    <Th color={"white"}>Time</Th>
                  </Tr>
                </Thead>
                <br></br>
                <Tbody
                  bg={tableBgColor}
                  rounded={"full"}
                >
                  {transactions.map((transaction) => {
    if (transaction.transactionType === "sell" || transaction.transactionType === 'buy') {
      const cryptoImage = cryptoImages[transaction.cryptoSymbol];
      return (
        <Tr key={transaction.id}>
          <Td>
            <HStack>
              <Image
                src={cryptoImage}
                alt="ETH"
                width="6"
                bg={"gray.50"}
                borderRadius="10px"
              />
              <Text> {transaction.cryptoSymbol}</Text>
            </HStack>
          </Td>
          <Td>
            <HStack>
              <Text
                border={"1px gray"}
                bgColor={transaction.transactionType === 'sell'? "red.500" : "green.500"}
                color={"white"}
                rounded={"full"}
                width={20}
                p={1}
                textAlign={'center'}
              >
                {transaction.transactionType}
              </Text>
              <Text fontWeight={'semibold'} color={transaction.status === 'pending' ? 'yellow.300' : transaction.status === 'unsuccessful' ? 'red.500' : '#31CD31'
}> {transaction.status}</Text>
            </HStack>
          </Td>
          <Td>{transaction.formattedDate}</Td>
          <Td isNumeric color={transaction.transactionType === 'sell'? "red.500" : "#31CD31"}>
            {transaction.transactionType === 'sell'? `-${transaction.coinUnit}${transaction.cryptoSymbol}`: `+${transaction.coinUnit}${transaction.cryptoSymbol}`}
          </Td>
          <Td>{transaction.formattedTime}</Td>
        </Tr>
      );
    } else {
      return (
        <Tr key={transaction.id}>
          <Td>
            <HStack>
              <Image
                src={amazon}
                alt="amazon cards"
                bgColor="white"
                width="6"
                bg={"gray.50"}
                border={"1px"}
                borderColor={"GrayText"}
                borderRadius="10px"
              />
              <Text>Gift Card</Text>
            </HStack>
          </Td>
          <Td>
            <HStack>
              <Text
                border={"1px gray"}
                bgColor="#31CD31"
                color={"white"}
                rounded={"full"}
                width={9}
                p={1}
              >
                Buy
              </Text>
              <Text> Unsuccessful</Text>
            </HStack>
          </Td>
          <Td>28-05-2023</Td>
          <Td isNumeric color="#31CD31">
            +0.000102000BTC
          </Td>
          <Td>12:24 am</Td>
        </Tr>
      );
    }
  })}
              
                </Tbody>
              </Table>
            </TableContainer>}
          </Flex> 
        </Box> 
      </Flex>
    </Container>
  );
};

export default Dash;
