import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SplitScreen() {
  const navigate = useNavigate();
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      bgImage="url('./images/map image.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            {/* <Text
              as={"span"}
              position={"relative"}
              color={"#1808A3"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                // bg: "blue.400",
                zIndex: -1,
              }}
            >
              Trade with Confidence
            </Text> */}
            <Text color={"#1808A3"} as={"span"}>
              Trade with Confidence
            </Text>{" "}
            <br />{" "}
            <Text color={"#1808A3"} as={"span"}>
              and Ease Today
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"#1808A3"}>
            Trade with confidence and ease on Digimart, the leading P2P crypto
            exchange.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"#1808A3"}
              color={"white"}
              _hover={{
                bg: "blue.400",
              }}
              onClick={() => navigate("/options")}
              cursor="pointer"
            >
              Trade Now
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          padding={"50px"}
          src={"./images/Group 1000001411.png"}
        />
      </Flex>
    </Stack>
  );
}
