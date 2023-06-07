import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FASHION_MINISAT, FEATURE_MATCHING } from "../../util";

const UWaterloo = ({ myref }) => {
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
  const [state, setState] = useState();
  const handleClick = (str) => {
    setState(str);
  };

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
                  MENG Electrical and Computer Engineering
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
                <Typography variant="h6">January 2023 - Present</Typography>
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
                  MENG Electrical and Computer Engineering
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle1"
                  fontStyle={"italic"}
                >
                  January 2023 - Present
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
              Pursuing a Master's degree at UWaterloo has been an incredibly
              fulfilling journey, exceeding my wildest dreams. Throughout my
              time at the university, I have had the incredible opportunity to
              refine and cultivate my passion for software development while
              delving deep into the fascinating realms of Artificial
              Intelligence and Machine Learning. Throughout my time at
              UWaterloo, I have been fortunate to acquire a diverse range of
              technical skills, equipping me with the tools necessary to tackle
              complex challenges in the field.
            </Typography>
            <Typography
              textAlign={"justify"}
              style={{ textIndent: "10%" }}
              paragraph
            >
              However, my journey at the University of Waterloo extends far
              beyond the classroom. Engaging in various clubs and
              extracurricular activities has not only broadened my horizons but
              also allowed me to forge meaningful connections with like-minded
              peers who share my enthusiasm and drive. Additionally, the
              opportunity to serve as a mentor to junior students has been
              incredibly rewarding, as I've had the chance to impart my
              knowledge and experiences, fostering their growth and development.
            </Typography>
          </Box>
          <Box
            display="flex"
            // justifyContent="center"
            alignItems="center"
          >
            <Typography
              color={"rgb(61,143,245)"}
              fontWeight="bold"
              style={{ textDecoration: "underline"}}
              // fontStyle="italic"
              align="right"
              variant="h6"
            >
             Notable Projects
            </Typography>
          </Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            marginTop={"1%"}
            style={{ textDecoration: "underline" }}
          >
            Fashion MNIST Classification
          </Typography>
          <Box marginLeft={"25px"}>
            <ul>
              {FASHION_MINISAT?.map((it, ind) => (
                <li key={ind}>
                  <Typography textAlign={"justify"} fontStyle={"italic"}>
                    {it}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            style={{ textDecoration: "underline" }}
          >
            Comparison of Feature Matching Techniques for 2D - 3D construction
            in Medical Applications
          </Typography>
          <Box marginLeft={"25px"}>
            <ul>
              {FEATURE_MATCHING?.map((it, ind) => (
                <li key={ind}>
                  <Typography textAlign={"justify"} fontStyle={"italic"}>
                    {it}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default UWaterloo;
