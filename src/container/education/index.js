import React from "react";
import { Grid } from "@mui/material";
import Heading from "../../components/heading";
import Aximsoft from "./aximsoft";
import Cribbo from "./cribbo";
import UWaterloo from "./uwaterloo";

const Education = ({ myref }) => {
  return (
    <>
      <Grid ref={myref} container marginTop={"150px"}>
        <Heading heading={"My Journey"} />
        <Cribbo />
        <UWaterloo />
        <Aximsoft />
      </Grid>
    </>
  );
};
export default Education;
