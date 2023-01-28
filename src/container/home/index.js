import React from "react";
import Typed from "react-typed";
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
// import WrapperSection from "../../components/section";
import { Download, LinkedIn, Email, GitHub } from '@mui/icons-material';
import MyPDF from '../../assets/resume/karthik_prakash.pdf';
// import aihead from '../../../public/assets/images'

const Home = ({ myref }) => {

    const useStyles = makeStyles({
        sectionHome: {
            width: '100%',
            height: '90vh',
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

    // const typedAnimation = useMemo(() => {
    //     return (
    //         <Typed
    //             strings={[
    //                 "Software Developer",
    //                 "Tech Enthusiast",
    //                 "Writer"
    //             ]}
    //             typeSpeed={30}
    //             className={`${classes.linearText} ${classes.gradName}`}
    //             backSpeed={30}
    //             loop
    //         />
    //     )
    // }, [classes.linearText, classes.gradName]);

    return (
        // <WrapperSection >
        <Grid ref={myref} container className={`${classes.sectionHome}`} spacing={2} marginX='auto' paddingTop={'130px'}>
            <Grid item xs={12} md={6} display='flex' alignItems='center' justifyContent='center'>
                <Box display='flex' flexDirection='column' color='#ffffff'>
                    <Box>
                        <Typography fontSize='20px' className={`${classes.linearText} ${classes.greeting}`}>Hello, I am </Typography>
                        <Typography className={`${classes.profileName} ${classes.linearText}`}>Karthik Prakash Sivakumar</Typography>
                        <Typed
                            strings={[
                                "Software Developer",
                                "Tech Enthusiast",
                                "Bibliophile"
                            ]}
                            typeSpeed={30}
                            className={`${classes.linearText} ${classes.gradName}`}
                            backSpeed={30}
                            loop
                        />
                    </Box>
                    <Box display='flex' columnGap='20px' marginTop='20px' className={`${classes.csvHldr}`}>
                        <Button href={MyPDF} download="karthik_prakash.pdf" variant="outlined" size='small' className={`${classes.linearText} ${classes.csvBtn}`}>Download CV <Download htmlColor='#FE6B8B' /></Button>
                        <Box marginTop={'20px'} className='skill-list' display='flex' alignItems='center' justifyContent='center'>
                            <GitHub cursor="pointer" onClick={() => window.open("https://www.github.com/karthikprakash1997")} fontSize='large' sx={{ color: 'white', height: '42px' }} />
                            <LinkedIn cursor="pointer" onClick={() => window.open("https://www.linkedin.com/in/karthik-prakash-s")} fontSize='large' sx={{ color: 'white', height: '42px' }} />
                            <Email cursor="pointer" onClick={() => window.open('mailto:karthiksiva1997@gmail.com')} fontSize='large' sx={{ color: 'white', height: '42px' }} />
                        </Box>
                    </Box>
                    <Box textAlign='center' fontSize='large' color='#ffffff' display='flex' columnGap='20px' marginTop='20px'>
                        "Curiosity is the most powerful thing you own."
                    </Box>
                    <Box textAlign='center' fontSize='large' color='#ffffff' columnGap='20px' marginTop='20px'>
                        - James Cameron
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} display='flex' alignItems='center' justifyContent='center' >
                {/* <WrapperSection > */}
                <div className='animated-container'>
                    {[...Array(200)].map((it, index) => <div className="circle-container" key={index}>
                        <div className="circle"></div></div>)}
                </div>
                {/* </WrapperSection > */}
                {/* <Box
                    component="img"
                    sx={{
                        width:"100%",
                        height:"100%"
                        //   maxHeight: { xs: 233, md: 167 },
                        //   maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Ai Head"
                    src="'../../../public/assets/images/ai_head.png'"
                /> */}
                <img src={window.location.origin + '/assets/images/ai_head.png'} alt='Ai Head' width="100%" height="100%" />
            </Grid >
        </Grid >
    )
}

export default Home;

