import React from 'react'
import {
    Container,
    Flex,
    Card,
    CardBody,
    Box,
    Text,
    Heading,
    Button,
    Icon,
    Wrap,
    WrapItem,
    Avatar,
    Input,
    useColorModeValue,
    AvatarBadge,
    FormLabel,
  } from "@chakra-ui/react";
  import {CiMail} from 'react-icons/ci'
  import {AiOutlineBell} from 'react-icons/ai'
  import {EditIcon} from '@chakra-ui/icons'

const Profile = () => {
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
                <Heading fontFamily={'Hellix-Medium'} fontSize={'30px'}>Profile</Heading>
            </Box>
            </Flex>

            

           <Flex direction={'column'} gap={5} px={10}>
           <Wrap>
  <WrapItem>
    <Avatar name='Chidinma Ugwu' size='xl' src='https://bit.ly/dan-abramov'>
      <AvatarBadge
        boxSize="1em" // Adjust this size as needed
        bg="white" // Background color for the badge
      >
        <EditIcon w={4} h={4} /> {/* Adjust the width (w) and height (h) as needed */}
      </AvatarBadge>
    </Avatar>
  </WrapItem>
</Wrap>

                    <Text fontSize={'xl'} fontWeight={'bold'}>Chidinma Ugwu</Text>
            </Flex> 
            <Flex px={10} direction={'column'} gap={10}>
                <Flex gap={10}>
                    <Box>
                    <FormLabel fontSize='xl'>First Name</FormLabel>
                    <Input  fontSize='lg' variant={'filled'} borderColor={'#000'} type='text' w={'30vw'} h={'10vh'} value={'Chidinma'} disabled/>
                    </Box>
                    <Box>
                    <FormLabel fontSize='xl'>Last Name</FormLabel>
                    <Input fontSize='lg' type='text'  variant={'filled'} borderColor={'#000'}  w={'30vw'} h={'10vh'} value={'Ugwu'} disabled/>
                    </Box>
                </Flex>

                <Box>
                <FormLabel fontSize='xl'>Email address</FormLabel>
                    <Input  fontSize='lg' variant={'filled'} borderColor={'#000'} type='email'w={'63vw'}  h={'10vh'} value={'emmanuellachidinmaugwu@gmail.com'} disabled/>
                </Box>
                <Box>
                <FormLabel fontSize='xl'>Phone</FormLabel>
                    <Input  fontSize='lg' variant={'filled'} borderColor={'#000'} type='number'w={'63vw'}  h={'10vh'} value={+2349069276918} disabled/>
                </Box>
            </Flex>

           <Flex justifyContent={'center'} px={10} pb={3} gap={10}>
            <Button
            borderRadius={'2xl'} 
             w={'15vw'} h={'8vh'} border={'2px solid #1808A3'} color={'#1808A3'} variant='outline'>Discard</Button>
            <Button
            _hover={{bgColor: '#1D7B1D', color:'white' }}
             borderRadius={'2xl'} color={'white'} w={'15vw'} h={'8vh'} bg={'#1808A3'}>Save</Button>
            </Flex> 
    </Flex>
    </Container>
  )
}

export default Profile