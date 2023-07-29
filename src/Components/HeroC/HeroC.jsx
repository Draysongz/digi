import React from 'react'
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
    Circle,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
  } from "@chakra-ui/react";
  import { AddIcon, MinusIcon } from '@chakra-ui/icons';
  import secure from '../assets/secure.svg'
  import ease from '../assets/ease.svg'
  import swift from '../assets/swift.svg'
  import firstproto from '../assets/howProto.png'
  import map from '../assets/map image.png'
  import trade from '../assets/trade.png'
  import giftbox from '../assets/giftbox.png'
  import cards from '../assets/cards.png'
  import funds from '../assets/funds.png'
  import img from '../assets/img.png'
  import newLogo from '../assets/newlogo.png'
  import twitter from '../assets/twitter.png'
  import fb from '../assets/fb.png'
  import linkedin from '../assets/linkedin.png'


const HeroC = () => {
  return (
    <Container
    maxWidth="4xl"
    minWidth={['97vw', '98vw', '98.8vw', "98.5vw"]}
    mt='-10px'
  >
    <Flex direction='column' gap={20}>

        {/* Why div */}
        <Box minWidth='95vw'>
            <Flex direction='column' gap={10}>
                <Box>
            <Heading 
            textAlign='center' 
            fontFamily='Lato sans-serif' 
            color='#080339'>
                Why trade with DigiMart
                </Heading>
            <HStack alignSelf='center' justifyContent='center'>
            <Text color='#111111' textAlign='center' fontFamily='Lato sans-serif'>DigiMart Exchange; 1% </Text>
            <Text color='#111111' textAlign='center' fontFamily='Lato sans-serif' fontWeight='bolder'>BETTER!</Text>
            </HStack>
            </Box>
            
            <SimpleGrid p="10px" spacing={8} minChildWidth="250px" justifyItems='center' alignItems='center' >
                <Card minH='30vh' bg='#0E0562' >
                    <CardBody p='20px'>
                        <Flex direction='column' color='white' alignItems='center' gap={4}>
                            <Circle size='50px' bg='#fff'>
                                <Image src={secure} alt='security' width='50%'/>
                            </Circle>

                            <Heading fontSize='18px' fontFamily='Lato sans-serif'>Secured Transactions</Heading>
                            <Text textAlign='center' fontWeight='200' fontSize='16px' fontFamily='Lato sans-serif' >Digimart is a secure and reliable <br/>
                             exchange platform,
                                 that has users <br/> interest at heart... 
                                 No compromise on <br/> the safety of your assets, as they are <br/> protected with maximum security.</Text>
                        </Flex>
                    </CardBody>
                </Card>

                <Card minH='30vh'  bg='#0E0562' >
                    <CardBody p='20px'>
                        <Flex direction='column' color='white' alignItems='center' gap={4}>
                            <Circle size='50px' bg='#fff'>
                                <Image src={ease} alt='security' width='50%'/>
                            </Circle>

                            <Heading fontSize='18px' fontFamily='Lato sans-serif'>Ease of use</Heading>
                            <Text textAlign='center' fontWeight='200' fontSize='16px' fontFamily='Lato sans-serif' >Digimart's friendly interface and step- <br/> 
                              by-step guides on trading, makes it
                              <br/> easy for everyone including
                            <br/> beginners, to experience a hassle- <br/> free trading.</Text>
                        </Flex>
                    </CardBody>
                </Card>

                <Card minH='30vh'  bg='#0E0562' >
                    <CardBody p='20px'>
                        <Flex direction='column' color='white' alignItems='center' gap={4}>
                            <Circle size='50px' bg='#fff'>
                                <Image src={swift} alt='swift' width='50%'/>
                            </Circle>

                            <Heading fontSize='18px' fontFamily='Lato sans-serif'>Secured Transactions</Heading>
                            <Text textAlign='center' fontWeight='200' fontSize='16px' fontFamily='Lato sans-serif' >Digimart is a secure and reliable <br/> exchange platform,
                                 that has users <br/> interest at heart... 
                                 No compromise on <br/> the safety of your assets, as they are <br/> protected with maximum security.</Text>
                        </Flex>
                    </CardBody>
                </Card>
            
            </SimpleGrid>
            </Flex>
        </Box>

        {/* second div */}
        <Box>
            <Flex justifyContent={'space-around'} direction={['column', 'column','column', 'row']} gap={40} >
                {/* left div */}
                <Box ml={['0px', '40px', '60px']}>
                    <Text fontSize={['27px', '28px', '32px']} 
                    color={'#1808A3'} 
                    textAlign={'center'}
                    fontFamily='Lato sans-serif'>How to trade on DigiMart</Text>

                    <Heading fontFamily='Lato sans-serif'
                    color={'#111111'}
                    fontSize={['28px', '32px', '52px']}
                    textAlign={'center'}
                    fontWeight={'700'}>Trade your Assets in 3 <br/> simple steps...</Heading>

                    {/* Steps */}
                    <Flex gap={10} mt='10px' direction={'column'}>
                    <Flex alignItems={'center'}  direction={['column', 'column','column', 'row']} gap={4}>
                        <Circle bg={'#1808A3'}
                         size='45px' 
                         color={'white'} 
                         fontFamily='Lato sans-serif'
                         fontWeight={'extrabold'}
                         fontSize='20px' >1</Circle>
                         <Text
                         fontFamily='Lato sans-serif'
                         fontSize={['19px', '20px', '24px']}
                         textAlign={['center', 'center', 'left']}
                         lineHeight={'95%'}>Create an Account, with the required<br />information to get started</Text>
                    </Flex>

                    <Flex alignItems={'center'} direction={['column', 'column','column', 'row']} gap={4}>
                        <Circle bg={'#1808A3'}
                         size='45px' 
                         color={'white'} 
                         fontWeight={'extrabold'}
                         fontFamily='Lato sans-serif'
                         fontSize='20px' >2</Circle>
                         <Text
                         fontFamily='Lato sans-serif'
                         textAlign={['center', 'center', 'left']}
                         fontSize={['19px', '20px', '24px']}
                         lineHeight={'95%'}>Select the asset you whish to trade;<br/>Crypto, Giftcard, or Paypal funds.</Text>
                    </Flex>
                    <Flex alignItems={'center'} direction={['column', 'column','column', 'row']} gap={4}>
                        <Circle bg={'#1808A3'}
                         size='45px' 
                         color={'white'} 
                         fontWeight={'extrabold'}
                         fontFamily='Lato sans-serif'
                         fontSize='20px' >3</Circle>
                         <Text
                         fontFamily='Lato sans-serif'
                         fontSize={['19px', '20px', '24px']}
                         textAlign={['center', 'center', 'left']}
                         w={['70vw', '70vw','40vw', '34vw']}
                         lineHeight={'95%'}>After completing steps 1 & 2, kindly submit
                         your transaction and await confirmation...Upon transaction confirmation, you will be credited with your asset’s equivalent in fiat(₦), directly to your local bank account.</Text>
                    </Flex>
                    </Flex>
                </Box>

                {/* right div */}
                <Flex pos={'relative'} bottom={'10'} justifyContent={'center'}>
                    <Image src={firstproto} alt='how to' width={['70%', '70%', '60%', '70%']} ml={'10px'} />
                </Flex>
            </Flex>
        </Box>

        {/* Third div */}
        <Box bgImage={map}>
            <Flex direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>
                <Box alignSelf={['center']} p='20px' ml='40px'>
                    <Image src={trade} alt='trade' width={['90%', '90%', '80%', '70%']} />
                </Box>

                <Box p='20px' mt='-40px'>
                    <Flex p='20px' direction={'column'} gap={8} alignItems={['center', 'center', 'center', 'start']}>
                    <Text fontSize={['22px', '28px', '32px']} 
                    color={'#1808A3'} 
                    textAlign={['center', 'center', 'center', 'center']}
                    fontFamily='Lato sans-serif'>100% Guaranteed & trusted</Text>
                    <Heading fontFamily='Lato sans-serif'
                    color={'#111111'}
                    fontSize={['28px', '32px', '52px']}
                    textAlign={['center', 'center', 'center',  'left']}
                    mt={'-30px'}
                    fontWeight={'700'}>Trade your Cryptos,<br/> Giftcards,and Paypal<br/> Funds for cash instantly.</Heading>
                     <Text
                         fontFamily='Lato sans-serif'
                         fontSize={['19px', '20px', '24px']}
                         w={['75vw', '45vw', '45vw', '30vw']}
                         textAlign={['center', 'center', 'center', 'justify']}
                         lineHeight={'95%'}>Trade your bitcoins and get paid to your bank account instantly. No stress</Text>
                    <Button
                    fontFamily='Lato sans-serif'
                    bg={'#1808A3'}
                    color='#fff' 
                    w={['35vw', '35vw', '15vw']}
                    rounded={'3xl'}
                    _hover={{"bgColor": '#31CD31', "color" : '#000'}}
                    >
                        Trade Now
                    </Button>
                    </Flex>
                </Box>
            </Flex>

        </Box>

        {/* fourth div */}
        <Box>
            <Flex direction={'column'} gap={5}>
            <Heading fontFamily='Lato sans-serif'
                    color={'#111111'}
                    fontSize={['28px', '32px', '52px']}
                    textAlign={['center']}
                    fontWeight={'700'}>Our Services</Heading>
                     <Text
                         fontFamily='Lato sans-serif'
                         fontSize={['19px', '20px', '24px']}
                         textAlign={['center']}
                         lineHeight={'95%'}>Trade your bitcoins and get paid to your<br/> bank account instantly. No stress</Text>
            <SimpleGrid p="10px" spacing={10}  minChildWidth="350px" justifyItems='center' alignItems='center' >
                <Card p='10px'  border={'1px solid #999)'}>
                    <CardBody minH={'30vh'} maxH='50vh' minW={'25vw'} w={['70vw', '60vw', '45vw', '25vw' ]} borderRadius={'12px'} border={'1px solid #999)'}>
                        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={8} p='5px'>
                            <Heading
                            fontFamily='Lato sans-serif'
                            fontSize={['16px', '20px', '20px']}
                            fontWeight={'bold'}
                            >Trade your Crypto in minutes</Heading>
                            <Text
                             fontFamily='Lato sans-serif'
                             textAlign={'center'}
                             fontSize={['14px', '16px', '16px']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Text>
                             <Image src={giftbox} alt='giftbox' width='80%' mt='-30px'/>
                        </Flex>
                    </CardBody>
                </Card>

                <Card p='10px'  border={'1px solid #999)'}>
                    <CardBody minH={'30vh'} minW={'25vw'} maxH='50vh' w={['70vw', '60vw', '45vw', '25vw' ]} borderRadius={'12px'} border={'1px solid #999)'}>
                        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={8}>
                            <Heading
                            fontFamily='Lato sans-serif'
                            fontSize={['17px', '20px', '20px']}
                            fontWeight={'bold'}
                            >Sell Giftcards on DigiMart</Heading>
                            <Text
                             fontFamily='Lato sans-serif'
                             textAlign={'center'}
                             fontSize={['14px', '16px', '16px']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Text>
                            
                             <Image src={cards} alt='giftbox' width={['75%', '75%', '80%']}/>
                             
                             
                        </Flex>
                    </CardBody>
                </Card>

                <Card p='10px'  border={'1px solid #999)'}>
                    <CardBody minH={'30vh'} maxH='50vh' minW={'25vw'} w={['70vw', '60vw', '45vw', '25vw' ]} borderRadius={'12px'} border={'1px solid #999)'}>
                        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={8}>
                            <Heading
                            fontFamily='Lato sans-serif'
                            fontSize={['17px', '20px', '20px']}
                            fontWeight={'bold'}
                            >Sell Paypal funds  on DigiMart</Heading>
                            <Text
                             fontFamily='Lato sans-serif'
                             textAlign={'center'}
                             fontSize={['14px', '16px', '16px']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Text>
                            
                             <Image src={funds} alt='giftbox' width='80%'/>
                             
                             
                        </Flex>
                    </CardBody>
                </Card>

            </SimpleGrid>
            </Flex>
        </Box> 

        {/* fifth div */}
        <Flex  justifyContent={'center'}>
            <Flex bgImage={img} minH={'65vh'} w={'85vw'} gap={8} direction={'column'} justifyContent={'center'} alignItems={'center'} borderRadius={'14px'}>
            <Heading
                            fontFamily='Lato sans-serif'
                            fontSize={['20px', '28px', '32px']}
                            fontWeight={'bold'}
                            w={['65vw', '65vw', '54vw', '32vw']}
                            textAlign={['center', 'center','center', 'left']}
                            >Create a <Text display={'inline'} color={'#1808A3'}>Free </Text>account today and start trading with us now!</Heading> 
                <Text
                             fontFamily='Lato sans-serif'
                             fontSize={['16px', '18px', '20px']}
                             w={['75vw', '45vw', '45vw', '33vw']}
                             textAlign={['center', 'center', 'center']}>Why settle for less when you can have even MORE!, 
                             Sign up today, and enjoy the best of rates...</Text> 

                             <Button
                    fontFamily='Lato sans-serif'
                    bg={'#1808A3'}
                    color='#fff' 
                    w={['35vw', '35vw', '12vw']}
                    rounded={'2xl'}
                    _hover={{"bgColor": '#31CD31', "color" : '#000'}}
                    >
                        Get Started
                    </Button>
            </Flex>
        </Flex>

        {/* sixth div */}
        <Box p='20px'>
        <Heading fontFamily='Lato sans-serif'
                    color={'#111111'}
                    fontSize={['19px', '32px', '52px']}
                    textAlign={['center', 'center', 'center', 'left']}
                    fontWeight={'700'}>Frequently Asked Questions (FAQ’s)</Heading>
            <Accordion  allowToggle display={'flex'} flexDir={'column'} gap={3} mt={'20px'}>
            <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'} >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif'>
                        <AccordionButton>
                        <Box as="span" flex='1'  fontSize={['18px', '18px', '20px', '24px']} textAlign='left'>
                            What is Digimart
                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    Digimart is a cryptocurrency exchange platform that allows users to buy and sell cryptocurrencies, gift cards, and PayPal funds with ease and security.
    </AccordionPanel>
                    </>
                )}
                </AccordionItem>
               
               
                <AccordionItem p={['1px', '5px', '7px']}border='1px solid'  borderRadius={'10px'}  >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif' fontWeight={'bold'}>
                        <AccordionButton>
                        <Box as="span" flex='1'  fontSize={['18px', '18px', '20px', '24px']}textAlign='left'>
                        Is my personal information safe on DigiMart?

                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    Digimart is a cryptocurrency exchange platform that allows users to buy and sell cryptocurrencies, gift cards, and PayPal funds with ease and security.

    </AccordionPanel>

    
                    </>
                )}
                </AccordionItem>

                <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'}  >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif' fontWeight={'bold'}>
                        <AccordionButton>
                        <Box as="span" flex='1' fontSize={['18px', '18px', '20px', '24px']} textAlign='left'>
                        Is my personal information safe on DigiMart?

                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    Digimart is a cryptocurrency exchange platform that allows users to buy and sell cryptocurrencies, gift cards, and PayPal funds with ease and security.

    </AccordionPanel>

    
                    </>
                )}
                </AccordionItem>

                <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'}  >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif' fontWeight={'bold'}>
                        <AccordionButton>
                        <Box as="span" flex='1'  fontSize={['18px', '18px', '20px', '24px']}textAlign='left'>
                        What cryptocurrencies can I trade on DigiMart?


                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    Digimart is a cryptocurrency exchange platform that allows users to buy and sell cryptocurrencies, gift cards, and PayPal funds with ease and security.

    </AccordionPanel>

    
                    </>
                )}
                </AccordionItem>

                
                <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'}  >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif' fontWeight={'bold'}>
                        <AccordionButton>
                        <Box as="span" flex='1' fontSize={['18px', '18px', '20px', '24px']} textAlign='left'>
                        How does the verification process work?
                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    Digimart is a cryptocurrency exchange platform that allows users to buy and sell cryptocurrencies, gift cards, and PayPal funds with ease and security.

    </AccordionPanel>

    
                    </>
                )}
                </AccordionItem>

                <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'}  >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif' fontWeight={'bold'}>
                        <AccordionButton>
                        <Box as="span" flex='1'  fontSize={['18px', '18px', '20px', '24px']} textAlign='left'>
                        Do I need to verify my identity to sell cryptocurrencies?



                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    Digimart is a cryptocurrency exchange platform that allows users to buy and sell cryptocurrencies, gift cards, and PayPal funds with ease and security.

    </AccordionPanel>

    
                    </>
                )}
                </AccordionItem>

                <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'}  >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif' fontWeight={'bold'}>
                        <AccordionButton>
                        <Box as="span" flex='1'  fontSize={['18px', '18px', '20px', '24px']} textAlign='left'>
                        How can i contact DigiMart's customer support?
                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    Digimart is a cryptocurrency exchange platform that allows users to buy and sell cryptocurrencies, gift cards, and PayPal funds with ease and security.

    </AccordionPanel>

    
                    </>
                )}
                </AccordionItem>
            </Accordion>
        </Box>


        <Flex bg={'#0E0562'} direction={['column-reverse', 'column', 'column', 'row']} minH={'60vh'} p='20px'  ml='-20px' w={['100vw', '95vw', '98.7vw', '98.7vw']}  justifyContent={'space-around'}>
            {/* first side */}
            <Flex direction={'column'} gap={5} alignItems={['center', 'center', 'center', 'flex-start']}>
                <Image src={newLogo} alt='digimart' width={['70%', '90%', '80%', '80%']} />
                <Flex justifyContent={['space-between', 'space-around', 'space-around','space-around' ] } minW={['30vw', '30vw', '10vw']} >
                    <Image src={linkedin} alt='linkedin'/>
                    <Image src={fb} alt='facebook'/>
                    <Image src={twitter}alt='twitter' />
                </Flex>
                <Text color={'white'} fontFamily={'Lato sans-serif'}>© 2023 DigiMart, All rights reserved</Text>
            </Flex>

              {/* second side */}
              <Flex direction={'column'} gap={5}>
                <Heading color={'#31CD31'} fontSize={'32px'} fontStyle={'normal'} fontFamily={'Lato sans-serif'}>Products</Heading>
                <Text color={'white'}>Trade Crypto</Text>
                <Text color={'white'}>Buy Giftcards</Text>
                <Text color={'white'}>Buy Paypal Funds</Text>
              </Flex>

              {/* third side */}
              <Flex direction={'column'} gap={5}>
                <Heading color={'#31CD31'} fontSize={'32px'} fontStyle={'normal'} fontFamily={'Lato sans-serif'}>About</Heading>
                <Text color={'white'}>About DigiMart</Text>
                <Text color={'white'}>Blog</Text>
                <Text color={'white'}>News</Text>
              </Flex>

              {/* fourth side */}
              <Flex direction={'column'} gap={5}>
                <Heading color={'#31CD31'} fontSize={'32px'} fontStyle={'normal'} fontFamily={'Lato sans-serif'}>Help</Heading>
                <Text color={'white'}>Terms & conditions</Text>
                <Text color={'white'}>Privacy policy</Text>
              </Flex>

              {/* fifth side */}
              <Flex direction={'column'} gap={5}>
                <Heading color={'#31CD31'} fontSize={'32px'} fontStyle={'normal'} fontFamily={'Lato sans-serif'}>Contact Us</Heading>
                <Text color={'white'}>Email address:<br/>Hellodigimart@gmail.com</Text>
                <Text color={'white'}>Phone:<br/>+2347042263619</Text>
                
              </Flex>
        </Flex>
    </Flex>
  </Container>
  )
}

export default HeroC