import * as React from "react"
import Hero from '../components/hero';
import Layout from '../components/layout';
import PropTypes from 'prop-types';
import "@fontsource/domine/700.css"; 

 import {
      Container,
      Stack,
      Flex,
      Box,
      Grid,
      Heading,
      Text,
      Button,
      Image,
      Icon,
      VStack,
      Center,
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
  import whoweare from "../assets/undraw_Business_decisions_re_84ag.svg";
  import whatwedo from "../assets/undraw_Working_re_ddwy.svg";
  import investing from "../assets/undraw_wallet_aym5.svg";
  import esg from "../assets/undraw_environment_iaus.svg";
  import climatechange from "../assets/undraw_circles_y7s2.svg";
  import corpsoc from "../assets/undraw_collab_8oes.svg";
  import letstalk from "../assets/undraw_real_time_collaboration_c62i.svg";
  import squarelysus from "../assets/landing-squarelysus.svg";
  import squarelyimp from "../assets/landing-sqimpact.svg";
  import delivered from "../assets/checklist.png";
  import served from "../assets/completed-task.png";
  import years from "../assets/good-conversion-rate.png";
  import markets from "../assets/global.png";




// markup
const IndexPage = () => {
  return (
    <ChakraProvider theme={customTheme}>
    <Layout>
    <Hero />

    <Box  w={'100%'} position={'relative'}  
             bg={'blue.300'} mx={'auto'} pt={5} py={10} px={{ base: 2, sm: 12, md: 17 }}>
    <Stack spacing={6} as={Container} maxW={'4xl'} textAlign={'center'} position= {'relative'} py={10}>
    <Heading fontSize={'4xl'} color={'blue.50'}>Sustainable Square At A Glance</Heading>
    </Stack>
    <Box maxW="6xl" mx={'auto'} pt={2} px={{ base: 2, sm: 12, md: 15 }}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 7}}>
        <StatsCard2
          title={'Clients Served'}
          stat={'100+'}
          icon={<img src={served}/>}
        />
        <StatsCard2
          title={'Projects Delivered'}
          stat={'150+'}
          icon={<img src={delivered}/>}
        />
        <StatsCard2
          title={'Markets of Operation'}
          stat={'15+'}
          icon={<img src={markets}/>}
        />
         <StatsCard2
          title={'Years of Operation'}
          stat={'10'}
          icon={<img src={years}/>}
        />
      </SimpleGrid>
    </Box>
    </Box>


      <Container maxW={'7xl'}>
        <Stack
          spacing={{ base: 5, md: 8 }}
          py={{ base: 5, md: 8 }}
          direction={{ base: 'column', md: 'row' }}>

          <Stack flex={1} maxW={'50%'} mt={'59px'}  spacing={{ base: 5 }}>
          <Text
            textTransform={'uppercase'}
            color={'gray.50'}
            fontWeight={600}
            fontSize={'sm'}
            mb={-3}
            alignSelf={'flex-start'}
            >
            Who We Are
          </Text>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'green.200'}
                lineHeight={'130%'}
                >
                We drive change by empowering organisations for a redefined impact.
                
              </Text>
            </Heading>
            <Text color={'gray.200'} fontSize="lg">
 We support organizations to identify Environmental, Social and Governance (ESG) Risks, 
 empower them to become more resilient, up-scale their impact and assist them in 
 conducting their operations in a responsible and inclusive manner.
            </Text>
            <Button
            w={'25%'}
            size="md"
            px={6}
            bg={'#151f21'}
            color={'white'}
            bg={'green.200'}
            rounded={'full'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Learn more
          </Button>
          </Stack>

          <Box
            position={'relative'}
            height={'400px'}
            width={'50%'}
            overflow={'hidden'}
            mt={12}
            >
            <Image
            position={'relative'}
            mt={12}
            ml={31}
              alt={'Hero Image'}
              fit={'contain'}
              align={'center'}
              w={500}
              src={
                whoweare
              }
            />
          </Box>
        </Stack>

        <Stack
          spacing={{ base: 5, md: 10 }}
          py={{ base: 5, md: 10 }}
          direction={{ base: 'column', md: 'row' }}>
          <Box
            position={'relative'}
            height={'450px'}
            width={'50%'}
            overflow={'hidden'}
            ml={0}
            >
            <Image
              alt={'Hero Image'}
              fit={'contain'}
              align={'start'}
              w={500}
              src={
                whatwedo
              }
            />
          </Box>
          <Stack flex={1} maxW={'50%'} mt={'59px'} ml={0} mr={0} spacing={{ base: 5 }}>
          <Text
            textTransform={'uppercase'}
            color={'gray.50'}
            fontWeight={600}
            fontSize={'sm'}
            mb={-3}
            alignSelf={'flex-start'}
            >
            What We Do
          </Text>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'green.200'}
                lineHeight={'130%'}
                >
                We work alongside our clients to guide their sustainability journeys.
              </Text>
            </Heading>
            <Text color={'gray.200'} fontSize="lg">
            We work hand in hand with clients to help them prosper, while creating shared value for all stakeholders involved, either through developing effective strategies, values and tool, reporting on progress or empowering them through capacity building.
            </Text>
            <Button
            w={'35%'}
            size="md"
            px={6}
            bg={'#151f21'}
            color={'white'}
            bg={'green.200'}
            rounded={'full'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            See how it works
          </Button>
          </Stack>
        </Stack>

      </Container>

    <Box w={'100%'} bg={'ssgreen.200'}>
    <Stack as={Container} maxW={'6xl'} textAlign={'center'} py={12} mt={0}>
    <Heading mb={10} fontSize={'4xl'} color={'white.50'} mt={12}> Our Advisory Services</Heading>
   <Box mx={8} maxW={'100%'} py={12} textAlign={'center'}>
    <SimpleGrid columns={{ base: 1, md: 4 }} textAlign={'center'} spacing={12}>
      <Feature
          title={'ESG & Sustainability'}
          text={'Take a more responsible approach to investing while doing the best for your long-term security.'}
          icon={<img src={esg}/>}
        />
        <Feature
          title={'Sustainable Investing'}
          text={'Take a more responsible approach to investing while doing the best for your long-term security.'}
          icon={<img src={investing}/>}
        />
      <Feature
          title={'Environmental Responsibility'}
          text={'Take a more responsible approach to investing while doing the best for your long-term security.'}
          icon={<img src={climatechange}/>}
        />
         <Feature
          title={'Corporate Social Responsibility'}
          text={'Take a more responsible approach to investing while doing the best for your long-term security.'}
          icon={<img src={corpsoc}/>}
        />
      </SimpleGrid>
    </Box>
    </Stack>
    <Flex w={'full'} mt={-300}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L30,106.7C60,85,120,43,180,48C240,53,300,107,360,154.7C420,203,480,245,540,224C600,203,660,117,720,90.7C780,64,840,96,900,133.3C960,171,1020,213,1080,192C1140,171,1200,85,1260,64C1320,43,1380,85,1410,106.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </Flex>
    </Box>
    

    <Stack spacing={6} as={Container} maxW={'7xl'} textAlign={'center'} justify={'center'} align={'center'} position= {'relative'} mb={6}>
    <Heading fontSize={'4xl'} color={'blue.300'}>Our Technology Services</Heading>
    </Stack>   
 
    <Stack py={5} spacing={10} direction={{ base: 'column', md: 'row' }} maxW={'full'} textAlign={'center'} position= {'relative'} justify={'center'} align={'center'}>
      
      <Box
        maxW={'450px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'2xl'}
        overflow={'hidden'}>
        <Heading align={'center'} textAlign={'center'} fontSize={'2xl'} fontWeight={500} mt={5} fontFamily={'heading'}>
              Squarely Sustainability
        </Heading>
        <Flex justify={'center'} mt={0}>
          <Image
            size={'md'}
            src={
              squarelysus
            }
          />
        </Flex>
        <Box p={8}>
          <Stack spacing={3} align={'center'} mb={1}>
            <Text textAlign={'center'} fontFamily={"Domine"} fontWeight={600} fontSize={'xl'}  color={'blue.300'}>
              Sustainability reports  <br/>  made easier than ever before
              </Text>
              <Text textAlign={'center'} fontFamily={'body'} fontWeight={400} fontSize={'md'}  color={'blue.300'}>
              Squarely Sustainability is an  <br/> innovative sustainability reporting tool 
              <br/> that automates complex processes and tasks.
              </Text>
              <Button
          align={'center'}
          rounded={'full'}
          size={'md'}
          fontWeight={'bold'}
          px={6}
          color={'white.50'}
          bg={'green.200'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Discover
          </Button>
          </Stack>
        </Box>
        </Box>
        
        
        <Box
        maxW={'450px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'2xl'}
        overflow={'hidden'}>
        <Heading align={'center'} textAlign={'center'} fontSize={'2xl'} fontWeight={500} mt={5} fontFamily={'heading'}>
              Squarely Impact
        </Heading>
        <Flex justify={'center'} mt={0}>
          <Image
            size={'md'}
            src={
              squarelyimp
            }
          />
        </Flex>
        <Box p={8}>
          <Stack spacing={3} align={'center'} mb={1}>
            <Text textAlign={'center'} fontFamily={"Domine"} fontWeight={600} fontSize={'xl'}  color={'blue.300'}>
            Measuring and managing  <br/> genuine impact
              </Text>
              <Text textAlign={'center'} fontFamily={'body'} fontWeight={400} fontSize={'md'}  color={'blue.300'}>
              Squarely Impact allows NGOs <br/>  companies, and governments to 
              track <br/>  impact  until the very last bit of their projects. 
              </Text>
              <Button
          align={'center'}
          rounded={'full'}
          size={'md'}
          fontWeight={'bold'}
          px={6}
          color={'white.50'}
          bg={'green.200'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Discover
          </Button>
          </Stack>
        </Box>
        </Box>
        </Stack>




    <Box
      bg={"blue.300"}
      p={0}
      w={"100%"}
      alignItems="center"
      justifyContent="center"
      mt={10}
    >

<Flex w={'full'} mt={-100}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,128L30,106.7C60,85,120,43,180,48C240,53,300,107,360,154.7C420,203,480,245,540,224C600,203,660,117,720,90.7C780,64,840,96,900,133.3C960,171,1020,213,1080,192C1140,171,1200,85,1260,64C1320,43,1380,85,1410,106.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>    
    </Flex>
    <Container maxW={'6xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 5, md: 6 }}
        py={{ base: 15, md: 19 }}>
          <Box
            position={'relative'}
            height={'400px'}
            width={'50%'}
            overflow={'hidden'}
            mt={-220}
            >
            <Image
            position={'relative'}
              alt={'Hero Image'}
              fit={'contain'}
              align={'center'}
              w={500}
              src={
                letstalk
              }
            />
          </Box>
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
            bg={'green.200'}
            _hover={{ bg: 'orange.500' }}>
            Let's talk
          </Button>
        </Stack>
        <Flex>
        </Flex>
      </Stack>
    </Container>
    </Box>

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


const features = [
  {
    title: 'ESG & Sustainability',
    content: (
      <>
        Our ESG advisory services let you take a more responsible approach to investing while still doing your best for your long-term security.
      </>
    ),
  },
  {
    title: 'Sustainable Investing',
    content: (
      <>
We aim to provide solutions to the ever-growing and changing industry of asset managers in order to foster sustainable growth.
      </>
    ),
  },
  {
    title: 'Environmental Responsibility  & Climate Change',
    content: (
      <>
Our ESG advisory services let you take a more responsible approach to investing while still doing your best for your long-term security.
      </>
    ),
  },
  {
    title: 'Social Impact & Corporate Social Responsibility',
    content: (
      <>
Our ESG advisory services let you take a more responsible approach to investing while still doing your best for your long-term security.
      </>
    ),
  },
];

const Feature = (props) => {
  const { title, text,icon } = props;
  return (
    <Box
    bg={'white.50'}
    mb={4}
    boxShadow={'2xl'}
    borderWidth="1px"
    rounded={'2xl'}
    align={'center'}
    pos={'relative'}
    borderColor={'white.50'}
    borderRadius={'2xl'}>
    <Stack
    width={'80%'}
    spacing={{ base: 2, md: 3 }}
    py={{ base: 2, md: 2 }}
    >
      <Flex
        w={125}
        h={125}
        align={'center'}
        textAlign={'center'}
        justify={'center'}
        rounded={'full'}
        ml={5}
        mt={-65}
        >
        {icon}
      </Flex>
      <Text fontSize={'xl'} align={'center'} fontWeight={600}>{title}</Text>
      
      <Text align={'center'} color={'gray.100'}>{text}</Text>

      <Button colorScheme="green" variant="link">
       Learn more
      </Button>
    </Stack>
    </Box>
  );
};

Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string
};


const StatsCard2=(props) => {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'2'}
      // shadow={'xl'}
      // border={'1px solid'}
      // borderColor={'gray.800'}
      // rounded={'lg'}
      >
      <Flex>
      <Flex
        w={50}
        h={50}
        align={'center'}

        rounded={'full'}
        ml={5}
        mt={3}
        mr={-2}
        >
          {icon}
        </Flex>
        <Box pl={{ base: 2, md: 3 }}>
          <StatNumber color={'blue.100'} fontSize={'5xl'} fontWeight={'bold'}>
            {stat}
          </StatNumber>
          <StatLabel color={'blue.50'} pl={2} fontWeight={'light'} isTruncated>
            {title}
          </StatLabel>
        </Box>
      </Flex>
    </Stat>
  );
}

StatsCard2.propTypes = {
  title:  PropTypes.string,
  stat:  PropTypes.string,
  icon: PropTypes.string
};

