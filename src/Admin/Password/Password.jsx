import React from 'react'
import {
    Container,
    Flex,
    Card,
    CardBody,
    Box,
    Text,
    Spacer,
    Heading,
    Button,
    Icon,
    Wrap,
    WrapItem,
    Avatar,
    InputGroup,
    Input,
    InputLeftElement,
    InputRightElement,
    useColorModeValue,
    AvatarBadge,
    FormLabel,
  } from "@chakra-ui/react";
  import {CiMail} from 'react-icons/ci'
  import {AiOutlineBell} from 'react-icons/ai'
 

const Password = () => {
  return (
    <Container
    maxWidth="4xl"
    // py="20px"
    minHeight="100vh"
    minWidth="78vw"
    bg={useColorModeValue("#F4F5F8", "gray.700")}
    color={useColorModeValue("gray.900", "white")}
    position={[null, null, null, null, 'absolute']}
    left={['0', '0', '0', "21%"]}
    overFlow-X={'hidden'}
  >
    <Flex justifyContent={'space-between'} direction="column" gap={10} position={[null, null, null, 'relative']}>

    <Card borderLeftRadius={'0px'}
        ml={'-1.2%'} mt={'2px'} >
            <CardBody>
                <Flex gap={5} alignItems={'center'} justifyContent={'flex-end'}>
                    <Icon as={CiMail} boxSize={6} />
                    <Icon as={AiOutlineBell} boxSize={6} />
                    <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                    </Wrap>

                </Flex>
            </CardBody>
        </Card>

        <Flex gap={10} justifyContent={'space-between'} px={10} direction={'column'}>
            <Box>
                <Heading fontFamily={'Hellix-Medium'}  fontSize={'30px'}>Password Setting</Heading>
            </Box>
            </Flex>

            <Flex gap={10} px={10} direction={'column'}>
               <Box>
               <FormLabel fontFamily={'Hellix-Medium'}  fontSize={'24px'} 
                fontWeight={'500'}>Current password</FormLabel>
               <Input fontSize='lg'
                type='password'  variant={'filled'} borderColor={'#000'}  w={'60vw'} h={'10vh'}/>
               </Box>

               <Box>
               <FormLabel fontFamily={'Hellix-Medium'}  fontSize={'24px'} 
                fontWeight={'500'}>New password</FormLabel>
               <Input fontSize='lg'
                type='password'  variant={'filled'} borderColor={'#000'}  w={'60vw'} h={'10vh'}/>
               </Box>

               <Box>
               <FormLabel fontFamily={'Hellix-Medium'}  fontSize={'24px'} 
                fontWeight={'500'}>Confirm password</FormLabel>
               <Input fontSize='lg'
                type='password'  variant={'filled'} borderColor={'#000'}  w={'60vw'} h={'10vh'}/>
               </Box>
            </Flex>
        </Flex>
        </Container>
  )
}

export default Password