import React, {useState} from 'react'
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
    useColorModeValue,
    Table,
    Th,
    Td,
    TableContainer,
    HStack,
    Tr,
    Tbody,
    Thead,
    Icon,
    Wrap,
    WrapItem,
    Avatar,
    Modal,
    ModalHeader,
    ModalBody,
    ModalContent,
    Stack,
    ModalFooter,
    ModalOverlay,
    ModalCloseButton,
    InputGroup,
    Input,
    InputLeftElement,
    InputRightElement,
    color
  } from "@chakra-ui/react";
  import {AddIcon,CloseIcon,EditIcon, Search2Icon} from '@chakra-ui/icons'
  import {CiMail} from 'react-icons/ci'
  import {AiOutlineBell} from 'react-icons/ai'
  import {FiMoreHorizontal} from 'react-icons/fi'
  

const Settings = () => {
   

    const [isModalAOpen, setIsModalAOpen] = useState(false);
  const [isModalBOpen, setIsModalBOpen] = useState(false);
  const [isModalCOpen, setIsModalCOpen] = useState(false);

  const openModalA = () => {
    setIsModalAOpen(true);
  };

  const closeModalA = () => {
    setIsModalAOpen(false);
  };

  const openModalB = () => {
    setIsModalBOpen(true);
  };

  const closeModalB = () => {
    setIsModalBOpen(false);
  };

  const openModalC = () => {
    setIsModalCOpen(true);
  };

  const closeModalC = () => {
    setIsModalCOpen(false);
  };

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
                <Heading fontFamily={'Hellix-Medium'} fontSize={'30px'}>Settings</Heading>
            </Box>
            <Flex justifyContent={'space-between'}>
                <Box>
                <Heading fontSize={'20px'}>Assign Roles</Heading>
                <Text color={'#2A2B2C'}>You can now assign various roles, and add admins</Text>
                </Box>

                <Button leftIcon={< AddIcon/>} bgColor={'#1808A3'} borderRadius={'2xl'}
                width={'15vw'} onClick={openModalB} color={'#fff'}>Assign Roles</Button>
            </Flex>

            <Card>
                <CardBody >
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Profile</Th>
                                <Th textAlign={'center'}>Roles</Th>
                                <Th textAlign={'center'}>Action</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr >
                                <Td>        
                                    <Flex gap={5} p={1}>
                                    <Box>
                                    <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                    </Wrap> 
                                    </Box>

                                    <Box>
                                        <Heading fontSize={'xl'}>Jennifer Lawrence Kay</Heading>
                                        <Text>React Native Developer | Webflow <br/> developer</Text>
                                    </Box>
                                </Flex></Td>
                                <Td  textAlign={'center'}> 
                                    <Button>Sub-admin</Button>
                                </Td>

                                <Td cursor={'pointer'} onClick={openModalA} textAlign={'center'}>
                                <Icon as={EditIcon} boxSize={6} />
                                </Td>
                            </Tr>

                            <Tr >
                                <Td>        
                                    <Flex gap={5} p={1}>
                                    <Box>
                                    <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                    </Wrap> 
                                    </Box>

                                    <Box>
                                        <Heading fontSize={'xl'}>Jennifer Lawrence Kay</Heading>
                                        <Text>React Native Developer | Webflow <br/> developer</Text>
                                    </Box>
                                </Flex></Td>
                                <Td  textAlign={'center'}> 
                                    <Button>Sub-admin</Button>
                                </Td>

                                <Td cursor={'pointer'} onClick={openModalA} textAlign={'center'}>
                                <Icon as={EditIcon} boxSize={6} />
                                </Td>
                            </Tr>

                            <Tr >
                                <Td>        
                                    <Flex gap={5} p={1}>
                                    <Box>
                                    <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                    </Wrap> 
                                    </Box>

                                    <Box>
                                        <Heading fontSize={'xl'}>Jennifer Lawrence Kay</Heading>
                                        <Text>React Native Developer | Webflow <br/> developer</Text>
                                    </Box>
                                </Flex></Td>
                                <Td  textAlign={'center'}> 
                                    <Button>Sub-admin</Button>
                                </Td>

                                <Td cursor={'pointer'} onClick={openModalA} textAlign={'center'}>
                                <Icon as={EditIcon} boxSize={6} />
                                </Td>
                            </Tr>

                            <Tr >
                                <Td>        
                                    <Flex gap={5} p={1}>
                                    <Box>
                                    <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                    </Wrap> 
                                    </Box>

                                    <Box>
                                        <Heading fontSize={'xl'}>Jennifer Lawrence Kay</Heading>
                                        <Text>React Native Developer | Webflow <br/> developer</Text>
                                    </Box>
                                </Flex></Td>
                                <Td  textAlign={'center'}> 
                                    <Button>Sub-admin</Button>
                                </Td>

                                <Td cursor={'pointer'} onClick={openModalA} textAlign={'center'}>
                                <Icon as={EditIcon} boxSize={6} />
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Modal onClose={closeModalA} isOpen={isModalAOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"}>Edit Role</ModalHeader>
          <ModalCloseButton bg={"#1808A3"} color={"#fff"} rounded={"full"} />
          <ModalBody>
            <Stack>

              <Button
                height={"54px"}
                color="black"
                
                _hover={{
                  bg: "#3626c7",
                  color: '#fff'
                }}
                rounded={"2xl"}
                variant='outline'
                
              >
               Sub-admin
              </Button>

              <Button
                height={"54px"}
                color="black"
                
                _hover={{
                  bg: "#3626c7",
                  color: '#fff'
                }}
                rounded={"2xl"}
                variant='outline'
                
              >
               Remove Sub-admin
              </Button>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
        </Modal>

        <Modal onClose={closeModalB} isOpen={isModalBOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader w={'25vw'} textAlign={'left'} borderBottom={'2px solid black'} alignSelf={"center"}>All Users</ModalHeader>
          <ModalCloseButton bg={"#1808A3"} color={"#fff"} rounded={"full"} />
          <ModalBody>
            <Flex gap={8} direction={'column'}>
                <InputGroup alignItems={'center'}>
                <InputLeftElement color={'#999FAA'}>
                <Search2Icon/>
                </InputLeftElement>
                <Input  type='search' placeholder='search for a user' _placeholder={{color:'#999FAA'}} />
                <InputRightElement color={'#999FAA'}>
                <CloseIcon />
                </InputRightElement>
                </InputGroup>
                <Flex gap={7} direction={'column'}>
                    <Flex justifyContent={'space-between'}>
                        <HStack>
                        <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                    </Wrap>
                    <Text>Joanna kimberly Stephanie</Text>
                        </HStack>

                        <Icon onClick={()=>{
                            openModalC();
                            closeModalB()
                        }} cursor={'pointer'} color={'#A1A1AA'} as={FiMoreHorizontal} boxSize={6} />
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <HStack>
                        <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                    </Wrap>
                    <Text>Joanna kimberly Stephanie</Text>
                        </HStack>

                        <Icon onClick={()=>{
                            openModalC();
                            closeModalB()
                        }}  cursor={'pointer'} color={'#A1A1AA'} as={FiMoreHorizontal} boxSize={6} />
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <HStack>
                        <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                    </Wrap>
                    <Text>Joanna kimberly Stephanie</Text>
                        </HStack>

                        <Icon onClick={()=>{
                            openModalC();
                            closeModalB()
                        }} cursor={'pointer'} color={'#A1A1AA'} as={FiMoreHorizontal} boxSize={6} />
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <HStack>
                        <Wrap>
                        <WrapItem>
                            <Avatar name='Dan Abrahmov' size='sm' src='https://bit.ly/dan-abramov' />
                            </WrapItem>
                    </Wrap>
                    <Text>Joanna kimberly Stephanie</Text>
                        </HStack>

                        <Icon onClick={()=>{
                            openModalC();
                            closeModalB()
                        }} cursor={'pointer'} color={'#A1A1AA'} as={FiMoreHorizontal} boxSize={6} />
                    </Flex>
                </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
        </Modal>

        <Modal onClose={closeModalC} isOpen={isModalCOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader w={'25vw'} borderBottom={'2px solid black'} alignSelf={"center"}>Assign Role</ModalHeader>
          <ModalCloseButton bg={"#1808A3"} color={"#fff"} rounded={"full"} />
          <ModalBody>
            <Stack>

              <Text
                p={6}
                color="black"
                
                _hover={{
                  bg: "#3626c7",
                  color: '#fff'
                }}
                rounded={"2xl"}
                
                
              >
               Sub-admin
              </Text>

              <Text
                p={6}
                color="black"
                
                _hover={{
                  bg: "#3626c7",
                  color: '#fff'
                }}
                rounded={"2xl"}
               
                
              >
               Admin
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
        </Modal>
                </CardBody>
            </Card>
        </Flex>
    </Flex>
    </Container>
  )
}

export default Settings