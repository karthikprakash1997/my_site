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

export const TOOLS = ['react', 'node', 'express', 'mongo', 'mysql', 'matlab', 'arduino', 'rasp', 'unity', 'github', 'git', 'jira']

export const PROGRAMMING_LANG = ['js', 'ts', 'python', 'c++', 'c', 'html', 'css-3', 'postgre']

export const INITIAL_SNACKBAR = {
    isOpen: false,
    severity: 'success',
    message: '',
    autoHideDuration: null
}

export const WORD_EXPERIENCE_AND_EDUCATION_TIMELINE = [{
    variant: "vertical-timeline-element--work",
    date: 'Dec, 2019 - Present',
    icon: <WorkIcon />,
    iconStyle: { background: '#FE6B8B', color: '#eeeeee' },
    title: 'Software Developer-Applications @Aximsoft',
    location: 'Coimbatore',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: 'rgba(0, 0, 0, 0.87)' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: '',
    icon: <SchoolIcon />,
    iconStyle: { background: '#eeeeee', color: '#FE6B8B' },
    title: 'ML Certification from Coursera.com',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: 'Dec, 2018 - Apr, 2019',
    icon: <WorkIcon />,
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
    icon: <WorkIcon />,
    iconStyle: { background: '#eeeeee', color: '#FE6B8B' },
    title: 'Internship @TANGEDCO',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: 'Jun, 2014 - May, 2019',
    icon: <SchoolIcon />,
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
        description: 'Duis occaecat irure labore veniam id fugiat consequat tempor amet consectetur cillum voluptate. Sint aliquip non officia veniam excepteur. Do amet et tempor sit enim.Reprehenderit reprehenderit minim velit nulla. Nostrud consequat in mollit quis cupidatat nisi. Velit fugiat nulla anim aliquip dolor laboris non amet ad esse irure consectetur. Ut nisi duis do laboris deserunt exercitation elit est laborum elit dolore adipisicing fugiat. Esse officia deserunt pariatur nulla in duis amet dolore culpa cillum esse magna.'
    }
}