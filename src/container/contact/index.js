import React from "react";
import { Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import ContactInfo from './contactInfo';
import Map from './map';
import WrapperSection from "../../components/section";

const Contact = () => {
    const useStyles = makeStyles({
        linearText: {
            background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
    })
    const classes = useStyles();
    return (
        <WrapperSection classVariant={`contact-section`}>
            <div class="titles" style={{ textAlign: 'center', width: '100%' }}>
                <h2 class="title"><div className='inner-txt'> Contact </div></h2>
                <div class={`subtitle ${classes.linearText}`}><span> Let's talk </span></div>
            </div>
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
        </WrapperSection>
    )
}

export default Contact;
