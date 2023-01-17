import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export const HEADER = [
    { title: 'Home', value: 'home' },
    { title: 'About', value: 'about' },
    { title: 'Education & Experience', value: 'education' },
    { title: 'Skills', value: 'skills' },
    // { title: 'Projects', value: 'projects' },
    // { title: 'Interests', value: 'interests' },
    { title: 'Contact', value: 'contact' },
]

export const VIW_POINT = {
    latitude: 11.006464,
    longitude: 76.945765,
    zoom: 12,
};

export const TOOLS = ['react', 'node', 'express', 'mongo', 'mysql', 'matlab', 'arduino', 'github', 'git', 'jira']

export const PROGRAMMING_LANG = ['js', 'ts', 'python', 'html', 'css-3', 'postgre']

export const INITIAL_SNACKBAR = {
    isOpen: false,
    severity: 'success',
    message: '',
    autoHideDuration: null
}

export const WORD_EXPERIENCE_AND_EDUCATION_TIMELINE = [{
    variant: "vertical-timeline-element--work",
    date: 'Jan 2023 - Present',
    icon: <SchoolIcon />,
    value: 'University of Waterloo',
    iconStyle: { background: '#eeeeee', color: '#FE6B8B' },
    title: 'MEng Eelctrical and Computer Engineering',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: 'rgba(0, 0, 0, 0.87)' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},{
    variant: "vertical-timeline-element--work",
    date: 'Dec, 2019 - Jan, 2023',
    icon: <WorkIcon />,
    iconStyle: { background: '#FE6B8B', color: '#eeeeee' },
    title: 'Software Developer-Applications @Aximsoft',
    value: 'aximsoft',
    location: 'Coimbatore',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: 'rgba(0, 0, 0, 0.87)' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: '',
    icon: <SchoolIcon />,
    value: 'courseera',
    iconStyle: { background: '#eeeeee', color: '#FE6B8B' },
    title: 'ML Certification from Coursera.com',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: 'rgba(0, 0, 0, 0.87)' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: 'Dec, 2018 - Apr, 2019',
    icon: <WorkIcon />,
    value: 'delving',
    iconStyle: { background: '#FE6B8B', color: '#eeeeee' },
    title: 'Internship @DevlingR&D',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: 'rgba(0, 0, 0, 0.87)' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: 'May, 2017 - Jul, 2017',
    value: 'tangedco',
    icon: <WorkIcon />,
    iconStyle: { background: '#eeeeee', color: '#FE6B8B' },
    title: 'Internship @TANGEDCO',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: 'rgba(0, 0, 0, 0.87)' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: 'Jun, 2014 - May, 2019',
    icon: <SchoolIcon />,
    value: 'be',
    iconStyle: { background: '#FE6B8B', color: '#eeeeee' },
    title: 'B.E EEE(SW) @PSG College of Technology',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: 'rgba(0, 0, 0, 0.87)' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
}];

export const EXPERIENCE_DETAILS = {
    aximsoft: {
        duration: 'Dec, 2019 - Present',
        image: 'axim.jpeg',
        title: 'Software Developer - Applications',
        subtitle: 'Company',
        subtitleDescription: 'Aximsoft',
        isPink: true,
        description: [
            'Responsible for creating large-scale web applications using modern frameworks and libraries combined.',
            'Appreciated for solving complex problems by combining multiple libraries, algorithms, frameworks effectively.',
            'Worked in diverse projects of multiple domains with various technologies in both frontend and backend.',
            'Help the team understand the technology, solve problems efficiently, and mentor new members.'
        ],
        chipTitle: 'Technologies',
        chipText: ['Node JS', 'React JS', 'React Native', 'Mongo DB', 'MySql'],
        projects: []

    },
    courseera: {
        image: 'courseera.png',
        title: 'ML Certification Course',
        subtitle: 'Certificate',
        subtitleDescription: 'Courseera',
        duration: '-',
        isPink: false,
        description: [
            'Learned about supervised unsupervised learning and solved various problems using Matlab simulation tool.',
            'Learned about the applications of various types of ML algorithms and its limitations.'
        ],
        chipTitle: 'Tools used',
        chipText: ['Matlab'],
        projects: []

    },
    delving: {
        duration: 'Dec, 2018 - Apr, 2019',
        image: 'del.jpeg',
        title: '"IoT BASED DISASTER MANAGEMENT SYSTEM FOR ELECTRIC POLE',
        subtitle: 'Company',
        subtitleDescription: 'Devling R&D',
        secondarySubtitle: 'Role',
        secondarySubtitleText: 'Intern',
        isPink: true,
        isPara: true,
        description: [
            'The project aims to alert the local distribution board on any obstacle that may affect the pole during any natural calamity. The real inspiration behind the project was a typhoon named "Gaja" that hit various parts of our state during 2018. The cyclone damaged 84,836 poles, 1,152 km of high tension lines, 3,087 km of low tension lines, and 841 distribution transformers and incurred a loss of 80 crore rupees to the government. The damage was not directly caused by the cyclonic wind but by the trees that fell on the poles. The disaster management system monitors the electric poles and alerts the distribution board on any disturbances such as trees and banners that can be a potential threat to it during any natural calamity.',
            'The system monitors the poles using ultrasonic and laser sensors. The sensors placed in the electric poles create a field (calibrated by the user). The data is processed by the NodeMCU 8266 processor, which has an inbuilt wifi processor which sends the data to the cloud server (Ubidots). The application helps to present the data of the multiple poles in the form of tables and graphs. When the disturbance inside the calibrated area persists, the application alerts the user and sends the pole location that needs attention.',
            'Though the project focuses on electric poles, the system can be adapted to monitor other facilities that can be harmed by external threats nearby.'
        ],
        chipTitle: 'Domians',
        chipText: ['IoT', 'Application Development'],
        projects: []

    },
    tangedco: {
        duration: 'May, 2017 - Jul, 2017',
        image: 'tneb.jpg',
        title: 'MONITORING AND CONTROLLING OF SUBSTATION',
        subtitle: 'Company',
        subtitleDescription: 'TANGEDCO',
        secondarySubtitle: 'Role',
        secondarySubtitleText: 'Intern',
        isPara: true,
        isPink: false,
        description: [
            'The project aimed to monitor the circuit elements and control them via an application using IoT. The project was demonstrated via a prototype of the substation, and the application successfully displayed real-time data such as power, voltage, current. The application also enabled us to control the relay manually and automatically when the values go beyond the calibrated threshold.',
        ],
        chipTitle: 'Domians',
        chipText: ['IoT', 'Application Development'],
        projects: []
    },
    be: {
        duration: 'Jun, 2014 - May, 2019',
        image: 'PSG.png',
        title: 'BE-EEE (SW)',
        subtitle: 'Instituition',
        subtitleDescription: 'PSG College of Technology',
        isPink: true,
        secondarySubtitle: 'CGPA',
        secondarySubtitleText: '8.43/10',
        description: [
            'Fostered my skills in Electrical engineering, Electronics Engineering, Programming, and Microcontrollers.',
            'Visited industries inside and outside the campus to earn adequate hands-on industrial experience.',
            'Secured Toppers Proficiency Award from EEEA.',
            'Had the oppurtunity to work in two projects for PSG-IAS.',
        ],
        projects: [
            {
                title: 'Water Quality Measurement of Aquarium',
                description: [
                    'The project aimed to provide a safe and sustainable environment for aquatic life in an aquarium.',
                    'The system measures the pH of the water in the aquarium by the custom fabricated sensor. The device alerts the user via an application when the pH of go beyond the calibrated threshold.',
                ]
            },
            {
                title: 'Ultra Sonic Air Flow Measurement',
                description: [
                    'The project aimed to measure the airflow in a tube using ultrasonic sensor.',
                    'The system measured the airflow of the tube by placing ultra sonic sensor when placed inside in a V-shaped position.',
                    'By using the ultrasonic sensors to measure the airflow, we have the opportunity to replace the Thermos anemometer to measure the airflow in medical applciations, thereby reducing the cost.'
                ]
            }
        ]
    }
}