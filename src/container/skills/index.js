import React from "react";
import { Grid } from "@mui/material";
import Heading from "../../components/heading";
// import { BACK_END, DEVOPS, FRONT_END, ML_IOT } from "../../util";
// import { StaticCloud } from "../projects/dynamic-icons";

const Skills = ({ myref }) => {
  return (
    <Grid ref={myref} marginTop={"150px"}>
      <Heading heading="Tech Stack" isSecondary />
        {/* <StaticCloud/> */}
        {/* {[FRONT_END, BACK_END, DEVOPS, ML_IOT].map((it) => (
          <Grid
            item
            md={3}
            className="card__layout"
            margin={"10px"}
            height={"400px"}
            width="100%"
          >
            <Heading heading={it.title} isSecondary variant={"h5"} />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              gap="30px"
            >
              {it.icons.map((icon) => {
                return (
                  <img
                    key={it}
                    src={
                      window.location.origin +
                      `/assets/images/tools/${icon}.png`
                    }
                    alt={it}
                    width={it === "express" ? "150px" : "60px"}
                    height={"60px"}
                  />
                );
              })}
            </Box>
          </Grid>
        ))} */}
    </Grid>
  );
};
export default Skills;
