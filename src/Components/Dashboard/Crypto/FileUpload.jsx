import { Box, Button, Input, InputGroup, Spinner, Image, Center, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import upload from "./CryptoAssets/upload.svg";
import { storage } from "../../firebase/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useRef } from "react";

function FileUploadSingle({ onUploadComplete }) {
  const [transactionScreenshot, setTransactionScreenshot] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef();

  const handleImageChange = (e) => {
    e.persist();
    const file = e.target.files[0];
    setTransactionScreenshot(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      return;
    }

    if (!transactionScreenshot) {
      return;
    }

    try {
      setIsProcessing(true); // Start processing
      // Show the loading toast using toast.promise
      const imageURL = await toast.promise(
        (async () => {
          // Get a reference to Firebase Storage
          const userId = user.uid;
          const storageRef = ref(
            storage,
            `users/${userId}/images/${transactionScreenshot.name}`
          );

          const snapshot = await uploadBytes(storageRef, transactionScreenshot);
          console.log("Uploaded a blob or file!");
          const downloadURL = await getDownloadURL(storageRef);
          onUploadComplete(downloadURL);
          return downloadURL;
        })(),
        {
          pending: "Uploading, please wait...", // Displayed while the promise is pending
          success: "Upload successful", // Displayed when the promise resolves successfully
          error: "Upload failed", // Displayed when the promise rejects with an error
          autoClose: 5000, // Close after 5 seconds
        }
      );

      setIsFileUploaded(true);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Upload failed");
    } finally {
      setIsProcessing(false); // Stop processing
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <Box my={5}>
      <InputGroup
        bgImage={transactionScreenshot ? 'null' : `url(${upload})`}
        bgRepeat={"no-repeat"}
        bgSize={"contain"}
        alignContent={"center"}
        width={{ base: "20em", sm: "25em", md: "59%" }}
        display={"flex"}
        flexDir={"column"}
        height={"300px"}
        onClick={handleImageClick}
       
      >
        <Input type="file" display={'none'} onChange={handleImageChange} ref={inputRef} border={'none'} p={2} />
        {transactionScreenshot ? (
          <Image
            src={URL.createObjectURL(transactionScreenshot)}
            alt="Preview"
            maxW="100%" // Set maximum width to fit container
            maxH="300px" // Set maximum height to fit container
            objectFit="contain" // Adjust the image within the container
            p={10}
          />
        ):
        <Flex  
        height={['120px', '120px', "180px"]}
        fontSize={['md', 'md', 'lg']}
        justifyContent={'center'}
        p={10} alignItems={'center'} direction={'row'}> 
        <Text textAlign={'center'}>Click to upload payment proof</Text>
        </Flex>}
      </InputGroup>

      <Button onClick={handleSubmit} disabled={isProcessing || !transactionScreenshot}>
        {isProcessing ? <Spinner size="sm" mr={2} /> : null}
        Upload
      </Button>
    </Box>
  );
}

export default FileUploadSingle;
