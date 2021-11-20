import React from "react";
import { Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const Home = () => {

    const useStyles = makeStyles({
        sectionMain: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'url(src/assets/images/bg-img.jpg) no-repeat center',
        }
    })

    const classes = useStyles();

    return (
        <section className={`${classes.sectionMain}`}>
            <Grid container spacing={2} maxWidth='lg' marginX='auto'>
                <Grid item xs={12} md={6} >
                    <Box padding='5%' display='flex'  flexDirection='column'>
                        <Box>
                            <Box>Hi</Box>
                            <Box>I am Karthik Prakash</Box>
                            <Box>Software developer</Box>
                        </Box>
                        <Box>
                            <Typography>
                                Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                                Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                                Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec
                                elit libero, sodales nec, volutpat a, suscipit non, turpis.
                            </Typography>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} >
                    <div style={{ padding: '5%' }}>
                        <div style={{ textAlign: 'center', width: '100%' }}>
                            <img
                                src={require("../../assets/images/png/myself/2.jpg")}
                                style={{ height: "450px", width: '400px' }}
                                alt="achivemens"
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </section>
    )
}

export default Home;
