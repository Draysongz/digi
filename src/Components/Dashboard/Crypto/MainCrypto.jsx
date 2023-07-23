import React from 'react'
import notis from '../../assets/notis.svg'
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
  } from "@chakra-ui/react";
  import buyBg from './CryptoAssets/buybg.png'
  import coinBag from './CryptoAssets/coinbag.png'
  import { ArrowForwardIcon } from '@chakra-ui/icons';

const MainCrypto = () => {
  return (
    
        <Container
      maxWidth="4xl"
      py="20px"
      bg="#F4F5F8"
      minHeight="100vh"
      minWidth="85vw"
    >
        <Flex p="20px" mt="20px" direction="column" gap={10}> 
        <Box minW='80vw'>
        <Flex>
        <Box textAlign='justify' ml={{base: '-7px'}}>
        <Heading as='h3' fontfamily='Lato, sans-Serif' fontWeight='500' fontSize={['20px','28px', '40px']}>Trade cryptocurrency</Heading>
        <Text ml={['0px','4px' , '4px']} minW='76vw' fontFamily='Lato sans-Serif' fontSize={['15px', '18px', '22px']} fontWeight='200'>Select an option to buy and sell cryptocurrency</Text>
        </Box>

        <Spacer />

        <Box alignSelf={['start', 'start', 'start']} cursor='pointer'>
            <Image src={notis} alt='notificationbell' width={['6','10']} />
          </Box>
          </Flex>
          </Box>

          {/* Cards */}

          <SimpleGrid p="10px" spacing={10} minChildWidth="200px">
            <Card bgImage={buyBg} bgSize='contain' bgRepeat='no-repeat' maxW="sm">
              <CardBody border='1px solid rgba(0,0,0,0.1)' bgColor='#165C16' borderRadius='8px'  opacity={0.89} color="white">
                <Flex direction='column' gap={3}>
                  <Box  minW='50%'>
                      <Box>
                        <Heading minW='14vw' fontSize='36px'  as='h3' fontFamily='Lato, sans-Serif' fontWeight='400'>Buy crypto</Heading>
                        <Text minW='14vw' fontFamily='Lato, sans-Serif' fontSize='14px'>Click to select crypto choice</Text>
                      </Box>             
                  </Box>

                  <Box>
                    <Flex gap={20}>
                      <Button rightIcon={<ArrowForwardIcon/>}>Buy</Button>
                      <Image src={coinBag} alt='coinbag'  border='2px solid' />
                    </Flex>
                  </Box>


                </Flex>
              </CardBody>
            </Card>

            <Card>
              <CardBody>

              </CardBody>
            </Card>
          </SimpleGrid>
        </Flex>
    </Container>
    
  )
}

export default MainCrypto