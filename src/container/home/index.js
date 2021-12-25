import React, { useMemo } from "react";
import Typed from "react-typed";
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
// import WrapperSection from "../../components/section";
import { Download } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import AiHeadAnimation from "../../components/aiHead";
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
            fontSize: '75px !important',
            fontWeight: '800px !important',
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

    })

    const classes = useStyles();

    const aiFaceAnimataion = useMemo(()=> <AiHeadAnimation />,[])

    return (
        // <WrapperSection classVariant='section-home'>
            <Grid container spacing={2} marginX='auto' paddingTop={'130px'}>
                <Grid item xs={12} md={6} display='flex' alignItems='center' justifyContent='center'>
                    <Box display='flex' flexDirection='column' color='#ffffff'>
                        <Box>
                            <Typography fontSize='20px' className={`${classes.linearText} ${classes.greeting}`}>Hello, I am </Typography>
                            <Typography className={`${classes.profileName} ${classes.linearText}`}>Karthik Prakash</Typography>
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
                        <Button variant="outlined" size='small' className={`${classes.linearText} ${classes.csvBtn}`}>Download CV <Download htmlColor='#FE6B8B' /></Button>
                        <Box marginTop={'20px'} className='skill-list' display='flex' alignItems='center' justifyContent='center'>
                            <GitHubIcon fontSize='large' sx={{ color: 'white' }} />
                            <LinkedIn fontSize='large' sx={{ color: 'white' }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} display='flex' alignItems='center' justifyContent='center'>
                    <Box maxWidth={'80%'}>
                    {/* <div style={{ padding: '5%' }}>
                            <div style={{ textAlign: 'center', width: '100%' }}> */}
                    {/* <AiHeadAnimation /> */}
                    {aiFaceAnimataion}
                    </Box>
                    {/* </div> */}
                    {/* </div> */}
                </Grid>
            </Grid>
        // </WrapperSection >
    )
}

export default Home;

