import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, IconButton, Avatar, Tag, TagLabel, Stack, List, ListItem, ListIcon, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCheckCircle, FaBirthdayCake, FaFlag, FaLanguage } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
    return (_jsxs(Box, { as: "section", pt: 16, pb: 12, textAlign: "center", bgGradient: "linear(to-b, teal.500, teal.700)", children: [_jsx(Avatar, { size: "2xl", name: "Nazih Mulla", src: "https://ui-avatars.com/api/?name=Nazih+Mulla&background=0D8ABC&color=fff&size=256", mb: 4, mx: "auto", boxShadow: "lg" }), _jsx(Heading, { as: "h1", size: "2xl", color: "white", children: "Nazih Mullah" }), _jsx(Text, { fontSize: "xl", color: "whiteAlpha.900", mt: 2, fontWeight: "bold", children: "Sr Software Engineer" }), _jsx(Text, { fontSize: "md", color: "whiteAlpha.800", mt: 4, maxW: "2xl", mx: "auto", children: "As a Senior Software Engineer with over 9 years of experience, I am adept at developing scalable systems that enhance user experience. My expertise lies in leading teams, managing complex projects, and delivering innovative solutions in various technologies. I thrive in collaborative environments and am excited about taking on challenging tasks that contribute to organizational success." }), _jsxs(HStack, { justify: "center", mt: 6, spacing: 4, children: [_jsx(IconButton, { as: "a", href: "mailto:nazihshaikh@gmail.com", "aria-label": "Email", icon: _jsx(FaEnvelope, {}), colorScheme: "teal" }), _jsx(IconButton, { as: "a", href: "https://github.com/shaikhnazih", "aria-label": "GitHub", icon: _jsx(FaGithub, {}), colorScheme: "teal" }), _jsx(IconButton, { as: "a", href: "https://linkedin.com/in/nazihshaikh", "aria-label": "LinkedIn", icon: _jsx(FaLinkedin, {}), colorScheme: "teal" })] })] }));
}
function About() {
    return (_jsx(Box, { as: "section", py: 12, children: _jsxs(Container, { maxW: "4xl", children: [_jsx(Heading, { as: "h2", size: "lg", mb: 4, color: "teal.700", children: "About Me" }), _jsx(Text, { fontSize: "lg", children: "As a Senior Software Engineer with over 9 years of experience, I am adept at developing scalable systems that enhance user experience. My expertise lies in leading teams, managing complex projects, and delivering innovative solutions in various technologies. I thrive in collaborative environments and am excited about taking on challenging tasks that contribute to organizational success." })] }) }));
}
function Experience() {
    return (_jsx(Box, { as: "section", py: 12, bg: useColorModeValue('gray.50', 'gray.800'), children: _jsxs(Container, { maxW: "5xl", children: [_jsx(Heading, { as: "h2", size: "lg", mb: 8, color: "teal.700", textAlign: "center", children: "Experience" }), _jsx(VStack, { spacing: 8, align: "stretch", children: experiences.map((exp, idx) => (_jsxs(Box, { p: 6, bg: "white", borderRadius: "lg", boxShadow: "md", _dark: { bg: 'gray.700' }, children: [_jsxs(Flex, { justify: "space-between", align: "center", mb: 2, wrap: "wrap", children: [_jsx(Heading, { as: "h3", size: "md", color: "teal.600", children: exp.title }), _jsx(Text, { fontWeight: "bold", color: "gray.500", children: exp.period })] }), _jsx(Text, { fontWeight: "semibold", color: "teal.800", children: exp.company }), _jsx(List, { spacing: 1, mt: 2, color: "gray.700", _dark: { color: 'gray.200' }, children: exp.description.map((desc, i) => (_jsxs(ListItem, { children: [_jsx(ListIcon, { as: FaCheckCircle, color: "teal.400" }), desc] }, i))) })] }, idx))) })] }) }));
}
function Projects() {
    return (_jsx(Box, { as: "section", py: 12, bg: useColorModeValue('gray.50', 'gray.800'), children: _jsxs(Container, { maxW: "6xl", children: [_jsx(Heading, { as: "h2", size: "lg", mb: 8, color: "teal.700", textAlign: "center", children: "Projects" }), _jsx(SimpleGrid, { columns: { base: 1, md: 2 }, spacing: 8, children: projects.map((proj, idx) => (_jsxs(Box, { p: 6, bg: "white", borderRadius: "lg", boxShadow: "md", _dark: { bg: 'gray.700' }, children: [_jsx(Heading, { as: "h3", size: "md", color: "teal.600", mb: 1, children: proj.name }), _jsxs(Text, { fontWeight: "bold", color: "teal.400", mb: 2, children: ["Client: ", proj.client] }), _jsx(Text, { color: "gray.700", _dark: { color: 'gray.200' }, mb: 2, children: proj.description }), _jsx(Text, { fontWeight: "semibold", color: "teal.700", mt: 2, mb: 1, children: "Roles & Responsibilities:" }), _jsx(List, { spacing: 1, mb: 2, color: "gray.700", _dark: { color: 'gray.200' }, children: proj.responsibilities.map((item, i) => (_jsxs(ListItem, { children: [_jsx(ListIcon, { as: FaCheckCircle, color: "teal.400" }), item] }, i))) }), _jsx(Text, { fontWeight: "semibold", color: "teal.700", mt: 2, mb: 1, children: "Technologies:" }), _jsx(Stack, { direction: "row", flexWrap: "wrap", spacing: 2, children: proj.technologies.map((tech, i) => (_jsx(Tag, { size: "sm", colorScheme: "teal", m: 1, borderRadius: "full", children: _jsx(TagLabel, { children: tech }) }, i))) })] }, idx))) })] }) }));
}
function Education() {
    return (_jsx(Box, { as: "section", py: 12, children: _jsxs(Container, { maxW: "4xl", children: [_jsx(Heading, { as: "h2", size: "lg", mb: 4, color: "teal.700", children: "Education" }), _jsx(VStack, { spacing: 4, align: "stretch", children: education.map((edu, idx) => (_jsxs(Box, { p: 4, bg: "white", borderRadius: "md", boxShadow: "sm", _dark: { bg: 'gray.700' }, children: [_jsxs(Flex, { justify: "space-between", align: "center", children: [_jsx(Text, { fontWeight: "bold", color: "teal.600", children: edu.degree }), _jsx(Text, { color: "gray.500", children: edu.period })] }), _jsx(Text, { color: "teal.800", children: edu.school })] }, idx))) })] }) }));
}
function Skills() {
    return (_jsx(Box, { as: "section", py: 12, bg: useColorModeValue('gray.50', 'gray.800'), children: _jsxs(Container, { maxW: "5xl", children: [_jsx(Heading, { as: "h2", size: "lg", mb: 4, color: "teal.700", children: "Skills" }), _jsx(Stack, { direction: "row", flexWrap: "wrap", spacing: 2, children: skills.map((skill, idx) => (_jsx(Tag, { size: "md", colorScheme: "teal", m: 1, borderRadius: "full", children: _jsx(TagLabel, { children: skill }) }, idx))) })] }) }));
}
function PersonalDetailsWithNav() {
    const navigate = useNavigate();
    return (_jsx(Box, { as: "section", py: 12, children: _jsxs(Container, { maxW: "4xl", children: [_jsx(Heading, { as: "h2", size: "lg", mb: 4, color: "teal.700", children: "Personal Details" }), _jsx(Stack, { direction: { base: 'column', md: 'row' }, spacing: 8, children: personal.map((item, idx) => (_jsxs(HStack, { spacing: 3, align: "center", children: [_jsx(Box, { as: item.icon, color: "teal.500", boxSize: 6 }), _jsxs(Text, { fontWeight: "bold", children: [item.label, ":"] }), _jsx(Text, { children: item.value })] }, idx))) })] }) }));
}
function App() {
    return (_jsx(Box, { bg: useColorModeValue('gray.100', 'gray.900'), minH: "100vh", children: _jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(PersonalDetailsWithNav, {}), _jsx(Education, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(Experience, {}), _jsx(Projects, {})] }) }) }) }) }));
}
export default App;
