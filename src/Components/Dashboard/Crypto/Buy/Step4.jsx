import { Box, Container, Heading, Text } from "@chakra-ui/react";
import DropzoneComponent from "../DropUpload";

export default function Step4() {
  return (
    <>
      <Container>
        <Heading size={"md"} color="#1808A3">
          Process ID
        </Heading>
        <Text color={"gray.500"}>
          We will take a few minutes to confirm your identification.
        </Text>
        <DropzoneComponent />
        {/* Front image
        Back image */}
      </Container>
    </>
  );
}
