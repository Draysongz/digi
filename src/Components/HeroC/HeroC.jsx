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
    Circle
  } from "@chakra-ui/react";
  import secure from '../assets/secure.svg'
  import ease from '../assets/ease.svg'
  import swift from '../assets/swift.svg'
  import firstproto from '../assets/howProto.png'
  import map from '../assets/map image.png'
  import trade from '../assets/trade.png'


const HeroC = () => {
  return (
    <Container
    maxWidth="4xl"
    py="20px"
    minHeight="100vh"
    minWidth="98vw"
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
                         textAlign={['center', 'center', 'justify']}
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
                         textAlign={['center', 'center', 'justify']}
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
                         textAlign={['center', 'center', 'justify']}
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
                    <Flex p='20px' direction={'column'} gap={8} alignItems={['center', 'center', 'start']}>
                    <Text fontSize={['27px', '28px', '32px']} 
                    color={'#1808A3'} 
                    textAlign={'justify'}
                    fontFamily='Lato sans-serif'>100% Guaranteed & trusted</Text>
                    <Heading fontFamily='Lato sans-serif'
                    color={'#111111'}
                    fontSize={['25px', '32px', '52px']}
                    textAlign={['center', 'center',  'justify']}
                    mt={'-30px'}
                    fontWeight={'700'}>Trade your Cryptos,<br/> Giftcards,and Paypal<br/> Funds for cash instantly.</Heading>
                     <Text
                         fontFamily='Lato sans-serif'
                         fontSize={['19px', '20px', '24px']}
                         w={['75vw', '45vw', '30vw']}
                         textAlign={['center', 'center', 'justify']}
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
            <Flex direction={'column'}>
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

                         dfjdfg dfgkdgkdkdh dfgkjdgkdgkdfh <br/><br/><br/>
            
            </Flex>
        </Box>
    </Flex>
  </Container>
  )
}

export default HeroC