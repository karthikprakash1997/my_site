import React from "react";
import Typed from "react-typed";
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import WrapperSection from "../../components/section";
import { Download } from '@mui/icons-material';
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
            fontSize: '46px !important',
            fontWeight: 700,
        },
        gradName: {
            fontSize: 20,
            fontWeight: 700
        },
        linearText: {
            background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        csvBtn: {
            maxWidth: 'max-content',
            borderColor: '#FE6B8B !important',
            height: 'max-content',
            marginTop: '20px !important',
            padding: '8px !important'
        },

    })

    const classes = useStyles();

    return (
        <WrapperSection classVariant='section-home'>
            <Grid container spacing={2} maxWidth='lg' marginX='auto'>
                <Grid item xs={12} md={6} >
                    <Box padding='5%' display='flex' flexDirection='column' color='#ffffff'>
                        <Box>
                            <Typography fontSize='20px' className={`${classes.linearText} ${classes.greeting}`}>Hi,</Typography>
                            <Typography className={`${classes.profileName} ${classes.linearText}`}>I am Karthik Prakash</Typography>
                            <Typed
                                strings={[
                                    "Software Developer",
                                    "Tech Enthusiast",
                                    "Writer"
                                ]}
                                typeSpeed={30}
                                className={`${classes.linearText} ${classes.gradName}`}
                                backSpeed={30}
                                loop
                            />
                        </Box>
                        <Button variant="outlined" size='small' className={`${classes.linearText} ${classes.csvBtn}`}><Download htmlColor='#FE6B8B' />Export CV</Button>
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

