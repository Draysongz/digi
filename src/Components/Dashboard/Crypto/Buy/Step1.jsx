import { Box, Container, Heading, Text } from "@chakra-ui/react";
import DropzoneComponent from "../DropUpload";

export default function Step1() {
  return (
    <>
      <Container p={5}>
        <Heading size={"md"} color="#1808A3">
          National identity number (NIN)
        </Heading>
        <Text color={"gray.500"}>
          Take a clear photo of the front of your Government ID
        </Text>
        <DropzoneComponent />
      </Container>
    </>
  );
}
