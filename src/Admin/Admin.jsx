import React from "react";
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
  Thead,
  Icon,
  Progress,
  Circle,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import SalesChart from "./Saleschart";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Userbar from "../Userbar";
import MessageModal from "./MessageModal/MessageModal";
import NotificationModal from "./Notifications/NotificationModal";
import { FiMoreHorizontal } from "react-icons/fi";
import { getFirestore, collection, getDocs, onSnapshot } from "firebase/firestore";
import { app } from "../Components/firebase/Firebase";
import { useRef, useState, useEffect } from "react";

const Admin = () => {
  const salesData = [0, 100, 200, 300, 400, 500, 600, 700];
  const [totalTransactions, setTotalTransactions] = useState(null);
  const [totalTransactionsAmount, setTotalTransactionsAmount] = useState(null)
  const [totalFailedTransactions, setTotalFailedTransactions] = useState(null)
  const percentageChange = 15



  const fetchTransactions = () => {
    const db = getFirestore(app);
    const transactionsCollection = collection(db, "transactions");
    const unsubscribe = onSnapshot(transactionsCollection, (querySnapshot) => {
      // Handle the data
      let total = [];
      querySnapshot.forEach((doc) => {
        const transactionData = doc.data();
        console.log(transactionData);
        total.push(transactionData);
      });
  
      // Update the state and ref for the next iteration
      setTotalTransactions(total.length);
    });
  
    return unsubscribe; // Return the unsubscribe function
  };
  const fetchTransactionsAmount = () => {
    const db = getFirestore(app);
    const transactionsCollection = collection(db, "transactions");
    const unsubscribe = onSnapshot(transactionsCollection, (querySnapshot) => {
      // Handle the data
      let total = 0;
      querySnapshot.forEach((doc) => {
        const transactionData = doc.data();
        console.log(transactionData);
  
        // Extract the numeric value from the currency string
        const amountNumeric = parseFloat(transactionData.amount.replace(/[^\d.-]/g, ''));
  
        // Add the numeric amount to the total
        total += amountNumeric;
      });
  
      // Format the total amount with commas
      const formattedTotal = total.toLocaleString();
  
      // Update the state and ref for the next iteration
      setTotalTransactionsAmount(formattedTotal);
    });
  
    return unsubscribe; // Return the unsubscribe function
  };
  const fetchFailedTransactions = (status) => {
    const db = getFirestore(app);
    const transactionsCollection = collection(db, "transactions");
    const unsubscribe = onSnapshot(transactionsCollection, (querySnapshot) => {
      // Handle the data
      let total = [];
      querySnapshot.forEach((doc) => {
        const transactionData = doc.data();
        console.log(transactionData);
  
        // Check if the transaction status matches the specified status
        if (transactionData.status === status) {
          total.push(transactionData);
        }
      });
  
      // Update the state and ref for the next iteration
      setTotalFailedTransactions(total.length);
    });
  
    return unsubscribe; // Return the unsubscribe function
  };
  

  
  
  
  
  useEffect(() => {
    const unsubscribe = fetchTransactions();
  
    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = fetchTransactionsAmount();
  
    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const unsubscribe = fetchFailedTransactions('Declined');
  
    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
  
  
  


  
  
  

  return (
    <Container
      maxWidth="4xl"
      py="20px"
      minHeight="100vh"
      minWidth="78vw"
      bg={useColorModeValue("#F4F5F8", "#050223")}
      color={useColorModeValue("gray.900", "white")}
      position={[null, null, null, null, "absolute"]}
      left={["0", "0", "0", "21%"]}
      overflowX={"hidden"}
    >
      <Flex
        justifyContent={"space-between"}
        direction="column"
        gap={10}
        position={[null, null, null, "relative"]}
      >
        <Card
          borderLeftRadius={"0px"}
          w={["90vw", "70vw", "77vw"]}
          bg={useColorModeValue("gray.50", "#050223")}
          ml={"-1.2%"}
          mt={"-1.5%"}
        >
          <CardBody>
            <Flex
              gap={5}
              alignItems={"center"}
              justifyContent={["space-around", "space-around", "flex-end"]}
            >
              <MessageModal />
              <NotificationModal />
              <Userbar />
            </Flex>
          </CardBody>
        </Card>

        <Box minW={"75vw"}>
          <Flex>
            <Box>
              <Heading
                as="h3"
                fontSize={["20px", "28px", "40px"]}
                fontWeight="400"
                fontFamily="Lato, sans-Serif"
              >
                Overview
              </Heading>
            </Box>
          </Flex>
        </Box>

        <Flex
          p={5}
          justifyContent={"space-between"}
          gap={10}
          direction={["column", "column", "row"]}
        >
          <Card h="20vh" w={["80vw", "65vw", "25vw"]}>
            <CardBody bgColor="#11076D" borderRadius="lg" color="white">
              <Flex direction="column" p="5px" gap={2}>
                <Heading fontSize={"lg"} fontWeight={"500"}>
                  TOTAL TRANSANCTIONS
                </Heading>
                <Text fontSize={"xl"} fontWeight={"700"}>
                  {totalTransactions}
                </Text>
                <HStack alignSelf={"flex-end"}>
                  {percentageChange > 0 ? (
                    // If percentageChange is positive (increase)
                    <>
                      <Text color={"#22C55E"}>{percentageChange}%</Text>
                      <Icon as={BsArrowUpShort} boxSize={6} color={"#22C55E"} />
                    </>
                  ) : percentageChange < 0 ? (
                    // If percentageChange is negative (decrease)
                    <>
                      <Text color={"#D92D20"}>{percentageChange}%</Text>
                      <Icon
                        as={BsArrowDownShort}
                        boxSize={6}
                        color={"#D92D20"}
                      />
                    </>
                  ) : (
                    // If percentageChange is zero (no change)
                    <Text color={"#3F3F46"}>{percentageChange}%</Text>
                  )}
                </HStack>
              </Flex>
            </CardBody>
          </Card>

          <Card h="20vh" w={["80vw", "65vw", "25vw"]}>
            <CardBody bgColor="#1D7B1D" borderRadius="lg" color="white">
              <Flex direction="column" p="5px" gap={2}>
                <Heading fontSize={"lg"} fontWeight={"500"}>
                  Total Sales
                </Heading>
                <Text fontSize={"xl"} fontWeight={"700"}>
                ₦{totalTransactionsAmount}
                </Text>
                <HStack alignSelf={"flex-end"}>
                  <Text color={"#fff"}>+ 14%</Text>
                  <Icon as={BsArrowUpShort} boxSize={6} color={"#fff"} />
                </HStack>
              </Flex>
            </CardBody>
          </Card>

          <Card h="20vh" w={["80vw", "65vw", "25vw"]}>
            <CardBody bgColor="#6502E6" borderRadius="lg" color="white">
              <Flex direction="column" p="5px" gap={2}>
                <Heading fontSize={"lg"} fontWeight={"500"}>
                  Failed Transactions
                </Heading>
                <Text fontSize={"xl"} fontWeight={"700"}>
                  {totalFailedTransactions}
                </Text>
                <HStack alignSelf={"flex-end"}>
                  <Text color={"#fff"}>+ 14%</Text>
                  <Icon as={BsArrowDownShort} boxSize={6} color={"#fff"} />
                </HStack>
              </Flex>
            </CardBody>
          </Card>
        </Flex>

        <Flex
          p={5}
          gap={10}
          justifyContent={"space-between"}
          direction={["column", "column", "row"]}
        >
          <Card>
            <CardBody bgColor={"white"} borderRadius={"lg"}>
              <SalesChart salesData={salesData} />
            </CardBody>
          </Card>

          <Card
            w={["80vw", "80vw", "30vw"]}
            bg={useColorModeValue("white", "#141139")}
          >
            <CardBody>
              <Flex
                direction={"column"}
                justifyContent={"space-between"}
                h={["70vh", "70vh", "50vh"]}
              >
                <Flex p={3} justifyContent={"space-between"}>
                  <Heading as="h2" fontSize={"xl"}>
                    Traffic Sources
                  </Heading>
                  <HStack>
                    <Text fontSize={"md"}>Last 7 days</Text>
                    <Icon as={ChevronDownIcon} boxSize={6} />
                  </HStack>
                </Flex>

                <Flex direction={"column"}>
                  <Flex p={3} justifyContent={"space-between"}>
                    <Text>Referral</Text>
                    <Text>832,842</Text>
                  </Flex>

                  <Box p={3} mt={"-5%"}>
                    <Progress
                      borderRadius="md"
                      value={60}
                      trackColor="#11076D"
                    />
                  </Box>
                </Flex>

                <Flex direction={"column"}>
                  <Flex p={3} justifyContent={"space-between"}>
                    <Text>Social Media</Text>
                    <Text>432,842</Text>
                  </Flex>

                  <Box p={3} mt={"-5%"}>
                    <Progress
                      borderRadius="md"
                      value={40}
                      trackColor="#11076D"
                    />
                  </Box>
                </Flex>

                <Flex direction={"column"}>
                  <Flex p={3} justifyContent={"space-between"}>
                    <Text>Twitter</Text>
                    <Text>232,842</Text>
                  </Flex>

                  <Box p={3} mt={"-5%"}>
                    <Progress
                      borderRadius="md"
                      value={30}
                      trackColor="#11076D"
                    />
                  </Box>
                </Flex>

                <Flex direction={"column"}>
                  <Flex p={3} justifyContent={"space-between"}>
                    <Text>Direct</Text>
                    <Text>1,432,842</Text>
                  </Flex>

                  <Box p={3} mt={"-5%"}>
                    <Progress
                      borderRadius="md"
                      value={90}
                      trackColor="#11076D"
                    />
                  </Box>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </Flex>

        <Flex p={5} direction={"column"} display={["none", "none", "flex"]}>
          <Heading fontSize={"2xl"} fontFamily={"Hellix-Bold"}>
            Transactions
          </Heading>
          <Text color={"#71717A"}>Most Recent Transactions</Text>
          <Card bg={useColorModeValue("white", "#141139")}>
            <CardBody>
              <Table variant={"simple"}>
                <Thead>
                  <Tr>
                    <Td>Status</Td>
                    <Td>Product</Td>
                    <Td>Amount</Td>
                    <Td>Payment</Td>
                    <Td>Date</Td>
                    <Td>Product</Td>
                    <Td>Action</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td p={5}>
                      <HStack
                        justifyContent={"center"}
                        p={1}
                        borderRadius={"2xl"}
                        bg={"#DCFCE7"}
                        alignItems={"center"}
                      >
                        <Circle size={"10px"} bg={"#22C55E"}></Circle>
                        <Text color={"#14532D"}>Completed</Text>
                      </HStack>
                    </Td>
                    <Td color={"#71717A"}>Crypto</Td>
                    <Td color={"#18181B"}>$99.00</Td>
                    <Td color={"#71717A"}>Bank Transfer</Td>
                    <Td textAlign={"center"} color={"#71717A"}>
                      Jan 17, 2022, 2:30
                    </Td>
                    <Td color={"#71717A"}>BTC</Td>
                    <Td cursor={"pointer"}>
                      <Icon
                        color={"#A1A1AA"}
                        as={FiMoreHorizontal}
                        boxSize={6}
                      />
                    </Td>
                  </Tr>

                  <Tr>
                    <Td p={5}>
                      <HStack
                        justifyContent={"center"}
                        p={1}
                        borderRadius={"2xl"}
                        bg={"#FEF9C3"}
                        alignItems={"center"}
                      >
                        <Circle size={"10px"} bg={"#FACC15"}></Circle>
                        <Text color={"#713F12"}>Pending</Text>
                      </HStack>
                    </Td>
                    <Td color={"#71717A"}>Paypal</Td>
                    <Td color={"#18181B"}>$99.00</Td>
                    <Td color={"#71717A"}>Bank Transfer</Td>
                    <Td textAlign={"center"} color={"#71717A"}>
                      Jan 17, 2022, 2:30
                    </Td>
                    <Td color={"#71717A"}>BTC</Td>
                    <Td cursor={"pointer"}>
                      <Icon
                        color={"#A1A1AA"}
                        as={FiMoreHorizontal}
                        boxSize={6}
                      />
                    </Td>
                  </Tr>

                  <Tr>
                    <Td p={5}>
                      <HStack
                        justifyContent={"center"}
                        p={1}
                        borderRadius={"2xl"}
                        bg={"#FEE2E2"}
                        alignItems={"center"}
                      >
                        <Circle size={"10px"} bg={"#EF4444"}></Circle>
                        <Text color={"#7F1D1D"}>Canceled</Text>
                      </HStack>
                    </Td>
                    <Td color={"#71717A"}>Crypto</Td>
                    <Td color={"#18181B"}>$99.00</Td>
                    <Td color={"#71717A"}>Bank Transfer</Td>
                    <Td textAlign={"center"} color={"#71717A"}>
                      Jan 17, 2022, 2:30
                    </Td>
                    <Td color={"#71717A"}>BTC</Td>
                    <Td cursor={"pointer"}>
                      <Icon
                        color={"#A1A1AA"}
                        as={FiMoreHorizontal}
                        boxSize={6}
                      />
                    </Td>
                  </Tr>

                  <Tr>
                    <Td p={5}>
                      <HStack
                        justifyContent={"center"}
                        p={1}
                        borderRadius={"2xl"}
                        bg={"#DCFCE7"}
                        alignItems={"center"}
                      >
                        <Circle size={"10px"} bg={"#22C55E"}></Circle>
                        <Text color={"#14532D"}>Completed</Text>
                      </HStack>
                    </Td>
                    <Td color={"#71717A"}>Crypto</Td>
                    <Td color={"#18181B"}>$99.00</Td>
                    <Td color={"#71717A"}>Bank Transfer</Td>
                    <Td textAlign={"center"} color={"#71717A"}>
                      Jan 17, 2022, 2:30
                    </Td>
                    <Td color={"#71717A"}>BTC</Td>
                    <Td cursor={"pointer"}>
                      <Icon
                        color={"#A1A1AA"}
                        as={FiMoreHorizontal}
                        boxSize={6}
                      />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Admin;
