import React from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Image,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";
import WithSubnavigation from "./Navbar/WithSubnavigation";
import newLogo from "./assets/newlogo.png";
import twitter from "./assets/twitter.png";
import fb from "./assets/fb.png";
import linkedin from "./assets/linkedin.png";
import footer from "./assets/footer.png";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      style={{
        color: "#31CD31",
        textDecoration: "underline",
      }}
    >
      {label}
    </Link>
  );
};

const Privacy = () => {
  return (
    <Flex direction={"column"} gap={5} bg={useColorModeValue("", "#0B0449")}>
      <Flex direction={"column"}>
        <WithSubnavigation />
      </Flex>

      <Flex p={10} direction={"column "} gap={5}>
        <Flex direction={"column"}>
          <Heading>Privacy Policy</Heading>
          <Text fontSize={"md"}>Last revised: 16 June 2023</Text>
        </Flex>

        <Flex direction={"column"} gap={5}>
          <Text>
            At DigiMart, we value your privacy.This Privacy Policy explains how
            we collect, use, and protect your personal information when you use
            our cryptocurrency exchange platform.
          </Text>
          <VStack align={"start"}>
            <Heading fontSize={"md"}>1. Information we collect</Heading>
            <Text>
              We may collect certain personal information from you when you sign
              up for an account on DigiMart, such as your name, email address,
              contact details, and government-issued identification documents.
              We may also collect information about your transactions on our
              platform, such as the types of cryptocurrencies you trade and the
              amounts you trade.
            </Text>
          </VStack>

          <VStack align={"start"} spacing={5}>
            <Heading fontSize={"md"}>2. How we use your information</Heading>
            <Text>
              We use the information we collect to provide you with a secure and
              efficient cryptocurrency trading experience. This includes:
            </Text>

            <Text>
              <strong>Account management: </strong>We use your personal
              information to create and manage your account, verify your
              identity, and communicate with you.
            </Text>

            <Text>
              <strong>Transaction processing: </strong>
              We use your information to process and facilitate your
              cryptocurrency transactions on our platform.
            </Text>

            <Text>
              <strong>Security and fraud prevention: </strong>
              Your information helps us detect and prevent fraudulent
              activities, unauthorized access, and other security risks.
            </Text>

            <Text>
              <strong>Legal compliance: </strong>
              We may disclose your information as required by law or regulatory
              authorities to comply with legal obligations and safeguard against
              potential threats.
            </Text>
          </VStack>

          <VStack align={"start"}>
            <Heading fontSize={"md"}>
              3. How we protect your information
            </Heading>
            <Text>
              We take appropriate technical and organizational measures to
              protect your personal information from unauthorized access, loss,
              or misuse. This includes encryption, secure servers, firewalls,
              and regular security audits. However, please note that no method
              of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </Text>
          </VStack>

          <VStack align={"start"}>
            <Heading fontSize={"md"}>4. Third party sharing</Heading>
            <Text>
              We do not sell, trade, or rent your personal information to third
              parties for marketing purposes. However, we may share your
              information with trusted third-party service providers who assist
              us in operating our platform and delivering services to you. These
              third-party providers are bound by strict confidentiality
              agreements and are only allowed to use your information to provide
              the agreed-upon services.
            </Text>
          </VStack>

          <VStack align={"start"}>
            <Heading fontSize={"md"}>5. Cookies and analytics</Heading>
            <Text>
              We may use cookies and similar technologies to enhance your
              browsing experience and improve our services. These technologies
              help us analyze user behavior, preferences, and trends, allowing
              us to optimize our platform and tailor it to your needs. You can
              manage your cookie preferences through your browser settings.
            </Text>
          </VStack>

          <VStack align={"start"}>
            <Heading fontSize={"md"}>6. Changes to this policy</Heading>
            <Text>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We will notify you
              of any significant changes by posting a prominent notice on our
              website or through other communication channels.
            </Text>
          </VStack>

          <VStack align={"start"}>
            <Heading fontSize={"md"}>7. Contact us</Heading>
            <Text>
              If you have any questions or concerns about this Privacy Policy or
              the handling of your personal information, please contact us at
              [email address]. We will be happy to assist you and address any
              concerns you may have. By using the DigiMart cryptocurrency
              exchange platform, you acknowledge that you have read, understood,
              and agreed to this Privacy Policy. Thank you for your trust.
            </Text>
          </VStack>
        </Flex>
      </Flex>

      <Flex
        id="footer"
        display={["none", "none", "flex", "flex"]}
        bg={"#0E0562"}
        direction={["column-reverse", "column", "column", "row"]}
        minH={"60vh"}
        p="20px"
        ml="-20px"
        w={["100vw", "95vw", "98.7vw", "98.7vw"]}
        justifyContent={"space-around"}
      >
        {/* first side */}
        <Flex
          direction={"column"}
          gap={5}
          alignItems={["center", "center", "center", "flex-start"]}
        >
          <Image
            src={newLogo}
            alt="DigiMart"
            width={["70%", "90%", "80%", "80%"]}
          />
          <Flex
            justifyContent={[
              "space-between",
              "space-around",
              "space-around",
              "space-around",
            ]}
            minW={["30vw", "30vw", "10vw"]}
          >
            <Image src={linkedin} alt="linkedin" />
            <Link
              to="https://www.facebook.com/profile.php?id=100070728897129&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={fb} alt="facebook" />
            </Link>
            <Link
              to="https://twitter.com/DigiMartExchang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="twitter" />
            </Link>
          </Flex>
          <Text color={"white"} fontFamily={"Hellix-medium"}>
            © 2023 DigiMart, All rights reserved
          </Text>
        </Flex>

        {/* second side */}
        <Flex direction={"column"} gap={5}>
          <Heading
            color={"#31CD31"}
            fontSize={"32px"}
            fontStyle={"normal"}
            fontFamily={"Hellix-medium"}
          >
            Products
          </Heading>
          <Text color={"white"}>Trade Crypto</Text>
          <Text color={"white"}>Buy Giftcards</Text>
          <Text color={"white"}>Buy Paypal Funds</Text>
        </Flex>

        {/* third side */}
        <Flex direction={"column"} gap={5}>
          <Heading
            color={"#31CD31"}
            fontSize={"32px"}
            fontStyle={"normal"}
            fontFamily={"Hellix-medium"}
          >
            About
          </Heading>
          <Text color={"white"}>About DigiMart</Text>
          <Text color={"white"}>Blog</Text>
          <Text color={"white"}>News</Text>
        </Flex>

        {/* fourth side */}
        <Flex direction={"column"} gap={5}>
          <Heading
            color={"#31CD31"}
            fontSize={"32px"}
            fontStyle={"normal"}
            fontFamily={"Hellix-medium"}
          >
            Help
          </Heading>
          <Text color={"white"}>Terms & conditions</Text>
          <Text color={"white"}>Privacy policy</Text>
        </Flex>

        {/* fifth side */}
        <Flex direction={"column"} gap={5}>
          <Heading
            color={"#31CD31"}
            fontSize={"32px"}
            fontStyle={"normal"}
            fontFamily={"Hellix-medium"}
          >
            Contact Us
          </Heading>
          <Text color={"white"}>
            Email address:
            <br />{" "}
            <ButtonMailto
              label={"hellodigimart@gmail.com"}
              mailto={"mailto:hellodigimart@gmail.com"}
            />
          </Text>
          <Text color={"white"}>
            Phone:
            <br />
            +2347042263619
          </Text>
        </Flex>
      </Flex>

      <Flex
        bgImage={footer}
        display={["flex", "flex", "none", "none"]}
        id="footer"
        bgRepeat={"no-repeat"}
        minH={"60vh"}
        color={"white"}
        direction={"column"}
      >
        <Box p={5}>
          <Accordion allowToggle>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    About
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex direction={"column"} gap={5}>
                  <Text>
                    <Link to="/about">About DigiMart</Link>
                  </Text>
                  <Text>
                    <Link to="/blog">Blog</Link>
                  </Text>
                  <Text>
                    <Link to="/news">News</Link>
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Help
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex direction={"column"} gap={5}>
                  <Text>
                    <Link to="/t&c">Terms & Conditions</Link>
                  </Text>
                  <Text>
                    <Link to="/privacy">Privacy Policy</Link>
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Products
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex direction={"column"} gap={5}>
                  <Text>
                    <Link to="/options">Trade Crypto</Link>
                  </Text>
                  <Text>
                    <Link to="/options">Buy Giftcards</Link>
                  </Text>
                  <Text>
                    <Link to="/options">Buy Paypal Funds</Link>
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Contact Us
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex direction={"column"} gap={5}>
                  <VStack>
                    <Text>Email Address: </Text>
                    <ButtonMailto
                      label={"hellodigimart@gmail.com"}
                      mailto={"mailto:hellodigimart@gmail.com"}
                    />
                  </VStack>

                  <VStack>
                    <Text>Phone:</Text>
                    <Text>+2347042263619</Text>
                  </VStack>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Box>
            <Image src={newLogo} alt={"digimart"} />
          </Box>

          <Flex
            justifyContent={[
              "space-between",
              "space-around",
              "space-around",
              "space-around",
            ]}
            minW={["30vw", "30vw", "10vw"]}
          >
            <Image src={linkedin} alt="linkedin" />
            <Link
              to="https://www.facebook.com/profile.php?id=100070728897129&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={fb} alt="facebook" />
            </Link>
            <Link
              to="https://twitter.com/DigiMartExchang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitter} alt="twitter" />
            </Link>
          </Flex>

          <Text color={"white"} fontFamily={"Hellix-medium"}>
            © 2023 DigiMart, All rights reserved
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Privacy;
