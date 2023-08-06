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
import eth from "../assets/ETH.png";
import { NotifIcon } from "./NotifBadge";
import { app } from "../firebase/Firebase";
import { getFirestore, collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Transactions() {
  const auth = getAuth();
  const db = getFirestore(app);
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  
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

 
  const tableBgColor = useColorModeValue("white", "gray.800");
  const flexBgColor = useColorModeValue('gray.50', 'gray.800')
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
        h={[null, null, "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="scroll"
        bg={flexBgColor}
        color={flexColor}
      >
        <SideBarFunc />
        <Box alignItems="center" mt={10} mx={"10vw"}>
          <Stack>
            {" "}
            <Flex justifyContent="space-between" marginBottom={20}>
              <Heading padding={"1px"} size={"lg"}>
                Transactions
              </Heading>
              <NotifIcon />
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
      return (
        <Tr key={transaction.id}>
          <Td>
            <HStack>
              <Image
                src={eth}
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
            {transaction.transactionType === 'sell'? `-${transaction.coinUnit.toFixed(6)}${transaction.cryptoSymbol}`: `+${transaction.coinUnit.toFixed(6)}${transaction.cryptoSymbol}`}
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
