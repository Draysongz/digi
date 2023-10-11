import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useColorMode,
  Switch,
  Flex,
  IconButton,
  Image,
  Link,
  Icon,
  Text,
  useDisclosure,
  useColorModeValue,
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react";
import { FiSettings, FiLogOut } from "react-icons/fi";
import {  BiSolidNotepad, BiBell } from "react-icons/bi";
import { FaBitcoin, FaPaypal, FaGift } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LogoutModal, { MobileLogoutModal } from "../Components/Dashboard/LogoutModal";
import {CiBitcoin} from 'react-icons/ci'
import {RxDashboard} from 'react-icons/rx'
import logo from '../Components/assets/logo.png'
import {SlPaypal} from 'react-icons/sl'
import {MdOutlineCardGiftcard} from 'react-icons/md'
import {LiaFileInvoiceSolid} from 'react-icons/lia'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const [display, changeDisplay] = useState("none");
  return (
    <Flex
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("#000", "gray.200")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      h={[null, null, "100vh"]}
      position={[null, null, null, 'fixed']}
      overflowY={'auto'}
      scrollBehavior={'smooth'}
    >
      <Flex
        flexDir={["row", "row", "column", "column", "column"]}
        // position="fixed"
        top="1rem"
        left="1rem"
        align="center"
        justifyContent={"space-between"}
      >
        {/* Desktop */}
        <Flex
          as="nav"
          flexDir={["row", "row", "column", "column", "column"]}
          align={["center", "center", "center", "flex-start", "flex-start"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          justifyContent="center"
          display={["none", "none", "flex", "flex", "flex"]}
          mt={1}
        >
          <Flex p={2}>
            <Image
              align={"center"}
              src={
                logo
              }
              width="150px"
              mx={8}
            />
           
          </Flex>
          <Flex w={'9vw'} alignItems={'center'} justifyContent={'center'} p={2}>
          <Text fontWeight={'600'} fontSize={'16px'} color={'#64748B'}>Menu</Text>
          </Flex>
          <Flex
            cursor={"pointer"}
            flexDir={["row", "row", "column", "column", "column"]}
            align={["center", "center", "center", "flex-start", "flex-start"]}
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            justifyContent="center"
            p="2"
            mx="4"
          >
            <Link
              padding="10px"
              borderRadius="2xl"
              display={["none", "none", "flex", "flex", "flex"]}
              _hover={{
                bg: "#E8E6F6",
                color: "#1808A3",
                 width: '16.7vw',
              }}
              onClick={() => navigate("/admin/dashboard")}
            >
              <Icon
                as={RxDashboard}
                fontSize="4xl"
                className="active-icon"
                p={1}
              />
              <Text
                p={1}
                fontSize="lg"
                className="active"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Overview
              </Text>
            </Link>

            <Link
              onClick={() => navigate("/crypto")}
              padding="10px"
              borderRadius="2xl"
              _hover={{
                textDecor: "none",
                bg: "#E8E6F6",
                color: "#1808A3",
                width: '16.7vw',
              }}
              display={["none", "none", "flex", "flex", "flex"]}
            >
              <Icon as={CiBitcoin} boxSize={10} p={1} />
              <Text
                p={1}
                fontSize="lg"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Buy/Sell Crypto
              </Text>
            </Link>

            <Link
              onClick={() => navigate("/giftcards")}
              padding="10px"
              borderRadius="2xl"
              display={["none", "none", "flex", "flex", "flex"]}
              _hover={{
                textDecor: "none",
                bg: "#E8E6F6",
                color: "#1808A3",
                width: '16.7vw',
              }}
            >
              <Icon as={MdOutlineCardGiftcard} boxSize={10} p={1} />
              <Text
                p={1}
                fontSize="lg"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Giftcards
              </Text>
            </Link>

            <Link
              onClick={() => navigate("/paypal")}
              padding="10px"
              borderRadius="2xl"
              display={["none", "none", "flex", "flex", "flex"]}
              _hover={{
                textDecor: "none",
                bg: "#E8E6F6",
                color: "#1808A3",
                width: '16.7vw',
              }}
            >
              <Icon as={SlPaypal} fontSize="4xl" p={1} />
              <Text
                p={1}
                fontSize="lg"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Paypal
              </Text>
            </Link>

            <Link
              onClick={() => navigate("/transactions")}
              padding="10px"
              borderRadius="2xl"
              display={["none", "none", "flex", "flex", "flex"]}
              _hover={{
                textDecor: "none",
                bg: "#E8E6F6",
                color: "#1808A3",
              }}
            >
              <Icon as={LiaFileInvoiceSolid} boxSize={10} p={1} />
              <Flex gap={8} alignItems={'center'}>
              <Text
                p={1}
                fontSize="lg"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Transaction
              </Text>

              <Text ml={3} p={2} h={'5vh'} w={'4vw'}
              textAlign={'center'} borderRadius={'md'} color={'white'} bgColor={'#047857'}>10</Text>
              </Flex>
            </Link>

            
            <Link
              onClick={() => navigate("/mining")}
              padding="10px"
              borderRadius="2xl"
              display={["none", "none", "flex", "flex", "flex"]}
              _hover={{
                textDecor: "none",
                bg: "#E8E6F6",
                color: "#1808A3",
                
              }}
            >
              <Icon as={BiBell} boxSize={10} p={1} />
             <Flex alignItems={'center'}  gap={8}>
             <Text
                p={1}
                fontSize="lg"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Notifications
              </Text>

              <Text p={2} h={'5vh'} w={'4vw'}
              textAlign={'center'} borderRadius={'md'} color={'white'} bgColor={'#0E0562'}>32</Text>
             </Flex>
            </Link>

            <Link
              onClick={() => navigate("/admin/complaints")}
              padding="10px"
              borderRadius="2xl"
              _hover={{
                textDecor: "none",
                bg: "#E8E6F6",
                color: "#1808A3",
                width: '16.7vw',
              
              }}
              display={["none", "none", "flex", "flex", "flex"]}
            >
              <Icon as={AiOutlineQuestionCircle} boxSize={10} p={1} />
              <Text
                p={1}
                fontSize="lg"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Complaints
              </Text>
            </Link>


            <Box
  padding="10px"
  borderRadius="2xl"
  display={["none", "none", "flex", "flex", "flex"]}
>
  <Icon pos="static" as={FiSettings} fontSize="4xl" p={1} />
  <Box mt="-5%" ml="2%">
    <Accordion border="none" allowToggle>
      <AccordionItem border="none" outline="none">
        <Text
          p={1}
          fontSize="lg"
          display={["none", "none", "none", "block", "block"]}
          w={["100%", "100%", "100%", "15vw", "15vw"]} // Adjust the width here
          outline="none"
          border="none"
        >
          <AccordionButton
            ml="-5%"
            border="none"
            padding="15px"
            borderRadius="2xl"
            _hover={{
              textDecor: "none",
              bg: "#E8E6F6",
              color: "#1808A3",
            }}
          >
            <Box as="span" fontSize="lg" flex="1" textAlign="left">
              Settings
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Box mt="5%" display={'flex'} flexDir={'column'}>
              <Link
                padding="10px"
                borderRadius="2xl"
                _hover={{
                  textDecor: "none",
                  bg: "#E7EAEE",
                  color: "#000",
                }}
                onClick={()=> navigate('/admin/settings')}
              >
                Assign Roles
              </Link>
              <Link onClick={()=> navigate('/admin/profile')}
                padding="10px"
                borderRadius="2xl"
                _hover={{
                  textDecor: "none",
                  bg: "#E7EAEE",
                  color: "#000",
                }}
              >
                Profile
              </Link>
              <Link onClick={()=> navigate('/admin/password')}
                padding="10px"
                borderRadius="2xl"
                _hover={{
                  textDecor: "none",
                  bg: "#E7EAEE",
                  color: "#000",
                }}
              >
                Password
              </Link>
              <Link
                padding="10px"
                borderRadius="2xl"
                _hover={{
                  textDecor: "none",
                  bg: "#E7EAEE",
                  color: "#000",
                }}
              >
                Theme
              </Link>
            </Box>
          </AccordionPanel>
        </Text>
      </AccordionItem>
    </Accordion>
  </Box>
</Box>


            <LogoutModal />
          </Flex>
        </Flex>

        <Flex
          alignItems="center"
          ml={{ base: 0 }}
          px={{ base: 5 }}
          borderBottom="1px"
          borderBottomColor={useColorModeValue("gray.200", "gray.700")}
          flexWrap="unset"
        >
          {/* Mobile */}
          <Image
            src={
             logo
            }
            width="150px"
            mr={"auto"}
            display={["flex", "flex", "none", "none"]}
          />
          <IconButton
            justifySelf={"flex-end"}
            aria-label="Open Menu"
            size="lg"
            ml={{ base: "8em", sm: "18em", md: "30em" }}
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay("flex")}
            display={["flex", "flex", "none", "none"]}
          />
        </Flex>
      </Flex>

      {/* Mobile Content */}

      <Flex
        w="100vw"
        display={display}
        bgColor="#E8E6F6"
        color="#1808A3"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />{" "}
          <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
        </Flex>

        <Flex
          flexDir="column"
          align="left"
          justifyContent={"space-between"}
          borderRadius="xl"
          p="2"
          mx="4"
        >
          <Link
            onClick={() => navigate("/dashboard")}
            
            display={["flex", "flex", "flex", "flex", "flex"]}
            padding="20px"
            _hover={{
              textDecor: "none",
              bg: "white",
              color: "#1808A3",
            }}
          >
            <Icon
              as={RxDashboard}
              fontSize="4xl"
              className="active-icon"
              p={1}
            />
            <Text
              className="active"
              p={1}
              fontSize="lg"
              display={["flex", "flex", "flex", "flex", "flex"]}
            >
              Overview
            </Text>
          </Link>

          <Link
            onClick={() => navigate("/crypto")}
            _hover={{
              textDecor: "none",
              bg: "white",
              color: "#1808A3",
            }}
            display={["flex", "flex", "flex", "flex", "flex"]}
            padding="20px"
          >
            <Icon as={FaBitcoin} fontSize="4xl" p={1} />
            <Text
              p={1}
              fontSize="lg"
              display={["flex", "flex", "flex", "flex", "flex"]}
            >
              Crypto
            </Text>
          </Link>

          <Link
            onClick={() => navigate("/giftcards")}
            _hover={{
              textDecor: "none",
              bg: "white",
              color: "#1808A3",
            }}
            padding="20px"
            display={["flex", "flex", "flex", "flex", "flex"]}
          >
            <Icon as={FaGift} fontSize="4xl" p={1} />
            <Text
              p={1}
              fontSize="lg"
              display={["flex", "flex", "flex", "flex", "flex"]}
            >
              Giftcards
            </Text>
          </Link>

          <Link
            onClick={() => navigate("/paypal")}
            _hover={{
              textDecor: "none",
              bg: "white",
              color: "#1808A3",
            }}
            padding="20px"
            display={["flex", "flex", "flex", "flex", "flex"]}
          >
            <Icon as={FaPaypal} fontSize="4xl" p={1} />
            <Text
              p={1}
              fontSize="lg"
              display={["flex", "flex", "flex", "flex", "flex"]}
            >
              Paypal
            </Text>
          </Link>

          <Link
            onClick={() => navigate("/transactions")}
            _hover={{
              textDecor: "none",
              bg: "white",
              color: "#1808A3",
            }}
            padding="20px"
            display={["flex", "flex", "flex", "flex", "flex"]}
          >
            <Icon as={BiSolidNotepad} fontSize="4xl" />
            <Text
              p={1}
              fontSize="lg"
              display={["flex", "flex", "flex", "flex", "flex"]}
            >
              Transaction
            </Text>
          </Link>

          <Link
            
            _hover={{
              textDecor: "none",
              bg: "white",
              color: "#1808A3",
            }}
            padding="20px"
            display={["flex", "flex", "flex", "flex", "flex"]}
          >
            <Icon as={FiSettings} fontSize="4xl" p={1} />
            <Text
              p={1}
              fontSize="lg"
              display={["flex", "flex", "flex", "flex", "flex"]}
            >
              Setting
            </Text>
          </Link>

          <MobileLogoutModal />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AdminSidebar