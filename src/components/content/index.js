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
import { makeStyles } from "@mui/styles";

const Main = () => {

    const useStyles = makeStyles({
        root: {},
        mainContainer: {
            background: 'url(src/assets/images/bg-img.jpg) no-repeat center',
            '&.MuiGrid-container': {
                paddingTop: 70,
            }
        }
    })

    const [selectedComp, setSelectedComp] = useState(HEADER[0].value);
    const classes = useStyles();
    return (
        <>
            <Header setSelectedComp={setSelectedComp} />

            <Grid container rowSpacing={2}  className={`${classes.mainContainer} main-container`}>
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

        </>
    )
}

export default Main;
