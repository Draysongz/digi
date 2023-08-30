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
import { RepeatIcon, UpDownIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { NotifIcon } from "../../NotifBadge";
import { SideBarFunc } from "../../SideBarFunc";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../Goback";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function BuyConverter() {
  const navigate = useNavigate();
  const [coinUnit, setCoinUnit] = useState("");
  const [amount, setAmount] = useState(0);
  const [usdPrice, setUsdPrice] = useState(0);
  const [usdAmount, setUsdAmount] = useState(0);

  const [isAmountVisible, setIsAmountVisible] = useState(true);

  const toggleFields = () => {
    setIsAmountVisible((prevIsAmountVisible) => !prevIsAmountVisible);
    
   
  };
  const goBack = () => {
    navigate(-1);
  };
  const location = useLocation();
  const { state } = location;
  const { cryptoName, cryptoSymbol } = state;

  const fetchUsdPrice = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName.toLowerCase()}&vs_currencies=usd`
      );
      const { usd } = response.data[cryptoName.toLowerCase()];
      console.log(usd);
      setUsdPrice(usd);
    } catch (error) {
      console.error("Error fetching USD price:", error);
    }
  };
  const fetchUsdPricePeriodically = () => {
    setInterval(() => {
      fetchUsdPrice();
      console.log(usdPrice)
    }, 30000); 
  };

  // Fetch the USD price whenever the selected cryptocurrency changes
  useEffect(() => {
    fetchUsdPrice();
  }, [cryptoName]);

  useEffect(() => {
    fetchUsdPricePeriodically();
  }, []);

  const calculateUnit = () => {
    const rate = 860;
    const price = usdPrice;
    const amountInNaira = amount;
    const usdAmount = amountInNaira / rate;
    const unit = usdAmount / price;
    setCoinUnit(unit);
    setUsdAmount(usdAmount);
  };

  const calculateAmount=()=>{
    const rate = 860;
    const unit = parseFloat(coinUnit)
    const amountInNaira= unit * usdPrice * rate
    const usdAmount = amountInNaira / rate
    setUsdAmount(usdAmount)
    setAmount(amountInNaira)
  }

  useEffect(() => {
    // Trigger the calculation whenever amount state changes
    if (isAmountVisible) {
      calculateUnit();
    } else {
      calculateAmount();
    }
  }, [isAmountVisible ? amount : coinUnit]);

  useEffect(() => {
    calculateUnit(); // Trigger the calculation whenever amount state changes
  }, [amount]);

  const navigateToBuyCheckout = () => {
    // Validate the required field (amount) before proceeding
    if (amount <= 0) {
      toast.error('Please enter a valid amount.');
      return;
    }

    navigate("/buycheckout", {
      state: { coinUnit, cryptoSymbol, amount },
    })
  };

  const nairaPlaceholder ='₦0.00'
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
                  Buy Cryptocurrency
                </Heading>
                <Text
                  minW="14vw"
                  fontFamily="Lato, sans-Serif"
                  fontSize={{ base: "12px", md: "18px" }}
                >
                  Choose a cryptocurrency you would like to buy
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
                      children={<ArrowDownIcon color="gray" />}
                      borderRightRadius="lg"
                    />
                    <Input
                      width={"25rem"}
                      height={"60px"}
                      type="number"
                      borderRadius="10px"
                      placeholder={isAmountVisible ? nairaPlaceholder : `${cryptoSymbol} units`}
                    value={isAmountVisible ? amount : coinUnit}
                  onChange={(e) => {
                    if (isAmountVisible) {
                      setAmount(e.target.value);
                    } else {
                      setCoinUnit(e.target.value);
                    }
                  }}
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
                    {usdAmount ? `$${usdAmount.toFixed(2)}` : "$0.00"}
                  </Button>
                </HStack>
                <Icon
                  as={UpDownIcon}
                  size={"4xl"}
                  position={"relative"}
                  left={"10em"}
                  onClick={toggleFields}
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
                    borderRadius="10px"
                    placeholder={isAmountVisible ? `${cryptoSymbol} units` : nairaPlaceholder}
                    disabled // Fix the disabled attribute
                    value={isAmountVisible ? coinUnit : amount}
                    onChange={(e) => {
                      if (isAmountVisible) {
                        setCoinUnit(e.target.value);
                      } else {
                        setAmount(e.target.value);
                      }
                    }}
                  />
                </InputGroup>
                <Button
                  marginTop={5}
                  onClick={navigateToBuyCheckout}
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
