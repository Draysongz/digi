import { Box, Button, Center, Input, InputGroup } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import upload from "./CryptoAssets/upload.svg";
import { storage } from "../../firebase/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {toast} from 'react-toastify'

function FileUploadSingle({onUploadComplete}) {
  const [transactionScreenshot, setTransactionScreenshot] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setTransactionScreenshot(file);
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const auth = getAuth()
    const user = auth.currentUser;
    if (!user) {
  return;
}
    if (!transactionScreenshot) {
      return;
    }
  
    try {
      // Get a reference to Firebase Storage
      const userId = user.uid;
      const storageRef = ref(storage, `users/${userId}/images/${transactionScreenshot.name}`);
  
      
      const snapshot = await uploadBytes(storageRef, transactionScreenshot);
    console.log('Uploaded a blob or file!');
    const imageURL = await getDownloadURL(storageRef);
    toast.success('Upload successful')
    onUploadComplete(imageURL);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error('upload failed')
    }
  };


  return (
    <Box my={5}>
      <InputGroup bgImage={upload} bgRepeat={"no-repeat"} bgSize="500px">
        <Input type="file" onChange={handleImageChange} />{" "}
        {transactionScreenshot && `${transactionScreenshot.name} - ${transactionScreenshot.type}`}
      </InputGroup>{" "}
      <Button onClick={handleSubmit}>Upload</Button>
    </Box>
  );
}

export default FileUploadSingle;
