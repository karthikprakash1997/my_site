import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UWaterlooRA = () => {
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        className={`project-hldr ${classes.projects}`}
        paddingX={"30px"}
        paddingY={"30px"}
        marginTop={"30px"}
        minHeight={"300px"}
      >
        <Box
          display={"flex"}
          alignItems={"top"}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <img
            className={`${classes.proImg}`}
            src={window.location.origin + `/assets/images/exp/uwaterloo.png`}
            alt="projects"
          />
        </Box>
        <Box className={`${classes.description}`}>
          {isMobile ? (
            <>
              <Box
              // display={"flex"}
              // justifyContent="space-between"
              // alignItems={"end"}
              >
                <Typography
                  fontWeight={"bold"}
                  color={"rgb(94,149,22)"}
                  fontSize={"25px"}
                >
                  Research Assistant
                </Typography>
                <Typography
                  variant="h6"
                  color={"rgb(61,143,245)"}
                  fontWeight="bold"
                  // sx={{ marginTop: "10px" }}
                >
                  University of Waterloo
                </Typography>

                <Typography variant="h6" fontWeight={"bold"}>
                  Waterloo, ON, Canada
                </Typography>
                <Typography variant="h6">September 2023 - Present</Typography>
              </Box>
            </>
          ) : (
            <>
              {" "}
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems={"end"}
              >
                <Typography variant="h4" color={"rgb(94,149,22)"}>
                  Research Assistant
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle1"
                  fontStyle={"italic"}
                >
                  September 2023 - Present
                </Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems={"end"}
              >
                <Typography
                  variant="h6"
                  color={"rgb(61,143,245)"}
                  fontWeight="bold"
                  // sx={{ marginTop: "10px" }}
                >
                  University of Waterloo
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle1"
                  fontStyle={"italic"}
                  fontWeight={"bold"}
                >
                  Waterloo, ON, Canada
                </Typography>
              </Box>
            </>
          )}

          <Box marginTop={2}>
            <Typography
              textAlign={"justify"}
              style={{ textIndent: "10%" }}
              paragraph
            >
              Developed an interactive web application using React JS and Flask
              to fortify Canada's energy infrastructure against cyber threats
              under Prof. Sebastian Fischmeister. The project secured a
              significant $1.2 million grant from Natural Resources Canada,
              highlighting the project's national importance. I also
              consistently contributed to data visualizations using tools like
              HighCharts and Material-UI, shedding light on vulnerable
              categories for cyberattacks, further strengthening our
              cybersecurity efforts. Took ownership of the product and
              streamlined internal tools and libraries to reduce code
              duplication and technical debt by creating reusable components and
              custom hooks, improving development efficiency by 35%.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default UWaterlooRA;
