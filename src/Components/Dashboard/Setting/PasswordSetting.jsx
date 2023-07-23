import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function PasswordCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Flex justify={"center"} maxW={"100vw"}>
      <Stack
        bg={useColorModeValue("white", "gray.700")}
        color={useColorModeValue("gray.900", "white")}
        p={5}
        borderRadius={"lg"}
        boxShadow={"lg"}
      >
        <FormControl id="password" isRequired>
          <FormLabel>Current Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="newPassword" isRequired>
          <FormLabel>New Password</FormLabel>
          <InputGroup>
            <Input type={showNewPassword ? "text" : "password"} />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() =>
                  setShowNewPassword((showNewPassword) => !showNewPassword)
                }
              >
                {showNewPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="confirmPassword" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input type={showConfirmPassword ? "text" : "password"} />
            <InputRightElement h={"full"}>
              <Button
                variant={"ghost"}
                onClick={() =>
                  setShowConfirmPassword(
                    (showConfirmPassword) => !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Stack spacing={5} pt={2}>
          <Button
            loadingText="Submitting"
            size="lg"
            bg={"#1808A3"}
            color={"white"}
            _hover={{
              bg: "#31CD31",
            }}
            rounded={"full"}
          >
            Update password
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
