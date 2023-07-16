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
  useColorModeValue,
} from "@chakra-ui/react";
import { MdCircleNotifications } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { WiMoonAltFirstQuarter } from "react-icons/wi";

import { FaUserAlt } from "react-icons/fa";
import { SideBarFunc } from "./SideBarFunc";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Setting() {
  return (
    <>
      <Flex
        h={["100vh", "100vh", "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="hidden"
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
              <IconButton
                border={"none"}
                fontSize={"4xl"}
                variant={"outline"}
                // onClick={onOpen}
                aria-label="open menu"
                icon={<MdCircleNotifications />}
              />
            </Flex>
            <Box>
              <ProfileModal />

              <PasswordSettings />
              <ThemeSettings />
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

function ProfileModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        margin={"1"}
        size="md"
        height="70px"
        width="60vw"
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
        <Icon mx={3} as={FaUserAlt} fontSize="2xl" />
        Profile settings
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
              <Button
                color="#fff"
                bg="#1808A3"
                _hover={{
                  bg: "#1808A3",
                }}
              >
                Upload photo
              </Button>
              <Button
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
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function PasswordSettings() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        margin={"1"}
        onClick={onOpen}
        size="md"
        height="70px"
        width="60vw"
        variant="outline"
        alignContent={"center"}
        justifyContent={{ base: "space-between", md: "flex-start" }}
        _hover={{
          bg: "#E8E6F6",
          color: "#1808A3",
        }}
        fontSize="lg"
        bg={useColorModeValue("white", "gray.900")}
        overflow={"auto"}
      >
        <Icon mx={3} as={IoMdLock} fontSize="2xl" />
        Password settings
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
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function ThemeSettings() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        margin={"1"}
        onClick={onOpen}
        size="md"
        height="70px"
        width="60vw"
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
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
