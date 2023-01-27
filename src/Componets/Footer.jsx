import {
    Box,
    chakra,
    Container,
    Heading,
    Button,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Link,
    useColorMode,
  } from "@chakra-ui/react";
  import { PhoneIcon } from "@chakra-ui/icons";
  import { GoMail } from "react-icons/go";
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Shivam Dubey. All rights reserved. Created by Shivam❤️‍🔥 </Text>
          <Box>
            <Button
              size={["sm", "md"]}
              colorScheme="none"
              color={colorMode == "light" ? "black" : "white"}
              leftIcon={<PhoneIcon />}
            >
              +91-8770754593
            </Button>
            <Button
              size={["sm", "md"]}
              colorScheme="none"
              color={colorMode == "light" ? "black" : "white"}
              leftIcon={<GoMail />}
            >
              <a href="mailto:dubey02shiv@gmail.com">
                dubey02shiv@gmail.com 
              </a>
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }