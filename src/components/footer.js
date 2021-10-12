import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';
import { FaLinkedinIn, FaInstagram, FaTwitter,FaYoutube,FaFacebookF,FaWhatsapp } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import logo from "../assets/sslogo.svg";


const Logo = (props) => {
  return (
    <svg
    height={35}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1348 276"
      {...props}
    >
      <defs>
        <style>{".cls-1{fill:#fff}"}</style>
      </defs>
      <path
        className="cls-1"
        d="M324.38 186.62c-3.05-4.51-7.56-6.77-13.45-6.77-7.26 0-14.81 3.83-14.81 12.56 0 18.74 35.61 8.83 35.61 33.85 0 12.66-11.87 20.11-22.86 20.11-8.43 0-16.58-3-21.88-10.3l6.38-4.61c2.94 5.1 8.54 8.44 15.8 8.44 7 0 14.91-4.51 14.91-12.66 0-19.62-35.62-8.73-35.62-34.14 0-13.44 11.19-19.72 22.47-19.72 7.85 0 14.13 2.15 19.63 8.43zM546.63 244.61h-39.74c-20.12 0-35.12-15-35.12-35.62s15-35.61 35.12-35.61 35 15 35 35.61c0 12.46-5 23-16.29 28.95v.19h21zm-39.74-6.48c17.07 0 27.37-13.74 27.37-29.14s-10.3-29.14-27.37-29.14-27.47 13.74-27.47 29.15 10.3 29.13 27.47 29.13zM738.35 218.7c0 11.58-4.61 27.67-25.41 27.67s-25.42-16.09-25.42-27.67v-43.56h7.07v42.78c0 20 13 22 18.35 22s18.34-2 18.34-22v-42.78h7.07zM885.24 244.61H877l30.22-69.47h6.87l30.22 69.47h-8.25l-7.65-18.25h-35.52zm10.3-24.73h30.12l-15-36.49zM1091.2 244.61h-7.07v-69.47h21.39c14.13 0 22.86 6.08 22.86 18.55 0 9.61-6.38 17-17.76 17.95l20 33H1122l-19-32.28h-11.8zm0-38.76h12.55c12.66 0 17-5.49 17-12.16s-4.32-12.07-17-12.07h-12.55zM1279.79 238.13H1317v6.48h-44.25v-69.47h43.08v6.48h-36v23.64h33.66v6.48h-33.66zM350.43 64.16C346.64 59.31 339.06 57 333.3 57c-6.68 0-15.93 3-15.93 11.08 0 19.56 49.44 7 49.44 44.59 0 24-19.25 35.33-41.4 35.33-13.8 0-25.94-4.09-36.1-13.49L306.14 116a26.33 26.33 0 0020.63 10.16c7.74 0 16.38-3.63 16.38-11.22 0-19.72-50.35-9.1-50.35-44.89 0-22.91 19.87-34.89 40.95-34.89 12.13 0 23.81 3.19 32.91 11.23zM475 103.9c0 25.33-15.47 44.13-45.2 44.13s-45.35-18.8-45.35-44.13v-66h23.66V103c0 13.19 9.1 23.2 21.69 23.2s21.54-10 21.54-23.2V37.92H475zM549.93 64.16c-3.79-4.85-11.38-7.16-17.14-7.16-6.67 0-15.93 3-15.93 11.08 0 19.56 49.45 7 49.45 44.59 0 24-19.26 35.33-41.41 35.33-13.8 0-25.93-4.09-36.09-13.49L505.64 116a26.3 26.3 0 0020.63 10.16c7.73 0 16.38-3.63 16.38-11.22 0-19.72-50.36-9.1-50.36-44.89 0-22.91 19.87-34.89 40.95-34.89 12.14 0 23.82 3.19 32.92 11.23zM604.7 58.85h-30.63V37.92H659v20.93h-30.64v86.46H604.7zM706.35 37.92h19.56l46.72 107.39h-26.7l-9.25-22.75H695l-9 22.75h-26.06zm9.1 31.25l-13.05 33.36h26.24zM783.12 37.92h23.66v107.39h-23.66zM828.33 37.92h32.15l45.66 74.63h.3V37.92h23.66v107.39h-30.94l-46.87-76.45H852v76.45h-23.67zM987.31 37.92h19.56l46.72 107.39h-26.69l-9.25-22.75h-41.72L967 145.31h-26.1zm9.1 31.25l-13 33.36h26.24zM1064.39 37.92h40c18.8 0 39.28 3.94 39.28 27.3 0 12-7.43 20.18-18.5 23.66v.31c14.1 1.82 23.51 12.28 23.51 26.24 0 22.44-21.24 29.88-40.35 29.88h-44zm23.66 42.92h17.13c7.29 0 14.87-3 14.87-11.67 0-9-8.49-11.23-15.93-11.23h-16.07zm0 44.44h21.23c7.43 0 15.77-3.18 15.77-12.58 0-10.17-11.37-11.83-19.11-11.83h-17.89zM1163.6 37.92h23.66v85.55h43.83v21.84h-67.49zM1245.07 37.92h73v21.84h-49.29v20h46.56v21.84h-46.56v21.85h52v21.84h-75.68zM46.18 38.42c-2.82 9.41-5.34 21.5-5.35 27.47 0 52.2 42.05 61 38.65 93.73-1.64 15.91-10.75 31.8-38.65 26.08v16.84s23 16.06 47.25 8.5c24.39-7.62 36.08-37.22 18.93-65.39-.36-.66-.74-1.28-1.14-1.93 0 0 0-.08-.07-.12C93.69 124 67.16 105 61.21 85.74c-5.58-18 0-35.91 5.33-47.32zM242 247c2.83-9.4 5.35-21.5 5.35-27.47 0-52.19-42-61-38.64-93.73 1.64-15.91 10.75-31.79 38.64-26.07V82.88s-23-16.07-47.24-8.51c-24.4 7.63-36.11 37.23-18.93 65.4.36.65.74 1.28 1.13 1.92a.83.83 0 01.08.12C194.5 161.37 221 180.43 227 199.67c5.58 18 0 35.92-5.33 47.32zM154.86 118c-.52.37-1 .7-1.3.89a46.12 46.12 0 01-26.46 8.36 48 48 0 01-9.84-1c1.3 1.46 2.56 3 3.74 4.58l.13.14.42.62c.29.43.63.94 1 1.51a46 46 0 018.23 26.27 47.39 47.39 0 01-1 9.85 60.45 60.45 0 015.27-4.22l.12-.09-.1.09c.43-.33 1-.71 1.67-1.14a46 46 0 0126.22-8.2 47.8 47.8 0 019.8 1 60.63 60.63 0 01-4.11-5.1l-.12-.18-.08-.12c-.31-.46-.65-.94-.83-1.24a46.07 46.07 0 01-8.39-26.5 47.58 47.58 0 011-9.77 62.33 62.33 0 01-5.09 4.09l-.22.17z"
      />
      <path
        className="cls-1"
        d="M248.93 43.27c-9.4-2.81-21.5-5.34-27.47-5.34-52.19 0-61 42.05-93.73 38.64-15.91-1.64-31.8-10.75-26.07-38.64H84.82S68.75 61 76.31 85.17c7.62 24.4 37.22 36.08 65.39 18.93.66-.36 1.29-.74 1.93-1.13a.83.83 0 01.12-.08c19.56-12.11 38.62-38.63 57.86-44.59 18-5.59 35.92 0 47.32 5.33zM40.75 240.27c9.4 2.82 21.5 5.35 27.47 5.35 52.19 0 61-42.06 93.73-38.65 15.91 1.64 31.8 10.75 26.07 38.65h16.84s16.07-23 8.51-47.25c-7.62-24.37-37.22-36.08-65.37-18.93-.66.36-1.29.74-1.93 1.14l-.12.07c-19.56 12.11-38.62 38.64-57.86 44.59-18 5.59-35.92 0-47.32-5.33z"
      />
    </svg>
  );
};

const SocialButton = (props) => {
  const { children, label,href } = props;
  return (
    <chakra.button
      w={15}
      h={15}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

// SocialButton.propTypes = {
//   children: PropTypes.string,
//   label: PropTypes.string,
//   href: PropTypes.string
// };


const ListHeader = ({children}) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

function LargeWithNewsletter() {
  return (
    <Box
      bg={'blue.300'}
      color={'white'}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={'sm'}>
              © 2021. All rights reserved
            </Text>
            <Stack direction={'row'} columns={{ base: 1, md: 3 }} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'#'}>
                <FaFacebookF />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'#'}>
                <FaLinkedinIn />
              </SocialButton>
              <SocialButton label={'Whatsapp'} href={'#'}>
                <FaWhatsapp />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Privacy Policy</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={'blackAlpha.500'}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={'green.200'}
                color={'white'}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default LargeWithNewsletter;