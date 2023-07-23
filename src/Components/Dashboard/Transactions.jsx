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
} from "@chakra-ui/react";
import { SideBarFunc } from "./SideBarFunc";
import amazon from "../assets/amazon.png";
import eth from "../assets/ETH.png";
import { NotifIcon } from "./NotifBadge";

export default function Transactions() {
  return (
    <>
      <Flex
        h={[null, null, "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="scroll"
        bg={useColorModeValue("gray.50", "gray.800")}
        color={useColorModeValue("gray.900", "white")}
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
                  bg={useColorModeValue("white", "gray.800")}
                  rounded={"full"}
                >
                  <Tr>
                    <Td>
                      {" "}
                      <HStack>
                        {" "}
                        <Image
                          src={eth}
                          alt="ETH"
                          width="6"
                          bg={"gray.50"}
                          borderRadius="10px"
                        />
                        <Text> BNB</Text>
                      </HStack>
                    </Td>
                    <Td>
                      {" "}
                      <HStack>
                        {" "}
                        <Text
                          border={"1px gray"}
                          bgColor="red.500"
                          color={"white"}
                          rounded={"full"}
                          width={9}
                          p={1}
                        >
                          Buy
                        </Text>
                        <Text> Successful</Text>
                      </HStack>
                    </Td>
                    <Td>28-05-2023</Td>
                    <Td isNumeric color="#31CD31">
                      +0.000102000BTC
                    </Td>
                    <Td>12:24 am</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      {" "}
                      <HStack>
                        {" "}
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
                      {" "}
                      <HStack>
                        {" "}
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
                  <Tr>
                    <Td>
                      {" "}
                      <HStack>
                        {" "}
                        <Image
                          src={eth}
                          alt="ETH"
                          width="6"
                          bg={"gray.50"}
                          borderRadius="10px"
                        />
                        <Text> Paypal</Text>
                      </HStack>
                    </Td>
                    <Td>
                      <HStack>
                        {" "}
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
                  <Tr>
                    <Td>
                      {" "}
                      <HStack>
                        {" "}
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
                      {" "}
                      <HStack>
                        {" "}
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
                  <Tr>
                    <Td>
                      <HStack>
                        {" "}
                        <Image
                          src={eth}
                          alt="ETH"
                          width="6"
                          bg={"gray.50"}
                          borderRadius="10px"
                        />
                        <Text> BNB</Text>
                      </HStack>
                    </Td>
                    <Td>
                      {" "}
                      <HStack>
                        {" "}
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
                  <Tr>
                    <Td>
                      <HStack>
                        {" "}
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
                      {" "}
                      <HStack>
                        {" "}
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
                  <Tr>
                    <Td>
                      <HStack>
                        {" "}
                        <Image
                          src={eth}
                          alt="ETH"
                          width="6"
                          bg={"gray.50"}
                          borderRadius="10px"
                        />
                        <Text> BNB</Text>
                      </HStack>
                    </Td>
                    <Td>
                      {" "}
                      <HStack>
                        {" "}
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
                </Tbody>
              </Table>
            </TableContainer>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
