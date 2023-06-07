import React from "react";
import { Grid } from "@mui/material";
import Heading from "../../components/heading";
import { StaticCloud } from "./staticCloud";

const Projects = ({ myref }) => {
  return (
    <>
      <Grid ref={myref} container marginTop={"150px"}>
        <Heading heading={"Tech Stack"} />
        <Grid width={'-webkit-fill-available'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <StaticCloud />
        </Grid>
      </Grid>
    </>
  );
};
export default Projects;
