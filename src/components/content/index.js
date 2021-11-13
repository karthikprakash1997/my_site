import React, { useState } from "react";
import { Grid } from '@mui/material';

import Header from '../header';
import Background from '../background';
import Home from '../home';
import About from '../about';
import Education from "../education1";
import Skills from "../skills";
import Contact from "../contact";
import Projects from "../projects";
import Footer from "../footer";

import { HEADER } from '../../util';
import Interests from "../interests";

const Main = () => {

    const [selectedComp, setSelectedComp] = useState(HEADER[0].value);

    return (
        <Grid container >
            <Header setSelectedComp={setSelectedComp} />

            <Grid container rowSpacing={2} padding={'8%'}>
                {/* <Home /> */}
                <div class="titles" style={{ textAlign: 'center', width: '100%', paddingTop: '5%' }}>
                    <h2 class="title"><span> About Me</span></h2>
                    <div class="subtitle"><span> My Story </span></div>
                </div>
                <About />
                <div class="titles" style={{ textAlign: 'center', width: '100%', paddingTop: '5%' }}>
                    <h2 class="title"><span> Education & Experience</span></h2>
                    {/* <div class="subtitle"><span> My Story </span></div> */}
                </div>
                <Education />
                <div class="titles" style={{ textAlign: 'center', width: '100%', paddingTop: '5%' }}>
                    <h2 class="title"><span> Skills</span></h2>
                    {/* <div class="subtitle"><span> My Story </span></div> */}
                </div>
                <Skills />
                <div class="titles" style={{ textAlign: 'center', width: '100%', paddingTop: '5%' }}>
                    <h2 class="title"><span> Projects </span></h2>
                    {/* <div class="subtitle"><span> My Story </span></div> */}
                </div>
                <Projects />
                <div class="titles" style={{ textAlign: 'center', width: '100%', paddingTop: '5%' }}>
                    <h2 class="title"><span> Interests</span></h2>
                    {/* <div class="subtitle"><span> My Story </span></div> */}
                </div>
                <Interests />
                {/* <Education />
                <Education />
                <Skills />
                <Projects /> */}
                <div class="titles" style={{ textAlign: 'center', width: '100%' }}>
                    <h2 class="title"><span> Contact </span></h2>
                    <div class="subtitle"><span> Let's talk </span></div>
                </div>
                <Contact />
                {/* <Footer /> */}
            </Grid>

        </Grid>
    )
}

export default Main;
