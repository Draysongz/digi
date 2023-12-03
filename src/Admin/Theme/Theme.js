import React from 'react'
import {
    Container,
    Flex,
    Card,
    CardBody,
    Box,
    Heading,
    useColorModeValue,
    Icon,
    Switch,
    Stack,
    useColorMode,
    Text,
  } from "@chakra-ui/react";
  import Userbar from '../../Userbar';
  import MessageModal from '../MessageModal/MessageModal';
  import NotificationModal from '../Notifications/NotificationModal';

const Theme = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
  return (
    <Container
    maxWidth="4xl"
    py="20px"
    minHeight="100vh"
    minWidth="78vw"
    bg={useColorModeValue("#F4F5F8", "#050223")}
    color={useColorModeValue("gray.900", "white")}
    position={[null, null, null, null, 'absolute']}
    left={['0', '0', '0', "21%"]}
    overFlowX={'hidden'}
  >
<Flex justifyContent={'space-between'} direction="column" gap={10} position={[null, null, null, 'relative']}>
<Card borderLeftRadius={'0px'}  w={['90vw', '70vw', '77vw']}  bg={useColorModeValue('gray.50', "#050223")}
        ml={'-1.2%'} mt={'-1.5%'}>
            <CardBody>
                <Flex gap={5} alignItems={'center'} justifyContent={['space-around', 'space-around', 'flex-end']}>
                    <MessageModal/>
                    <NotificationModal />
                   <Userbar/>

                </Flex>
            </CardBody>
        </Card>


        <Flex gap={10} justifyContent={'space-between'} px={10} direction={'column'}>
            <Box>
                <Heading fontFamily={'Hellix-Medium'} fontSize={'30px'}>Theme Settings</Heading>
            </Box>
            </Flex>

            <Stack px={10} >
              <Box display={"flex"} gap={10}>
                <Text>Light</Text>
                <Switch
                  color="green"
                  isChecked={isDark}
                  onChange={toggleColorMode}
                  size={"lg"}
                />
                <Text>Dark</Text>
              </Box>
            </Stack>

        </Flex>
        </Container>
  )
}

export default Theme