import React, {useState, useEffect} from "react";
import notis from "../../assets/notis.svg";
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
  HStack,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
  TableContainer,
  Table,
  useColorModeValue
} from "@chakra-ui/react";
import amazon from "../../assets/amazon.png";
import buyBg from "./CryptoAssets/buybg.png";
import coinBag from "./CryptoAssets/coinbag.png";
import coinWallet from "./CryptoAssets/image 106.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { NotifIcon } from "../NotifBadge";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase/Firebase";
import { getFirestore, collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const MainCrypto = () => {
  const navigate = useNavigate();
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

  const tableBgColor = useColorModeValue("white", "gray.800");
  
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

  return (
    <Container
      maxWidth="4xl"
      py="20px"
      bg="#F4F5F8"
      minHeight="100vh"
      minWidth="85vw"
      position={[null, null, null, null, 'absolute']}
      left={['0', '0', '0', "14%"]}
    >
      <Flex p="20px" mt="20px" direction="column" gap={10} position={[null, null, null, 'relative']}>
        <Box minW="80vw">
          <Flex>
            <Box textAlign="justify">
              <Heading
                as="h3"
                fontFamily="Lato, sans-Serif"
                fontWeight="500"
                fontSize={["20px", "28px", "40px"]}
              >
                Trade cryptocurrency
              </Heading>
              <Text
                ml={["0px", "4px", "4px"]}
                minW="76vw"
                fontFamily="Lato sans-Serif"
                fontSize={["15px", "18px", "22px"]}
                fontWeight="200"
              >
                Select an option to buy and sell cryptocurrency
              </Text>
            </Box>

            <Spacer />

            <Box alignSelf={["start", "start", "start"]} cursor="pointer">
              <NotifIcon />
            </Box>
          </Flex>
        </Box>
        {/* Cards */}
        <SimpleGrid p="10px" spacing={5} minChildWidth="380px">
          <Card
            bgImage={buyBg}
            bgSize="contain"
            bgRepeat="no-repeat"
            maxW="lg"
            pos={"relative"}
            height={"250px"}
          >
            <CardBody
              border="1px solid rgba(0,0,0,0.1)"
              bgColor="#165C16"
              borderRadius="8px"
              opacity={0.89}
              color="white"
            >
              <HStack direction="column" spacing={2}>
                <Box minW="50%" marginRight={5}>
                  <Box mb={20}>
                    <Heading
                      minW="14vw"
                      fontSize="36px"
                      as="h3"
                      fontFamily="Lato, sans-Serif"
                      fontWeight="400"
                    >
                      Buy crypto
                    </Heading>
                    <Text
                      minW="14vw"
                      fontFamily="Lato, sans-Serif"
                      fontSize="14px"
                    >
                      Click to select crypto choice
                    </Text>
                  </Box>
                  <Box mt={20}>
                    <Button rightIcon={<ArrowForwardIcon />}
                    onClick={() => navigate("/buycrypto")}>Buy</Button>
                  </Box>
                </Box>

                <Box>
                  {" "}
                  <Image
                    pos={"absolute"}
                    bottom={"0"}
                    right={"0"}
                    objectFit="contain"
                    src={coinBag}
                    alt="coinbag"
                  />
                </Box>
              </HStack>
            </CardBody>
          </Card>

          <Card
            bgImage={buyBg}
            bgSize="contain"
            bgRepeat="no-repeat"
            maxW="lg"
            pos={"relative"}
            height={"250px"}
          >
            <CardBody
              border="1px solid rgba(0,0,0,0.1)"
              bgColor="#CC1616"
              borderRadius="8px"
              opacity={0.89}
              color="white"
            >
              {" "}
              <HStack direction="column" spacing={2}>
                <Box minW="50%" marginRight={5}>
                  <Box mb={20}>
                    <Heading
                      minW="14vw"
                      fontSize="36px"
                      as="h3"
                      fontFamily="Lato, sans-Serif"
                      fontWeight="400"
                    >
                      Sell crypto
                    </Heading>
                    <Text
                      minW="14vw"
                      fontFamily="Lato, sans-Serif"
                      fontSize="14px"
                    >
                      Click to select crypto choice
                    </Text>
                  </Box>
                  <Box mt={20}>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      onClick={() => navigate("/sellcrypto")}
                    >
                      Sell
                    </Button>
                  </Box>
                </Box>

                <Box>
                  {" "}
                  <Image
                    pos={"absolute"}
                    bottom={"0"}
                    right={"0"}
                    objectFit="contain"
                    src={coinWallet}
                    alt="coinbag"
                  />
                </Box>
              </HStack>
            </CardBody>
          </Card>
        </SimpleGrid>{" "}
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
            p="10px"
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

export default MainCrypto;
