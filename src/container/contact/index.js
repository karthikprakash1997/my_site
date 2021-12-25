import React from "react";
import { Grid } from '@mui/material';
// import { makeStyles } from "@mui/styles";
import ContactInfo from './contactInfo';
import Map from './map';
// import WrapperSection from "../../components/section";
import Heading from "../../components/heading";

const Contact = () => {
  // const useStyles = makeStyles({
  //   linearText: {
  //     background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  //     WebkitBackgroundClip: "text",
  //     WebkitTextFillColor: "transparent",
  //   },
  // })
  // const classes = useStyles();
  return (
    <Grid container marginTop={'150px'}>
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
