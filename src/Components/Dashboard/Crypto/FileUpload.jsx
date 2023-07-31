import { Box, Button, Center, Input, InputGroup } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import upload from "./CryptoAssets/upload.svg";

function FileUploadSingle() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        "content-type": file.type,
        "content-length": `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <Box my={5}>
      <InputGroup bgImage={upload} bgRepeat={"no-repeat"} bgSize="500px">
        <Input type="file" onChange={handleFileChange} />{" "}
        {file && `${file.name} - ${file.type}`}
      </InputGroup>{" "}
      <Button onClick={handleUploadClick}>Upload</Button>
    </Box>
  );
}

export default FileUploadSingle;
