import {
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
      >
        <SideBarFunc />
        <Stack>
          {" "}
          <Flex justifyContent="space-between">
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
          <TableContainer size={"2xl"}>
            <Table>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead bg="black" border={"black"} borderRadius={"2"}>
                <Tr color={"white"}>
                  <Th>Item</Th>
                  <Th>Status</Th>
                  <Th>Date</Th>
                  <Th isNumeric>Amount</Th>
                  <Th>Time</Th>
                </Tr>
              </Thead>
              <Tbody>
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
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Stack>
      </Flex>
    </>
  );
}
