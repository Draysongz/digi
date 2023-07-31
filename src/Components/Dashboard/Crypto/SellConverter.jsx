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
  color,
} from "@chakra-ui/react";
import { ChevronLeftIcon, RepeatIcon, UpDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { NotifIcon } from "../NotifBadge";
import { SideBarFunc } from "../SideBarFunc";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../Goback";

export default function SellConverter() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Flex
        h={["100vh", "100vh", "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="scroll"
        bg={useColorModeValue("gray.50", "gray.800")}
        color={useColorModeValue("gray.900", "white")}
      >
        <SideBarFunc />
        <Box
          alignItems="center"
          justifyContent="center"
          mt={10}
          mx={"10vw"}
          minW={"60vw"}
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
                <Text
                  minW="14vw"
                  fontFamily="Lato, sans-Serif"
                  fontSize={{ base: "12px", md: "18px" }}
                >
                  Choose a cryptocurrency you would like to sell
                </Text>
                <br></br>
              </Box>

              <NotifIcon />
            </Flex>
            <Box>
              <VStack align={"flex-start"} width="25em" spacing={5}>
                {" "}
                <Text color={"gray.500"}>Input amount below</Text>
                <HStack justifyContent={"flex-start"} mb={5}>
                  <InputGroup
                    bgColor="#fff"
                    border="Highlight"
                    borderColor="#fff"
                    borderRadius="10px"
                    mr={2}
                    width={{ base: "15rem", md: "25rem" }}
                    height={"60px"}
                  >
                    <InputRightElement
                      height={"60px"}
                      pointerEvents="none"
                      children={<FiSearch color="gray" />}
                      borderRightRadius="lg"
                    />
                    <Input
                      width={"25rem"}
                      height={"60px"}
                      type="number"
                      placeholder={"#0.00"}
                      borderRadius="10px"
                    />
                  </InputGroup>
                  <Icon as={RepeatIcon} size={"4xl"} />
                  <Button
                    height={"60px"}
                    width={{ base: "60px", md: "100px" }}
                    color="#fff"
                    bg="#1808A3"
                    _hover={{
                      bg: "#3626c7",
                    }}
                    rounded={"lg"}
                  >
                    $0.00
                  </Button>
                </HStack>
                <Icon
                  as={UpDownIcon}
                  size={"4xl"}
                  position={"relative"}
                  left={"10em"}
                />
                <InputGroup
                  marginTop={5}
                  bgColor="#fff"
                  mb={5}
                  border="none"
                  borderColor="#fff"
                  borderRadius="10px"
                  mr={2}
                  width={{ base: "15rem", md: "25rem" }}
                  height={"60px"}
                >
                  <Input
                    width={"25rem"}
                    height={"60px"}
                    type="number"
                    placeholder="BTC Units"
                    borderRadius="10px"
                  />
                </InputGroup>
                <Button
                  marginTop={5}
                  onClick={() => navigate("/sellcheckout")}
                  width={{ base: "15rem", md: "25rem" }}
                  height={"50px"}
                  color="#fff"
                  bg="#1808A3"
                  _hover={{
                    bg: "#3626c7",
                  }}
                  rounded={"2xl"}
                >
                  Continue
                </Button>
              </VStack>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
