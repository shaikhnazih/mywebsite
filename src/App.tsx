import './App.css'
import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, IconButton, Avatar, Tag, TagLabel, Stack, List, ListItem, ListIcon, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCheckCircle, FaBirthdayCake, FaFlag, FaLanguage } from 'react-icons/fa';

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

function Hero() {
  return (
    <Box as="section" pt={16} pb={12} textAlign="center" bgGradient="linear(to-b, teal.500, teal.700)">
      <Avatar
        size="2xl"
        name="Nazih Mulla"
        src="https://ui-avatars.com/api/?name=Nazih+Mulla&background=0D8ABC&color=fff&size=256"
        mb={4}
        mx="auto"
        boxShadow="lg"
      />
      <Heading as="h1" size="2xl" color="white">Nazih Mulla</Heading>
      <Text fontSize="xl" color="whiteAlpha.900" mt={2} fontWeight="bold">Sr Software Engineer</Text>
      <Text fontSize="md" color="whiteAlpha.800" mt={4} maxW="2xl" mx="auto">
        As a Senior Software Engineer with over 9 years of experience, I am adept at developing scalable systems that enhance user experience. My expertise lies in leading teams, managing complex projects, and delivering innovative solutions in various technologies. I thrive in collaborative environments and am excited about taking on challenging tasks that contribute to organizational success.
      </Text>
      <HStack justify="center" mt={6} spacing={4}>
        <IconButton as="a" href="mailto:nazihshaikh@gmail.com" aria-label="Email" icon={<FaEnvelope />} colorScheme="teal" />
        <IconButton as="a" href="https://github.com/shaikhnazih" aria-label="GitHub" icon={<FaGithub />} colorScheme="teal" />
        <IconButton as="a" href="https://linkedin.com/in/nazihshaikh" aria-label="LinkedIn" icon={<FaLinkedin />} colorScheme="teal" />
      </HStack>
    </Box>
  );
}

function About() {
  return (
    <Box as="section" py={12}>
      <Container maxW="4xl">
        <Heading as="h2" size="lg" mb={4} color="teal.700">About Me</Heading>
        <Text fontSize="lg">
          As a Senior Software Engineer with over 9 years of experience, I am adept at developing scalable systems that enhance user experience. My expertise lies in leading teams, managing complex projects, and delivering innovative solutions in various technologies. I thrive in collaborative environments and am excited about taking on challenging tasks that contribute to organizational success.
        </Text>
      </Container>
    </Box>
  );
}

function Experience() {
  return (
    <Box as="section" py={12} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container maxW="5xl">
        <Heading as="h2" size="lg" mb={8} color="teal.700" textAlign="center">Experience</Heading>
        <VStack spacing={8} align="stretch">
          {experiences.map((exp, idx) => (
            <Box key={idx} p={6} bg="white" borderRadius="lg" boxShadow="md" _dark={{ bg: 'gray.700' }}>
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
        </VStack>
      </Container>
    </Box>
  );
}

function Projects() {
  return (
    <Box as="section" py={12} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container maxW="6xl">
        <Heading as="h2" size="lg" mb={8} color="teal.700" textAlign="center">Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((proj, idx) => (
            <Box key={idx} p={6} bg="white" borderRadius="lg" boxShadow="md" _dark={{ bg: 'gray.700' }}>
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
    </Box>
  );
}

function Education() {
  return (
    <Box as="section" py={12}>
      <Container maxW="4xl">
        <Heading as="h2" size="lg" mb={4} color="teal.700">Education</Heading>
        <VStack spacing={4} align="stretch">
          {education.map((edu, idx) => (
            <Box key={idx} p={4} bg="white" borderRadius="md" boxShadow="sm" _dark={{ bg: 'gray.700' }}>
              <Flex justify="space-between" align="center">
                <Text fontWeight="bold" color="teal.600">{edu.degree}</Text>
                <Text color="gray.500">{edu.period}</Text>
              </Flex>
              <Text color="teal.800">{edu.school}</Text>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

function Skills() {
  return (
    <Box as="section" py={12} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container maxW="5xl">
        <Heading as="h2" size="lg" mb={4} color="teal.700">Skills</Heading>
        <Stack direction="row" flexWrap="wrap" spacing={2}>
          {skills.map((skill, idx) => (
            <Tag key={idx} size="md" colorScheme="teal" m={1} borderRadius="full">
              <TagLabel>{skill}</TagLabel>
            </Tag>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

function PersonalDetails() {
  return (
    <Box as="section" py={12}>
      <Container maxW="4xl">
        <Heading as="h2" size="lg" mb={4} color="teal.700">Personal Details</Heading>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
          {personal.map((item, idx) => (
            <HStack key={idx} spacing={3} align="center">
              <Box as={item.icon} color="teal.500" boxSize={6} />
              <Text fontWeight="bold">{item.label}:</Text>
              <Text>{item.value}</Text>
            </HStack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} minH="100vh">
      <Hero />
      <PersonalDetails />
      <Education />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </Box>
  );
}

export default App;
