import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export const HEADER = [
    { title: 'Home', value: 'home' },
    { title: 'About', value: 'about' },
    { title: 'Education & Experience', value: 'education' },
    { title: 'Skills', value: 'skills' },
    { title: 'Projects', value: 'projects' },
    // { title: 'Interests', value: 'interests' },
    { title: 'Contact', value: 'contact' },
]

export const VIW_POINT = {
    latitude: 11.006464,
    longitude: 76.945765,
    zoom: 12,
};

export const INITIAL_SNACKBAR = {
    isOpen: false,
    severity: 'success',
    message: '',
    autoHideDuration:null
}

export const WORD_EXPERIENCE_AND_EDUCATION_TIMELINE = [{
    variant: "vertical-timeline-element--work",
    date: '2011 - present',
    icon: <WorkIcon />,
    iconStyle: { background: '#FE6B8B', color: '#eeeeee' },
    title: 'Aximsoft,',
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
    title: 'ML Certification',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: '',
    icon: <WorkIcon />,
    iconStyle: { background: '#FE6B8B', color: '#eeeeee' },
    title: 'Intern',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: 'rgba(0, 0, 0, 0.87)' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: '',
    icon: <WorkIcon />,
    iconStyle: { background: '#eeeeee', color: '#FE6B8B' },
    title: 'Intern',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: '',
    icon: <SchoolIcon />,
    iconStyle: { background: '#FE6B8B', color: '#eeeeee' },
    title: 'B.E EEE',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: 'rgba(0, 0, 0, 0.87)' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
},
{
    variant: "vertical-timeline-element--work",
    date: '',
    icon: <SchoolIcon />,
    iconStyle: { background: '#eeeeee', color: '#FE6B8B' },
    title: '12th',
    location: '',
    description: '',
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }
}]