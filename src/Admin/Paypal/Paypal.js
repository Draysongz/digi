import React, { useState, useEffect } from 'react'
import {
  Container,
  Flex,
  Card,
  CardBody,
  Box,
  Text,
  RadioGroup,
  Radio,
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
  Image,
  Link,
  Icon,
  Wrap,
  WrapItem,
  Avatar,
  Modal,
  Circle,
  ModalHeader,
  ModalBody,
  ModalContent,
  Stack,
  ModalOverlay,
  ModalCloseButton,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Input,
} from "@chakra-ui/react";


import MessageModal from '../MessageModal/MessageModal';
import Userbar from '../../Userbar';
import NotificationModal from '../Notifications/NotificationModal';

const Paypal = () => {
  return (
    <Container
    maxWidth="4xl"
    // py="20px"
    minHeight="100vh"
    minWidth="77vw"
    bg={useColorModeValue("#F4F5F8", "#050223")}
    color={useColorModeValue("gray.900", "white")}
    position={[null, null, null, null, 'absolute']}
    left={['0', '0', '0', "22%"]}
    overFlowX={'hidden'}
  >
    <Flex justifyContent={'space-between'} direction="column" gap={10} position={[null, null, null, 'relative']}>
      <Card borderLeftRadius={'0px'}
        ml={'-1.2%'} mt={'2px'} bg={useColorModeValue('gray.50', "#050223")}>
        <CardBody>
          <Flex gap={5} alignItems={'center'} justifyContent={'flex-end'}>
            <MessageModal />
            <NotificationModal/>
            <Userbar />

          </Flex>
        </CardBody>
      </Card>

      <Flex gap={10} justifyContent={'space-between'} px={10} direction={'column'}>
        <Box>
          <Heading fontFamily={'Hellix-Medium'} fontSize={'30px'}>Transactions</Heading>
          <Text fontFamily={'Hellix-Medium'} color={'#71717A'}>Most Recent transanctions</Text>
        </Box>
      </Flex>

      <Flex direction={'column'}>
        <Card bg={ useColorModeValue("white", "#141139")}>
          <CardBody>
            <Flex justifyContent={'center'}>
              <Text fontSize={'xl'}>Coming Soon........</Text>
            </Flex>
          </CardBody>
          </Card>
          </Flex>
      </Flex>
      </Container>
  )
}

export default Paypal