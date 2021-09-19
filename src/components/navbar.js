import React from "react";
import {
    Flex,
    Icon,
    IconButton,
    Image,
    Link,
    Text
  } from "@chakra-ui/react";
  import { HamburgerIcon } from '@chakra-ui/icons';
  import { ChakraProvider} from "@chakra-ui/react";
  import customTheme from "../theme";
  import logo from "../assets/sslogo.svg";


const MenuItems = ({ children, path }) => (
    <ChakraProvider theme={customTheme}>
    <Text
      mt={{ base: 4, md: 0 }}
      mr={{ base: 0, md: 5 }}
      display="block"
      fontSize={{ base: "sm", md: "sm", lg: "md" }}
      fontWeight="800"
      align="center"
      w="100%"
      color='blue.300'
    >
      <Link href={path}>{children}</Link>
    </Text>
    </ChakraProvider>
  );

  function NavBar() {
    return (
    <ChakraProvider theme={customTheme}>
      <Flex
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        px={5}
        py={8}
        boxShadow={{ base: "md", md: "none" }}
        position={{ base: "sticky", md: "static" }}
        top="0"
        left="0"
        zIndex={2}
        bg={'white.50'}
      >
        <Image
          src={logo}
          w={{ base: "35%", sm: "22%", lg: "15%" }}
        />
        <Flex justifyContent="space-between"  alignItems="center" spacing={0}>
        {/* <MenuItems path="/">Home</MenuItems> */}
        <MenuItems path="/about">About</MenuItems>
        <MenuItems path="/">Services</MenuItems>
        <MenuItems path="/">Impact</MenuItems> 
        <MenuItems path="/">Insights</MenuItems>
        <MenuItems path="mailto:kelechi.odom@yahoo.com">Contact</MenuItems>
         {/* <IconButton
                bg="blue.300"
                color="white"
                aria-label="Menu"
                size="lg"
                icon={<HamburgerIcon />}
            />     */}
        </Flex>
      </Flex>
      </ChakraProvider>
    );
  }
  
  export default NavBar;
  