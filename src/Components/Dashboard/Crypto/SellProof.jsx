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
  Center,
} from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import exclaim from "./CryptoAssets/exclainRed.svg";
import { useState } from "react";
import { NotifIcon } from "../NotifBadge";
import { SideBarFunc } from "../SideBarFunc";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../Goback";
import { CopyIcon } from "@chakra-ui/icons";
import FileUpload from "./FileUpload";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function SellProof() {
  const navigate = useNavigate();
  const [transactionHash, setTransactionHash] = useState("");
  const [downloadURL, setDownloadURL] = useState("");
  const location = useLocation();
  const { state } = location;
  const { coinUnit, cryptoSymbol, amount } = state;
  const [isUploadComplete, setIsUploadComplete] = useState(false);

  const goBack = () => {
    navigate(-1);
  };
 


  const handleUploadComplete = (url) => {
    setDownloadURL(url);
    setIsUploadComplete(true);
  };

  useEffect(() => {
    console.log("Updated downloadURL:", downloadURL);
    // Perform any actions using the updated downloadURL here, if needed
  }, [downloadURL]);
 
 
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
                <br></br>
              </Box>

              <NotifIcon />
            </Flex>
            <Box>
              <Heading size={"md"} color="#1808A3">
                Upload payment proof
              </Heading>
              <Text>Kindly upload payment proof to recieve crypto</Text>
              <Flex bg={"#FF372B"} p={1}>
                <Image src={exclaim} size="12px" mx={2} />
                <Text color={"#CC1616"} fontSize="12px">
                  Submitting transanction hash will make payments faster
                </Text>
              </Flex>
              <br></br>
              <HStack justifyContent={"space-between"}>
                <InputGroup
                  // value={copyText}
                  // onChange={handleCopyText}
                  bgColor="#fff"
                  mb={4}
                  border="none"
                  borderColor="#fff"
                  borderRadius="10px"
                  mr={2}
                  width={"40em"}
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
                    placeholder="Kindly Paste crypto transaction hash"
                    borderRadius="10px"
                    value={transactionHash}
                    onChange={(e)=>setTransactionHash(e.target.value)}
                  />
                </InputGroup>
              </HStack>
              <Text my={5}>OR</Text>{" "}
              <Text color={"gray.500"}>Upload transanction screenshot</Text>
              <FileUpload onUploadComplete={handleUploadComplete} />
              <Button
                onClick={() => navigate("/sellfinalcheckout", {state: {coinUnit, cryptoSymbol, amount, downloadURL, transactionHash}})}
                width={"240px"}
                color="#fff"
                bg="#1808A3"
                _hover={{
                  bg: "#3626c7",
                }}
                rounded={"2xl"}
              >
                Proceed
              </Button>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
