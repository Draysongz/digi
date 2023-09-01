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
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { NotifIcon } from "../NotifBadge";
import bitcoin from "./CryptoAssets/SellSVG/logos_bitcoin.svg";
import eth from "./CryptoAssets/SellSVG/ETH.svg";
import tether from "./CryptoAssets/SellSVG/Tether.svg";
import bsc from "./CryptoAssets/SellSVG/BSC.png";
import usdc from "./CryptoAssets/SellSVG/USDC.png";
import xrp from "./CryptoAssets/SellSVG/XRP.png";
import cardona from "./CryptoAssets/SellSVG/CARDONA.png";
import solana from "./CryptoAssets/SellSVG/Solana.png";
import tron from "./CryptoAssets/SellSVG/Tron.png";
import litecoin from "./CryptoAssets/SellSVG/Litecoin.png";
import polkadot from "./CryptoAssets/SellSVG/Polkadot.png";
import polygon from "./CryptoAssets/SellSVG/Polygon.png";
import shiba from "./CryptoAssets/SellSVG/Shiba.png";
import ava from "./CryptoAssets/SellSVG/Ava.svg";
import dai from "./CryptoAssets/SellSVG/Dai.svg";
import { SideBarFunc } from "../SideBarFunc";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../Goback";


export default function SellCrypto() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };



  const handleCardClick = (cryptoName, cryptoSymbol) => {
    // You can do any additional logic here if needed before navigating
    if(cryptoName === 'Binance Smartchain'){
      cryptoName = 'Binancecoin'
    }else if(cryptoName === 'Avalanche'){
      cryptoName= "avalanche-2"
    }else if(cryptoName === 'Polygon'){
      cryptoName='matic-network'
    }else if(cryptoName === 'USD Coin'){
      cryptoName = 'usd-coin'
    }else if(cryptoName === 'Shiba Inu'){
      cryptoName = 'shiba-inu'
    }
    navigate("/sellconverter", { state: { cryptoName, cryptoSymbol } });
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
        <Box alignItems="center" justifyContent="center" mt={10} mx={"10vw"}
           left={['0', '0', '0', "14%"]} position={[null, null, null, null, 'relative']}>
          <Stack>
            {" "}
            <BackButton />
            <Flex justifyContent="space-between" marginBottom={10}>
              <Box spacing={"5"}>
                {" "}
                <Heading size={"lg"}>Sell Cryptocurrency</Heading>
                <Text minW="14vw" fontFamily="Lato, sans-Serif" fontSize="18px">
                  Choose a cryptocurrency you would like to sell
                </Text>
                <br></br>
                <InputGroup
                  bgColor="#fff"
                  mb={4}
                  border="solid"
                  borderColor="gray.300"
                  borderRadius="10px"
                  mr={2}
                  w={"430px"}
                  minW="300px"
                >
                  <InputRightElement
                    pointerEvents="auto"
                    width={"50px"}
                    children={<FiSearch color="gray.900" />}
                    bg={"gray.200"}
                    borderRightRadius="lg"
                  />
                  <Input
                    type="text"
                    placeholder="Search Crypto"
                    borderRadius="8px"
                  />
                </InputGroup>
              </Box>

              <NotifIcon />
            </Flex>
            <Box mb={5}>
              <SimpleGrid spacing={4} columns={{ base: "2", md: "3", lg: "4" }}>
                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Bitcoin", "BTC")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={bitcoin}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"}>
                        <Heading size={"xs"}>Bitcoin</Heading>
                        <Text fontSize="xs">BTC</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Ethereum", "ETH")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={eth}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"}>
                        <Heading size={"xs"}>Ethereum</Heading>
                        <Text fontSize="xs">ETH</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  size={"md"}
                  onClick={() => handleCardClick("TETHER", "USDT")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={tether}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"}>
                        <Heading size={"xs"}>Tether</Heading>
                        <Text fontSize="xs">USDT</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Binance Smartchain", "BSC")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={bsc}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Binance Smartchain</Heading>
                        <Text fontSize="xs">BSC</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("USD Coin", "USDC")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={usdc}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>USD Coin</Heading>
                        <Text fontSize="xs">USDC</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Ripple", "XRP")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={xrp}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Ripple</Heading>
                        <Text fontSize="xs">XRP</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Cardano", "ADA")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={cardona}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Cardano</Heading>
                        <Text fontSize="xs">ADA</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Solana", "SOL")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={solana}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Solana</Heading>
                        <Text fontSize="xs">SOL</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Tron", "TRX")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={tron}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Tron</Heading>
                        <Text fontSize="xs">TRX</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Litecoin", "LTC")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={litecoin}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Litecoin</Heading>
                        <Text fontSize="xs">LTC</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Polkadot", "DOT")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={polkadot}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Polkadot</Heading>
                        <Text fontSize="xs">DOT</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Polygon", "MATIC")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={polygon}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Polygon</Heading>
                        <Text fontSize="xs">MATIC</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Shiba Inu", "SHIB")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={shiba}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Shiba Inu</Heading>
                        <Text fontSize="xs">SHIB</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("Avalanche", "AVAX")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={ava}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Avalanche</Heading>
                        <Text fontSize="xs">AVAX</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>

                <Card
                  as={"button"}
                  href="#"
                  _hover={{ bg: "gray.50", color: "gray.800" }}
                  onClick={() => handleCardClick("DAI", "DAI")}
                >
                  <CardHeader>
                    <HStack>
                      {" "}
                      <Image
                        borderRadius="full"
                        boxSize="28px"
                        src={dai}
                        alt="Dan Abramov"
                      />
                      <VStack align={"start"} alignContent="start">
                        <Heading size={"xs"}>Dai</Heading>
                        <Text fontSize="xs">Dai</Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                  <CardFooter></CardFooter>
                </Card>
              </SimpleGrid>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
