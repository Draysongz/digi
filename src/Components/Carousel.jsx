import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Wrap,
  WrapItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ images }) => {
  return (
    <Box mt={"100px"}>
      <Carousel
        showThumbs={false}
        autoPlay={true} // Enable auto-scroll
        infiniteLoop={true} // Optionally, enable infinite looping
        showStatus={false}
        interval={3000} // Set the time interval in milliseconds (e.g., 3 seconds)
        transitionTime={500}
        showArrows={false}
      >
        {images.map((image, index) => (
          <Flex
            key={index}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex w={"50%"}>
              <Flex
                p={5}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"md"}
                minH={"50vh"}
                minW={"30vw"}
                background={"#E8E6F6"}
              >
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="2xl"
                      height={"55vh"}
                      width={"25vw"}
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                    />{" "}
                  </WrapItem>
                </Wrap>
              </Flex>
            </Flex>

            <Flex w={"50%"} direction={"column"} color={"white"} gap={5}>
              <Flex>
                <Heading fontSize={"8xl"} fontWeight={"700"}>
                  “
                </Heading>
              </Flex>

              <Text textAlign={"justify"} scrollBehavior={"smooth"} w={"30vw"}>
                We value transparency and efficiency. With Digimart, you can
                expect lightning-fast transactions that are processed promptly,
                We value transparency and efficiency. With Digimart, you can
                expect{" "}
              </Text>

              <Text fontStyle={"italic"}>Caleb, Web developer </Text>
            </Flex>
          </Flex>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;

export const MobileCarousel = ({ images }) => {
  return (
    <Box mt={"30px"}>
      <Carousel
        showThumbs={false}
        autoPlay={true} // Enable auto-scroll
        infiniteLoop={true} // Optionally, enable infinite looping
        showStatus={false}
        interval={3000} // Set the time interval in milliseconds (e.g., 3 seconds)
        transitionTime={500}
        showArrows={false}
      >
        {images.map((image, index) => (
          <Flex
          key={index}
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={'column'}>
            

            <Wrap>
              <WrapItem>
                <Avatar size={'2xl'} name="Ayomide Gidigbi" src="https://bit.ly/sage-adebayo" />
              </WrapItem>
            </Wrap>

            <Flex direction={'column'} color={'white'}>
            <Flex>
                <Heading fontSize={"6xl"} fontWeight={"700"}>
                  “
                </Heading>
              </Flex>

              <Text textAlign={"center"}>
                We value transparency and efficiency. With Digimart, you can
                expect lightning-fast transactions that are processed promptly,
                We value transparency and efficiency. With Digimart, you can
                expect{" "}
              </Text>

              <Text fontStyle={"italic"}>Caleb, Web developer </Text>
            </Flex>
          </Flex>
        ))}
      </Carousel>
    </Box>
  );
};


