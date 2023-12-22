import React from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Image,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";
import WithSubnavigation from "./Navbar/WithSubnavigation";
import newLogo from './assets/newlogo.png'
import twitter from './assets/twitter.png'
import fb from './assets/fb.png'
import linkedin from './assets/linkedin.png'
import footer from './assets/footer.png'
import { Link } from 'react-router-dom';


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


const Terms = () => {
  return (
    <Flex direction={"column"} gap={5} bg={useColorModeValue("", "#0B0449")}>
      <Flex direction={"column"}>
        <WithSubnavigation />
      </Flex>

      <Flex p={10} direction={"column "} gap={5}>
        <Flex direction={"column"}>
          <Heading>Digimart Terms & Conditions</Heading>
          <Text fontSize={"md"}>Last revised: 16 June 2023</Text>
        </Flex>

        <Flex direction={"column"} gap={5}>
          <Text>
            By using Digimart's platform, you agree to the following terms and
            conditions:
          </Text>
          <Text>
            <strong>Account Registration: </strong>You must be of legal age and
            provide accurate and complete information during the registration
            process. You are responsible for maintaining the confidentiality of
            your account credentials and will be held liable for any activities
            that occur under your account.
          </Text>

          <Text>
            <strong>Prohibited Activities: </strong>You agree not to engage in
            any illegal, fraudulent, or unauthorized activities on our platform.
            This includes, but is not limited to, money laundering, hacking, or
            any action that violates applicable laws and regulations.
          </Text>

          <Text>
            <strong>Trading and Transactions: </strong>You acknowledge that
            trading cryptocurrencies involves financial risks. You are solely
            responsible for your trading decisions and agree that Digimart is
            not liable for any losses or damages incurred during your trading
            activities.
          </Text>

          <Text>
            <strong>Compliance with Laws: </strong>You agree to comply with all
            applicable laws, regulations, and tax obligations related to your
            use of our platform. You are solely responsible for determining your
            tax liabilities and reporting any applicable taxes. Platform
            Availability: We strive to provide uninterrupted access to our
            platform, but we do not guarantee its availability at all times. We
            reserve the right to suspend or terminate our services temporarily
            or permanently without prior notice.
          </Text>

          <Text>
            <strong>Intellectual Property: </strong>All content and materials on
            our platform, including but not limited to logos, trademarks, and
            texts, are the property of Digimart and are protected by
            intellectual property laws. You may not reproduce, modify, or
            distribute any copyrighted materials without our prior written
            consent.
          </Text>

          <Text>
            <strong>Limitation of Liability: </strong>: Digimart shall not be
            liable for any direct, indirect, incidental, consequential, or
            punitive damages arising from your use or inability to use our
            platform, including but not limited to loss of funds, data, or
            business opportunities.
          </Text>

          <Text>
            <strong>Age Restrictions: </strong> You must be at least 18 years
            old to use Digimart's platform.
          </Text>

          <Text>
            <strong>KYC Requirements: </strong>You may be required to provide
            additional information to verify your identity and confirm your
            eligibility to use our platform.
          </Text>

          <Text>
            <strong>Refund Policy: </strong>We offer no refund Policy for all
            successful purchases made on the platform
          </Text>

          <Text>
            <strong>Dispute Resolution: </strong> If you have any disputes with
            Digimart, you agree to first try to resolve them through our dispute
            resolution process. If the dispute cannot be resolved through our
            process, you agree to submit to binding arbitration.
          </Text>

          <Text>
            By using Digimart's platform, you agree to all of the terms and
            conditions listed above.
          </Text>

          <Text>Thank you for choosing Digimart!.</Text>
        </Flex>
      </Flex>

      <Flex id='footer' display={['none', 'none', 'flex', 'flex']} bg={'#0E0562'} direction={['column-reverse', 'column', 'column', 'row']} minH={'60vh'} p='20px'  ml='-20px' w={['100vw', '95vw', '98.7vw', '98.7vw']}  justifyContent={'space-around'}>
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

        <Flex bgImage={footer} display={['flex', 'flex', 'none', 'none']} id='footer' bgRepeat={'no-repeat'} minH={'60vh'} color={'white'} direction={'column'}>
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
  );
};

export default Terms;
