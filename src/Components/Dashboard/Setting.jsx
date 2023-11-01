import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Stack,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Spinner,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
  useColorMode,
  useColorModeValue,
  Switch,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { getAuth } from "firebase/auth";
import { SideBarFunc } from "./SideBarFunc";
import { ChevronRightIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PasswordCard from "./Setting/PasswordSetting";
import PasswordAccordion from "./Setting/SettingAccordion";
import {toast} from 'react-toastify'
import NotificationModal from "../../Admin/Notifications/NotificationModal";
import { useRef } from "react";
import { storage } from "../firebase/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { app } from "../firebase/Firebase";

export default function Setting() {


  return (
    <>
      <Flex
        h={["100vh", "100vh", "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
        overflow="scroll"
        bg={useColorModeValue("gray.50", "#050223")}
        color={useColorModeValue("gray.900", "white")}
      >
        <SideBarFunc />
        <Box alignItems="center" justifyContent="center" mt={20} mx={"10vw"} 
         left={['0', '0', '0', "14%"]} position={[null, null, null, null, 'relative']}>
          <Stack>
            {" "}
            <Flex justifyContent="space-between" marginBottom={20}>
              <Heading padding={"1px"} size={"lg"}>
                Settings
              </Heading>
              <NotificationModal/>
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
  const fileInputRef = useRef(null);
  const [displayPicture, setDisplayPicture] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const db = getFirestore(app);



  useEffect(() => {
    if (displayPicture && isProcessing) {
      handleSubmit();
    }
  }, [displayPicture, isProcessing]);

  const handleFileChange = () => {
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      setDisplayPicture(file);
      setIsProcessing(true); // Start processing
      setIsFileUploaded(false); // Reset to false when starting a new upload
      console.log('Selected file:', file.name);
    }
  };
  
  const handleSubmit = async () => {
    const auth = getAuth(app);
    const user = auth.currentUser;
  
    if (!user) {
      return;
    }
  
    if (!displayPicture) {
      return;
    }
  
    try {
      setIsProcessing(true); // Start processing
  
      // Get a reference to Firebase Storage
      const userId = user.uid;
      const storageRef = ref(
        storage,
        `users/${userId}/images/${displayPicture.name}`
      );
  
      // Use toast.promise to show upload progress
      const imageURL = await toast.promise(
        (async () => {
          const snapshot = await uploadBytes(storageRef, displayPicture);
          console.log("Uploaded a blob or file!");
          const downloadURL = await getDownloadURL(storageRef);
          return downloadURL;
        })(),
        {
          pending: "Uploading, please wait...", // Displayed while the promise is pending
          success: "Upload successful", // Displayed when the promise resolves successfully
          error: "Upload failed", // Displayed when the promise rejects with an error
          autoClose: 5000, // Close after 5 seconds
        }
      );
  
      // Create or update the user's profile picture in Firestore
      console.log('saving to database......')
      const userDocRef = doc(db, 'users', userId);
      await setDoc(userDocRef, {
        userDp: imageURL, // Use imageURL instead of downloadURL
      }, { merge: true }); // Use merge to update the document
  
      console.log('saved document')
      setIsFileUploaded(true);
  
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Upload failed");
    } finally {
      setIsProcessing(false); // Stop processing
    }
  };
  
  useEffect(() => {
    if (isFileUploaded) {
      console.log('file uploaded...')
      onClose()
    }
  }, [isFileUploaded, onClose]);
  
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

      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"}>Change profile photo</ModalHeader>
          <ModalBody>
            <Stack>
              <Button
                height={"54px"}
                color="#fff"
                bg="#1808A3"
                _hover={{
                  bg: "#3626c7",
                }}
                onClick={() => fileInputRef.current.click()}
              >
                {isProcessing ? <Spinner size="sm" mr={2} /> : null}
                Upload photo
              </Button>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"  // Define accepted file types (optional)
                onChange={handleFileChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
              />
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
          <ModalFooter></ModalFooter>
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
        width={['85vw', '85vw', "69vw"]}        
        variant="outline"
        alignContent={"flex-start"}
        justifyContent={{ base: "space-between", md: "flex-start" }}
        _hover={{
          bg: "#E8E6F6",
          color: "#1808A3",
        }}
        fontSize="lg"
        bg={useColorModeValue("white", "#141139")}
        overflow={"auto"}
      >
        <Icon mx={3} as={WiMoonAltFirstQuarter} fontSize="2xl" />
        <strong>Theme settings</strong>
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
