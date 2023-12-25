import React, { useState } from "react";
import logo from "./assets/logo.png";
import logoWhite from "./assets/digi.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  Button,
  useColorModeValue,
  Image,
  useColorMode,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import mail from "./assets/mail.png";

const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { email } = state || "";

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      maxWidth="4xl"
      p="20px"
      minHeight="100vh"
      minWidth="100vw"
      bg={useColorModeValue("#F4F5F8", "#050223")}
      color={useColorModeValue("gray.900", "white")}
      overflowX={"hidden"}
      direction={"column"}
      gap={10}
    >
      <Box alignSelf={"start"}>
        <Image
          src={colorMode === "light" ? `${logo}` : `${logoWhite}`}
          width={["150px", "200px"]}
        />
      </Box>
      <Flex
        justifyContent={"center"}
        direction={"column"}
        minH={"60vh"}
        py={10}
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Heading>Email Confirmation</Heading>

          <Box backgroundColor={"red"}>
            <Image src={mail} alt="Mail" />
          </Box>
          <Box>
            <Text
              minW={"30vw"}
              w={["85vw", "85vw", "40vw"]}
              textAlign={"center"}
            >
              If the email<span style={{ color: "#31CD31" }}> {email}</span>{" "}
              exists, we've sent a verification email. Please check your inbox
              and click the link to complete the verification.
            </Text>
          </Box> 
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Verify;
