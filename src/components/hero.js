import React from 'react';
import { ChakraProvider} from "@chakra-ui/react";
import customTheme from "../theme";
import "@fontsource/domine";
import "@fontsource/open-sans";

import patterns from "../assets/patterns.svg";
import patternpad from "../assets/patternpad.svg";
import presenter from "../assets/presenter.svg";
import Particles from 'react-particles-js';

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  chakra,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';

export default function CallToActionWithVideo() {
  return (
        <ChakraProvider theme={customTheme}>
       <Flex
        w={'full'}
        h={'95vh'}
        mt={-8}
        backgroundImage={
          patterns
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 8}}
        px={{ base: 10, md: 10 }}
        py={{ base: 20, md: 200 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.3}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={"blue.300"}>
              A Decade of Expertise
            </Text>
            <br />
            <Text as={'span'} color={'green.200'}>
            in ESG, Carbon Management, <br /> and Social Impact 
            </Text>
          </Heading>
          {/* <Text color={'gray.500'}>
            We support organizations to identify ESG risks, empower them to become more resilient, 
            drive and up-scale their impact and assist them in conducting their operations in a responsible and inclusive manner.
          </Text> */}
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              bg={'pink.200'}
              color={'white.50'}
              _hover={{ bg: 'red.500' }}>
              Let's Meet
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              colorScheme={'green'}
             bg={'green.100'}
            _hover={{ bg: 'orange.500' }}
              fontWeight={'normal'}
              px={6}
              >
              Learn More
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          {/* <Box
            position={'relative'}
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}> */}
            <Image
              alt={'Hero Image'}
              // fit={'fill'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                presenter
              }
            />
          {/* </Box> */}
        </Flex>
      </Stack>
    </Container>
    </Flex>
    </ChakraProvider>
  );
}

export const Blob = (props, IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export const Particless = (props)=> {
  return (
    <Particles
    params={{
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 1000,
          }
        },
      },
    }}
  />
  )
}

// import {
//     Flex,
//     Container,
//     Heading,
//     Stack,
//     Text,
//     Button,
//     Icon,
//     Image,
//     Box,
//   } from '@chakra-ui/react';
// import { ChakraProvider} from "@chakra-ui/react";
// import customTheme from "../theme";
// import cloudy from "../assets/cloudy.svg";
// import cloudybg from "../assets/cloudybg.svg";
// import cloudybl from "../assets/cloudybl.svg";


  
//   export default function CallToActionWithIllustration() {
//     return (
//     <ChakraProvider theme={customTheme}>
//        <Flex
//         w={'full'}
//         h={'100vh'}
//         backgroundImage={
//           cloudybl
//         }
//         backgroundSize={'cover'}
//         backgroundPosition={'center center'}>
//     <Container maxW={'6xl'}>
//       <Stack
//         textAlign={'center'}
//         align={'center'}
//         spacing={{ base: 8, md: 9 }}
//         py={{ base: 15, md: 19 }}>
//         <Heading
//           fontWeight={'700'}
//           color={"blue.300"}
//           fontSize={{ base: '3xl', sm: '4xl', md: '7xl' }}
//           lineHeight={'120%'}>
//           A Decade of Expertise <br/>
//           <Text as={'span'} color={'green.100'}>
//             in ESG, Social Impact, <br/> and Carbon Management
//           </Text>
//         </Heading>
//         <Text fontSize={"lg"} color={'gray.500'} maxW={'4xl'}>
//         We support organizations to identify ESG risks, empower them to become more resilient, 
//         drive and up-scale their impact and assist them in conducting their operations in a responsible and inclusive manner.
//         </Text>
//         <Stack spacing={6} direction={'row'}>
//           <Button
//           fontWeight={'bold'}
//             rounded={'full'}
//             px={6}
//             colorScheme={'green'}
//             bg={'green.100'}
//             _hover={{ bg: 'orange.500' }}>
//             Discover
//           </Button>
//         </Stack>
//         <Flex>
//           {/* <Illustration
//             height={{ sm: '24rem', lg: '26rem' }}
//             mt={{ base: 12, sm: 14 }}
//             justify={'center'}
//             textAlign={'center'}
//           /> */}
//         </Flex>
//       </Stack>
//     </Container>
//     </Flex>

//       </ChakraProvider>
//     );
//   }
  
//   export const Illustration = (props, IconProps) => {
//     return (
//   <svg id="bdfa5e51-8543-4635-b366-be55a5c0ef94" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="951" height="428" viewBox="0 0 951 428"><path id="b606c935-a134-40cd-80b0-a21a1aa0225b" data-name="Path 461" d="M202.74747,626.96869a22.728,22.728,0,0,0,21.947-3.866c7.687-6.452,10.1-17.081,12.058-26.924l5.8-29.112-12.143,8.362c-8.733,6.013-17.662,12.219-23.709,20.929s-8.686,20.6-3.828,30.024" transform="translate(-124.5 -236)" fill="#e6e6e6"/><path id="a422fa29-1efa-4f1e-8f54-a5852f8559f8" data-name="Path 462" d="M203.78548,662.21466c-1.229-8.953-2.493-18.02-1.631-27.069.766-8.036,3.217-15.885,8.209-22.321a37.13178,37.13178,0,0,1,9.527-8.633c.953-.6,1.829.909.881,1.507a35.3,35.3,0,0,0-13.963,16.847c-3.04,7.732-3.528,16.161-3,24.374.317,4.967.988,9.9,1.665,14.83a.9.9,0,0,1-.61,1.074.878.878,0,0,1-1.074-.61Z" transform="translate(-124.5 -236)" fill="#f2f2f2"/><path id="e1d169dc-da63-490d-893d-3e04e06c6dbd" data-name="Path 438" d="M1026.82384,615.57739a24.21459,24.21459,0,0,1-23.38269-4.11877c-8.18977-6.87441-10.758-18.196-12.84671-28.68191l-6.17972-31.01657,12.93769,8.90837c9.30465,6.40641,18.81827,13.01866,25.26012,22.29785s9.25223,21.94707,4.07792,31.988" transform="translate(-124.5 -236)" fill="#e6e6e6"/><path id="b7dc7a19-2955-4780-ad93-c52a96f67a65" data-name="Path 439" d="M1024.82613,655.288c1.62839-11.86368,3.30381-23.88078,2.15884-35.87167-1.01467-10.64932-4.26373-21.0488-10.87831-29.57938a49.20628,49.20628,0,0,0-12.62466-11.44039c-1.26215-.79647-2.42409,1.20355-1.16733,1.997a46.77947,46.77947,0,0,1,18.50445,22.32562c4.02858,10.24607,4.67546,21.41582,3.98155,32.3003-.41944,6.58218-1.31075,13.1212-2.20588,19.65251a1.19817,1.19817,0,0,0,.808,1.42251,1.16348,1.16348,0,0,0,1.42253-.808Z" transform="translate(-124.5 -236)" fill="#f2f2f2"/><path id="ba9a9309-6361-43cb-a10e-efdc2c0b21e6" data-name="Path 442" d="M1013.1051,636.2515a17.82513,17.82513,0,0,1-15.53141,8.01862c-7.86441-.37318-14.41807-5.85973-20.31713-11.07027l-17.452-15.4088,11.54987-.5528c8.30619-.39784,16.82672-.771,24.73813,1.79338s15.20758,8.72638,16.654,16.9154" transform="translate(-124.5 -236)" fill="#e6e6e6"/><path id="abb4e2ed-9276-4565-9a98-ba1ebe7a1fe1" data-name="Path 443" d="M1029.42911,662.10764c-7.83972-13.87142-16.93235-29.28794-33.1808-34.21551a37.02589,37.02589,0,0,0-13.95545-1.441c-1.48189.128-1.1118,2.41174.367,2.28454a34.39826,34.39826,0,0,1,22.27164,5.89214c6.27994,4.27454,11.16975,10.21756,15.30781,16.51907,2.53511,3.86051,4.80576,7.88445,7.07642,11.903C1028.04128,664.33434,1030.16312,663.40681,1029.42911,662.10764Z" transform="translate(-124.5 -236)" fill="#f2f2f2"/><path d="M806.90157,494.26772h-393v-84h393Z" transform="translate(-124.5 -236)" fill="#fff"/><circle cx="340.32583" cy="216.26772" r="21.33847" fill="#53bc7d"/><path d="M514.10749,438.04207a3.55641,3.55641,0,0,0,0,7.11282H773.76687a3.55642,3.55642,0,0,0,0-7.11282Z" transform="translate(-124.5 -236)" fill="#53bc7d"/><path d="M514.10749,459.38049a3.55641,3.55641,0,1,0-.015,7.11281H678.25183a3.55641,3.55641,0,1,0,0-7.11281Z" transform="translate(-124.5 -236)" fill="#53bc7d"/><path d="M806.90157,494.26772h-393v-84h393Zm-387-6h381v-72h-381Z" transform="translate(-124.5 -236)" fill="#ccc"/><path d="M917.57348,473.40257a8.11384,8.11384,0,0,1,6.46229-10.63174l4.44839-18.0001,11.59793.03537-6.639,25.33139a8.15786,8.15786,0,0,1-15.86961,3.26508Z" transform="translate(-124.5 -236)" fill="#ffb7b7"/><path d="M937.15454,461.75439l-17.76294-1.231,8.603-51.26758L922.52,352.80469l17.95605-7.36231,11.97437,62.68946-.03272.11425Z" transform="translate(-124.5 -236)" fill="#3f3d56"/><path d="M799.80793,455.74565a8.11384,8.11384,0,0,1,9.39856-8.15242l9.72939-15.78388,11.03387,3.5731-14.05284,22.09691a8.15786,8.15786,0,0,1-16.109-1.73371Z" transform="translate(-124.5 -236)" fill="#ffb7b7"/><polygon points="730.086 417.104 720.637 417.104 716.142 380.657 730.088 380.658 730.086 417.104" fill="#ffb7b7"/><path d="M856.99574,662.26342l-30.4677-.00113v-.38536a11.85951,11.85951,0,0,1,11.85888-11.85869h.00075l18.60864.00075Z" transform="translate(-124.5 -236)" fill="#2f2e41"/><polygon points="796.006 417.104 786.557 417.104 782.062 380.657 796.008 380.658 796.006 417.104" fill="#ffb7b7"/><path d="M922.91574,662.26342l-30.46771-.00113v-.38536a11.85951,11.85951,0,0,1,11.85888-11.85869h.00076l18.60863.00075Z" transform="translate(-124.5 -236)" fill="#2f2e41"/><circle cx="787.02025" cy="52.40488" r="22.4483" fill="#ffb8b8"/><path d="M903.93836,287.17379a14.6321,14.6321,0,0,1-13.78445-25.659c5.97481-3.99842,14.89776-2.675,20.69,1.96227a20.21132,20.21132,0,0,1,23.366,4.84892c5.59148,6.46829,6.20269,16.73564,2.12789,24.276a26.39108,26.39108,0,0,0,1.54783,24.70771c-1.75322-.07148-5.61221-.39623-10.44082-.81283-1.39729-.12055-2.00162-4.22484-3.53376-4.35686-1.3512-.11643-3.6183,3.74024-5.03409,3.62061-10.48654-.88607-22.22681-1.78619-27.54739-1.61011C895.339,304.76517,899.34839,295.37985,903.93836,287.17379Z" transform="translate(-124.5 -236)" fill="#2f2e41"/><path d="M928.73554,446.54989s7.2958,7.52156,2.841,46.36231l-3.07774,82.47366-5.44525,73.02677-17.51947-1.16488L890.14534,479.16659l-21.54423,61.50578L857.00038,642.35524l-16.80923-1.16488-2.87059-101.1177,7.36883-78.14633Z" transform="translate(-124.5 -236)" fill="#2f2e41"/><path d="M856.52783,466.63086c-8.96338.00049-12.57349-1.07715-12.8374-1.16016l-.416-.13086.073-.42968c.05981-.353,6.082-35.46436,14.345-53.898l5.8103-74.75537a9.85761,9.85761,0,0,1,8.32715-9.00538l.07764.49415-.07764-.49415,14.77979-2.32031,9.041-7.96094,21.65845,1.19776,1.90991,9.16162c2.59033.72412,19.68433,5.96289,21.37622,18.50781l.021.15723-.073.14014L909.2268,406.37891c2.64649,2.61181,23.56031,24.0957,24.97974,51.561l.03418.66065-.64478-.14747c-.06006-.0122-6.75293-1.28417-41.94677,4.66553C875.37231,465.86963,864.05981,466.63086,856.52783,466.63086Z" transform="translate(-124.5 -236)" fill="#3f3d56"/><path d="M821.81079,455.38184l-12.76465-9.83008,28.49-57.001,26.49829-55.86621a4.2338,4.2338,0,0,1,7.90723.68945l6.55883,23.794L857.99,410.53027Z" transform="translate(-124.5 -236)" fill="#3f3d56"/><path d="M1074.5,664h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-124.5 -236)" fill="#cbcbcb"/><polygon points="510.842 126 456.842 126 456.842 72 483.842 72 483.842 74 458.842 74 458.842 124 508.842 124 508.842 99 510.842 99 510.842 126" fill="#3f3d56"/><polygon points="482.829 110.048 469.711 94.985 471.973 93.015 482.855 105.51 512.722 72.002 514.961 73.998 482.829 110.048" fill="#53bc7d"/><path d="M300.20249,303.23976l1.26252-6.31261s18.57-6.31261,20.64769,6.31261Z" transform="translate(-124.5 -236)" fill="#e6e6e6"/><polygon points="211.342 414.822 223.516 414.822 229.308 367.864 211.34 367.864 211.342 414.822" fill="#9f616a"/><path d="M332.73638,646.84739l23.97564-.001h.001a15.28,15.28,0,0,1,15.27915,15.27891v.49651l-39.255.00146Z" transform="translate(-124.5 -236)" fill="#2f2e41"/><polygon points="152.654 414.822 164.828 414.822 170.62 367.864 152.652 367.864 152.654 414.822" fill="#9f616a"/><path d="M274.04836,646.84739l23.97564-.001h.001a15.28,15.28,0,0,1,15.27916,15.27891v.49651l-39.255.00146Z" transform="translate(-124.5 -236)" fill="#2f2e41"/><polygon points="158.027 93.753 144.139 92.49 135.302 134.153 136.564 172.029 150.452 222.53 169.39 211.167 159.29 159.404 158.027 93.753" fill="#3f3d56"/><polygon points="149.237 218.111 152.346 244.624 155.265 306.488 148.558 398.676 172.546 397.389 184.303 301.437 191.484 257.249 201.584 307.75 207.897 402.439 232.516 400.466 232.516 307.417 233.147 239.574 224.31 213.061 149.237 218.111" fill="#2f2e41"/><path d="M325.45292,304.50228s-8.83765-12.62521-25.25043-3.78757l-7.57513,10.10018-23.98791,17.6753,5.05009,59.3385-6.31261,74.48876,89.639-1.26252L341.8657,386.56617V307.02732Z" transform="translate(-124.5 -236)" fill="#3f3d56"/><polygon points="152.346 113.446 145.107 200.001 154.24 153.091 152.346 113.446" opacity="0.25"/><path d="M427.52787,422.01743a9.31156,9.31156,0,0,1-12.201-7.41627l-20.657-5.10516.04069-13.30989L423.781,403.8053a9.362,9.362,0,0,1,3.74691,18.21213Z" transform="translate(-124.5 -236)" fill="#9f616a"/><rect x="398.44295" y="402.3177" width="20.20034" height="8.83765" transform="translate(-186.8863 503.25354) rotate(-80.09845)" fill="#e6e6e6"/><circle cx="186.9028" cy="28.5666" r="25.35253" fill="#9f616a"/><path d="M313.29656,286.93069a25.71665,25.71665,0,0,1-16.825-48.33505,30.07206,30.07206,0,0,1,14.19916-2.54809c7.58225.39864,14.95175,3.20105,22.54166,2.99454l1.10011,1.76832,4.146-1.0055.88841,3.29163,1.09206-.0378c1.95621,3.63533-1.19123,8.83993-5.31924,8.79589a24.56447,24.56447,0,0,1-4.77783-1.04079c-1.59816-.34245-3.48018-.2571-4.58222.94992-1.43219,1.56861-.80874,4.01645-.51011,6.11943s-.44722,4.93564-2.57019,5.00429c-1.08448.03507-2.11589-.74263-3.1815-.53816-1.24116.23816-1.86872,1.73691-1.68751,2.98766a11.8884,11.8884,0,0,0,1.485,3.46676,13.96521,13.96521,0,0,1-5.5397,17.81451" transform="translate(-124.5 -236)" fill="#2f2e41"/><path d="M335.83973,311.90548l6.026-4.87816s12.16174-.84551,11.94211,12.04737l19.45967,60.87147,37.33191,13.22463L405.569,419.1612l-52.81921-20.12161L325.921,354.57119Z" transform="translate(-124.5 -236)" fill="#3f3d56"/><path d="M506.5,664h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-124.5 -236)" fill="#cbcbcb"/></svg>
//     );
//   };
  
//   export const Blob = (props, IconProps) => {
//     return (
//       <Icon
//         width={'100%'}
//         viewBox="0 0 578 440"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         {...props}>
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
//           fill="currentColor"
//         />
//       </Icon>
//     );
//   };


