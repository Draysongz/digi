import { Box, Container, Heading, Text } from "@chakra-ui/react";
import DropzoneComponent from "../DropUpload";

export default function Step2() {
  return (
    <>
      <Container>
        <Heading size={"md"} color="#1808A3">
          Check your photo
        </Heading>
        <Text color={"gray.500"}>
          Check photo and proceed as long its well captured, Retake if blur or
          unclear
        </Text>
        {/* image preview should be here */}
        <DropzoneComponent />
      </Container>
    </>
  );
}
