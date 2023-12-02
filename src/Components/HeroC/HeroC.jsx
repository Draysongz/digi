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

  const ButtonMailto = ({mailto, label})=>{
    return(
        <Link to='#'
         onClick={(e)=>{
            window.location.href = mailto;
            e.preventDefault()
         }} style={{
            color : '#31CD31',
            textDecoration: 'underline'
         }}>
            {label}
         </Link>
    )
  }

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
        color={useColorModeValue('', 'white')}
        bg={useColorModeValue("", "#080339")}>
            <Flex direction='column' gap={10}>
                <Box>
            <Heading 
             p={6}
            textAlign='center' 
            fontFamily='Hellix-medium' 
            color={useColorModeValue('#080339', 'white')}>
                Why trade with DigiMart
                </Heading>
            <HStack  data-aos='zoom-in' alignSelf='center' justifyContent='center'>
            <Text color={useColorModeValue('#111111', 'white')} textAlign='center' fontFamily='Hellix-medium'>DigiMart Exchange; 1% </Text>
            <Text color={useColorModeValue('#111111', 'white')} textAlign='center' fontFamily='Hellix-medium' fontWeight='bolder'>BETTER!</Text>
            </HStack>
            </Box>



            <SimpleGrid p="10px" spacing={8} minChildWidth="250px" justifyItems='center' alignItems='center' >
                <Card data-aos="fade-left" 
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"  minH='30vh' maxH={['50vh', '50vh', '50vh']} bg='#0E0562' >
                    <CardBody p='20px'>
                        <Flex direction='column' color='white' alignItems='center' gap={4}>
                            <Circle size='50px' bg='#fff'>
                                <Image src={secure} alt='security' width='50%'/>
                            </Circle>

                            <Heading fontSize='18px' fontFamily='Hellix-medium'>Secured Transactions</Heading>
                            <Text textAlign='center' fontWeight='200' fontSize='16px' fontFamily='Hellix-medium' >DigiMart is a secure and reliable <br/>
                             exchange platform,
                                 that has users <br/> interest at heart... 
                                 No compromise on <br/> the safety of your assets, as they are <br/> protected with maximum security.</Text>
                        </Flex>
                    </CardBody>
                </Card>

                <Card data-aos ="fade-up-right" data-aos-duration="500"
                data-aos-delay="300" minH='30vh' maxH={['50vh', '50vh', '50vh']}   bg='#0E0562' >
                    <CardBody p='20px'>
                        <Flex direction='column' color='white' alignItems='center' gap={4}>
                            <Circle size='50px' bg='#fff'>
                                <Image src={ease} alt='security' width='50%'/>
                            </Circle>

                            <Heading fontSize='18px' fontFamily='Hellix-medium'>Ease of use</Heading>
                            <Text textAlign='center' fontWeight='200' fontSize='16px' fontFamily='Hellix-medium' >DigiMart's friendly interface and step- <br/> 
                              by-step guides on trading, makes it
                              <br/> easy for everyone including
                            <br/> beginners, to experience a hassle- <br/> free trading.</Text>
                        </Flex>
                    </CardBody>
                </Card>

                <Card data-aos='fade-left' data-aos-duration="500" data-aos-delay="500" minH='30vh' maxH={['50vh', '50vh', '50vh']}   bg='#0E0562' >
                    <CardBody p='20px'>
                        <Flex direction='column' color='white' alignItems='center' gap={4}>
                            <Circle size='50px' bg='#fff'>
                                <Image src={swift} alt='swift' width='50%'/>
                            </Circle>

                            <Heading fontSize='18px' fontFamily='Hellix-medium'>Swift Transactions</Heading>
                            <Text minH={'20vh'} textAlign='center' fontWeight='200' fontSize='16px' fontFamily='Hellix-medium' >At DigiMart, we consider transaction <br/>
                            speed as one of our topmost <br/> 
                            priorities. Transactions get executed <br/>
                            in just few minutes</Text>
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
                    fontSize={['28px', '32px', '30px']}
                    textAlign={'left'}
                    fontWeight={'700'}>Trade your Assets in 3 <br/> simple steps...</Heading>

                    {/* Steps */}
                    <Flex gap={10} mt='10px' direction={'column'}>
                    <Flex data-aos='zoom-in' alignItems={'center'}  direction={['column', 'column','column', 'row']} gap={4}>
                        <Circle bg={'#1808A3'}
                         size='45px' 
                         color={'white'} 
                         fontFamily='Hellix-medium'
                         fontWeight={'extrabold'}
                         fontSize='20px' >1</Circle>
                         <Text
                         fontFamily='Hellix-medium'
                         fontSize={['19px', '20px', '22px']}
                         textAlign={['center', 'center', 'left']}
                         lineHeight={'95%'}>Create an Account, with the required<br />information to get started</Text>
                    </Flex>

                    <Flex data-aos= 'fade-down-left' alignItems={'center'} direction={['column', 'column','column', 'row']} gap={4}>
                        <Circle bg={'#1808A3'}
                         size='45px' 
                         color={'white'} 
                         fontWeight={'extrabold'}
                         fontFamily='Hellix-medium'
                         fontSize='20px' >2</Circle>
                         <Text
                         fontFamily='Hellix-medium'
                         textAlign={['center', 'center', 'left']}
                         fontSize={['19px', '20px', '22px']}
                         lineHeight={'95%'}>Select the asset you whish to trade;<br/>Crypto, Giftcard, or Paypal funds.</Text>
                    </Flex>
                    <Flex data-aos='fade-up-left' alignItems={'center'} direction={['column', 'column','column', 'row']} gap={4}>
                        <Circle bg={'#1808A3'}
                         size='45px' 
                         color={'white'} 
                         fontWeight={'extrabold'}
                         fontFamily='Hellix-medium'
                         fontSize='20px' >3</Circle>
                         <Text
                         fontFamily='Hellix-medium'
                         fontSize={['19px', '20px', '22px']}
                         textAlign={['center', 'center', 'left']}
                         w={['70vw', '70vw','40vw', '34vw']}
                         lineHeight={'95%'}>After completing steps 1 & 2, kindly submit
                         your transaction and await confirmation...Upon transaction confirmation, you will be credited with your asset’s equivalent in fiat(₦), directly to your local bank account.</Text>
                    </Flex>
                    </Flex>
                </Box>

                {/* right div */}
                <Flex data-aos='zoom-in' justifyContent={'center'}>
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
        <Box bg={useColorModeValue("", "#080339")}
        color={useColorModeValue("", "white")}>
            <Flex direction={'column'} gap={5}>
            <Heading fontFamily='Hellix-medium'
                    color={useColorModeValue('#111111', 'white')}
                    fontSize={['28px', '32px', '52px']}
                    textAlign={['center']}
                    fontWeight={'700'}>Our Services</Heading>
                     <Text
                         fontFamily='Hellix-medium'
                         fontSize={['19px', '20px', '24px']}
                         textAlign={['center']}
                         lineHeight={'95%'}>Trade your bitcoins and get paid to your<br/> bank account instantly. No stress</Text>
            <SimpleGrid p="10px" spacing={10}  minChildWidth="350px" justifyItems='center' alignItems='center' >
                <Card p='15px'  border={'1px solid #999)'} color={useColorModeValue('', 'white')}
        bg={useColorModeValue("", '#0E0562')}>
                    <CardBody minH={'30vh'} maxH='50vh' minW={'25vw'} w={['70vw', '60vw', '45vw', '25vw' ]} borderRadius={'12px'} border={'1px solid #999)'}>
                        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={6} p='5px'>
                            <Heading
                            fontFamily='Hellix-medium'
                            fontSize={['16px', '20px', '20px']}
                            fontWeight={'bold'}
                            >Trade your Crypto in minutes</Heading>
                            <Text
                             fontFamily='Hellix-medium'
                             textAlign={'center'}
                             fontSize={['14px', '16px', '15px']}>Need to sell or buy crypto fast? Look no further than DigiMart! with our user-friendly platform, you can get your crypto sold and bought in minutes. 
                             No hassle, no fuss, just quick and easy crypto trading. Try DigiMart today! </Text>
                             <Image src={giftbox} alt='giftbox' width='60%' mt='-30px'/>
                        </Flex>
                    </CardBody>
                </Card>

                <Card p='15px'  border={'1px solid #999)'} color={useColorModeValue('', 'white')}
        bg={useColorModeValue("", '#0E0562')}>
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
                             fontSize={['14px', '16px', '15px']}>Got giftcards you wish to sell? Trade them for cash on DigiMart and get your money ASAP. DigiMart is your go-to for hassle-free giftcard trading. Give it a try today</Text>
                            
                             <Image src={cards} alt='giftbox' width={['75%', '75%', '60%']}/>
                             
                             
                        </Flex>
                    </CardBody>
                </Card>

                <Card p='15px'  border={'1px solid #999)'} color={useColorModeValue('', 'white')}
        bg={useColorModeValue("", '#0E0562')}>
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
                             fontSize={['14px', '16px', '16px']}>
                               Quickly Sell/Exchange your PayPal funds for Naira here on DigiMart Exchange without stress...Ask for TAG!</Text>
                            
                             <Image src={funds} alt='giftbox' width='70%'/>
                             
                             
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
        <Box p='20px' id='faq'>
        <Heading fontFamily='Hellix-medium'
                    color={useColorModeValue('#111111', "white")}
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
                            What is DigiMart
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
                    DigiMart is a cryptocurrency exchange platform that allows users to buy and sell cryptocurrencies, gift cards, and PayPal funds with ease and security.
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
                        How can I create an account on DigiMart?

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
                    To create an account on DigiMart, simply visit our website and click on the "Sign Up" button. Follow the registration process by providing the required information, and you'll be ready to start trading.


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
                    Yes, we take the security and privacy of your personal information seriously. We employ advanced security measures and 
                    encryption protocols to protect your data from unauthorized access or breaches.


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
                    DigiMart supports a wide range of cryptocurrencies, including popular options such as Bitcoin (BTC), 
                    Ethereum (ETH), Ripple (XRP), and more. You can explore the available options on our platform.


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
                    For buying cryptocurrencies, we require identity verification using your National Identification Number (NIN) or Bank Verification Number (BVN). The process involves capturing the front and back of your NIN, 
                    confirming the image quality, and verifying your details.

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
                    No, identity verification is not required for selling cryptocurrencies on DigiMart. You can simply select the cryptocurrency 
                    you want to sell, input the quantity, and proceed with the selling process.

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
                        How long does it take for payments to be confirmed?
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
                    Payment confirmation times may vary depending on the payment method and network congestion. However, 
                    we strive to process and confirm payments as quickly as possible to ensure a smooth trading experience.

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
                        Can I withdraw fiat currency from my DigiMart account?
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
                    Yes, you can withdraw fiat currency from your DigiMart account. After selling cryptocurrencies, 
                    you will be prompted to input your bank details, and the fiat funds will be transferred to your provided account.

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
                    If you have any questions or need assistance, our customer support team is available to help. You can reach out to us through 
                    our contact page on the website or send an email to <ButtonMailto label={'hellodigimart@gmail.com'} 
                    mailto ={ 'mailto:hellodigimart@gmail.com'} />.

    </AccordionPanel>

    
                    </>
                )}
                </AccordionItem>
            </Accordion>
        </Box>


        <Flex id='footer' bg={'#0E0562'} direction={['column-reverse', 'column', 'column', 'row']} minH={'60vh'} p='20px'  ml='-20px' w={['100vw', '95vw', '98.7vw', '98.7vw']}  justifyContent={'space-around'}>
            {/* first side */}
            <Flex direction={'column'} gap={5} alignItems={['center', 'center', 'center', 'flex-start']}>
                <Image src={newLogo} alt='DigiMart' width={['70%', '90%', '80%', '80%']} />
                <Flex justifyContent={['space-between', 'space-around', 'space-around','space-around' ] } minW={['30vw', '30vw', '10vw']} >
                    <Image src={linkedin} alt='linkedin'/>
                    <Link to= 'https://www.facebook.com/profile.php?id=100070728897129&mibextid=ZbWKwL'
                     target="_blank" rel="noopener noreferrer">
                        <Image src={fb} alt='facebook'/>
                        </Link>
                    <Link to='https://twitter.com/DigiMartExchang'
                     target="_blank" rel="noopener noreferrer"><Image src={twitter}alt='twitter' /></Link>
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
                <Text color={'white'}>Email address:<br/> <ButtonMailto label={'hellodigimart@gmail.com'} 
                    mailto ={ 'mailto:hellodigimart@gmail.com'} /></Text>
                <Text color={'white'}>Phone:<br/>+2347042263619</Text>
                
              </Flex>
        </Flex>
    </Flex>
  </Box>
  )
}

export default HeroC;