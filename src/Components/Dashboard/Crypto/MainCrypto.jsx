import React from "react";
import notis from "../../assets/notis.svg";
import {
  Container,
  Flex,
  SimpleGrid,
  Card,
  CardBody,
  Box,
  Text,
  Spacer,
  Heading,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import buyBg from "./CryptoAssets/buybg.png";
import coinBag from "./CryptoAssets/coinbag.png";
import coinWallet from "./CryptoAssets/image 106.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { NotifIcon } from "../NotifBadge";
import { useNavigate } from "react-router-dom";

const MainCrypto = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="4xl"
      py="20px"
      bg="#F4F5F8"
      minHeight="100vh"
      minWidth="85vw"
    >
      <Flex p="20px" mt="20px" direction="column" gap={10}>
        <Box minW="80vw">
          <Flex>
            <Box textAlign="justify">
              <Heading
                as="h3"
                fontfamily="Lato, sans-Serif"
                fontWeight="500"
                fontSize={["20px", "28px", "40px"]}
              >
                Trade cryptocurrency
              </Heading>
              <Text
                ml={["0px", "4px", "4px"]}
                minW="76vw"
                fontFamily="Lato sans-Serif"
                fontSize={["15px", "18px", "22px"]}
                fontWeight="200"
              >
                Select an option to buy and sell cryptocurrency
              </Text>
            </Box>

            <Spacer />

            <Box alignSelf={["start", "start", "start"]} cursor="pointer">
              <NotifIcon />
            </Box>
          </Flex>
        </Box>
        {/* Cards */}
        <SimpleGrid p="10px" spacing={5} minChildWidth="380px">
          <Card
            bgImage={buyBg}
            bgSize="contain"
            bgRepeat="no-repeat"
            maxW="lg"
            pos={"relative"}
            height={"250px"}
          >
            <CardBody
              border="1px solid rgba(0,0,0,0.1)"
              bgColor="#165C16"
              borderRadius="8px"
              opacity={0.89}
              color="white"
            >
              <HStack direction="column" spacing={2}>
                <Box minW="50%" marginRight={5}>
                  <Box mb={20}>
                    <Heading
                      minW="14vw"
                      fontSize="36px"
                      as="h3"
                      fontFamily="Lato, sans-Serif"
                      fontWeight="400"
                    >
                      Buy crypto
                    </Heading>
                    <Text
                      minW="14vw"
                      fontFamily="Lato, sans-Serif"
                      fontSize="14px"
                    >
                      Click to select crypto choice
                    </Text>
                  </Box>
                  <Box mt={20}>
                    <Button rightIcon={<ArrowForwardIcon />}>Buy</Button>
                  </Box>
                </Box>

                <Box>
                  {" "}
                  <Image
                    pos={"absolute"}
                    bottom={"0"}
                    right={"0"}
                    objectFit="contain"
                    src={coinBag}
                    alt="coinbag"
                  />
                </Box>
              </HStack>
            </CardBody>
          </Card>

          <Card
            bgImage={buyBg}
            bgSize="contain"
            bgRepeat="no-repeat"
            maxW="lg"
            pos={"relative"}
            height={"250px"}
          >
            <CardBody
              border="1px solid rgba(0,0,0,0.1)"
              bgColor="#CC1616"
              borderRadius="8px"
              opacity={0.89}
              color="white"
            >
              {" "}
              <HStack direction="column" spacing={2}>
                <Box minW="50%" marginRight={5}>
                  <Box mb={20}>
                    <Heading
                      minW="14vw"
                      fontSize="36px"
                      as="h3"
                      fontFamily="Lato, sans-Serif"
                      fontWeight="400"
                    >
                      Sell crypto
                    </Heading>
                    <Text
                      minW="14vw"
                      fontFamily="Lato, sans-Serif"
                      fontSize="14px"
                    >
                      Click to select crypto choice
                    </Text>
                  </Box>
                  <Box mt={20}>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      onClick={() => navigate("/sellcrypto")}
                    >
                      Sell
                    </Button>
                  </Box>
                </Box>

                <Box>
                  {" "}
                  <Image
                    pos={"absolute"}
                    bottom={"0"}
                    right={"0"}
                    objectFit="contain"
                    src={coinWallet}
                    alt="coinbag"
                  />
                </Box>
              </HStack>
            </CardBody>
          </Card>
        </SimpleGrid>{" "}
        {/* Transaction records */}
        <Box gap={10}>
          <Heading
            as="h3"
            marginTop="-8px"
            fontWeight="400"
            fontFamily="Lato, sans-Serif"
            fontSize={["20px", "28px", "40px"]}
          >
            Recent Transactions
          </Heading>
          <Flex
            marginTop="4px"
            p="10px"
            border="2px solid"
            borderRadius="8px"
            minH="30vh"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              textAlign="center"
              fontFamily="Lato, sans-Serif"
              fontSize={["16px", "22px", "28px"]}
              color="#626262"
            >
              Your recent transactions will appear here
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default MainCrypto;
