import React from "react";
import { Grid } from '@mui/material';
import ContactInfo from './contactInfo';
import Map from './map';
import Heading from "../../components/heading";

const Contact = ({ myref }) => {
  return (
    <Grid ref={myref} container marginTop={'150px'}>
      <Heading heading={"Let's Talk"} />
      <Grid container spacing={2}>
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
    </Grid>
  )
}

export default Contact;
