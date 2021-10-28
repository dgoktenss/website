import * as React from "react"
import Hero from '../components/about-hero';
import Layout from '../components/layout';
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
      Spacer
    } from '@chakra-ui/react';
    import {
        Stat,
        StatLabel,
        StatNumber,
      } from '@chakra-ui/react';

  import { ChakraProvider} from "@chakra-ui/react";
  import customTheme from "../theme";
 

  import whyss from "../assets/workspace.svg";



// markup
const AboutPage = () => {
  return (
    <ChakraProvider theme={customTheme}>
    <Layout>
    <Hero />

    <Container maxW={'6xl'}>
        <Stack
          spacing={{ base: 5, md: 12 }}
          py={{ base: 5, md: 12 }}
          direction={{ base: 'column', md: 'row' }}>
          
          <Stack flex={1} spacing={{ base: 5 , md: 10 }}>
            <Heading
              lineHeight={1.3}
              fontWeight={'bold'}
              fontFamily={'heading'}
              fontSize={'4xl'}
              color={'green.200'}
              >
            Our Mission

            </Heading>
            <Text color={'gray.200'} fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium sapien ac nulla luctus, in tempor sapien hendrerit. Nulla volutpat ac orci elementum mollis. Phasellus et pharetra purus. 
            Vestibulum eget luctus erat. Phasellus sed consequat augue, eu iaculis mauris. Morbi sit amet arcu nisi. Vivamus nec aliquam lorem, nec ultrices enim. Morbi et nisi sit amet enim interdum molestie ac imperdiet est. 
            <br/> 
    
            </Text>
          </Stack>
          <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          >
            <Image
              alt={'Hero Image'}
              fit={'contain'}
              align={'center'}
              width={'90%'}
              src={
                whyss
              }
            />
          </Flex>
        </Stack>
    </Container>

    <Container maxW={'6xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Stack spacing={4}>
            <Heading fontSize={'5xl'} color={'blue.300'}>Our Core Values</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            These are the principles that guide our work ethic.
            </Text>

          </Stack>

          <Stack
              spacing={10}
            //   divider={
            //     <StackDivider
            //       borderColor={'gray.100'}
            //     />
            //   }
              >
              <Value
                title={'Ethical'}
                text={'We stand by our moral code for ethical & sustainable practices. We lead by example in the way we run our own company.'}
              />
              <Value
                title={'Purposeful'}
                text={'We are driven by purpose and aim to fulfil it through our work. Our purpose transcends from within our people to our stakeholders.'}
              />
              <Value
                title={'Inclusive'}
                text={'We encourage diversity and include diverse opinions in our work. We include all our stakeholders in the growth of our company.'}
              />
              <Value
                title={'Creative'}
                text={'We know we are unconventional and thrive in our authenticity. We deliver results in original & creative ways to our stakeholders.'}
              />
            </Stack>
        </SimpleGrid>
      <SimpleGrid mt={12} columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <Stats title={'Nationalities'} stat={'12'} />
        <Stats title={'Male to Female Employee Ratio'} stat={'1:1.12'} />
        <Stats title={'Full Time Employees'} stat={'27+'} />
        <Stats title={'Hours of Volunteering'} stat={'345'} />
      </SimpleGrid>
      </Container>

    <Stack spacing={6} as={Container} maxW={'4xl'} textAlign={'center'} position= {'relative'} py={10}>
    <Heading fontSize={'5xl'} color={'blue.300'}>Meet Our Team</Heading>
    </Stack>



    <Container maxW={'6xl'} py={12}>
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
              {team.map((team) => (
        <Box
        key={team.title}
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={'white.50'}
        // boxShadow={'2xl'}
        // rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'180px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${team.image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={200}
            width={222}
            objectFit={'cover'}
            src={team.image}
          />
        </Box>
        <Stack pt={10} textAlign={'center'} align={'center'}>
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
          {team.title}
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          {team.country}
          </Text>
          <Text fontWeight={800} fontSize={'md'}>
          {team.text}
          </Text>

        </Stack>
      </Box>
              ))}
            </SimpleGrid>
    </Container>

    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 5, md: 6 }}
        py={12}>
        <Heading
          fontWeight={'700'}
          color={"blue.300"}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'120%'}>
          Or even better, join us.
        </Heading>
        <Text color={'blue.300'}>
        Help us create a world without financial stress. 
        Embrace the adventure of pioneering the benefits space. 
        <br/> Work on challenging and complex problems.
          </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
          fontWeight={'bold'}
            rounded={'full'}
            px={6}
            colorScheme={'green'}
            bg={'green.200'}
            _hover={{ bg: 'orange.500' }}>
            Careers
          </Button>
        </Stack>
        <Flex>
        </Flex>
      </Stack>
    </Container>

    </Layout>
    </ChakraProvider>
  )
}

export default AboutPage



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


  const Value = ( props) => {
    const { title, text } = props; 
    return (
      <Stack direction={'column'} align={'start'}>
        <Text fontSize={'xl'} color={'green.200'}fontWeight={700}>{title}</Text>
        <Text color={'blue.300'} fontWeight={300}>{text}</Text>
      </Stack>
    );
  };
  


  const Stats=(props) => {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        >
        <StatNumber color={'green.200'} fontSize={'5xl'} fontWeight={'bold'}>
          {stat}
        </StatNumber>
        <StatLabel w={'80%'} color={'blue.300'} fontSize={'md'} fontWeight={'light'}>
          {title}
        </StatLabel>
      </Stat>
    );
  }

  const team = [
    {
      title: 'Monaem Ben Lellahom',
      country: 'UAE',
      text: (
        <>
        Group CEO/Founding Partner
        </>
      ),
      image: 'https://sustainablesquare.com/wp-content/uploads/2017/05/monaem.png',
    },
    {
        title: 'Eric Hensel',
        country: 'UAE',
        text: (
          <>
            Expansion CEO/Global Founding Partner
          </>
        ),
        image: 'https://sustainablesquare.com/wp-content/uploads/2017/05/Eric-Copy.png',
      },

      {
        title: 'Davide Del Deo',
        country: 'UAE',
        text: (
          <>
            Sr. Sustainability and Responsible Investment Advisor
          </>
        ),
        image: 'https://sustainablesquare.com/wp-content/uploads/2020/05/PhotoID-removebg-preview.jpg',
      },

      {
        title: 'Dinah Gengmei',
        country: 'UAE',
        text: (
          <>
            Social Impact Analyst
          </>
        ),
        image: 'https://sustainablesquare.com/wp-content/uploads/2021/02/Dinah-e1613634806764.jpg',
      },

      {
        title: 'Deniz Gokten',
        country: 'UAE',
        text: (
          <>
            Software Developer
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Rach Golli',
        country: 'UAE',
        text: (
          <>
            Sustainability and Social Impact Advisor
          </>
        ),
        image: 'https://sustainablesquare.com/wp-content/uploads/2020/09/rach-e1600067434679.jpg',
      },

      {
        title: 'Eman Husain',
        country: 'UAE',
        text: (
          <>
            Sr. Sustainability and Social Investment Advisor
          </>
        ),
        image: 'https://sustainablesquare.com/wp-content/uploads/2017/05/eman-Copy.png',
      },

      {
        title: 'Sameera Sabharwale',
        country: 'UAE',
        text: (
          <>
           Sr. Sustainability and Social Investment Advisor
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },
      {
        title: 'Riad Wakim',
        country: 'UAE',
        text: (
          <>
            Sr. Sustainability and Climate Change Advisor
          </>
        ),
        image: 'https://sustainablesquare.com/wp-content/uploads/2020/05/Riad_Wakim_-_sustainability_and_social_impact_advisor-removebg-preview.jpg',
      },

      {
        title: 'Mila Wakim',
        country: 'UAE',
        text: (
          <>
            Head of Security and Animal Rights
          </>
        ),
        image: 'https://sustainablesquare.com/wp-content/uploads/2021/02/Mila-e1613634027397.jpg',
      },


      {
        title: 'Svenja Weber',
        country: 'UAE',
        text: (
          <>
            ESG/Sustainability Advisor
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Jinu George',
        country: 'India',
        text: (
          <>
            Sustainability and Social Investment Advisor
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Chandni Patel',
        country: 'India',
        text: (
          <>
            Social Investment Advisor
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Priyanka Dudeja',
        country: 'India',
        text: (
          <>
            Social Investment Advisor
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Sudhananda Mallick',
        country: 'India',
        text: (
          <>
            Sustainability and Social Impact Analyst
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Ramesh Balasingh',
        country: 'India',
        text: (
          <>
            Social Impact Data Analyst
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Saakshi Kale',
        country: 'India',
        text: (
          <>
            Sustainability and Social Impact Analyst
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Muhammed Nidhal',
        country: 'India',
        text: (
          <>
            Social Impact Analyst
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Priya Baheti',
        country: 'India',
        text: (
          <>
            Finance Manager
          </>
        ),
        image: 'https://sustainablesquare.com/wp-content/uploads/2021/03/Untitled-design-1.jpg',
      },

      {
        title: 'Enock Nyachae',
        country: 'Kenya',
        text: (
          <>
            Sr. Sustainability and Social Investment Advisor
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Collins Kinoti',
        country: 'Kenya',
        text: (
          <>
            Partnerships Manager (East Africa)
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Jesse Gad Baddoo',
        country: 'Ghana',
        text: (
          <>
            Partnerships Manager (West Africa)
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },

      {
        title: 'Ezgi Dogan',
        country: 'Turkey',
        text: (
          <>
            Strategy and Growth Manager
          </>
        ),
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQGqSCNIB1KBKg/company-logo_200_200/0/1519894710860?e=2159024400&v=beta&t=7K-zrMTCPLcsa6VSZBBZ0nK9C8hTKbfGetdDP60Mr-M',
      },



  ];


  
