import './App.css';
import {
  Box, Container, Heading, Text, VStack, HStack, SimpleGrid, IconButton, Avatar, Tag, TagLabel, Stack, List, ListItem, ListIcon, Flex, useColorModeValue, Button, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useBreakpointValue, Fade, Link, chakra
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCheckCircle, FaBirthdayCake, FaFlag, FaLanguage, FaChevronDown, FaChevronUp, FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaTools } from 'react-icons/fa';
import { useRef } from 'react';
const skills = [
  '.NET', '.NET Core', 'ASP.NET MVC', 'Entity Framework', 'Angular', 'AngularJS', 'LINQ', 'React', 'Redux', 'HTML/CSS', 'jQuery', 'Flutter', 'Microsoft SQL Server', 'PostgreSQL', 'MySQL', 'AWS', 'Azure', 'Agile', 'Microservices', 'CRM', 'C#', 'Dart', 'JS', 'TypeScript', 'SQL', 'PWA', 'Web API', 'GIT', 'Unit Tests', 'TFS'
];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Hexaware Technologies',
    period: 'Apr 2021 - Present day',
    description: [
      'A leading IT services company providing solutions for various industries',
      'Product development of project Sterling check',
      'Requirement gathering and impact analysis',
      'Managing /developing and integration of microservices'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'Resulticks Digital Solution Pvt. Ltd',
    period: '02/2019 - 05/2021',
    description: [
      'A digital marketing platform facilitating multi-channel communications',
      'On-premises Development and Implementation of Resulticks platform for HDFC Bank',
      'Development of services for SMS and email campaigns with audience base of nearly 200 million daily'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Atishay Limited',
    period: '04/2018 - 11/2018',
    description: [
      'A firm specializing in software solutions for the hospitality industry',
      'Development of new CR for product Maxidoo',
      'Led a team of 5 in development of Front Office Module',
      'Requirement gathering and analysis'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Freelance',
    period: '03/2015 - 03/2018',
    description: [
      'Freelance software development focusing on web applications',
      'Requirement gathering from clients',
      'Providing solutions and system design',
      'Development of web APIs and UI, deployment on test and live environments'
    ]
  }
];

const education = [
  {
    degree: 'Master Of Science',
    school: 'Mumbai University',
    period: '08/2016 - 07/2018'
  },
  {
    degree: 'Bachelor Of Science',
    school: 'Mumbai University',
    period: '08/2013 - 07/2016'
  }
];

const personal = [
  { icon: FaBirthdayCake, label: 'DOB', value: '22/08/1995' },
  { icon: FaFlag, label: 'Nationality', value: 'INDIAN' },
  { icon: FaLanguage, label: 'Languages', value: 'English, Urdu, Hindi' }
];

const projects = [
  {
    name: 'Prime Partner Plus',
    client: "Dr Reddy's Laboratories Ltd",
    description: `A web and mobile application developed for Dr. Reddy's Laboratories to manage their customer loyalty programs. The platform allows head office users to create customized schemes based on customer sales data. The system includes features for managing POBs (Proof of Business) and PODs (Proof of Delivery), which serve as data sources for scheme calculation. The mobile app, available for both iOS and Android, enables chemists to log in, track their scheme achievements, view accumulated points, and redeem gifts accordingly.`,
    responsibilities: [
      'Performed problem analysis to identify system requirements, potential bottlenecks, and opportunities for optimization.',
      'Designed and implemented relational database schemas ensuring data integrity, performance, and scalability.',
      'Developed and maintained backend APIs to support both the web portal and mobile application, ensuring secure and efficient data exchange.',
      'Built the mobile application using Flutter, providing a seamless cross-platform experience on both Android and iOS devices.',
      'Designed and developed the web portal frontend using ReactJS, delivering responsive and user-friendly interfaces.'
    ],
    technologies: ['C#', 'MVC.Net', 'Web API', 'LINQ', 'Entity Framework', 'MSSQL', 'Flutter', 'Dart']
  },
  {
    name: 'Crompton Konnect',
    client: 'Crompton',
    description: `A web application with Mobile App for IOS and android to manage loyalty program of Company Crompton Greaves Consumer Electricals Limited, Where head office user can create desired schemes for their customers based on their sales. App was provided for showing point breakups and also for customers to redeem the gifts against loyalty points.`,
    responsibilities: [
      'Interacted directly with clients for requirement gathering and translated business needs into functional and technical specifications.',
      'Prepared detailed technical documentation, including requirement specifications, workflow diagrams, and system architecture.',
      'Designed and implemented database schemas ensuring scalability, performance, and data integrity.',
      'Developed RESTful backend APIs using .Net Core web api to support web and mobile applications.',
      'Developed flutter mobile applications for both Android and iOS platforms.'
    ],
    technologies: ['.Net Core', 'MSSQL', 'ReactJS', 'Redux', 'Flutter']
  },
  {
    name: 'Panasonic Loyalty Program',
    client: 'Panasonic',
    description: `A web application to manage loyalty program of Company Panasonic, Where head office user can create desired schemes for their customers based on their sales. App was developed for HO users to approve/ reject the scheme created. And manage the scheme budget through web application.`,
    responsibilities: [
      'Interacted directly with clients for requirement gathering and translated business needs into functional and technical specifications.',
      'Prepared detailed technical documentation, including requirement specifications, workflow diagrams, and system architecture.',
      'Designed and implemented database schemas ensuring scalability, performance, and data integrity.',
      'Developed RESTful backend APIs using .Net Core Web API.',
      'Designed and built responsive and interactive web portal using react.'
    ],
    technologies: ['.Net Core', 'MSSQL', 'ReactJS', 'Redux']
  },
  {
    name: 'Futurist',
    client: 'DSP BlackRock',
    description: `A web application with responsive design to manage loyalty program of Mutual Fund company DSP Blackrock. Based on investment points are calculated and users can see the reports of their investment and can claim rewards against point.`,
    responsibilities: [
      'Developed RESTful backend APIs using ASP.NET Web API 2.0.',
      'Designed and built responsive and interactive user interfaces using AngularJS for a seamless frontend experience.',
      'Managed deployment processes for both test and production environments, ensuring smooth releases and minimal downtime.'
    ],
    technologies: ['C#', 'MVC.Net', 'Web API', 'LINQ', 'Entity Framework', 'MSSQL', 'AngularJS', 'jQuery']
  },
  {
    name: 'Itrak',
    client: 'Pidilite',
    description: `A web application and mobile app for both IOS and android for Field Marketing team of company Pidilite for collecting and managing customer details and feedback on their products, reporting on the collected data for better understanding of their customers. Creating and tracking of meetings held among company’s employee and customers.`,
    responsibilities: [
      'Interacted directly with clients for requirement gathering and translated business needs into functional and technical specifications.',
      'Prepared detailed technical documentation, including requirement specifications, workflow diagrams, and system architecture.',
      'Designed and implemented database schemas ensuring scalability, performance, and data integrity.',
      'Developed RESTful backend APIs using ASP.NET Web API 2.0 to support web and mobile applications.',
      'Designed and built responsive and interactive user interfaces using AngularJS for a seamless frontend experience.',
      'Developed hybrid mobile applications for both Android and iOS platforms, ensuring cross-platform compatibility and optimal performance.',
      'Managed deployment processes for both test and production environments, ensuring smooth releases and minimal downtime.'
    ],
    technologies: ['C#', 'MVC.Net', 'Web API', 'LINQ', 'Entity Framework', 'MSSQL', 'AngularJS', 'jQuery']
  },
  {
    name: 'ERP-CRM',
    client: 'ERP',
    description: `A web application designed for job consultancy company named as ERP Corporation for managing data of clients (Companies) and candidates (Employees). Employee users can download their payslip and other documents similarly client (Company) can download their respective documents. Client management users are provided a web portal for creating and managing their client company lead and can follow up the lead until they become partner (Client company). Employee profile handling users can create and manage employee’s profile that can be mapped to appropriate client company based on their profile.`,
    responsibilities: [
      'Designed and implemented relational database schemas to ensure efficient data storage and retrieval.',
      'Developed backend APIs using .NET MVC framework, focusing on clean architecture and maintainable code.',
      'Designed and developed responsive and dynamic user interfaces using AngularJS for the frontend.',
      'Managed the publishing and deployment of application releases to both test and production environments, ensuring smooth transitions with minimal downtime.'
    ],
    technologies: ['C#', 'MVC.Net', 'Web API', 'LINQ', 'Entity Framework', 'MSSQL', 'AngularJS', 'jQuery']
  }
];


function ProfileCard() {
  const cardBg = useColorModeValue('rgba(255,255,255,0.85)', 'rgba(26,32,44,0.85)');
  const borderColor = useColorModeValue('teal.200', 'teal.700');
  const shadow = useColorModeValue('0 8px 32px 0 rgba(31, 38, 135, 0.15)', '0 8px 32px 0 rgba(0,0,0,0.45)');
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box as="section" pt={10} pb={6} px={2} bgGradient="linear(to-b, teal.400, teal.600, teal.800)" minH="40vh">
      <Container maxW="3xl" centerContent>
        <Box
          w="100%"
          borderRadius="2xl"
          boxShadow={shadow}
          bg={cardBg}
          borderWidth="2px"
          borderColor={borderColor}
          p={{ base: 6, md: 10 }}
          mt={-20}
          backdropFilter="blur(8px)"
          position="relative"
        >
          <Flex direction={isMobile ? 'column' : 'row'} align="center" justify="space-between">
            <Avatar
              size="2xl"
              name="Nazih Mulla"
              src="https://ui-avatars.com/api/?name=Nazih+Mulla&background=0D8ABC&color=fff&size=256"
              mb={isMobile ? 4 : 0}
              mr={isMobile ? 0 : 8}
              boxShadow="lg"
              border="4px solid"
              borderColor="teal.400"
            />
            <Box flex="1">
              <Heading as="h1" size="xl" color="teal.700">Nazih Mulla</Heading>
              <Text fontSize="lg" color="teal.500" fontWeight="bold" mt={1}>Sr Software Engineer</Text>
              <HStack mt={3} spacing={3}>
                <IconButton as="a" href="mailto:nazihshaikh@gmail.com" aria-label="Email" icon={<FaEnvelope />} colorScheme="teal" variant="ghost" />
                <IconButton as="a" href="https://github.com/shaikhnazih" aria-label="GitHub" icon={<FaGithub />} colorScheme="teal" variant="ghost" />
                <IconButton as="a" href="https://linkedin.com/in/nazihshaikh" aria-label="LinkedIn" icon={<FaLinkedin />} colorScheme="teal" variant="ghost" />
              </HStack>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} mt={4}>
                {personal.map((item, idx) => (
                  <HStack key={idx} spacing={2} align="center">
                    <Box as={item.icon} color="teal.400" boxSize={5} />
                    <Text fontWeight="bold" color="teal.600">{item.label}:</Text>
                    <Text color="teal.800">{item.value}</Text>
                  </HStack>
                ))}
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}


function About() {
  return (
    <Box as="section" py={6}>
      <Container maxW="4xl">
        <Text fontSize="lg" color="gray.700" _dark={{ color: 'gray.200' }}>
          As a Senior Software Engineer with over 9 years of experience, I am adept at developing scalable systems that enhance user experience. My expertise lies in leading teams, managing complex projects, and delivering innovative solutions in various technologies. I thrive in collaborative environments and am excited about taking on challenging tasks that contribute to organizational success.
        </Text>
      </Container>
    </Box>
  );
}


function Experience() {
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      {experiences.map((exp, idx) => (
        <AccordionItem key={idx} borderRadius="lg" mb={4} border="none" bg={useColorModeValue('white', 'gray.700')} boxShadow="md">
          <h2>
            <AccordionButton _expanded={{ bg: 'teal.100', color: 'teal.800' }} px={6} py={4}>
              <Flex flex="1" textAlign="left" align="center" justify="space-between" wrap="wrap">
                <Box>
                  <Heading as="h3" size="md" color="teal.600">{exp.title}</Heading>
                  <Text fontWeight="semibold" color="teal.800">{exp.company}</Text>
                </Box>
                <Text fontWeight="bold" color="gray.500">{exp.period}</Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={1} color="gray.700" _dark={{ color: 'gray.200' }}>
              {exp.description.map((desc, i) => (
                <ListItem key={i}>
                  <ListIcon as={FaCheckCircle} color="teal.400" />{desc}
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}


function Projects() {
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      {projects.map((proj, idx) => (
        <AccordionItem key={idx} borderRadius="lg" mb={4} border="none" bg={useColorModeValue('white', 'gray.700')} boxShadow="md">
          <h2>
            <AccordionButton _expanded={{ bg: 'teal.100', color: 'teal.800' }} px={6} py={4}>
              <Flex flex="1" textAlign="left" align="center" justify="space-between" wrap="wrap">
                <Box>
                  <Heading as="h3" size="md" color="teal.600">{proj.name}</Heading>
                  <Text fontWeight="bold" color="teal.400">Client: {proj.client}</Text>
                </Box>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text color="gray.700" _dark={{ color: 'gray.200' }} mb={2}>{proj.description}</Text>
            <Text fontWeight="semibold" color="teal.700" mt={2} mb={1}>Roles & Responsibilities:</Text>
            <List spacing={1} mb={2} color="gray.700" _dark={{ color: 'gray.200' }}>
              {proj.responsibilities.map((item, i) => (
                <ListItem key={i}>
                  <ListIcon as={FaCheckCircle} color="teal.400" />{item}
                </ListItem>
              ))}
            </List>
            <Text fontWeight="semibold" color="teal.700" mt={2} mb={1}>Technologies:</Text>
            <Stack direction="row" flexWrap="wrap" spacing={2}>
              {proj.technologies.map((tech, i) => (
                <Tag key={i} size="sm" colorScheme="teal" m={1} borderRadius="full">
                  <TagLabel>{tech}</TagLabel>
                </Tag>
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}


function Education() {
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      {education.map((edu, idx) => (
        <AccordionItem key={idx} borderRadius="md" mb={2} border="none" bg={useColorModeValue('white', 'gray.700')} boxShadow="sm">
          <h2>
            <AccordionButton _expanded={{ bg: 'teal.100', color: 'teal.800' }} px={6} py={3}>
              <Flex flex="1" textAlign="left" align="center" justify="space-between">
                <Text fontWeight="bold" color="teal.600">{edu.degree}</Text>
                <Text color="gray.500">{edu.period}</Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={2}>
            <Text color="teal.800">{edu.school}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}


function Skills() {
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <AccordionItem borderRadius="md" mb={2} border="none" bg={useColorModeValue('white', 'gray.700')} boxShadow="sm">
        <h2>
          <AccordionButton _expanded={{ bg: 'teal.100', color: 'teal.800' }} px={6} py={3}>
            <Text flex="1" textAlign="left" fontWeight="bold" color="teal.600">Skills</Text>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={2}>
          <Stack direction="row" flexWrap="wrap" spacing={2}>
            {skills.map((skill, idx) => (
              <Tag key={idx} size="md" colorScheme="teal" m={1} borderRadius="full">
                <TagLabel>{skill}</TagLabel>
              </Tag>
            ))}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}



// Sticky Navigation Bar
import { ReactElement } from 'react';

type SectionNav = {
  label: string;
  icon: ReactElement;
  ref: React.RefObject<HTMLElement | null>;
};

function StickyNav({ sections }: { sections: SectionNav[] }) {
  const navBg = useColorModeValue('rgba(255,255,255,0.95)', 'rgba(26,32,44,0.95)');
  return (
    <Box as="nav" position="sticky" top="0" zIndex="100" bg={navBg} boxShadow="sm" py={2} px={{ base: 2, md: 8 }}>
      <Flex align="center" justify="space-between" maxW="6xl" mx="auto">
        <HStack spacing={4}>
          <Avatar size="sm" name="Nazih Mulla" src="https://ui-avatars.com/api/?name=Nazih+Mulla&background=0D8ABC&color=fff&size=128" />
          <Heading as="span" size="sm" color="teal.600" fontWeight="bold">Nazih Mulla</Heading>
        </HStack>
        <HStack spacing={{ base: 1, md: 4 }}>
          {sections.map(({ label, icon, ref }) => (
            <Button
              key={label}
              variant="ghost"
              size="sm"
              leftIcon={icon}
              colorScheme="teal"
              onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
              fontWeight="bold"
              fontSize={{ base: 'xs', md: 'sm' }}
            >
              {label}
            </Button>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}

// Modern Hero Section
function Hero({ aboutRef }: { aboutRef: any }) {
  return (
    <Box
      as="section"
      minH={{ base: '60vh', md: '80vh' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, teal.500 60%, blue.400 100%)"
      position="relative"
      px={2}
    >
      <Container maxW="3xl" centerContent>
        <Fade in>
          <Box
            w="100%"
            borderRadius="2xl"
            boxShadow="2xl"
            bg={useColorModeValue('rgba(255,255,255,0.85)', 'rgba(26,32,44,0.85)')}
            borderWidth="2px"
            borderColor={useColorModeValue('teal.200', 'teal.700')}
            p={{ base: 6, md: 10 }}
            mt={-20}
            backdropFilter="blur(8px)"
            position="relative"
            textAlign="center"
          >
            <Avatar
              size="2xl"
              name="Nazih Mulla"
              src="https://ui-avatars.com/api/?name=Nazih+Mulla&background=0D8ABC&color=fff&size=256"
              mb={4}
              mx="auto"
              boxShadow="lg"
              border="4px solid"
              borderColor="teal.400"
            />
            <Heading as="h1" size="2xl" color="teal.700">Nazih Mulla</Heading>
            <Text fontSize="xl" color="teal.500" fontWeight="bold" mt={1}>Sr Software Engineer</Text>
            <HStack justify="center" mt={4} spacing={4}>
              <IconButton as="a" href="mailto:nazihshaikh@gmail.com" aria-label="Email" icon={<FaEnvelope />} colorScheme="teal" variant="ghost" />
              <IconButton as="a" href="https://github.com/shaikhnazih" aria-label="GitHub" icon={<FaGithub />} colorScheme="teal" variant="ghost" />
              <IconButton as="a" href="https://linkedin.com/in/nazihshaikh" aria-label="LinkedIn" icon={<FaLinkedin />} colorScheme="teal" variant="ghost" />
            </HStack>
            <Text fontSize="md" color="gray.700" _dark={{ color: 'gray.200' }} mt={6} mb={2}>
              As a Senior Software Engineer with over 9 years of experience, I am adept at developing scalable systems that enhance user experience. My expertise lies in leading teams, managing complex projects, and delivering innovative solutions in various technologies.
            </Text>
            <Button
              mt={4}
              colorScheme="teal"
              size="lg"
              onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
              rightIcon={<FaChevronDown />}
              fontWeight="bold"
            >
              Learn More
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

// Modern Section Wrapper
const Section = chakra('section', {
  baseStyle: {
    py: { base: 8, md: 16 },
    px: { base: 2, md: 0 },
    w: '100%',
  },
});

function App() {
  // Section refs for scroll navigation
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLElement>(null);
  const projRef = useRef<HTMLElement>(null);
  const eduRef = useRef<HTMLElement>(null);

  const sections: SectionNav[] = [
    { label: 'About', icon: <FaUser />, ref: aboutRef },
    { label: 'Skills', icon: <FaTools />, ref: skillsRef },
    { label: 'Experience', icon: <FaBriefcase />, ref: expRef },
    { label: 'Projects', icon: <FaProjectDiagram />, ref: projRef },
    { label: 'Education', icon: <FaGraduationCap />, ref: eduRef },
  ];

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh">
      <StickyNav sections={sections} />
      <Hero aboutRef={aboutRef} />
      <Section ref={aboutRef} id="about" bg={useColorModeValue('white', 'gray.800')}>
        <Container maxW="4xl">
          <Heading as="h2" size="xl" mb={4} color="teal.700" textAlign="center">About Me</Heading>
          <Text fontSize="lg" color="gray.700" _dark={{ color: 'gray.200' }} textAlign="center">
            As a Senior Software Engineer with over 9 years of experience, I am adept at developing scalable systems that enhance user experience. My expertise lies in leading teams, managing complex projects, and delivering innovative solutions in various technologies. I thrive in collaborative environments and am excited about taking on challenging tasks that contribute to organizational success.
          </Text>
        </Container>
      </Section>
      <Section ref={skillsRef} id="skills" bg={useColorModeValue('gray.50', 'gray.900')}> 
        <Container maxW="5xl">
          <Heading as="h2" size="xl" mb={4} color="teal.700" textAlign="center">Skills</Heading>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} spacing={4}>
            {skills.map((skill, idx) => (
              <Tag key={idx} size="lg" colorScheme="teal" borderRadius="full" px={4} py={2} fontWeight="bold" fontSize="md" textAlign="center">
                <TagLabel>{skill}</TagLabel>
              </Tag>
            ))}
          </SimpleGrid>
        </Container>
      </Section>
      <Section ref={expRef} id="experience" bg={useColorModeValue('white', 'gray.800')}>
        <Container maxW="5xl">
          <Heading as="h2" size="xl" mb={8} color="teal.700" textAlign="center">Experience</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {experiences.map((exp, idx) => (
              <Box key={idx} p={6} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="xl" boxShadow="lg" _hover={{ boxShadow: '2xl', transform: 'scale(1.03)' }} transition="all 0.2s">
                <Flex justify="space-between" align="center" mb={2} wrap="wrap">
                  <Heading as="h3" size="md" color="teal.600">{exp.title}</Heading>
                  <Text fontWeight="bold" color="gray.500">{exp.period}</Text>
                </Flex>
                <Text fontWeight="semibold" color="teal.800">{exp.company}</Text>
                <List spacing={1} mt={2} color="gray.700" _dark={{ color: 'gray.200' }}>
                  {exp.description.map((desc, i) => (
                    <ListItem key={i}>
                      <ListIcon as={FaCheckCircle} color="teal.400" />{desc}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Section>
      <Section ref={projRef} id="projects" bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="6xl">
          <Heading as="h2" size="xl" mb={8} color="teal.700" textAlign="center">Projects</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {projects.map((proj, idx) => (
              <Box key={idx} p={6} bg={useColorModeValue('white', 'gray.700')} borderRadius="xl" boxShadow="lg" _hover={{ boxShadow: '2xl', transform: 'scale(1.03)' }} transition="all 0.2s">
                <Heading as="h3" size="md" color="teal.600" mb={1}>{proj.name}</Heading>
                <Text fontWeight="bold" color="teal.400" mb={2}>Client: {proj.client}</Text>
                <Text color="gray.700" _dark={{ color: 'gray.200' }} mb={2}>{proj.description}</Text>
                <Text fontWeight="semibold" color="teal.700" mt={2} mb={1}>Roles & Responsibilities:</Text>
                <List spacing={1} mb={2} color="gray.700" _dark={{ color: 'gray.200' }}>
                  {proj.responsibilities.map((item, i) => (
                    <ListItem key={i}>
                      <ListIcon as={FaCheckCircle} color="teal.400" />{item}
                    </ListItem>
                  ))}
                </List>
                <Text fontWeight="semibold" color="teal.700" mt={2} mb={1}>Technologies:</Text>
                <Stack direction="row" flexWrap="wrap" spacing={2}>
                  {proj.technologies.map((tech, i) => (
                    <Tag key={i} size="sm" colorScheme="teal" m={1} borderRadius="full">
                      <TagLabel>{tech}</TagLabel>
                    </Tag>
                  ))}
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Section>
      <Section ref={eduRef} id="education" bg={useColorModeValue('white', 'gray.800')}>
        <Container maxW="4xl">
          <Heading as="h2" size="xl" mb={4} color="teal.700" textAlign="center">Education</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {education.map((edu, idx) => (
              <Box key={idx} p={4} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="lg" boxShadow="md" _hover={{ boxShadow: 'xl', transform: 'scale(1.02)' }} transition="all 0.2s">
                <Flex justify="space-between" align="center">
                  <Text fontWeight="bold" color="teal.600">{edu.degree}</Text>
                  <Text color="gray.500">{edu.period}</Text>
                </Flex>
                <Text color="teal.800">{edu.school}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Section>
      <Box as="footer" py={8} bg={useColorModeValue('teal.700', 'teal.900')} color="white" textAlign="center" mt={12}>
        <Container maxW="4xl">
          <HStack justify="center" spacing={6} mb={2}>
            <IconButton as="a" href="mailto:nazihshaikh@gmail.com" aria-label="Email" icon={<FaEnvelope />} colorScheme="whiteAlpha" variant="ghost" />
            <IconButton as="a" href="https://github.com/shaikhnazih" aria-label="GitHub" icon={<FaGithub />} colorScheme="whiteAlpha" variant="ghost" />
            <IconButton as="a" href="https://linkedin.com/in/nazihshaikh" aria-label="LinkedIn" icon={<FaLinkedin />} colorScheme="whiteAlpha" variant="ghost" />
          </HStack>
          <Text fontSize="sm">&copy; {new Date().getFullYear()} Nazih Mulla. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
}
export default App;
