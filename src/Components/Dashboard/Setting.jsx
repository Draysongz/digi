import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Stack,
  IconButton,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
  useColorMode,
  useColorModeValue,
  Switch,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { WiMoonAltFirstQuarter } from "react-icons/wi";

import { SideBarFunc } from "./SideBarFunc";
import { ChevronRightIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PasswordCard from "./Setting/PasswordSetting";
import PasswordAccordion from "./Setting/SettingAccordion";
import { NotifIcon } from "./NotifBadge";

export default function Setting() {
  return (
    <>
      <Flex
        h={["100vh", "100vh", "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="scroll"
        bg={useColorModeValue("gray.50", "gray.800")}
        color={useColorModeValue("gray.900", "white")}
      >
        <SideBarFunc />
        <Box alignItems="center" justifyContent="center" mt={20} mx={"10vw"}>
          <Stack>
            {" "}
            <Flex justifyContent="space-between" marginBottom={20}>
              <Heading padding={"1px"} size={"lg"}>
                Settings
              </Heading>
              <NotifIcon />
            </Flex>
            <Box>
              <PasswordAccordion />
              {/* <PasswordSettings /> */}
              <ThemeSettings />
            </Box>{" "}
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

export function ProfileModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        margin={"1"}
        size="md"
        variant="outline"
        _hover={{
          bg: "#E8E6F6",
          color: "#1808A3",
        }}
        fontSize="lg"
        bg={useColorModeValue("white", "gray.900")}
        overflow={"auto"}
      >
        Change Icon
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"}>Change profile photo</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Stack>
              <Button
                height={"54px"}
                color="#fff"
                bg="#1808A3"
                _hover={{
                  bg: "#3626c7",
                }}
              >
                Upload photo
              </Button>
              <Button
                height={"54px"}
                border={"2px"}
                borderColor={"red.500"}
                color="red.500"
                bg={"white.500"}
                _hover={{
                  bg: "#E8E6F6",
                  color: "red.500",
                }}
              >
                Remove current photo
              </Button>
              <Button
                height={"54px"}
                onClick={onClose}
                _hover={{
                  bg: "#E8E6F6",
                  color: "#1808A3",
                }}
              >
                Cancel
              </Button>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// function PasswordSettings() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Button
//         margin={"1"}
//         onClick={onOpen}
//         size="md"
//         height="70px"
//         width="60vw"
//         variant="outline"
//         alignContent={"center"}
//         justifyContent={{ base: "space-between", md: "flex-start" }}
//         _hover={{
//           bg: "#E8E6F6",
//           color: "#1808A3",
//         }}
//         fontSize="lg"
//         bg={useColorModeValue("white", "gray.900")}
//         overflow={"auto"}
//       >
//         <Icon mx={3} as={IoMdLock} fontSize="2xl" />
//         Password settings
//         <Icon
//           justifySelf={"flex-end"}
//           ml={"auto"}
//           as={ChevronRightIcon}
//           fontSize="3xl"
//         />
//       </Button>

//       <Modal onClose={onClose} isOpen={isOpen} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader
//             alignSelf={"flex-start"}
//             color={useColorModeValue("#1808A3", "white")}
//           >
//             Password settings
//           </ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <PasswordCard />
//           </ModalBody>
//           <ModalFooter>
//             {/* <Button onClick={onClose}>Close</Button> */}
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

function ThemeSettings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Button
        margin={"1"}
        onClick={onOpen}
        size="md"
        height="70px"
        width="69vw"
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
        <Icon mx={3} as={WiMoonAltFirstQuarter} fontSize="2xl" />
        Theme settings
        <Icon
          justifySelf={"flex-end"}
          ml={"auto"}
          as={ChevronRightIcon}
          fontSize="3xl"
        />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"}>Change profile photo</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Stack>
              <Box display={"flex"} justifyContent={"space-between"}>
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
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
