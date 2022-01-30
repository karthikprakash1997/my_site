import React, { useRef } from "react";
import { Grid } from '@mui/material';

import Header from './container/header';
import Home from './container/home';
import Education from "./container/education";
import Skills from "./container/skills";
import Contact from "./container/contact";
import Projects from "./container/projects";
import Footer from "./container/footer";
import About from './container/about';

import './index.css';

const App = () => {

  const homeref = useRef();
  const aboutref = useRef();
  const eduref = useRef();
  const skillref = useRef();
  const projectsref = useRef();
  const contatcsref = useRef();

  const handleScroll = (value) => {
    switch (value) {
      case 'about':
        aboutref.current.scrollIntoView({ block: "center", inline: "nearest" });
        break;
      case 'education':
        eduref.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        break;
      case 'skills':
        skillref.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        break;
      case 'projects':
        projectsref.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        break;
      case 'contact':
        contatcsref.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        break;
      default:
        homeref.current.scrollIntoView({ block: "center", inline: "nearest" });
        break;
    }
  }
  return (
    <>
      <Grid container maxWidth={'1600px'} marginX='auto' paddingRight={'5%'} paddingLeft={'5%'} >
        <Header handleScroll={handleScroll} />
        <Home myref={homeref} />
        <About myref={aboutref} />
        <Education myref={eduref} />
        <Skills myref={skillref} />
        <Projects myref={projectsref} />
        <Contact myref={contatcsref} />
        <Footer />
      </Grid>
    </>
  )
}

export default App;

