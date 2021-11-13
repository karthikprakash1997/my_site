import React from "react";
import { Grid } from '@mui/material';
import Story from './story';

const About = () => {

    return (
        <Grid container spacing={2} >
            <Grid item xs={12} md={6} >
                <div style={{ padding: '5%' }}>
                    <Story />
                </div>
            </Grid>
            <Grid item xs={12} md={6} >
                <div style={{ padding: '5%' }}>
                    <div style={{ textAlign: 'center', width: '100%' }}>
                        <img
                            src={require("../../assets/png/myself/2.jpg")}
                            style={{ height: "550px", width: '500px' }}
                            alt="achivemens"
                        />
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default About;
