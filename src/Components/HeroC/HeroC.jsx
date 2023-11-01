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
    useColorModeValue,
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
  import { Link } from 'react-router-dom';
  import linkedin from '../assets/linkedin.png'


const HeroC = () => {
  return (
    <Box
    maxWidth="4xl"
    minWidth={['97vw', '98vw', '98.8vw', "98.5vw"]}
    mt='0px'
    bg={useColorModeValue('', '#0B0449;')}
  >
    <Flex direction='column' >

        {/* Why div */}
        <Box minWidth='97vw'
        color={useColorModeValue('', 'white')}>
            <Flex direction='column' gap={10}>
                <Box>
            <Heading 
             p={6}
            textAlign='center' 
            fontFamily='Hellix-medium' 
            color={useColorModeValue('#080339', 'white')}>
                Why trade with DigiMart
                </Heading>
            <HStack alignSelf='center' justifyContent='center'>
            <Text color={useColorModeValue('#111111', 'white')} textAlign='center' fontFamily='Hellix-medium'>DigiMart Exchange; 1% </Text>
            <Text color={useColorModeValue('#111111', 'white')} textAlign='center' fontFamily='Hellix-medium' fontWeight='bolder'>BETTER!</Text>
            </HStack>
            </Box>
            
            <SimpleGrid p="10px" spacing={8} minChildWidth="250px" justifyItems='center' alignItems='center' >
                <Card minH='30vh' maxH={['50vh', '50vh', '50vh']} bg='#0E0562' >
                    <CardBody p='20px'>
                        <Flex direction='column' color='white' alignItems='center' gap={4}>
                            <Circle size='50px' bg='#fff'>
                                <Image src={secure} alt='security' width='50%'/>
                            </Circle>

                            <Heading fontSize='18px' fontFamily='Hellix-medium'>Secured Transactions</Heading>
                            <Text textAlign='center' fontWeight='200' fontSize='16px' fontFamily='Hellix-medium' >Digimart is a secure and reliable <br/>
                             exchange platform,
                                 that has users <br/> interest at heart... 
                                 No compromise on <br/> the safety of your assets, as they are <br/> protected with maximum security.</Text>
                        </Flex>
                    </CardBody>
                </Card>

                <Card minH='30vh' maxH={['50vh', '50vh', '50vh']}   bg='#0E0562' >
                    <CardBody p='20px'>
                        <Flex direction='column' color='white' alignItems='center' gap={4}>
                            <Circle size='50px' bg='#fff'>
                                <Image src={ease} alt='security' width='50%'/>
                            </Circle>

                            <Heading fontSize='18px' fontFamily='Hellix-medium'>Ease of use</Heading>
                            <Text textAlign='center' fontWeight='200' fontSize='16px' fontFamily='Hellix-medium' >Digimart's friendly interface and step- <br/> 
                              by-step guides on trading, makes it
                              <br/> easy for everyone including
                            <br/> beginners, to experience a hassle- <br/> free trading.</Text>
                        </Flex>
                    </CardBody>
                </Card>

                <Card minH='30vh' maxH={['50vh', '50vh', '50vh']}   bg='#0E0562' >
                    <CardBody p='20px'>
                        <Flex direction='column' color='white' alignItems='center' gap={4}>
                            <Circle size='50px' bg='#fff'>
                                <Image src={swift} alt='swift' width='50%'/>
                            </Circle>

                            <Heading fontSize='18px' fontFamily='Hellix-medium'>Secured Transactions</Heading>
                            <Text textAlign='center' fontWeight='200' fontSize='16px' fontFamily='Hellix-medium' >Digimart is a secure and reliable <br/> exchange platform,
                                 that has users <br/> interest at heart... 
                                 No compromise on <br/> the safety of your assets, as they are <br/> protected with maximum security.</Text>
                        </Flex>
                    </CardBody>
                </Card>
            
            </SimpleGrid>
            </Flex>
        </Box>

        {/* second div */}
        <Box bg={useColorModeValue("", "#080339")}>
            <Flex py={7} justifyContent={'space-between'}
            alignItems={'center'} 
            direction={['column', 'column','column', 'row']} gap={40} >
                {/* left div */}
                <Box px={10}>
                    <Text fontSize={['27px', '28px', '32px']} 
                    color={useColorModeValue('#1808A3', "white")} 
                    textAlign={'left'}
                    fontFamily='Hellix-medium'>How to trade on DigiMart</Text>

                    <Heading fontFamily='Hellix-medium'
                    color={useColorModeValue('#111111', 'white')}
                    fontSize={['28px', '32px', '40px']}
                    textAlign={'left'}
                    fontWeight={'700'}>Trade your Assets in 3 <br/> simple steps...</Heading>

                    {/* Steps */}
                    <Flex gap={10} mt='10px' direction={'column'}>
                    <Flex alignItems={'center'}  direction={['column', 'column','column', 'row']} gap={4}>
                        <Circle bg={'#1808A3'}
                         size='45px' 
                         color={'white'} 
                         fontFamily='Hellix-medium'
                         fontWeight={'extrabold'}
                         fontSize='20px' >1</Circle>
                         <Text
                         fontFamily='Hellix-medium'
                         fontSize={['19px', '20px', '24px']}
                         textAlign={['center', 'center', 'left']}
                         lineHeight={'95%'}>Create an Account, with the required<br />information to get started</Text>
                    </Flex>

                    <Flex alignItems={'center'} direction={['column', 'column','column', 'row']} gap={4}>
                        <Circle bg={'#1808A3'}
                         size='45px' 
                         color={'white'} 
                         fontWeight={'extrabold'}
                         fontFamily='Hellix-medium'
                         fontSize='20px' >2</Circle>
                         <Text
                         fontFamily='Hellix-medium'
                         textAlign={['center', 'center', 'left']}
                         fontSize={['19px', '20px', '24px']}
                         lineHeight={'95%'}>Select the asset you whish to trade;<br/>Crypto, Giftcard, or Paypal funds.</Text>
                    </Flex>
                    <Flex alignItems={'center'} direction={['column', 'column','column', 'row']} gap={4}>
                        <Circle bg={'#1808A3'}
                         size='45px' 
                         color={'white'} 
                         fontWeight={'extrabold'}
                         fontFamily='Hellix-medium'
                         fontSize='20px' >3</Circle>
                         <Text
                         fontFamily='Hellix-medium'
                         fontSize={['19px', '20px', '24px']}
                         textAlign={['center', 'center', 'left']}
                         w={['70vw', '70vw','40vw', '34vw']}
                         lineHeight={'95%'}>After completing steps 1 & 2, kindly submit
                         your transaction and await confirmation...Upon transaction confirmation, you will be credited with your asset’s equivalent in fiat(₦), directly to your local bank account.</Text>
                    </Flex>
                    </Flex>
                </Box>

                {/* right div */}
                <Flex  justifyContent={'center'}>
                    <Image src={firstproto} alt='how to' width={['70%', '70%', '60%', '70%']} ml={'10px'} />
                </Flex>
            </Flex>
        </Box>

        {/* Third div */}
        <Box bg={useColorModeValue("", "#080339")}>
            <Flex direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
            justifyContent={'space-between'} px={10}>
                <Box alignSelf={['center']} p='20px' ml='40px'>
                    <Image src={trade} alt='trade' width={['90%', '90%', '80%', '70%']} />
                </Box>

                <Box alignItems={'center'} px={10} w={'fit-content'} maxW={'85vw'}>
                    <Flex direction={'column'} mt={'60px'}
                     gap={8} alignItems={['center', 'center', 'center', 'start']}>
                    <Text fontSize={['18px', '28px', '22px']} 
                    color={useColorModeValue('#1808A3', "white")} 
                    textAlign={['center', 'center', 'center', 'center']}
                    fontFamily='Hellix-medium'>100% Guaranteed & trusted</Text>
                    <Heading fontFamily='Hellix-medium'
                    color={useColorModeValue('#111111', "white")}
                    fontSize={['22px', '32px', '42px']}
                    textAlign={['center', 'center', 'center',  'left']}
                    mt={'-30px'}
                    fontWeight={'700'}>Trade your Cryptos,<br/> Giftcards,and Paypal<br/> Funds for cash instantly.</Heading>
                     <Text
                         fontFamily='Hellix-medium'
                         fontSize={['19px', '20px', '20px']}
                         w={['75vw', '45vw', '45vw', '30vw']}
                         textAlign={['center', 'center', 'center', 'justify']}
                         lineHeight={'95%'}>Trade your bitcoins and get paid to your bank account instantly. No stress</Text>
                    <Link to='/options'><Button
                    fontFamily='Hellix-medium'
                    bg={'#1808A3'}
                    color='#fff' 
                    w={['35vw', '35vw', '15vw']}
                    rounded={'3xl'}
                    _hover={{"bgColor": '#31CD31', "color" : '#000'}}
                    >
                        Trade Now
                    </Button></Link>
                    </Flex>
                </Box>
            </Flex>

        </Box>

        {/* fourth div */}
        <Box>
            <Flex direction={'column'} gap={5}>
            <Heading fontFamily='Hellix-medium'
                    color={'#111111'}
                    fontSize={['28px', '32px', '52px']}
                    textAlign={['center']}
                    fontWeight={'700'}>Our Services</Heading>
                     <Text
                         fontFamily='Hellix-medium'
                         fontSize={['19px', '20px', '24px']}
                         textAlign={['center']}
                         lineHeight={'95%'}>Trade your bitcoins and get paid to your<br/> bank account instantly. No stress</Text>
            <SimpleGrid p="10px" spacing={10}  minChildWidth="350px" justifyItems='center' alignItems='center' >
                <Card p='10px'  border={'1px solid #999)'}>
                    <CardBody minH={'30vh'} maxH='50vh' minW={'25vw'} w={['70vw', '60vw', '45vw', '25vw' ]} borderRadius={'12px'} border={'1px solid #999)'}>
                        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={8} p='5px'>
                            <Heading
                            fontFamily='Hellix-medium'
                            fontSize={['16px', '20px', '20px']}
                            fontWeight={'bold'}
                            >Trade your Crypto in minutes</Heading>
                            <Text
                             fontFamily='Hellix-medium'
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
                            fontFamily='Hellix-medium'
                            fontSize={['17px', '20px', '20px']}
                            fontWeight={'bold'}
                            >Sell Giftcards on DigiMart</Heading>
                            <Text
                             fontFamily='Hellix-medium'
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
                            fontFamily='Hellix-medium'
                            fontSize={['17px', '20px', '20px']}
                            fontWeight={'bold'}
                            >Sell Paypal funds  on DigiMart</Heading>
                            <Text
                             fontFamily='Hellix-medium'
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
                            fontFamily='Hellix-medium'
                            fontSize={['20px', '28px', '32px']}
                            fontWeight={'bold'}
                            w={['65vw', '65vw', '54vw', '32vw']}
                            textAlign={['center', 'center','center', 'left']}
                            >Create a <Text display={'inline'} color={'#1808A3'}>Free </Text>account today and start trading with us now!</Heading> 
                <Text
                             fontFamily='Hellix-medium'
                             fontSize={['16px', '18px', '20px']}
                             w={['75vw', '45vw', '45vw', '33vw']}
                             textAlign={['center', 'center', 'center']}>Why settle for less when you can have even MORE!, 
                             Sign up today, and enjoy the best of rates...</Text> 

                             <Link to='/options'><Button
                    fontFamily='Hellix-medium'
                    bg={'#1808A3'}
                    color='#fff' 
                    w={['35vw', '35vw', '12vw']}
                    rounded={'2xl'}
                    _hover={{"bgColor": '#31CD31', "color" : '#000'}}
                    >
                        Get Started
                    </Button></Link>
            </Flex>
        </Flex>

        {/* sixth div */}
        <Box p='20px'>
        <Heading fontFamily='Hellix-medium'
                    color={'#111111'}
                    fontSize={['19px', '32px', '52px']}
                    textAlign={['center', 'center', 'center', 'left']}
                    fontWeight={'700'}>Frequently Asked Questions (FAQ’s)</Heading>
            <Accordion  allowToggle display={'flex'} flexDir={'column'} gap={3} mt={'20px'}>
            <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'} >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Hellix-medium'>
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
                    <Heading fontFamily='Hellix-medium' fontWeight={'bold'}>
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
                    <Heading fontFamily='Hellix-medium' fontWeight={'bold'}>
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
                    <Heading fontFamily='Hellix-medium' fontWeight={'bold'}>
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
                    <Heading fontFamily='Hellix-medium' fontWeight={'bold'}>
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
                    <Heading fontFamily='Hellix-medium' fontWeight={'bold'}>
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
                    <Heading fontFamily='Hellix-medium' fontWeight={'bold'}>
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
                <Text color={'white'} fontFamily={'Hellix-medium'}>© 2023 DigiMart, All rights reserved</Text>
            </Flex>

              {/* second side */}
              <Flex direction={'column'} gap={5}>
                <Heading color={'#31CD31'} fontSize={'32px'} fontStyle={'normal'} fontFamily={'Hellix-medium'}>Products</Heading>
                <Text color={'white'}>Trade Crypto</Text>
                <Text color={'white'}>Buy Giftcards</Text>
                <Text color={'white'}>Buy Paypal Funds</Text>
              </Flex>

              {/* third side */}
              <Flex direction={'column'} gap={5}>
                <Heading color={'#31CD31'} fontSize={'32px'} fontStyle={'normal'} fontFamily={'Hellix-medium'}>About</Heading>
                <Text color={'white'}>About DigiMart</Text>
                <Text color={'white'}>Blog</Text>
                <Text color={'white'}>News</Text>
              </Flex>

              {/* fourth side */}
              <Flex direction={'column'} gap={5}>
                <Heading color={'#31CD31'} fontSize={'32px'} fontStyle={'normal'} fontFamily={'Hellix-medium'}>Help</Heading>
                <Text color={'white'}>Terms & conditions</Text>
                <Text color={'white'}>Privacy policy</Text>
              </Flex>

              {/* fifth side */}
              <Flex direction={'column'} gap={5}>
                <Heading color={'#31CD31'} fontSize={'32px'} fontStyle={'normal'} fontFamily={'Hellix-medium'}>Contact Us</Heading>
                <Text color={'white'}>Email address:<br/>Hellodigimart@gmail.com</Text>
                <Text color={'white'}>Phone:<br/>+2347042263619</Text>
                
              </Flex>
        </Flex>
    </Flex>
  </Box>
  )
}

export default HeroC;