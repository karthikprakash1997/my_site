import React from "react";
import { Box, Typography, Chip, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Heading from "../../components/heading";
import {
  AXIMSOFT_BACKEND_DEVELOPMENT,
  AXIMSOFT_FRONTEND_DEVELOPMENT,
  AXIMSOFT_FRONT_END_DEVELOPMENT,
  PROJECTS,
} from "../../util";
import Aximsoft from "./aximsoft";
import Cribbo from "./cribbo";
import UWaterloo from "./uwaterloo";

const Education = ({ myref }) => {
  const useStyles = makeStyles({
    projects: {
      display: "flex",
      alignItems: "stretch",
      gap: 30,
      borderRadius: "1.5rem",
    },
    proImg: {
      width: 90,
      height: 90,
      borderRadius: "10%",
    },
    pinkBackGround: {
      background: "#FE6B8B",
      color: "white",
    },
    whiteBackGround: {
      background: "rgb(238, 238, 238)",
    },
  });

  const classes = useStyles();

  return (
    <>
      <Grid ref={myref} container marginTop={"150px"}>
        <Heading heading={"My Journey"} />
        <Cribbo />
        <UWaterloo/>
        <Aximsoft />
      </Grid>
    </>
  );
};
export default Education;
