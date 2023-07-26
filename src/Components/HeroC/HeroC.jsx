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


const HeroC = () => {
  return (
    <Container
    maxWidth="4xl"
    py="20px"
    minHeight="100vh"
    minWidth="98vw"
    mt='-10px'
  >
    <Flex direction='column' gap={10}>

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
            
            <SimpleGrid p="10px" spacing={10} minChildWidth="250px" justifyItems='center' alignItems='center' >
                <Card minH='30vh' w='23vw' bg='#0E0562' >
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

                <Card minH='30vh' w='23vw' bg='#0E0562' >
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

                <Card minH='30vh' w='23vw' bg='#0E0562' >
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
            <Flex>
                {/* left div */}
                <Box>

                </Box>

                {/* right div */}
                <Box>
                    <Image src={firstproto} alt='how to' width='85' />
                </Box>
            </Flex>
        </Box>

    </Flex>
  </Container>
  )
}

export default HeroC