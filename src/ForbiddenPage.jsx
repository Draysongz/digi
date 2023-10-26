import React from "react";
import {
  Box,
  Heading,
  Text,
  Center,
  Image,
  ScaleFade,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const ForbiddenPage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
    <Heading
      display="inline-block"
      as="h2"
      size="2xl"
      bgGradient="linear(to-r, teal.400, teal.600)"
      backgroundClip="text">
      403
    </Heading>
    <Text fontSize="24px" mt={3} mb={2}>
      Forbidden!!!
    </Text>
    <Text color={'gray.500'} mb={6} fontSize={'18px'}>
    Sorry, you don't have permission to access this page.
    </Text>

    <Button
      colorScheme="teal"
      bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
      color="white"
      variant="solid">
        <Link to='/'>
      Go to Home
      </Link>
    </Button>
  </Box>
  );
};

export default ForbiddenPage;
