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
            // background: AboutBg,
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
        }
    })

    const classes = useStyles();

    return (
        <WrapperSection classVariant='section-About'>
            {/* <CircuitAnimation /> */}
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
                        <Typography lineHeight='26px' mt='16px'>
                            Being addicted to the joy of developing, I worked on various IoT and Web/Mobile Applications and made my way to a Software Developer. Being a developer, I have never been shy of learning cutting-edge technologies that solve complex and pervasive problems. I have always motivated myself to take ownership of the end-to-end development and focus on quality and the impact of the product.
                        </Typography>
                        <Typography lineHeight='26px' mt='16px'>
                            I have 2+ years of experience on:
                        </Typography>
                        <List>
                            {['IoT', ' Software Developer - (Mobile and Web Application development)', 'AR/VR development (Unity)', 'Web Architecture'].map(it =>
                            (<ListItem disablePadding>
                                <Typography lineHeight='26px' mt='16px'>
                                    {/* <FiberManualRecordIcon /> */}
                                    * {it}
                                </Typography>
                            </ListItem>))}
                        </List>
                        <Typography lineHeight='26px' mt='16px'>
                            I am currently learning
                        </Typography>
                        <List>
                            {[' Machine Learning', 'Artificial Intelligence of Things'].map(it =>
                            (<ListItem disablePadding>
                                <Typography lineHeight='26px' mt='16px'>
                                    {/* <FiberManualRecordIcon /> */}
                                    * {it}
                                </Typography>
                            </ListItem>))}
                        </List>
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
