import { Box, Container, Heading, Text } from "@chakra-ui/react";
import DropzoneComponent from "../DropUpload";

export default function Step3() {
  return (
    <>
      <Container>
        <Heading size={"md"} color="#1808A3">
          Take back Photo
        </Heading>
        <Text color={"gray.500"}>
          Take a clear photo of the back of your Government ID
        </Text>
        <DropzoneComponent />
      </Container>
    </>
  );
}
