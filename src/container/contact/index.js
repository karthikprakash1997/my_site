import React from "react";
import { Grid } from '@mui/material';
import ContactInfo from './contactInfo';
import Map from './map';

const Contact = () => {

    return (

        <Grid container spacing={2} >
            <Grid item xs={12} md={6} >
                <div style={{ padding: '5%' }}>
                    <Map />
                </div>
            </Grid>
            <Grid item xs={12} md={6} >
                <div style={{ padding: '5%' }}>
                    <ContactInfo />
                </div>
            </Grid>
        </Grid>
    )
}

export default Contact;
