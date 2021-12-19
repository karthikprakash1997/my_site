import React from "react";
import { Grid, Typography, List, ListItem } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import WrapperSection from "../../components/section";
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import CircuitAnimation from "../../components/circuitAnimation";
// import {AboutBg} from '../../assets/images/About-bg.jpg';


const About = () => {

    const useStyles = makeStyles({
        sectionAbout: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F8F9F9',
        },
        profile: {
            borderRadius: 10
        },
        profileName: {
            fontSize: 48,
            color: 'transparent',
            WebkitTextStroke: '1px #ffffff',
            textTransform: 'uppercase',
            fontWeight: 700
        },
        role: {
            fontSize: 36,
            fontWeight: 700
        },
        linearText: {
            background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        'pt-0': {
            paddingTop: 0
        },
        textIndent: {
            textIndent: 36
        }
    })

    const classes = useStyles();

    return (
        <WrapperSection classVariant={`${classes.sectionAbout} about-section`}>
            {/* <CircuitAnimation /> */}
            <div class="titles" style={{ textAlign: 'center', width: '100%', paddingTop: '5%' }}>
                <h2 class="title"><div className='inner-txt'>About</div></h2>
                <div class="subtitle"><span className={`${classes.linearText}`}> My Story </span></div>
            </div>
            <Grid container spacing={2} maxWidth='lg' marginX='auto'>
                <Grid item xs={12} md={6} >
                    <div style={{ padding: '5%' }}>
                        <div style={{ textAlign: 'center', width: '100%' }}>
                            <img
                                src={require("../../assets/images/png/myself/2.jpg")}
                                style={{ height: "450px", width: '400px' }}
                                alt="achivemens"
                                className={`${classes.profile}`}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box padding='5%' display='flex' flexDirection='column' color='#ffffff'>
                        {/* <Box>
                            <Box mt='4px' className={`${classes.profileName} animate__heartBeat`}>Hi, I am Karthik Prakash</Box>
                            <Box mt='4px' className={`${classes.role}`}>Software Developer, Tech Enthusiast, Writer</Box>
                        </Box> */}
                        <Typography lineHeight='26px' textAlign='justify'>
                            I am an energetic individual addicted to the joy of developing products with computers and software. In my long journey of developing career, I worked on various IoT and Web/Mobile Applications. Being a developer, I have never been shy of learning cutting-edge technologies that solve complex and pervasive problems. I have always motivated myself to take ownership of the end-to-end development and focus on quality and the impact of the product.
                        </Typography>
                        <Typography fontWeight='bold' mt='10px' textAlign='justify'>
                            I have 2+ years of experience on:
                        </Typography>
                        <List className={`${classes["pt-0"]}`}>
                            {['IoT', 'Software Development - (Mobile and Web Application development)'].map(it =>
                            (<ListItem disablePadding>
                                <Typography lineHeight='26px' mt='8px'>
                                    {/* <FiberManualRecordIcon /> */}
                                    * {it}
                                </Typography>
                            </ListItem>))}
                        </List>
                        <Typography lineHeight='26px' textAlign='justify'>
                            I am currently learning Machine Learning.  I am a prospective MEng student, eager to Machine Learning, software testing, and management.
                        </Typography>
                        {/* <List>
                            {[' Machine Learning', 'Artificial Intelligence of Things'].map(it =>
                            (<ListItem disablePadding>
                                <Typography lineHeight='26px'>
                                    {/* <FiberManualRecordIcon /> */}
                        {/* * {it} */}
                        {/* </Typography>
                            </ListItem>))} */}
                        {/* </List> */}
                        <Typography lineHeight='26px' mt='16px'>
                            I work in a niche and am eager to solve complex problems that can help society in any means. If you have one, do hit me.
                        </Typography>
                    </Box>

                </Grid>
            </Grid>
        </WrapperSection >
    )
}

export default About;
