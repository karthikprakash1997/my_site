import React, { useRef } from "react";
import { Grid } from '@mui/material';
import scrollToComponent from 'react-scroll-to-component';

import Header from './container/header';
import Home from './container/home';
import Education from "./container/education";
import Skills from "./container/skills";
import Contact from "./container/contact";
import Footer from "./container/footer";
import About from './container/about';

import './index.css';

const App = () => {

  const homeref = useRef();
  const aboutref = useRef();
  const eduref = useRef();
  const skillref = useRef();
  const contatcsref = useRef();

  const handleScroll = (value) => {
    switch (value) {
      case 'about':
        scrollToComponent(aboutref.current, {duration:200, align: 'middle', offset:-90})
        break;
      case 'education':
        scrollToComponent(eduref.current, {duration:200, align: 'top', offset:-90})
        break;
      case 'skills':
        scrollToComponent(skillref.current, {duration:200, align: 'middle', offset:-90})
        break;
      case 'contact':
        scrollToComponent(contatcsref.current, {duration:200, align: 'middle'})
        break;
      default:
        scrollToComponent(homeref.current, {duration:200, align: 'top', offset:-90})
        break;
    }
  }
  return (
    <>
      <Grid className='custom-scrollbar' container maxWidth={'1600px'} marginX='auto' paddingRight={'5%'} paddingLeft={'5%'} >
        <Header handleScroll={handleScroll} />
        <Home myref={homeref} />
        <About myref={aboutref} />
        <Education myref={eduref} />
        <Skills myref={skillref} />
        <Contact myref={contatcsref} />
      </Grid>
      <Footer />
    </>
  )
}

export default App;

