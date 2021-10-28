import * as React from "react"
import Hero from '../components/services-hero';
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
        IoAnalyticsSharp,
        IoLogoBitcoin,
        IoSearchSharp,
      } from 'react-icons/io5';
      import { CheckIcon } from '@chakra-ui/icons';


  import { ChakraProvider} from "@chakra-ui/react";
  import customTheme from "../theme";
 

  import whyss from "../assets/workspace.svg";



// markup
const ServicesPage = () => {
  return (
    <ChakraProvider theme={customTheme}>
    <Layout>
    <Hero />

    <Box  w={'100%'} position={'relative'}  
             bg={'white'} mx={'auto'} pt={5} py={10} px={{ base: 2, sm: 12, md: 17 }}>
    <Stack spacing={6} as={Container} maxW={'4xl'} textAlign={'center'} position= {'relative'} py={10}>
    <Heading fontSize={'5xl'} color={'blue.300'}>Our Expertise</Heading>
    </Stack>
    <VStack spacing={12} justify={'center'} position={'relative'}>

    <Container boxShadow={'xl'} rounded={'2xl'} maxW={'6xl'} bg={'blue.50'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            {/* <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={'blue.300'}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text> */}
            <Heading fontSize={'3xl'} color={'ssgreen.300'}>ESG and Sustainability Advisory </Heading>
            <Text color={'blue.300'} fontSize={'lg'}>
            Sustainability is a business approach that empowers organizations to grow and prosper while creating shared value in the short and long run for key stakeholders. 
            <br/> <br/> 
            Sustainability has become increasingly important for companies, not only as there is a moral responsibility for companies to internalize social and environmental externalities but in order for them to manage non-financial risks, their  reputation and to future-proof their business.
            <br/> <br/> 
            We help our partners develop a set of tactics, values, and instruments that help them manage risks and  translate them into growth opportunities. 

            </Text>
          </Stack>
          <Flex>
          <Stack spacing={4}>
          <Heading color={'blue.300'} fontSize={'lg'}>
            OUR OFFERING 
          </Heading>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={'gray.50'}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                text={'ESG/Sustainability Assessment'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                text={'ESG/ Sustainability Roadmap (Strategy integration)'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                text={'ESG/Sustainability Benchmark & Materiality Analysis'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'ESG/Sustainability Reporting & Assurance'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'ESG/ Sustainability Training & Capacity'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Building Sustainable Supply-Chains and Procurement'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Financial Inclusion Paper '}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'SDGs Alignment & Roadmap '}
              />
              <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Reputation Studies'}
              />
              <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Sustainability Policies'}
              />
            </Stack>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>

      <Container boxShadow={'xl'} rounded={'2xl'} maxW={'6xl'} bg={'white.100'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading fontSize={'3xl'} color={'ssgreen.300'}>Responsible Investment and Sustainable Finance</Heading>
            <Text color={'blue.300'} fontSize={'lg'}>
            Sustainable Investing is a portfolio strategy that can be successfully implemented across most recognized asset classes with the intention to increase profitability while reducing ESG risk and  having  a positive impact on the society.
            <br/> <br/> 
            We have been advising our partners on responsible investing and sustainable finance products and have supported ESG fund structuring.
            <br/> <br/> 
            We strive to help our partners meet their financial objectives while staying responsible towards the society and the environment. 
            <br/> <br/> 
            We aim to provide solutions to the ever-growing and changing industry of asset managers in order to foster sustainable growth. 	

            </Text>
          </Stack>
          <Flex>
          <Stack spacing={4}>
          <Heading color={'blue.300'} fontSize={'lg'}>
            OUR OFFERING 
          </Heading>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={'gray.50'}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                text={'ESG Policy & Procedures aligned with international frameworks'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                text={'ESG Due Diligence'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                text={'ESG Roadmap for Asset Managers and/or Portfolio'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'RI & SF Training & Capacity Building'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'ESG Guidelines & Criteria for Sustainable Funds & Bonds'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'SDG Guidelines & Criteria for Sustainable Funds & Bonds'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Impact Investing '}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Reporting Initiatives (PRI, TCFD, CDP) '}
              />
            </Stack>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>

      <Container boxShadow={'xl'} rounded={'2xl'} maxW={'6xl'} bg={'#DCF9E8'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading fontSize={'3xl'} color={'blue.300'}>Environmental Responsibility and Climate Change</Heading>
            <Text color={'blue.300'} fontSize={'lg'}>
            Environmental sustainability is a growing focus for companies worldwide as the pressure from consumers and regulators increases.
            <br/> <br/> 
            Environmental management and mitigation plans are crucial for managing non-financial risks and  gaining a competitive business advantage. 
            <br/> <br/> 
            We help our partners in their environmental management to ensure the are future fit to our ever changing world.

            </Text>
          </Stack>
          <Flex>
          <Stack spacing={4}>
          <Heading color={'blue.300'} fontSize={'lg'}>
            OUR OFFERING 
          </Heading>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={'gray.50'}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                text={'Climate Change Risk Assessment'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                text={'GHG Protocols & Reporting'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                text={'Corporate & Products’ Carbon Footprints'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Climate Change Roadmap (Strategy Integration)'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Carbon Strategies & Target Setting'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Climate Change Training & Capacity Building'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Environmental Management System - Audit & Structure (ISO 14001-2015) '}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Environmental Reporting & Roadmap (Strategy Integration)'}
              />
            </Stack>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>

      <Container boxShadow={'xl'} rounded={'2xl'} maxW={'6xl'} bg={'#CCD7EE'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading fontSize={'3xl'} color={'blue.300'}>Corporate Social Responsibility and Social Impact</Heading>
            <Text color={'blue.300'} fontSize={'lg'}>
            Social Impact refers to the social value creation or social change that occurs because of the efforts of an organization's community development or CSR programs. 
            <br/> <br/> 
            An organization with a clear social impact scope and direction, responds to its community needs effectively through its programs, monitors and evaluates its performance and quantifies the significance of social change generated by measuring its collective impact. 
            <br/> <br/> 
            With our help, our partners make effective change within the communities they invest in and can measure and communicate about their real impact. 	

            </Text>
          </Stack>
          <Flex>
          <Stack spacing={4}>
          <Heading color={'blue.300'} fontSize={'lg'}>
            OUR OFFERING 
          </Heading>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={'gray.50'}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                text={'Social Investment Strategies'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                text={'Social Impact Maturity Assessment'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                text={'Social Impact Program Development'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Human Rights & Labor Rights Impact Assessment'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Social Impact Monitoring, Evaluation & Measurement'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Community Needs Assessment'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Social Economic Study'}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Sustainability & CSR Label Development '}
              />
            <Feature
                icon={
                  <Icon as={CheckIcon} color={'green.300'} w={5} h={5} />
                }
                text={'Creating Social Impact Platforms'}
              />
            </Stack>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>
      </VStack>
    </Box>

    <Box
      bg={"blue.300"}
      p={0}
      w={"100%"}
      alignItems="center"
      justifyContent="center"
      mt={10}
    >
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 5, md: 6 }}
        py={12}>
        <Heading
          fontWeight={'700'}
          color={"blue.50"}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'120%'}>
          Ready to get started? <br/>

          <Text as={'span'} color={'blue.50'}>
            Get in touch with our team today. <br/>
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

export default ServicesPage



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
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          >
          {icon}
        </Flex>
        <Text color={'blue.300'} fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  


  
