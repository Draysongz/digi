import React from "react";
import {
  Container,
  Flex,
  SimpleGrid,
  Card,
  CardBody,
  Box,
  Text,
  HStack,
  Spacer,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import bitcard from "../assets/bitcard.png";
import bitcoin from "../assets/bitcoin.png";
import notis from "../assets/notis.svg";
import payD from "../assets/payD.svg";
import paypl from "../assets/paypl.png";
import gift from "../assets/gift.png";
import giftcard from "../assets/giftcard.png";

const Dash = () => {
  return (
    <Container
      maxWidth="4xl"
      py="20px"
      bg="#F4F5F8"
      minHeight="100vh"
      minWidth="85vw"
    >
      <Flex p="20px" mt="20px" direction="column" gap={10}>
        {/* top div */}
        <Box border="2px solid" minW="80vw">
          <Flex>
            <Box>
              <Heading
                as="h3"
                fontSize={["28px", "40px"]}
                fontWeight="400"
                fontFamily="Lato, sans-Serif"
              >
                Hi Chidinma, Welcome
              </Heading>
            </Box>

<<<<<<< HEAD
      {/* top div */}
      <Box  minW='80vw'>
        <Flex>
          <Box>
          <Heading as='h3'  fontSize={['20px','28px', '40px']}  fontWeight='400' fontFamily='Lato, sans-Serif'>Hi Chidinma, Welcome</Heading>
          </Box>
=======
            <Spacer />
>>>>>>> 14ea17a6fde421ed568cfaf587a95be074e6fd8b

            <Box alignSelf="center">
              <Image src={notis} alt="notificationbell" />
            </Box>
          </Flex>
        </Box>

<<<<<<< HEAD
          <Box alignSelf='center' cursor='pointer'>
            <Image src={notis} alt='notificationbell' width={['6','10']} />
          </Box>
        </Flex>
      </Box>

                            {/* Services */}
=======
        <SimpleGrid p="10px" spacing={10} minChildWidth="250px">
          <Card h="28vh" maxW="sm" bgImage={bitcard}>
            <CardBody
              bgColor="#0E0562"
              opacity={0.8999999761581421}
              borderRadius="lg"
              color="white"
            >
              <Flex alignItems="center" direction="column" p="5px" gap={5}>
                <Image src={bitcoin} alt="bitcoin" width="20" />
                <Button
                  _hover={{
                    bgColor: "transparent",
                    color: "white",
                    border: "2px solid green",
                  }}
                  bgColor="#FFF"
                  fontFamily="Lato, sans-Serif"
                  fontWeight="bold"
                >
                  Trade Crypto
                </Button>
              </Flex>
            </CardBody>
          </Card>

          <Card h="28vh" maxW="sm" bgImage={paypl}>
            <CardBody
              bgColor="#A52323"
              opacity={0.8999999761581421}
              borderRadius="lg"
              color="white"
            >
              <Flex alignItems="center" direction="column" p="5px" gap={5}>
                <Image src={payD} alt="paypal" width="20" />
>>>>>>> 14ea17a6fde421ed568cfaf587a95be074e6fd8b

                <Button
                  _hover={{
                    bgColor: "transparent",
                    color: "white",
                    border: "2px solid green",
                  }}
                  bgColor="#FFF"
                  fontFamily="Lato, sans-Serif"
                  fontWeight="bold"
                >
                  Paypal
                </Button>
              </Flex>
            </CardBody>
          </Card>

          <Card h="28vh" maxW="sm" bgImage={gift} opacity={0.6999999761581421}>
            <CardBody
              bgColor="#165C16"
              opacity={0.8999999761581421}
              borderRadius="lg"
              color="white"
            >
              <Flex alignItems="center" direction="column" p="5px" gap={5}>
                <Image
                  src={giftcard}
                  alt="gift cards"
                  bgColor="white"
                  width="20"
                  borderRadius="8px"
                />

<<<<<<< HEAD

        <Card h='28vh' maxW='sm' bgImage={paypl} >
          <CardBody bgColor='#A52323' opacity={0.8999999761581421} borderRadius='lg' color='white'>
           <Flex alignItems='center' direction='column' p='5px' gap={5}>
            <Image src={payD} alt='paypal' width='20' />

            <Button 
              
              _hover={{bgColor: 'transparent', color: 'white', border: '2px solid green'}}
               bgColor='#FFF' 
            fontFamily='Lato, sans-Serif' 
            fontWeight='bold' minW='2.5rem' w='8rem'>Paypal</Button>
           </Flex>
          </CardBody>
        </Card>


        <Card h='28vh' maxW='sm' bgImage={gift} opacity={0.6999999761581421}>
          <CardBody bgColor='#165C16'opacity={0.8999999761581421}  borderRadius='lg' color='white'>
            <Flex alignItems='center' direction='column' p='5px' gap={5}>

              <Image src={giftcard} alt='gift cards' bgColor='white' width='20' borderRadius='8px'/>
              
            <Button 
               bgColor='#FFF' 
            fontFamily='Lato, sans-Serif' 
            fontWeight='bold' disabled={true} minW='2.5rem' w='8rem'>Gift Cards</Button>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>

                                      {/* Transaction records */}
        <Box gap={10} >
          <Heading as='h3' marginTop='-8px'  fontWeight='400' fontFamily='Lato, sans-Serif' fontSize={['20px','28px', '40px']}>Recent Transactions</Heading>
          <Flex marginTop='4px' p='10px' border='2px solid' borderRadius='8px'  minH='30vh' justifyContent='center' alignItems='center'>
          <Text textAlign='center' fontFamily='Lato, sans-Serif' fontSize={['16px', '22px', '28px']} color='#626262'>Your recent transactions will appear here</Text>
          </Flex>
        </Box>
    </Flex>
=======
                <Button
                  bgColor="#FFF"
                  fontFamily="Lato, sans-Serif"
                  fontWeight="bold"
                  disabled={true}
                >
                  Gift Cards
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Flex>
>>>>>>> 14ea17a6fde421ed568cfaf587a95be074e6fd8b
    </Container>
  );
};

export default Dash;
