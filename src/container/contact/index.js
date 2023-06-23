import React from "react";
import { Grid, Typography } from '@mui/material';
import ContactInfo from './contactInfo';
import Map from './map';
import Heading from "../../components/heading";

const Contact = ({ myref }) => {
  return (
    <Grid ref={myref} container marginTop={'150px'}>
      <Heading heading={"Let's Talk"} />
      <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'}>
        {/* <Grid item xs={12} md={6} >
          <div style={{ padding: '5%' }}>
            <>
            <Typography>
               Contact me in the below social media platforms or just send me a messge, will reply ASAP.
            </Typography>
            </>
          </div>
        </Grid>
        <Grid item xs={12} md={6} > */}
          <div style={{ padding: '2%', width:'700px' }}>
            <ContactInfo />
          </div>
        {/* </Grid> */}
      </Grid>
    </Grid>
  )
}

export default Contact;
