import React from "react";
import { Grid } from '@mui/material';
import ContactInfo from './contactInfo';
import Map from './map';
import Section from "../../components/section"

const Contact = () => {

    return (
        <Section>
            <Grid container spacing={2} maxWidth='lg' marginX='auto' >
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
        </Section>
    )
}

export default Contact;
