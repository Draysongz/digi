import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure,
  IconButton,
  Flex,
  Icon,
  Button,
  Box,
  VStack,
  Text,
  Heading,
  Center,
  h3,
  Stack,
} from "@chakra-ui/react";
import { MdCircleNotifications } from "react-icons/md";
import { EmailIcon } from "@chakra-ui/icons";

export function NotifIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <IconButton
            border={"none"}
            fontSize={"4xl"}
            variant={"outline"}
            // onClick={onOpen}
            aria-label="open notification"
            icon={<MdCircleNotifications />}
          />
          {/* <Button>Trigger</Button> */}
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            <strong>Notification</strong>
          </PopoverHeader>
          <PopoverBody>All notifications will appear here !</PopoverBody>
          <Stack align={"center"} spacing={3} mb={5}>
            {" "}
            <Button
              p={1}
              width={"300px"}
              height={"20"}
              justifyContent={"flex-start"}
            >
              <Flex>
                <Icon as={EmailIcon} fontSize="md" mx={1} color={"blue"} />
                <VStack align={"start"}>
                  <Heading size={"xs"}>Login attempted from new IP</Heading>
                  <Text fontSize="xs">
                    The system has detected that your account is....
                  </Text>
                  <Text fontSize="xs">1hr ago</Text>
                </VStack>
              </Flex>
            </Button>
            <Button
              p={1}
              width={"300px"}
              height={"20"}
              justifyContent={"flex-start"}
            >
              <Flex>
                <Icon as={EmailIcon} fontSize="md" mx={1} color={"blue"} />
                <VStack align={"start"}>
                  <Heading size={"xs"}>Login attempted from new IP</Heading>
                  <Text fontSize="xs">
                    The system has detected that your account is....
                  </Text>
                  <Text fontSize="xs">1hr ago</Text>
                </VStack>
              </Flex>
            </Button>
          </Stack>
        </PopoverContent>
      </Popover>
    </>
  );
}
