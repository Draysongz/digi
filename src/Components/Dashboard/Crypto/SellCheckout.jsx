import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Stack,
  Image,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  VStack,
  InputRightElement,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import copy from "copy-to-clipboard";

import { useState } from "react";
import NotificationModal from "../../../Admin/Notifications/NotificationModal";
import { NotifIcon } from "../NotifBadge";
import { SideBarFunc } from "../SideBarFunc";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../Goback";
import { CopyIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
export default function SellCheckout() {
  const navigate = useNavigate();

  // const Clipboard = () => {
  //   const [copyText, setCopyText] = useState("");
  //   const handleCopyText = (e) => {
  //     setCopyText(e.target.value);
  //   };
  //   const copyToClipboard = () => {
  //     copy(copyText);
  //     alert(`You have copied "${copyText}"`);
  //   };
  // };
  const location = useLocation();
  const { state } = location;
  const { coinUnit, cryptoSymbol, amount } = state;

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Flex
        h={["100vh", "100vh", "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="auto"
        bg={useColorModeValue("gray.50", "#050223")}
        color={useColorModeValue("gray.900", "white")}
      >
        <SideBarFunc />
        <Box
          alignItems="center"
          justifyContent="center"
          mt={10}
          mx={"10vw"}
          minW={"60vw"}
          left={['0', '0', '0', "14%"]} position={[null, null, null, null, 'relative']}
        >
          <Stack>
            {" "}
            <BackButton />
            <Flex justifyContent="space-between" marginBottom={10}>
              <Box spacing={"5"}>
                {" "}
                <Heading size={{ base: "md", md: "lg" }}>
                  Sell Cryptocurrency
                </Heading>
                <br></br>
              </Box>

              <NotificationModal/>
            </Flex>
            <Box spacing={5}>
              <Heading size={"md"} color= {useColorModeValue("#1808A3", "white")}>
                Checkout
              </Heading>
              <Text>Kindly make payment for {coinUnit}{cryptoSymbol} to the wallet address </Text>
              <Text>below to complete the transaction.</Text>
              <br></br>
              <Text color={"gray.500"}>Copy wallet address</Text>
              <HStack justifyContent={"space-between"} mb={5}>
                <InputGroup
                  // value={copyText}
                  // onChange={handleCopyText}
                  bgColor="#fff"
                  mb={4}
                  border="none"
                  borderColor="#fff"
                  borderRadius="10px"
                  mr={2}
                  width={"400px"}
                >
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
                    placeholder="#0.00"
                    borderRadius="10px"
                  />
                </InputGroup>
              </HStack>

              <Button
                mt={5}
                onClick={() => navigate("/sellproof", {state: {coinUnit, cryptoSymbol, amount}})}
                width={{ base: "20rem", md: "25rem" }}
                color="#fff"
                bg= {useColorModeValue("#1808A3", "#0B0449")}
                _hover={{
                  bg: "#3626c7",
                }}
                rounded={"2xl"}
              >
                Continue
              </Button>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
