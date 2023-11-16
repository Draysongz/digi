import React, {useState, useEffect} from "react";
import NotificationModal from "../../../Admin/Notifications/NotificationModal";
import {
  Container,
  Flex,
  SimpleGrid,
  Card,
  CardBody,
  Box,
  Text,
  Spacer,
  Heading,
  Image,
  Button,
  HStack,
Icon,
  Input,
  InputRightElement,
  InputGroup,
  useColorModeValue

} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import FileUploadSingle from "../Crypto/FileUpload";
import {toast} from 'react-toastify'

const Gift = () => {
  const [downloadURL, setDownloadURL] = useState("");
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleUploadComplete = (url) => {
    setDownloadURL(url);
    setIsUploadComplete(true);
  };

  
  useEffect(() => {
    console.log("Updated downloadURL:", downloadURL);
    // Perform any actions using the updated downloadURL here, if needed

    // Step 2: Validate the form
    if ( isUploadComplete) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [downloadURL, isUploadComplete]);
  return (
    <Container
    maxWidth="4xl"
    py="20px"
    minHeight="100vh"
    minWidth="83vw"
    overflow={'auto'}
    overflowX={'hidden'}
    bg={useColorModeValue("#F4F5F8", "#050223")}
    color={useColorModeValue("gray.900", "white")}
    position={[null, null, 'absolute',  'absolute']}
    left={['0', '0', '0', "22%", '15.9%']}
  >
    <Flex  direction="column" gap={10} position={[null, null, 'relative', 'relative']}>
      <Box minW="80vw">
        <Flex>
          <Box textAlign="justify">
            <Heading
              as="h3"
              fontFamily="Lato, sans-Serif"
              fontWeight="500"
              fontSize={["20px", "28px", "40px"]}
            >
              Gift Cards
            </Heading>
            <Text
              ml={["0px", "4px", "4px"]}
              minW="76vw"
              fontFamily="Lato sans-Serif"
              fontSize={["15px", "18px", "22px"]}
              fontWeight="200"
            >
              Select the card you would like to sell
            </Text>
          </Box>

          <Spacer />

          <Box alignSelf={["start", "start", "start"]} cursor="pointer">
            <NotificationModal/>
          </Box>
        </Flex>
      </Box>
      
      <Card bg={useColorModeValue("", "#141139")} w={['89vw', '89vw', '80vw']} p={['0px', '0px', '3%']}>
        <CardBody p={10} >
            <Flex direction={'column'} gap={10} >
                <Box>
                <Text fontSize={'lg'}>Select card type</Text>
                <Button
        margin={"1"}
        // onClick={onOpen}
        size="md"
        height="50px"
        width={['65vw', '65vw', "69vw"]}         
        variant="outline"
        _hover={{
          bg: "#E8E6F6",
          color: "#1808A3",
        }}
        fontSize="lg"
        bg={useColorModeValue("white", "transparent")}
        overflow={"auto"}
      >
        <Icon
          justifySelf={"flex-end"}
          ml={"auto"}
          as={ChevronRightIcon}
          fontSize="3xl"
        />
      </Button>
                </Box> 

                <Box >
                <Text fontSize={'lg'}>Select sub-category</Text>
                <Button
        margin={"1"}
        // onClick={onOpen}
        size="md"
        height="50px"
        width={['65vw', '65vw', "69vw"]}        
        variant="outline"
        _hover={{
          bg: "#E8E6F6",
          color: "#1808A3",
        }}
        fontSize="lg"
        bg={useColorModeValue("white", "transparent")}
        overflow={"auto"}
      >
        <Icon
          justifySelf={"flex-end"}
          ml={"auto"}
          as={ChevronRightIcon}
          fontSize="3xl"
        />
      </Button>
                </Box>

                <Box >
                <Text fontSize={'lg'}>Enter gift card amount</Text>
                <Input type="text"   height="50px"
        width={['65vw', '65vw', "69vw"]}       />
                </Box>

                <Box  w={'75vw'}  >
                <Text fontSize={'lg'}>Upload card image</Text>
                <Box  overflowX={'hidden'}>
                <FileUploadSingle onUploadComplete={handleUploadComplete} /> 
                </Box>
                
                
                </Box>
                <Box alignSelf={'center'}>
                <Button
                onClick={() => {
                  if (isFormValid) {
                 console.log('valid')
                } else {
                  toast.error("Please upload a giftcard image.");
                }
              }}
                width={"60vw"}
                disabled={!isFormValid}
                color="#fff"
                bg= {useColorModeValue("#1808A3", "#0B0449")}
                _hover={{
                  bg: "#3626c7",
                }}
                rounded={"2xl"}
              >
                Start trade
              </Button>
                </Box>
            </Flex>
        </CardBody>
      </Card>
      </Flex>
      </Container>
  )
}

export default Gift