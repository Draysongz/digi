import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  InputRightElement,
  HStack,
  InputGroup,
  Input,
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
  const [isFormValid, setIsFormValid] = useState(false);

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
  
      // Step 2: Validate the form
      if (transactionHash || isUploadComplete) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }, [downloadURL, transactionHash, isUploadComplete]);
 
 
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
            <Box>
              <Heading size={"md"} color={useColorModeValue("#1808A3", "white")}>
                Upload payment proof
              </Heading>
              <Text>Kindly upload payment proof to recieve cash</Text>
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
                    type="text"
                    placeholder="Kindly Paste crypto transaction hash"
                    borderRadius="10px"
                    value={transactionHash}
                    color={'black'}
                    onChange={(e)=>setTransactionHash(e.target.value)}
                  />
                </InputGroup>
              </HStack>
              <Text my={5}>OR</Text>{" "}
              <Text color={"gray.500"}>Upload transanction screenshot</Text>
              <FileUpload onUploadComplete={handleUploadComplete} />
              <Button
                onClick={() => {
                  if (isFormValid) {
                  navigate("/sellfinalcheckout", {
                    state: {
                      coinUnit,
                      cryptoSymbol,
                      amount,
                      downloadURL,
                      transactionHash,
                    },
                  });
                } else {
                  toast.error("Please provide transaction hash or upload a file.");
                }
              }}
                width={"240px"}
                disabled={!isFormValid}
                color="#fff"
                bg= {useColorModeValue("#1808A3", "#0B0449")}
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
