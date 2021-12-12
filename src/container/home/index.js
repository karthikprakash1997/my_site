import React from "react";
import Typed from "react-typed";
import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import WrapperSection from "../../components/section";
// import {HomeBg} from '../../assets/images/home-bg.jpg';
// import HomeCircuitAnimation from "../../components/circuitAnimation/home";

const Home = () => {

    const useStyles = makeStyles({
        sectionHome: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            // background: HomeBg,
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
        /** gradiant color for text */
        gradName: {
            fontSize: 20,
            background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }
    })

    const classes = useStyles();

    return (
        <WrapperSection classVariant='section-home'>
            <Grid container spacing={2} maxWidth='lg' marginX='auto'>
                <Grid item xs={12} md={6} >
                    <Box padding='5%' display='flex' flexDirection='column' color='#ffffff'>
                        <Box>
                            <Box mt='4px' className={`${classes.role} ${classes.gradName} animate__heartBeat`}>Hi, I am Karthik Prakash</Box>
                            <Typed
                                strings={[
                                    "Software Developer",
                                    "Tech Enthusiast",
                                    "Writer"
                                ]}
                                typeSpeed={30}
                                className={`${classes.role} ${classes.gradName}`}
                                backSpeed={30}
                                //   attr="placeholder"
                                loop
                            />
                        </Box>
                        <Typography lineHeight='26px' mt='16px'>
                            Downlaod Resume button.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    {/* <div style={{ padding: '5%' }}>
                        <div style={{ textAlign: 'center', width: '100%' }}> */}
                    {/* <HomeCircuitAnimation /> */}
                    {/* </div> */}
                    {/* </div> */}
                </Grid>
            </Grid>
        </WrapperSection >
    )
}

export default Home;

