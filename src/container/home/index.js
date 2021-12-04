import React from "react";
import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import WrapperSection from "../../components/section";
// import ParticleAnimation from "../../components/particleAnimation";
// import {HomeBg} from '../../assets/images/home-bg.jpg';


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
        }
    })

    const classes = useStyles();

    return (
        <WrapperSection classVariant='section-home'>
            {/* <ParticleAnimation /> */}
            <Grid container spacing={2} maxWidth='lg' marginX='auto'>
                <Grid item xs={12} md={6} >
                    <Box padding='5%' display='flex' flexDirection='column' color='#ffffff'>
                        <Box>
                            <Box mt='4px' className={`${classes.profileName} animate__heartBeat`}>Karthik Prakash</Box>
                            <Box mt='4px' className={`${classes.role}`}>Software developer</Box>
                        </Box>
                        <Typography color='#ffffff' lineHeight='26px' mt='16px'>
                            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec
                            elit libero, sodales nec, volutpat a, suscipit non, turpis.
                        </Typography>
                    </Box>

                </Grid>
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
            </Grid>
        </WrapperSection >
    )
}

export default Home;
