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
import { ChevronLeftIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { NotifIcon } from "../../NotifBadge";
import { SideBarFunc } from "../../SideBarFunc";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../Goback";

export default function VerificationPage() {
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
        <Box alignItems="center" justifyContent="center" mt={10} mx={"10vw"}>
          <Stack>
            {" "}
            <BackButton />
            <Flex justifyContent="space-between" marginBottom={10}>
              <Box spacing={"5"}>
                {" "}
                <Heading size={"lg"}>Buy Cryptocurrency</Heading>
              </Box>

              <NotifIcon />
            </Flex>
            <Box mb={5} alignItems={"center"} justifyContent={"center"}>
              <VStack justifyContent={"center"} minW="60vw">
                <Heading size={"md"} textAlign="center" mb={"70px"}>
                  Enter your information as found on <br /> your government
                  issued ID
                </Heading>

                <Box>
                  <Button
                    mb={5}
                    justifyContent={"space-between"}
                    bg={"#fff"}
                    border={"solid"}
                    width={{ base: "20rem", md: "25rem" }}
                    height={"60px"}
                    rightIcon={<ArrowForwardIcon />}
                    onClick={() => navigate("/bvnpg")}
                  >
                    Bank Verification Number, (BVN)
                  </Button>
                  <br />
                  <Button
                    bg={"#fff"}
                    justifyContent={"space-between"}
                    border={"solid"}
                    width={{ base: "20rem", md: "25rem" }}
                    height={"60px"}
                    rightIcon={<ArrowForwardIcon />}
                    onClick={() => navigate("/ninpg")}
                  >
                    National Identification Number, (NIN)
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
