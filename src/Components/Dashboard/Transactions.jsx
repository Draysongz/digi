import {
  Box,
  Flex,
  Heading,
  Icon,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Tfoot,
  Stack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdCircleNotifications } from "react-icons/md";
import { SideBarFunc } from "./SideBarFunc";

export default function Transactions() {
  return (
    <>
      <Flex
        h={[null, null, "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        bg={useColorModeValue("gray.50", "gray.800")}
        color={useColorModeValue("gray.900", "white")}
      >
        <SideBarFunc />
        <Box alignItems="center" justifyContent="center" mt={20} mx={"10vw"}>
          <Stack>
            {" "}
            <Flex justifyContent="space-between" marginBottom={20}>
              <Heading padding={"1px"} size={"lg"}>
                Transactions
              </Heading>
              <IconButton
                border={"none"}
                fontSize={"4xl"}
                variant={"outline"}
                // onClick={onOpen}
                aria-label="open menu"
                icon={<MdCircleNotifications />}
              />
            </Flex>
            <TableContainer size={"2xl"} mt={10}>
              <Table>
                {/* <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption> */}
                <Thead
                  color={"white"}
                  bg="black"
                  border={"white"}
                  borderRadius="2xl"
                >
                  <Tr rounded={"full"}>
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
                <Tbody bg={useColorModeValue("white", "gray.800")}>
                  <Tr>
                    <Td>BNB</Td>
                    <Td>Successful</Td>
                    <Td>28-05-2023</Td>
                    <Td isNumeric>0.000102000BTC</Td>
                    <Td>12:24 am</Td>
                  </Tr>
                  <Tr>
                    <Td>Gift Card</Td>
                    <Td>Unsuccessful</Td>
                    <Td>28-05-2023</Td>
                    <Td isNumeric>0.000102000BTC</Td>
                    <Td>12:24 am</Td>
                  </Tr>
                  <Tr>
                    <Td>Paypal</Td>
                    <Td>Unsuccessful</Td>
                    <Td>28-05-2023</Td>
                    <Td isNumeric>0.000102000BTC</Td>
                    <Td>12:24 am</Td>
                  </Tr>
                  <Tr>
                    <Td>Gift Card</Td>
                    <Td>Unsuccessful</Td>
                    <Td>28-05-2023</Td>
                    <Td isNumeric>0.000102000BTC</Td>
                    <Td>12:24 am</Td>
                  </Tr>
                  <Tr>
                    <Td>BNB</Td>
                    <Td>Unsuccessful</Td>
                    <Td>28-05-2023</Td>
                    <Td isNumeric>0.000102000BTC</Td>
                    <Td>12:24 am</Td>
                  </Tr>
                  <Tr>
                    <Td>Gift Card</Td>
                    <Td>Unsuccessful</Td>
                    <Td>28-05-2023</Td>
                    <Td isNumeric>0.000102000BTC</Td>
                    <Td>12:24 am</Td>
                  </Tr>
                  <Tr>
                    <Td>BNB</Td>
                    <Td>Unsuccessful</Td>
                    <Td>28-05-2023</Td>
                    <Td isNumeric>0.000102000BTC</Td>
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
