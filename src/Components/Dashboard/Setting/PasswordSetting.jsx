import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  useColorModeValue,

} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { getAuth, reauthenticateWithCredential, updatePassword, EmailAuthProvider } from "firebase/auth";
import { app } from "../../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function PasswordCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const auth = getAuth(app);
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login");
      navigate("/login");
      return;
    }

    try {
      if(newPassword.toLowerCase() === confirmNewPassword.toLowerCase()){
        const credentials = EmailAuthProvider.credential(user.email, password);
        await reauthenticateWithCredential(user, credentials);
        await updatePassword(user, newPassword);
        toast.success("Password updated");
      }else{
        toast.error("Passwords Don't Match")
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Error updating password: " + error.message); // Provide a more detailed error message
    }
  };

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
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="newPassword" isRequired>
            <FormLabel>New Password</FormLabel>
            <InputGroup>
              <Input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
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
              <Input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowConfirmPassword((showConfirmPassword) =>
                      !showConfirmPassword
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
              type="submit"
              loadingText="Submitting"
              size="lg"
              bg={"#1808A3"}
              color={"white"}
              _hover={{
                bg: "#31CD31",
              }}
              rounded={"full"}
              onClick={handlePasswordChange}
            >
              Update password
            </Button>
          </Stack>
      </Stack>
    </Flex>
  );
}
