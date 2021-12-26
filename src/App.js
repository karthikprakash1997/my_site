import React from "react";
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

  return (
    <>
        <Grid container maxWidth={'1600px'} marginX='auto' paddingRight={'5%'} paddingLeft={'5%'} >
          <Header />
          <Home />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Grid>
    </>
  )
}

export default App;

