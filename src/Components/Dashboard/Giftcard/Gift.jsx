import React, {useState, useEffect} from "react";
import NotificationModal from "../../../Admin/Notifications/NotificationModal";
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
Icon,
  Input,
  InputRightElement,
  InputGroup,
  useColorModeValue

} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Gift = () => {
  return (
    <Container
    maxWidth="4xl"
    py="20px"
    bg="#F4F5F8"
    minHeight="100vh"
    minWidth="85vw"
    position={[null, null, null, null, 'absolute']}
    left={['0', '0', '0', "13.2%"]}
  >
    <Flex p="20px" mt="20px" direction="column" gap={10} position={[null, null, null, 'relative']}>
      <Box minW="80vw">
        <Flex>
          <Box textAlign="justify">
            <Heading
              as="h3"
              fontFamily="Lato, sans-Serif"
              fontWeight="500"
              fontSize={["20px", "28px", "40px"]}
            >
              Gift Cards
            </Heading>
            <Text
              ml={["0px", "4px", "4px"]}
              minW="76vw"
              fontFamily="Lato sans-Serif"
              fontSize={["15px", "18px", "22px"]}
              fontWeight="200"
            >
              Select the card you would like to sell
            </Text>
          </Box>

          <Spacer />

          <Box alignSelf={["start", "start", "start"]} cursor="pointer">
            <NotificationModal/>
          </Box>
        </Flex>
      </Box>
      
      <Card>
        <CardBody p={10}>
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={10} >
                <Box >
                <Text fontSize={'lg'}>Select card type</Text>
                <Button
        margin={"1"}
        // onClick={onOpen}
        size="md"
        height="70px"
        width={['85vw', '85vw', "69vw"]}        
        variant="outline"
        alignContent={"flex-start"}
        justifyContent={{ base: "space-between", md: "flex-start" }}
        _hover={{
          bg: "#E8E6F6",
          color: "#1808A3",
        }}
        fontSize="lg"
        bg={useColorModeValue("white", "gray.900")}
        overflow={"auto"}
      >
        <Icon
          justifySelf={"flex-end"}
          ml={"auto"}
          as={ChevronRightIcon}
          fontSize="3xl"
        />
      </Button>
                </Box>

                <Box >
                <Text fontSize={'lg'}>Select sub-category</Text>
                <Button
        margin={"1"}
        // onClick={onOpen}
        size="md"
        height="70px"
        width={['85vw', '85vw', "69vw"]}        
        variant="outline"
        alignContent={"flex-start"}
        justifyContent={{ base: "space-between", md: "flex-start" }}
        _hover={{
          bg: "#E8E6F6",
          color: "#1808A3",
        }}
        fontSize="lg"
        bg={useColorModeValue("white", "gray.900")}
        overflow={"auto"}
      >
        <Icon
          justifySelf={"flex-end"}
          ml={"auto"}
          as={ChevronRightIcon}
          fontSize="3xl"
        />
      </Button>
                </Box>

                <Box >
                <Text fontSize={'lg'}>Enter gift card amount</Text>
                <Input height="70px" type="text"  width={['85vw', '85vw', "69vw"]}   />
                </Box>

                <Box>
                <Text fontSize={'lg'}>Upload card image</Text> 
                </Box>
            </Flex>
        </CardBody>
      </Card>
      </Flex>
      </Container>
  )
}

export default Gift