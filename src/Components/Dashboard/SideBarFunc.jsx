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
} from "@chakra-ui/react";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { BiSolidDashboard, BiSolidNotepad } from "react-icons/bi";
import { FaBitcoin, FaPaypal, FaGift } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const SideBarFunc = () => {
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
    >
      <Flex
        flexDir={["row", "row", "column", "column", "column"]}
        // position="fixed"
        top="1rem"
        left="1rem"
        align="center"
        justifyContent={"space-between"}
        h={[null, null, "100vh"]}
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
          <Flex>
            <Image
              align={"center"}
              src={
                colorMode === "light"
                  ? "./images/digimartExch.png"
                  : "./images/logoWhite.png"
              }
              width="150px"
              mr={"1"}
            />
            {/* Mobile */}
            {/* <IconButton
              justifySelf={"flex-end"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"outline"}
              aria-label={"Toggle Navigation"}
              display={{ md: "none" }}
              ml={"auto"}
            /> */}
          </Flex>
          <Flex
            mt={10}
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
              }}
              onClick={() => navigate("/dashboard")}
            >
              <Icon
                as={BiSolidDashboard}
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
              }}
              display={["none", "none", "flex", "flex", "flex"]}
            >
              <Icon as={FaBitcoin} fontSize="4xl" p={1} />
              <Text
                p={1}
                fontSize="lg"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Crypto
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
              }}
            >
              <Icon as={FaGift} fontSize="4xl" p={1} />
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
              }}
            >
              <Icon as={FaPaypal} fontSize="4xl" p={1} />
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
              <Icon as={BiSolidNotepad} fontSize="4xl" p={1} />
              <Text
                p={1}
                fontSize="lg"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Transaction
              </Text>
            </Link>

            <Link
              onClick={() => navigate("/settings")}
              padding="10px"
              borderRadius="2xl"
              _hover={{
                textDecor: "none",
                bg: "#E8E6F6",
                color: "#1808A3",
              }}
              display={["none", "none", "flex", "flex", "flex"]}
            >
              <Icon as={FiSettings} fontSize="4xl" p={1} />
              <Text
                p={1}
                fontSize="lg"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Setting
              </Text>
            </Link>

            <Link
              onClick={() => navigate("/logout")}
              padding="10px"
              borderRadius="2xl"
              _hover={{
                textDecor: "none",
                bg: "#E8E6F6",
                color: "#1808A3",
              }}
              display={["none", "none", "flex", "flex", "flex"]}
            >
              <Icon as={FiLogOut} fontSize="4xl" p={1} />
              <Text
                p={1}
                fontSize="lg"
                display={["none", "none", "none", "flex", "flex"]}
              >
                Logout
              </Text>
            </Link>
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
                ? "./images/digimartExch.png"
                : "./images/logoWhite.png"
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
            passHref
            display={["flex", "flex", "flex", "flex", "flex"]}
            padding="20px"
            _hover={{
              textDecor: "none",
              bg: "white",
              color: "#1808A3",
            }}
          >
            <Icon
              as={BiSolidDashboard}
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
            onClick={() => navigate("/settings")}
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

          <Link
            _hover={{
              textDecor: "none",
              bg: "white",
              color: "#1808A3",
            }}
            padding="20px"
            display={["flex", "flex", "flex", "flex", "flex"]}
          >
            <Icon as={FiLogOut} fontSize="4xl" p={1} />
            <Text
              p={1}
              fontSize="lg"
              display={["flex", "flex", "flex", "flex", "flex"]}
            >
              Logout
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
