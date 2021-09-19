import * as React from "react"
import Hero from '../components/hero';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import {  FcDonate, FcGlobe, FcLandscape, FcBullish, FcBiomass,FcConferenceCall } from 'react-icons/fc';
 import {
      Container,
      Stack,
      Flex,
      Box,
      Heading,
      Text,
      Button,
      Image,
      Icon,
      VStack,
      StackDivider,
      SimpleGrid,
      Link,
      chakra
    } from '@chakra-ui/react';
    import {
      Stat,
      StatLabel,
      StatNumber,
    } from '@chakra-ui/react';
  import { ChakraProvider} from "@chakra-ui/react";
  import customTheme from "../theme";
  import { BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  import analytics from "../assets/analytics.svg";
  import dash from "../assets/dash.svg";
  import collab from "../assets/collab.svg";
  import handshake from "../assets/handshake.svg";
  import office from "../assets/growth.svg";
  import money from "../assets/money.svg";
  import responsibility from "../assets/responsibility.svg";
  import save from "../assets/save.svg";
  import help from "../assets/help.svg";






// markup
const IndexPage = () => {
  return (
    <ChakraProvider theme={customTheme}>
    <Layout>
    <Hero />
    <Box zIndex={6} w={'100%'} bg={'blue.50'} mx={'auto'} pt={5} py={10} px={{ base: 2, sm: 12, md: 17 }}>
    <Stack spacing={6} as={Container} maxW={'4xl'} textAlign={'center'} position= {'relative'} py={4}>
    <Heading fontSize={'5xl'} color={'blue.300'}>Sustainable Square At A Glance</Heading>
      </Stack>
    <Box maxW="6xl" mx={'auto'} pt={2} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 12}}>
        <StatsCard2
          title={'Clients Served'}
          stat={'100+'}
          icon={<BsPerson size={'3em'} />}
        />
        <StatsCard2
          title={'Projects Delivered'}
          stat={'150+'}
          icon={<FiServer size={'3em'} />}
        />
        <StatsCard2
          title={'Markets of Operation'}
          stat={'15+'}
          icon={<GoLocation size={'3em'} />}
        />
         <StatsCard2
          title={'Years of Operation'}
          stat={'10'}
          icon={<GoLocation size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
      </Box> 
      <Container maxW={'5xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 5, md: 10 }}
          py={{ base: 5, md: 10 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'blue.300'}
                >
                Who We Are
              </Text>
            </Heading>
            <Text color={'gray.100'}>
 We support organizations to identify Environmental, Social and Governance (ESG) Risks, empower them to become more resilient, drive and up-scale their impact and assist them in conducting their operations in a responsible and inclusive manner.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'bold'}
                px={6}
                bg={'green.100'}
                _hover={{ bg: 'green.200' }}
                color={'white'}>
                About Us
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'250%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={'#F3F6F9'}
            />
              <Image
                alt={'Side Image'}
                fit={'contain'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  handshake
                }
              />
          </Flex>
        </Stack>
      </Container>

    <Container maxW={'6xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
            <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'250%'}
              h={'135%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={'#F3F6F9'}
            />
              <Image
                alt={'Image'}
                fit={'contain'}
                align={'center'}
                w={'100%'}
                src={
                    analytics
                  }
              />
          </Flex>
          <Stack px={5} flex={1} spacing={{ base: 5, md: 10}} >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'blue.300'}
                >
                What We Do
              </Text>
            </Heading>
            <Text color={'gray.100'}>
            We work hand in hand with clients to help them prosper, while creating shared value for all stakeholders involved, either through developing effective strategies, values and tool, reporting on progress or empowering them through capacity building. 
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'bold'}
                px={6}
                bg={'green.100'}
                _hover={{ bg: 'green.200' }}
                color={'white'}>
                Services
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    <Stack spacing={6} as={Container} maxW={'4xl'} textAlign={'center'} position= {'relative'} py={5}>
    <Heading fontSize={'5xl'} color={'blue.300'}>Our Services</Heading>
    </Stack>

    <Container maxW={'6xl'} py={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex >
      {/* <Heading fontSize={'5xl'} color={'blue.300'}>Advisory</Heading> */}
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
            office
            }
            objectFit={'contain'}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading color={'blue.300'}>Advisory</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Feature
                    icon={          <Image
                      rounded={'md'}
                      alt={'feature image'}
                      src={
                      responsibility
                      }
                      objectFit={'contain'}
                    />}
          title={'ESG & Sustainability'}
          text={
            'Our ESG advisory services let you take a more responsible approach to investing while still doing your best for your long-term security.'
          }
        />
        <Feature
          icon={          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
            money
            }
            objectFit={'contain'}
          />}          title={'Sustainable Investing'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
            save
            }
            objectFit={'contain'}
          />}          title={'Environmental Responsibility & Climate Change'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
            help
            }
            objectFit={'contain'}
          />}
          title={'Social Impact & Corporate Social Responsibility'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
        </Stack>
      </SimpleGrid>
    </Container>

    <Container maxW={'6xl'} py={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading color={'blue.300'}>Technology</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Feature
          icon={<Icon as={FcBiomass} w={10} h={10} />}
          title={'Squarely Sustainability'}
          text={
            'Our ESG advisory services let you take a more responsible approach to investing while still doing your best for your long-term security.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Squarely Impact'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
            dash
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>

    <Flex
      bg={"blue.300"}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
    <Container maxW={'6xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 9 }}
        py={{ base: 15, md: 19 }}>
          <Flex
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
              <Image
                alt={'Image'}
                fit={'contain'}
                align={'center'}
                w={'40%'}
                src={
                    collab
                  }
              />
          </Flex>
        <Heading
          fontWeight={'700'}
          color={"blue.100"}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'120%'}>
          Ready to get started? <br/>
          <Text as={'span'} color={'white.50'}>
            Talk to our team today. <br/>
          </Text>
        </Heading>
        <Stack spacing={6} direction={'row'}>
          <Button
          fontWeight={'bold'}
            rounded={'full'}
            px={6}
            colorScheme={'green'}
            bg={'blue.100'}
            _hover={{ bg: 'orange.500' }}>
            Discover
          </Button>
        </Stack>
        <Flex>
        </Flex>
      </Stack>
    </Container>
    </Flex>

    </Layout>
    </ChakraProvider>
  )
}



export default IndexPage

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


const Feature = (props) => {
  const { title, text,icon } = props;
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        // bg={'green.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.100'}>{text}</Text>
    </Stack>
  );
};

Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string
};

const Feature2 = (props) => {
  const { title, text,icon } = props;
  return (
    <VStack
    textAlign="center"
    justify="center">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'green.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text color={'blue.300'} fontSize={'2xl'} fontWeight={'bold'}>{title}</Text>
      <Text color={'blue.300'}>{text}</Text>
    </VStack>
  );
};

Feature2.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string
};

const StatsCard = (props) => {
  const { icon, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={'white.50'}
      bg={'white.50'}
      rounded={'lg'}
      >
      {/* <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel> */}
      <StatNumber fontSize={'2xl'} fontWeight={'medium'} textAlign={'center'}>
        {stat}
      </StatNumber>
          <Flex align={'center'}>
      {icon}
      </Flex>
    </Stat>
  );
};

StatsCard.propTypes = {
  title:  PropTypes.string,
  stat:  PropTypes.string,
  icon: PropTypes.string
};

const StatsCard2=(props) => {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'2'}
      >
      <Flex justifyContent={'space-around'}>
        <Box pl={{ base: 2, md: 3 }}>
          <StatNumber color={'blue.200'} fontSize={'7xl'} fontWeight={'bold'}>
            {stat}
          </StatNumber>
          <StatLabel color={'blue.300'} pl={3} fontWeight={'light'} isTruncated>
            {title}
          </StatLabel>
        </Box>
        {/* <Box
          my={'auto'}
          color={'gray.800'}
          alignContent={'center'}>
          {icon}
        </Box> */}
      </Flex>
    </Stat>
  );
}

StatsCard2.propTypes = {
  title:  PropTypes.string,
  stat:  PropTypes.string,
  icon: PropTypes.string
};


    {/* <Stack spacing={6} as={Container} maxW={'4xl'} textAlign={'center'} position= {'relative'} zIndex={1}>
        <Heading fontSize={'5xl'} color={'blue.300'}>Services</Heading>
        <Text color={'blue.200'} fontSize={'xl'}>
        Our team of experts has worked with leading organizations in various industries, 
        across different geographies, to transform the way they conduct business.        
        </Text>
      </Stack> */}
      {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 20 }} mt={10} mr={10} ml={10}>
        <StatsCard stat={'Advisory'} icon={<Icon as={FcBiomass} w={40} h={40} align={'center'} />} />
        <StatsCard stat={'Technology'} />
        <StatsCard stat={'Responsible Investment'} />
      </SimpleGrid> */}
      {/* <Box align={'center'} p={4}>
      <SimpleGrid align={'center'} columns={{ base: 1, md: 3 }} spacing={15}>
        <Feature2
          icon={<Icon as={FcLandscape} w={10} h={10} />}
          title={'Advisory'}
          text={
            'ESG, Climate Change and Social Impact'
          }
        />
        <Feature2
          icon={<Icon as={FcLandscape} w={10} h={10} />}
          title={'Technology'}
          text={
            'Technologies for ESG and Impact Management'
          }
        />
        <Feature2
          icon={<Icon as={FcLandscape} w={10} h={10} />}
          title={'Responsible Investment'}
          text={
            'Responsible Capital Deployment Practices'
          }
        />
      </SimpleGrid> </Box> */} 
