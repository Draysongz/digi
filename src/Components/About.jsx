import React from 'react'
import {
  Flex,
  Card,
  CardBody,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Image,
  Wrap,
  WrapItem,
  Avatar,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Input,
  VStack
} from "@chakra-ui/react";
import WithSubnavigation from './Navbar/WithSubnavigation';
import about from './assets/about.png'
import mission from './assets/mission.png'
import security from './assets/security.png'
import userF from './assets/userF.png'
import trading from './assets/trading.png'
import hearBg from './assets/hearBG.png'
import CarouselComponent  from './Carousel';
import { MobileCarousel } from './Carousel';
import Ceo from './assets/ceo.png'
import newLogo from './assets/newlogo.png'
import twitter from './assets/twitter.png'
import fb from './assets/fb.png'
import { Link } from 'react-router-dom';
import linkedin from './assets/linkedin.png'
import star from './assets/star.png'
import ellipse from './assets/ellipse.png'
import footer from './assets/footer.png'

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

const About = () => {

    const images = [
       " ./assets/hearBG.png",
       " ./assets/hearBG.png",
       " ./assets/hearBG.png",

      ];
  return (
    <Flex direction={'column'} gap={5}
    bg={useColorModeValue('', '#0B0449')}>
        <Flex direction={'column'}>
            <WithSubnavigation />
        </Flex>

        {/* desktop content*/}
        <Flex direction={'column'} display={['none', 'none', 'flex', 'flex']} >
            <Flex direction={'column'} gap={10} bgRepeat={'no-repeat'} backgroundImage={about}
             backgroundPosition={'center'} alignItems={'center'}  minH={'100vh'} >
               <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}  minH={'70vh'} >
                <Flex direction={'column'} w={'23vw'}  >
                <Heading p={4} textAlign={'center'}>About DigiMart</Heading>
                <Flex alignSelf={'flex-end'} justifyContent={'end'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="138" height="23" viewBox="0 0 138 23" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M135.139 22.3561C65.3532 -10.9506 17.988 8.66161 3.34855 22.0281C2.53284 22.7729 1.26782 22.7154 0.523042 21.8997C-0.221735 21.084 -0.164234 19.8189 0.651474 19.0742C16.6786 4.44066 65.8468 -15.1472 136.861 18.7462C137.858 19.2219 138.281 20.4157 137.805 21.4126C137.329 22.4094 136.135 22.8319 135.139 22.3561Z" fill="#31CD31"/>
</svg>
                </Flex>
               
                </Flex> 
                
                <Text w={'48vw'} textAlign={'center'}>DigiMart is a cryptocurrency exchange platform that provides a secure and user-friendly experience for  EVERYONE, including first time traders. We offer a diverse range of trading options, including cryptocurrencies, gift cards, and PayPal funds. Our platform is designed to be intuitive and easy to use, so you can focus on trading and achieving your financial goals.

</Text>
               </Flex>
            </Flex>

            <Flex p={20} backgroundColor={useColorModeValue('#F7F7FA', '#080339')} justifyContent={'space-between'} alignItems={'center'}>
                <Flex direction={'column'}>
                    <Heading>Our mission</Heading>
                    <Text w={'35vw'}>Digimart is a cryptocurrency exchange platform that provides a secure and user-friendly experience for both seasoned traders and newcomers. We offer a diverse range of trading options, including cryptocurrencies, gift cards, and PayPal funds. Our platform is designed to be intuitive and easy to use, so you can focus on trading and achieving your financial goals.

</Text>
                </Flex>

                <Box borderRadius={'md'}>
                    <Image src={mission} alt='mission' borderRadius={'2xl'} />
                </Box>
            </Flex>

            <Flex p={20} backgroundColor={useColorModeValue('#F7F7FA', '#080339')}  justifyContent={'space-between'} alignItems={'center'}>      
            <Box borderRadius={'md'}>
                    <Image src={mission} alt='mission' borderRadius={'2xl'} />
                </Box>

                <Flex direction={'column'}>
                    <Heading>Our vision</Heading>
                    <Text w={'35vw'}>Digimart is a cryptocurrency exchange platform that provides a secure and user-friendly experience for both seasoned traders and newcomers. We offer a diverse range of trading options, including cryptocurrencies, gift cards, and PayPal funds. Our platform is designed to be intuitive and easy to use, so you can focus on trading and achieving your financial goals.

</Text>
                </Flex>

            </Flex>

            <Flex p={10} justifyContent={'center'} direction={'column'} gap={10}>
                <Heading textAlign={'center'}>What Sets Us Apart?</Heading>
                <Flex p={10} justifyContent={'space-between'} >
                    <Card  color={useColorModeValue('', 'black')} bg={'#E8E6F6'} minH={'55vh'} w={'22vw'}>
                        <CardBody>
                            <Flex  py={8} gap={6} direction={'column'}>
                                <Image src={security} alt='security' width={'20%'} />
                                <Heading as={'h3'} fontSize={'xl'}>Trust and security</Heading>
                                <Text>We have implemented rigorous security measures to ensure that your funds and personal information remain safe at all times.
</Text>

                            </Flex>
                        </CardBody>
                    </Card>

                    <Card color={useColorModeValue('', 'black')} bg={'#EAFAEA'} minH={'55vh'} w={'22vw'}>
                        <CardBody>
                        <Flex  py={8} gap={6} direction={'column'}>
                                <Image src={userF} alt='security' width={'20%'} />
                                <Heading as={'h3'} fontSize={'xl'}>User-focused approach</Heading>
                                <Text>Our intuitive interface is designed to simplify the trading process, making it accessible to everyone, regardless of their level of experience.
</Text>

                                </Flex>
                        </CardBody>
                    </Card>

                    <Card color={useColorModeValue('', 'black')} bg={'#E8E6F6'} minH={'55vh'} w={'22vw'}>
                        <CardBody>
                        <Flex  py={8} gap={6} direction={'column'}>
                                <Image src={trading} alt='security' width={'20%'} />
                                <Heading as={'h3'} fontSize={'xl'}>Extensive trading options</Heading>
                                <Text>Digimart is more than just a crypto exchange. We offer a diverse range of trading options, including the ability to buy or sell gift cards and PayPal funds.
</Text>
                                </Flex>

                        </CardBody>
                    </Card>
                </Flex>
            </Flex>

            <Flex  direction={'column'} justifyContent={'center'} gap={10}>
            <Heading textAlign={'center'}> Hear From The Team</Heading>

            <Box p={10} bgImage={hearBg} backgroundRepeat={'no-repeat'} minH={'80vh'}>
            <CarouselComponent  images={images} />
            </Box>
            </Flex>

            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} p={10} gap={10}>
                <Heading>Meet the CEO</Heading>
                <Wrap>
                    <WrapItem>
                        <Avatar bg={'#1808A3'} src={Ceo} size={'2xl'} height={'55vh'} width={'25vw'}  name={'Eberechukwu Sorochukwu'} />
                    </WrapItem>
                </Wrap>
                <Heading mt={'-2%'}>Eberechukwu Sorochukwu Daniel</Heading>
                <Text mt={'-2%'} fontSize={'xl'} fontWeight={'400'}>CEO DigiMart</Text>
                <Box>
                    <Text textAlign={'center'} w={'45vw'}>Meet Eberechukwu Sorochukwu Daniel, a visionary entrepreneur who has carved a remarkable path in the world of startups. With a keen eye for emerging trends and a passion for innovation, he embarked on a groundbreaking journey to revolutionize the crypto landscape in Africa. In July 2023, his vision took 
                        shape with the inception of DigiMart - a crypto startup that is poised to transform the way 
                        Africa trades and invests in cryptocurrencies.</Text>
                </Box>
              
            </Flex>


            <Flex id='footer' bg={'#0E0562'} direction={['column-reverse', 'column', 'column', 'row']} minH={'60vh'} p='20px'  ml='-20px' w={['100vw', '95vw', '100vw', '100vw']}  justifyContent={'space-around'}>
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

        <Flex direction={'column'} display={['flex', 'flex', 'none', 'none']}>
            <Flex direction={'column'} p={3}>
                <Flex justifyContent={'space-between'} p={10}>
                    <Image src={star} alt='star' />
                    <Image src={ellipse} alt='ellipse' w={'10%'} />
                </Flex>

                <Flex direction={'column'}>
                <Heading p={4} textAlign={'center'}>About DigiMart</Heading>
                <Flex alignSelf={'flex-end'} justifyContent={'center'} w={'70vw'} mt={'-4%'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="23" viewBox="0 0 138 23" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M135.139 22.3561C65.3532 -10.9506 17.988 8.66161 3.34855 22.0281C2.53284 22.7729 1.26782 22.7154 0.523042 21.8997C-0.221735 21.084 -0.164234 19.8189 0.651474 19.0742C16.6786 4.44066 65.8468 -15.1472 136.861 18.7462C137.858 19.2219 138.281 20.4157 137.805 21.4126C137.329 22.4094 136.135 22.8319 135.139 22.3561Z" fill="#31CD31"/>
</svg>
                </Flex>
                <Text fontSize={'16px'} textAlign={'center'}>DigiMart is a cryptocurrency exchange platform that provides a secure and user-friendly experience for  
                    EVERYONE, including first time traders. We offer a diverse range of trading options, including cryptocurrencies, gift cards, and PayPal funds. Our platform is designed to be intuitive and easy to use, so you can focus on trading and achieving your financial goals.
</Text>
               
                </Flex> 
            </Flex>


            <Flex direction={'column'}>
                <Flex p={3} direction={'column'} alignItems={'center'} backgroundColor={useColorModeValue('#F7F7FA', '#080339')} gap={5} justifyContent={'center'}>
                    <Heading>Our Mission</Heading>
                    <Text textAlign={'center'}>Digimart is a cryptocurrency exchange platform that provides a secure and user-friendly experience for both seasoned 
                        traders and newcomers. We offer a diverse range of trading options, including cryptocurrencies, 
                        gift cards, and PayPal funds. Our platform is designed to be intuitive and easy to use, so you can 
                        focus on trading and achieving your financial goals.
</Text>
                </Flex>
                
                <Box>
                    <Image src={mission} alt='mission'/>
                </Box>
            </Flex>

            <Flex direction={'column'}>
                <Flex p={3} direction={'column'} alignItems={'center'} backgroundColor={useColorModeValue('#F7F7FA', '#080339')}  gap={5} justifyContent={'center'}>
                    <Heading>Our Vision</Heading>
                    <Text textAlign={'center'}>Digimart is a cryptocurrency exchange platform that provides a secure and user-friendly experience for both seasoned 
                        traders and newcomers. We offer a diverse range of trading options, including cryptocurrencies, 
                        gift cards, and PayPal funds. Our platform is designed to be intuitive and easy to use, so you can 
                        focus on trading and achieving your financial goals.
</Text>
                </Flex>
                
                <Box>
                    <Image src={mission} alt='mission'/>
                </Box>
            </Flex>

            <Flex direction={'column'} p={3} gap={10} justifyContent={'center'}>
                <Heading textAlign={'center'}>What Sets Us Apart?</Heading>
                <Flex p={6} direction={'column'} gap={10}>
                    <Card bg={'#E8E6F6'} color={useColorModeValue('', 'black')} h={'50vh'} w={'80vw'}>
                        <CardBody>
                        <Flex  py={8} gap={6} direction={'column'} justifyContent={'center'} alignItems={'center'}> 
                                <Image src={security} alt='security' width={'20%'} />
                                <Heading as={'h3'} fontSize={'xl'}>Trust and security</Heading>
                                <Text textAlign={'center'}>We have implemented rigorous security measures to ensure that your funds and personal information remain safe at all times.
</Text>

                            </Flex>
                        </CardBody>
                    </Card>

                    <Card bg={'#EAFAEA'} color={useColorModeValue('', 'black')} h={'50vh'} w={'80vw'}>
                        <CardBody>
                        <Flex  py={8} gap={6} direction={'column'} justifyContent={'center'} alignItems={'center'}> 
                                <Image src={userF} alt='security' width={'20%'} />
                                <Heading as={'h3'} fontSize={'xl'}>User-focused approach</Heading>
                                <Text textAlign={'center'}>Our intuitive interface is designed to simplify the trading process, 
                                making it accessible to everyone, regardless of their level of experience.</Text>

                            </Flex>
                        </CardBody>
                    </Card>

                    <Card bg={'#E8E6F6'} color={useColorModeValue('', 'black')} h={'50vh'} w={'80vw'}>
                        <CardBody>
                        <Flex  py={8} gap={6} direction={'column'} justifyContent={'center'} alignItems={'center'}> 
                                <Image src={trading} alt='trading' width={'20%'} />
                                <Heading as={'h3'} fontSize={'xl'}>Extensive trading options</Heading>
                                <Text textAlign={'center'}>Digimart is more than just a crypto exchange. We offer a diverse range of trading options, including the ability to buy or sell gift cards and PayPal funds.
</Text>

                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>
            </Flex>

            <Flex  direction={'column'} justifyContent={'center'} gap={10}>
            <Heading textAlign={'center'}> Hear From The Team</Heading>
            <Box p={10} bgColor={'#0E0562'} backgroundRepeat={'no-repeat'}  minH={'50vh'}>
            <MobileCarousel  images={images} />
            </Box>
            </Flex>

            <Flex p={5} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={5}>
                <Heading textAlign={'center'}>Meet the CEO</Heading>
                <Wrap>
                    <WrapItem>
                        <Avatar bg={'#1808A3'} src={Ceo} size={'2xl'} name={'Eberechukwu Sorochukwu'} />
                    </WrapItem>
                </Wrap>
                <Heading fontSize={'lg'} mt={'-2%'}>Eberechukwu Sorochukwu Daniel</Heading>
                <Text mt={'-2%'} fontSize={'xl'} fontWeight={'400'}>CEO DigiMart</Text>
                <Box>
                    <Text textAlign={'center'}>Meet Eberechukwu Sorochukwu Daniel, a visionary entrepreneur who has carved a remarkable path in the world of startups. With a keen eye for emerging trends and a passion for innovation, he embarked on a groundbreaking journey to revolutionize the crypto landscape in Africa. In July 2023, his vision took 
                        shape with the inception of DigiMart - a crypto startup that is poised to transform the way 
                        Africa trades and invests in cryptocurrencies.</Text>
                </Box>
            </Flex>

            <Flex bgImage={footer} id='footer' bgRepeat={'no-repeat'} minH={'60vh'} color={'white'} direction={'column'}>
                <Box p={5} >
                <Accordion allowToggle>
  <AccordionItem border={'none'}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          About
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Flex direction={'column'} gap={5}>
        <Text><Link to='/about'>About DigiMart</Link></Text>
      <Text><Link to='/blog'>Blog</Link></Text>
      <Text><Link to='/news'>News</Link></Text>
        </Flex>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem border={'none'}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Help
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Flex direction={'column'} gap={5}>
        <Text><Link to='/t&c'>Terms & Conditions</Link></Text>
      <Text><Link to='/privacy'>Privacy Policy</Link></Text>
        </Flex>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem border={'none'}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Products
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Flex direction={'column'} gap={5}>
        <Text><Link to='/options'>Trade Crypto</Link></Text>
      <Text><Link to='/options'>Buy Giftcards</Link></Text>
      <Text><Link to='/options'>Buy Paypal Funds</Link></Text>
        </Flex>
     
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem border={'none'}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Contact Us
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Flex direction={'column'} gap={5}>
        <VStack>
            <Text>Email Address: </Text>
        <ButtonMailto label={'hellodigimart@gmail.com'} mailto ={ 'mailto:hellodigimart@gmail.com'} />
        </VStack>

        <VStack>
        <Text>Phone:</Text>
        <Text>+2347042263619</Text>
        </VStack>
      

        </Flex>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
                </Box>

                <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={5}>
                    <Box>
                        <Image src={newLogo} alt={'digimart'} />
                    </Box>
                    
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
            </Flex>
        </Flex>
        

    </Flex>
  )
}

export default About

