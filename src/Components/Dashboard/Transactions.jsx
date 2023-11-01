import {
  Box,
  Flex,
  Heading,
  Image,
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Text,
  Stack,
  useColorModeValue,
  HStack,
  Spinner
} from "@chakra-ui/react";
import { SideBarFunc } from "./SideBarFunc";
import amazon from "../assets/amazon.png";
import { NotifIcon } from "./NotifBadge";
import { app } from "../firebase/Firebase";
import { getFirestore, collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import NotificationModal from "../../Admin/Notifications/NotificationModal";

export default function Transactions() {
  const auth = getAuth();
  const db = getFirestore(app);
  const [user, setUser] = useState(null);
  const TheadColor = useColorModeValue("black", "#0B0449")
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

 
  const tableBgColor = useColorModeValue("white", "#141139");
  const flexBgColor = useColorModeValue('gray.50', "#050223")
  const flexColor = useColorModeValue('gray.900', 'white')

  if (transactions.length === 0) {
    return (
      <Flex align="center" justify="center" height="100vh">
        <Spinner
          size="xl"
          color="blue.500"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
        />
      </Flex>
    );
  }
  
  return (
    <>
      <Flex
        // minH={[null, null, "100vh"]}
        flexDir={["column", "column", "row"]}
        bg={flexBgColor}
        color={flexColor}
      >
        <SideBarFunc />
        <Box alignItems="center" mt={10} mx={"10vw"}  
         left={['0', '0', '0', "14%"]} position={[null, null, null, null, 'relative']}  >
          <Stack>
            {" "}
            <Flex justifyContent="space-between" marginBottom={20}>
              <Heading padding={"1px"} size={"lg"}>
                Transactions
              </Heading>
              <NotificationModal />
              {/* <IconButton
                border={"none"}
                fontSize={"4xl"}
                variant={"outline"}
                // onClick={onOpen}
                aria-label="open menu"
                icon={<MdCircleNotifications />}
              /> */}
            </Flex>
            <TableContainer mt={3} mb={20}>
              <Table size={"lg"} variant={"unstyled"} borderRadius={"lg"}>
                {/* <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption> */}
                <Thead
                  bg={TheadColor }
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
              <Text fontWeight={'semibold'} color={transaction.status === 'processing' ? 'yellow.300' : transaction.status === 'failed' ? 'red.500' : '#31CD31'
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
            </TableContainer>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
