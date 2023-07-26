import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Icon,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import PasswordCard from "./PasswordSetting";
import UserProfileEdit from "./ProfileSetting";

export default function PasswordAccordion() {
  return (
    <Accordion allowToggle>
      <AccordionItem align={"flex-start"}>
        <AccordionButton
          justifyContent={{ base: "space-between", md: "flex-start" }}
          _expanded={{ bg: "white", color: "#1808A3" }}
          height="70px"
          border={"1px solid"}
          borderColor={useColorModeValue("white", "gray.900")}
          borderRadius={"lg"}
          bg={useColorModeValue("white", "gray.900")}
          _hover={{
            bg: "#E8E6F6",
            color: "#1808A3",
          }}
          fontSize={"lg"}
        >
          <Box as="span" flex="1" textAlign="left" p={1}>
            <Icon mx={3} as={FaUser} fontSize="2xl" />
            <strong>Profile settings</strong>
          </Box>
          <AccordionIcon fontSize={"3xl"} />
        </AccordionButton>
        <AccordionPanel mt={2}>
          <UserProfileEdit />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem mt={3} mb={3} align={"flex-start"}>
        <AccordionButton
          justifyContent={{ base: "space-between", md: "flex-start" }}
          _expanded={{ bg: "white", color: "#1808A3" }}
          height="70px"
          // width="69vw"
          border={"1px solid"}
          borderColor={useColorModeValue("white", "gray.900")}
          borderRadius={"lg"}
          bg={useColorModeValue("white", "gray.900")}
          _hover={{
            bg: "#E8E6F6",
            color: "#1808A3",
          }}
          fontSize={"lg"}
        >
          <Box as="span" flex="1" textAlign="left" p={1}>
            <Icon mx={3} as={IoMdLock} fontSize="2xl" />
            <strong>Password settings</strong>
          </Box>
          <AccordionIcon fontSize={"3xl"} />
        </AccordionButton>
        <AccordionPanel mt={2}>
          <PasswordCard />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
