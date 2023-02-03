import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export const HEADER = [
  { title: "Home", value: "home" },
  { title: "About", value: "about" },
  { title: "Education & Experience", value: "education" },
  { title: "Skills", value: "skills" },
  { title: "Projects", value: "projects" },
  // { title: 'Interests', value: 'interests' },
  { title: "Contact", value: "contact" },
];

export const VIW_POINT = {
  latitude: 43.457455,
  longitude: -80.55075,
  zoom: 12,
};

export const ML_IOT = {
  title: "Machine Learning & IoT",
  icons: ["python", "matlab", "arduino"],
};

export const FRONT_END = {
  title: "Front-end",
  icons: ["js", "ts", "react", "html", "css-3"],
};

export const BACK_END = {
  title: "Back-end",
  icons: ["node", "express", "mongo", "postgre"],
};

export const DEVOPS = {
  title: "Devops & Cloud",
  icons: ["git", "github", "jira"],
};

export const INITIAL_SNACKBAR = {
  isOpen: false,
  severity: "success",
  message: "",
  autoHideDuration: null,
};

export const WORD_EXPERIENCE_AND_EDUCATION_TIMELINE = [
  {
    variant: "vertical-timeline-element--work",
    date: "Jan 2023 - Present",
    icon: <SchoolIcon />,
    value: "University of Waterloo",
    iconStyle: { background: "#eeeeee", color: "#FE6B8B" },
    title: "MEng Eelctrical and Computer Engineering",
    location: "",
    description: "",
    contentStyle: {
      background: "rgb(33, 150, 243)",
      color: "rgba(0, 0, 0, 0.87)",
    },
    contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  },
  {
    variant: "vertical-timeline-element--work",
    date: "Dec, 2019 - Jan, 2023",
    icon: <WorkIcon />,
    iconStyle: { background: "#FE6B8B", color: "#eeeeee" },
    title: "Software Developer-Applications @Aximsoft",
    value: "aximsoft",
    location: "Coimbatore",
    description: "",
    contentStyle: {
      background: "rgb(33, 150, 243)",
      color: "rgba(0, 0, 0, 0.87)",
    },
    contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  },
  {
    variant: "vertical-timeline-element--work",
    date: "",
    icon: <SchoolIcon />,
    value: "courseera",
    iconStyle: { background: "#eeeeee", color: "#FE6B8B" },
    title: "ML Certification from Coursera.com",
    location: "",
    description: "",
    contentStyle: {
      background: "rgb(33, 150, 243)",
      color: "rgba(0, 0, 0, 0.87)",
    },
    contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  },
  {
    variant: "vertical-timeline-element--work",
    date: "Dec, 2018 - Apr, 2019",
    icon: <WorkIcon />,
    value: "delving",
    iconStyle: { background: "#FE6B8B", color: "#eeeeee" },
    title: "Internship @DevlingR&D",
    location: "",
    description: "",
    contentStyle: {
      background: "rgb(33, 150, 243)",
      color: "rgba(0, 0, 0, 0.87)",
    },
    contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  },
  {
    variant: "vertical-timeline-element--work",
    date: "May, 2017 - Jul, 2017",
    value: "tangedco",
    icon: <WorkIcon />,
    iconStyle: { background: "#eeeeee", color: "#FE6B8B" },
    title: "Internship @TANGEDCO",
    location: "",
    description: "",
    contentStyle: {
      background: "rgb(33, 150, 243)",
      color: "rgba(0, 0, 0, 0.87)",
    },
    contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  },
  {
    variant: "vertical-timeline-element--work",
    date: "Jun, 2014 - May, 2019",
    icon: <SchoolIcon />,
    value: "be",
    iconStyle: { background: "#FE6B8B", color: "#eeeeee" },
    title: "B.E EEE(SW) @PSG College of Technology",
    location: "",
    description: "",
    contentStyle: {
      background: "rgb(33, 150, 243)",
      color: "rgba(0, 0, 0, 0.87)",
    },
    contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
  },
];

export const EXPERIENCE_DETAILS = {
  aximsoft: {
    duration: "Dec, 2019 - Jan, 2023",
    image: "axim.jpeg",
    title: "Software Developer - Applications",
    subtitle: "Company",
    subtitleDescription: "Aximsoft",
    isPink: true,
    description: [
      "Developed large-scale web applications using frameworks and libraries such as React JS in the front end and Node JS, Express JS, and PostgreSQL in the back end.",
      "Create RESTful API using Node JS, Express JS, PostgreSQL, and MongoDB and bind the data to the front-end React application using sagas and redux.",
      "Appreciated for taking ownership of the products and solving complex problems in a short span while maintaining code quality.",
      "Managed a team of three and mentored new members. Facilitated the team to understand the technology and domain and solve problems efficiently.",
      "Cerate automated tests with Jest unit tests the entire development and staging environment and ensures the software is bug-free. Validate and maintain the code base and assign tasks to incoming trainees.",
      "Constantly appreciated for being an excellent team player and supporting the team even during tough times like COVID.",
    ],
    chipTitle: "Tech Stack",
    chipText: [
      "Node JS",
      "React JS",
      "Express JS",
      "Mongo DB",
      "PostgresSQL",
      "HTML",
      "CSS",
      "AWS",
    ],
    additionalChips: [
      {
        chipTitle: "Front-end Packages",
        chipText: [
          "Redux",
          "Redux Saga",
          "Material UI",
          "React Bootstrap",
          "Highcharts",
          "Draft JS",
          "Yup",
        ],
      },
      {
        chipTitle: "Back-end Packages",
        chipText: [
          "Cron",
          "Socket.io",
          "AWS - SDK",
          "Send Grid",
          "Crypto",
          "Stripe",
        ],
      },
    ],
    projects: [
      {
        title: "Front-end Development",
        description: [
          "Create an interactive Dashboard, editors, tables, and charts and generate reports using libraries like DraftJS, highchairs, material-UI, and react-bootstrap in React JS.",
          "Create and validate forms using packages like formik and yup in React JS.",
          "Created centralized data storage in react application using redux and managed API calls using middleware redux-saga.",
          "Connect to a web socket, update values in the UI with real-time data, and create drag-and-drop features for placing and replacing devices on the map.",
          "Create reusable components and custom hooks for maintaining the large code base in the front end and reduce the code base size by 25%.",
        ],
      },
      {
        title: "Back-end Development",
        description: [
          "Create RESTful API using Node, Express JS, PostgreSQL, and MongoDB and bind data to the front end.",
          "Create, Read, Update, Delete, and maintain large-scale databases in PostgreSQL and MongoDB.",
          "Integrate payment gateway like Stripe, chatbot like intercom, and create an AI assistant using OpenAI.",
          "Schedule emails and update table values as a microservice using a cronjob library.",
          "Integrate cloud services like AWS for sentiment analysis and report storage in an s3 bucket etc.",
        ],
      },
    ],
  },
  courseera: {
    image: "courseera.png",
    title: "ML Certification Course",
    subtitle: "Certificate",
    subtitleDescription: "Courseera",
    duration: "-",
    isPink: false,
    description: [
      "Explored various supervised and unsupervised learning algorithms using MATLAB.",
      "Learned about the applications of various types of ML algorithms and its limitations.",
    ],
    chipTitle: "Tools used",
    chipText: ["Matlab"],
    projects: [],
  },
  delving: {
    duration: "Dec, 2018 - Apr, 2019",
    image: "del.jpeg",
    title: '"IoT BASED DISASTER MANAGEMENT SYSTEM FOR ELECTRIC POLE',
    subtitle: "Company",
    subtitleDescription: "Devling R&D",
    secondarySubtitle: "Role",
    secondarySubtitleText: "Intern",
    isPink: true,
    isPara: true,
    description: [
      'The project aims to alert the local distribution board on any obstacle that may affect the pole during any natural calamity. The real inspiration behind the project was a typhoon named "Gaja" that hit various parts of our state during 2018. The cyclone damaged 84,836 poles, 1,152 km of high tension lines, 3,087 km of low tension lines, and 841 distribution transformers and incurred a loss of 80 crore rupees to the government. The damage was not directly caused by the cyclonic wind but by the trees that fell on the poles. The disaster management system monitors the electric poles and alerts the distribution board on any disturbances such as trees and banners that can be a potential threat to it during any natural calamity.',
      "The system monitors the poles using ultrasonic and laser sensors. The sensors placed in the electric poles create a field (calibrated by the user). The data is processed by the NodeMCU 8266 processor, which has an inbuilt wifi processor which sends the data to the cloud server (Ubidots). The application helps to present the data of the multiple poles in the form of tables and graphs. When the disturbance inside the calibrated area persists, the application alerts the user and sends the pole location that needs attention.",
      "Though the project focuses on electric poles, the system can be adapted to monitor other facilities that can be harmed by external threats nearby.",
    ],
    chipTitle: "Domians",
    chipText: ["IoT", "Application Development"],
    projects: [],
  },
  tangedco: {
    duration: "May, 2017 - Jul, 2017",
    image: "tneb.jpg",
    title: "MONITORING AND CONTROLLING OF SUBSTATION",
    subtitle: "Company",
    subtitleDescription: "TANGEDCO",
    secondarySubtitle: "Role",
    secondarySubtitleText: "Intern",
    isPara: true,
    isPink: false,
    description: [
      "The project aimed to monitor the circuit elements and control them via an application using IoT. The project was demonstrated via a prototype of the substation, and the application successfully displayed real-time data such as power, voltage, current. The application also enabled us to control the relay manually and automatically when the values go beyond the calibrated threshold.",
    ],
    chipTitle: "Domians",
    chipText: ["IoT", "Application Development"],
    projects: [],
  },
  be: {
    duration: "Jun, 2014 - May, 2019",
    image: "PSG.png",
    title: "BE-EEE (SW)",
    subtitle: "Instituition",
    subtitleDescription: "PSG College of Technology",
    isPink: true,
    secondarySubtitle: "CGPA",
    secondarySubtitleText: "8.43/10",
    description: [
      "Fostered my skills in Electrical engineering, Electronics Engineering, Programming, and Microcontrollers.",
      "Visited industries inside and outside the campus to earn adequate hands-on industrial experience.",
      "Secured Toppers Proficiency Award from EEEA.",
      "Had the oppurtunity to work in two projects for PSG-IAS.",
    ],
    projects: [
      {
        title: "Water Quality Measurement of Aquarium",
        description: [
          "The project aimed to provide a safe and sustainable environment for aquatic life in an aquarium.",
          "The system measures the pH of the water in the aquarium by the custom fabricated sensor. The device alerts the user via an application when the pH of go beyond the calibrated threshold.",
        ],
      },
      {
        title: "Ultra Sonic Air Flow Measurement",
        description: [
          "The project aimed to measure the airflow in a tube using ultrasonic sensor.",
          "The system measured the airflow of the tube by placing ultra sonic sensor when placed inside in a V-shaped position.",
          "By using the ultrasonic sensors to measure the airflow, we have the opportunity to replace the Thermos anemometer to measure the airflow in medical applciations, thereby reducing the cost.",
        ],
      },
    ],
  },
};

export const PROJECTS = [
  {
    duration: "Dec, 2018 - Apr, 2019",
    image: "del.jpeg",
    title: "IoT BASED DISASTER MANAGEMENT SYSTEM FOR ELECTRIC POLE",
    subtitle: "Company",
    subtitleDescription: "Devling R&D",
    secondarySubtitle: "Role",
    secondarySubtitleText: "Intern",
    isPink: true,
    isPara: true,
    description: [
      'The project aims to alert the local distribution board on any obstacle that may affect the pole during any natural calamity. The real inspiration behind the project was a typhoon named "Gaja" that hit various parts of our state during 2018. The cyclone damaged 84,836 poles, 1,152 km of high tension lines, 3,087 km of low tension lines, and 841 distribution transformers and incurred a loss of 80 crore rupees to the government. The damage was not directly caused by the cyclonic wind but by the trees that fell on the poles. The disaster management system monitors the electric poles and alerts the distribution board on any disturbances such as trees and banners that can be a potential threat to it during any natural calamity.',
      "The system monitors the poles using ultrasonic and laser sensors. The sensors placed in the electric poles create a field (calibrated by the user). The data is processed by the NodeMCU 8266 processor, which has an inbuilt wifi processor which sends the data to the cloud server (Ubidots). The application helps to present the data of the multiple poles in the form of tables and graphs. When the disturbance inside the calibrated area persists, the application alerts the user and sends the pole location that needs attention.",
      "Though the project focuses on electric poles, the system can be adapted to monitor other facilities that can be harmed by external threats nearby.",
    ],
    chipTitle: "Skills",
    chipText: [
      "IoT",
      "Application Development",
      "Arduino/NodeMCU",
      "Leadership",
      "Team Management",
    ],
    projects: [],
  },
  {
    duration: "May, 2017 - Jul, 2017",
    image: "tneb.jpg",
    title: "MONITORING AND CONTROLLING OF SUBSTATION",
    subtitle: "Company",
    subtitleDescription: "TANGEDCO",
    secondarySubtitle: "Role",
    secondarySubtitleText: "Intern",
    isPara: true,
    isPink: false,
    description: [
      "The project aimed to monitor the circuit elements and control them via an application using IoT. The project was demonstrated via a prototype of the substation, and the application successfully displayed real-time data such as power, voltage, current. The application also enabled us to control the relay manually and automatically when the values go beyond the calibrated threshold.",
    ],
    chipTitle: "Skills",
    chipText: [
      "IoT",
      "Application Development",
      "Arduino/NodeMCU",
      "Leadership",
      "Team Management",
    ],
    projects: [],
  },
  {
    duration: "Jun, 2014 - May, 2019",
    image: "PSG.png",
    title: "Water Quality Measurement of Aquarium",
    subtitle: "Instituition",
    subtitleDescription: "PSG IAS",
    isPink: true,
    description: [
      "The project aimed to provide a safe and sustainable environment for aquatic life in an aquarium.",
      "The system measures the pH of the water in the aquarium by the custom fabricated sensor. The device alerts the user via an application when the pH of go beyond the calibrated threshold.",
    ],
    chipTitle: "Skills",
    chipText: [
      "IoT",
      "Application Development",
      "Arduino/NodeMCU",
      "Leadership",
      "Team Management",
    ],
    projects: [],
  },
  {
    duration: "Jun, 2014 - May, 2019",
    image: "PSG.png",
    title: "Ultra Sonic Air Flow Measurement",
    subtitle: "Instituition",
    subtitleDescription: "PSG IAS",
    isPink: false,
    description: [
      "The project aimed to measure the airflow in a tube using ultrasonic sensor.",
      "The system measured the airflow of the tube by placing ultra sonic sensor when placed inside in a V-shaped position.",
      "By using the ultrasonic sensors to measure the airflow, we have the opportunity to replace the Thermos anemometer to measure the airflow in medical applciations, thereby reducing the cost.",
    ],
    projects: [],
    chipTitle: "Skills",
    chipText: [
      "IoT",
      "Product Development",
      "Arduino/NodeMCU",
      "Leadership",
      "Team Management",
    ],
  },
];
