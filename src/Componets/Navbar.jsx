// import React from 'react';
// import {VStack , Flex , Heading,Spacer} from '@chakra-ui/layout';
// import {IconButton} from '@chakra-ui/button';
// import {FaSun , FaMoon , FaInstagram , FaGithub , FaLinkedin,FaDownload} from 'react-icons/fa';
// import { useColorMode } from '@chakra-ui/react';

// const Navbar = () => {

// const {colorMode , toggleColorMode} = useColorMode();
// const isDark = colorMode==="dark";

//   return (
//     <>
//     <VStack p={5}>
//     <Flex w= "100%">
// <Heading
// ml="8" size="md" fontWeight="semibold" color="cyan.400"
//   >Shivam</Heading>
   
//   <Spacer></Spacer>
  
//     <IconButton ml={2} icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode}></IconButton>
//     <IconButton ml={2} icon={<FaInstagram />} isRound="true" onClick={toggleColorMode}></IconButton>
//     <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={toggleColorMode}></IconButton>

// <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
// </Flex>
//     </VStack>
//     </>
//   )
// }

// export default Navbar



import {
  Heading,
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import AvatarWithRipple from "./Avatar";
import './Navbar.css';
import Res from "./Res";

const Links = ["About", "Skills", "Experience", "Projects", ];

let activeStyle = {
  textDecoration: "none",
  color: "red"
};
let normal_syle = {
  textDecoration: "none",
  color: "green"
};


const NavLink = ({ children }) => (

  <Link
    style={{ cursor: "pointer" }}
   
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    activeClass="active"
    to={children}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        w={"100%"}
        position={"fixed"}
        style={{ zIndex: "999" }}
    
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading size={"lg"}>
                <Link
                  style={{ cursor: "pointer" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  activeClass="active"
                  to={"About"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  color={"blue.400"}
                >
                  {" "}
                  Shivam{" "}
                </Link>
              </Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >

                <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              {Links.map((link) => (
                <NavLink
                style={({ isActive }) => (isActive ? activeStyle : normal_syle)}
                key={link}>{link}</NavLink>
              ))}
                       </div >
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={5}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Link
                style={{ cursor: "pointer" }}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                activeClass="active"
                to={"Contact"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              
              >
                Contact
               
              </Link>

             

            </Button>
            <Res/>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                 
                 <AvatarWithRipple/>

              </MenuButton>
              <MenuList>
                <MenuItem>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/shivam-dubey-6127b4236/"
                  >
                    Linkedin
                  </a>
                </MenuItem>
                <MenuItem>
                  <a target="_blank" href="https://twitter.com/_Shivam_Dubey_">
                    Twitter
                  </a>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <a target="_blank" href="https://github.com/Shivam00002">
                    Github
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}