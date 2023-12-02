import React, { useState, useEffect } from "react";
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
import {GoPeople} from 'react-icons/go'
import logowhite from '../Components/assets/digi.png'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../Components/firebase/Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [userId, setUserId] = useState('')
  const [userRole, setUserRole] = useState('')

  const db = getFirestore(app)
  const auth = getAuth(app)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // The user is signed in. Get the user's ID.
        setUserId(user.uid);
        console.log(user.uid)
      } else {
        // The user is signed out. Handle this case if needed.
        setUserId(null);
      }
    });
  
    // Unsubscribe from authentication state changes when the component unmounts.
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (userId) {
        const db = getFirestore();
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const role = userData.role;
          setUserRole(role);
        }
      }
    };

    fetchUserRole();
  }, [userId]);

  const adminLinks = [
    {
      label: "Overview",
      icon: RxDashboard,
      path: "/admin/dashboard",
    },
    {
      label: "Transactions",
      icon: LiaFileInvoiceSolid,
      path: "/admin/transaction",
    },
    {
      label: "User Management",
      icon: GoPeople,
      path: "/admin/usermanagement",
    },
    {
      label: "Complaints",
      icon: AiOutlineQuestionCircle,
      path: "/admin/complaints",
    },
  ];

  const cryptoLinks = [
    {
      label: "Overview",
      icon: RxDashboard,
      path: "/admin/dashboard",
    },
    {
      label: "Buy/Sell Crypto",
      icon: CiBitcoin,
      path: "/admin/crypto",
    },
  ];

  const paypalLinks = [
    {
      label: "Overview",
      icon: RxDashboard,
      path: "/admin/dashboard",
    },
    {
      label: "Paypal",
      icon: SlPaypal,
      path: "/admin/paypal",
    },
  ];

  
  const giftcardLinks = [
    {
      label: "Overview",
      icon: RxDashboard,
      path: "/admin/dashboard",
    },
    {
      label: "Giftcard",
      icon: MdOutlineCardGiftcard,
      path: "/admin/giftcards",
    },
  ];

  const customerLinks = [
    {
      label: "Overview",
      icon: RxDashboard,
      path: "/admin/dashboard",
    },
    {
      label: "Complaints",
      icon: AiOutlineQuestionCircle,
      path: "/admin/complaints",
    },
  ];

  const getRoleLinks = () => {
    switch (userRole) {
      case "Admin":
        return adminLinks;
      case "Sub-admin":
        return adminLinks;
      case "Crypto Merchant":
        return cryptoLinks;
      case "Paypal Merchant":
        return paypalLinks;
      case "Giftcard Merchant":
        return giftcardLinks;
      case "Customer Care":
        return customerLinks;
      default:
        return [];
    }
  };

  const roleLinks = getRoleLinks();

  const mobileCol = useColorModeValue("#000", "#1808A3")


  const [display, changeDisplay] = useState("none");
  return (
    <Flex
    bg={useColorModeValue("white", "#05012C")}
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
                colorMode === "light"
                  ? `${logo}`
                  : `${logowhite}`
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
    {roleLinks.map((link) => (
            <React.Fragment key={link.label}>
              <Link
                   padding="10px"
                   borderRadius="2xl"
                   display={["none", "none", "flex", "flex", "flex"]}
                   _hover={{
                     textDecor: "none",
                     bg: "#E8E6F6",
                     color: "#1808A3",
                     width: '16.7vw',
                   }}
                onClick={() => navigate(link.path)}
              >
                <Icon as={link.icon} boxSize={10} p={1} />
                <Text p={1} fontSize="lg" display={["none", "none", "none", "flex", "flex"]}>
                  {link.label}
                </Text>
              </Link>
            </React.Fragment>
    ))}

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
               onClick={()=> navigate('/admin/theme')}
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
              colorMode === "light"
                ? `${logo}`
                : `${logowhite}`
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
        <Flex justifyContent="space-between" direction={'row-reverse'} alignItems={'center'} >
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />{" "}
          <Switch  mt={'-2px'}
            ml={2} color="green" isChecked={isDark} onChange={toggleColorMode} />
        </Flex>

        <Flex
          flexDir="column"
          align="left"
          justifyContent={"space-between"}
          borderRadius="xl"
          p="2"
          mx="4"
         
        >
           {roleLinks.map((link) => (
            <React.Fragment key={link.label}>
              <Link
                 display={["flex", "flex", "flex", "flex", "flex"]}
                 padding="20px"
                 _hover={{
                   textDecor: "none",
                   bg: "white",
                   color: "#1808A3",
                 }}
                onClick={() => navigate(link.path)}
              >
                <Icon as={link.icon} boxSize={10} p={1} />
                <Text
  p={1}
  fontSize={{ base: 'md', md: 'lg' }}
  display={['flex', 'flex', 'flex', 'none', 'none']}
  _hover={{
    textDecoration: 'none',
    bg: 'white',
    color: '#1808A3',
  }}
>
  {link.label}
</Text>

              </Link>
            </React.Fragment>
    ))}

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
               onClick={()=> navigate('/admin/theme')}
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
          <MobileLogoutModal />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AdminSidebar