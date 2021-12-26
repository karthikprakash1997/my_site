import React, { useMemo } from "react";
import Typed from "react-typed";
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
// import WrapperSection from "../../components/section";
import { Download, LinkedIn, Email, GitHub } from '@mui/icons-material';
import AiHeadAnimation from "../../components/aiHead";
// import ParticleAnimation from '../../components/particleAnimation';
// import {HomeBg} from '../../assets/images/home-bg.jpg';
// import HomeCircuitAnimation from "../../components/circuitAnimation/home";

const Home = () => {

    const useStyles = makeStyles({
        sectionHome: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
        },
        profile: {
            borderRadius: 10
        },
        profileName: {
            fontSize: '75px !important',
            fontWeight: '800px !important',
            '@media (max-width:576px)': {
                fontSize: '34px !important'
            }
        },
        gradName: {
            fontSize: 20,
            fontWeight: 700
        },
        linearText: {
            background: "-webkit-linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
            // background:'#FE6B8B',
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
        csvHldr: {
            '@media(max-width: 576px)': {
                flexDirection: 'column',
                alignItems: 'flex-start',
            }
        }
    })

    const classes = useStyles();

    const aiFaceAnimataion = useMemo(() => <AiHeadAnimation />, []);
    const typedAnimation = useMemo(() => {
        return (
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
        )
    }, [classes.linearText, classes.gradName]);
    // const particleAnimation = useMemo(() => <ParticleAnimation />, []);

    return (
        // <WrapperSection classVariant='section-home'>
        <Grid container className={`${classes.sectionHome}`} spacing={2} marginX='auto' paddingTop={'130px'}>
            <Grid item xs={12} md={6} display='flex' alignItems='center' justifyContent='center'>

                <Box display='flex' flexDirection='column' color='#ffffff'>
                    <Box>
                        <Typography fontSize='20px' className={`${classes.linearText} ${classes.greeting}`}>Hello, I am </Typography>
                        <Typography className={`${classes.profileName} ${classes.linearText}`}>Karthik Prakash</Typography>
                        {typedAnimation}
                    </Box>
                    <Box display='flex' columnGap='20px' marginTop='20px' className={`${classes.csvHldr}`}>
                        <Button variant="outlined" size='small' className={`${classes.linearText} ${classes.csvBtn}`}>Download CV <Download htmlColor='#FE6B8B' /></Button>
                        <Box marginTop={'20px'} className='skill-list' display='flex' alignItems='center' justifyContent='center'>
                            <GitHub fontSize='large' sx={{ color: 'white', height: '42px' }} />
                            <LinkedIn fontSize='large' sx={{ color: 'white', height: '42px' }} />
                            <Email fontSize='large' sx={{ color: 'white', height: '42px' }} />
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} display='flex' alignItems='center' justifyContent='center' position='relative'>
                <div className='animated-container'>
                    {[...Array(200)].map((it, index) => <div class="circle-container" key={index}>
                        <div class="circle"></div></div>)}
                </div>
                {aiFaceAnimataion}
            </Grid >
            <Grid item xs={12}>
                <Box textAlign='center' fontSize='large' color='#ffffff'>
                    "Let and Live!"
                </Box>
            </Grid>
        </Grid >
        // </WrapperSection >
    )
}

export default Home;

