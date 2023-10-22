import React from "react";
import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  AXIMSOFT_BACKEND_DEVELOPMENT,
  AXIMSOFT_FRONTEND_DEVELOPMENT,
} from "../../util";
import { useState } from "react";

const Aximsoft = ({ myref }) => {
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
  const [state] = useState();

  return (
    <>
      {/* <Grid ref={myref} container marginTop={"150px"}>
        <Heading heading={"My Journey"} /> */}
      {/* {PROJECTS.map((data, index) => {
          return ( */}
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
            src={window.location.origin + `/assets/images/exp/axim.jpeg`}
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
                  Software Developer
                </Typography>
                <Typography
                  variant="h6"
                  color={"rgb(61,143,245)"}
                  fontWeight="bold"
                  // sx={{ marginTop: "10px" }}
                >
                  Aximsoft
                </Typography>

                <Typography variant="h6" fontWeight={"bold"}>
                  Coimbatore, TN, India
                </Typography>
                <Typography variant="h6">
                  December 2019 - January 2023
                </Typography>
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
                  Software Developer
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle1"
                  fontStyle={"italic"}
                >
                  December 2019 - January 2023
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
                  Aximsoft
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle1"
                  fontStyle={"italic"}
                  fontWeight={"bold"}
                >
                  Coimbatore, TN, India
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
              As a software developer at Aximsoft, I have been fortunate to be
              part of a dynamic and innovative team. My time at Aximsoft has
              been filled with exciting challenges and rewarding achievements.
              One notable accomplishment was successfully developing two
              large-scale applications{" "}
              <Link href="https://www.rallio.com">{"Rallio"}</Link>
              {" and "}{" "}
              <Link href="https://www.inteliglas.com">{"InteliGlas"}</Link>.
            </Typography>

            <Typography
              textAlign={"justify"}
              style={{ textIndent: "10%" }}
              paragraph
            >
              In the development of Rallio, I played a key role in creating a
              comprehensive platform for managing social media presence. This
              involved implementing robust features to streamline social media
              operations and enhance brand visibility. The application has
              empowered numerous businesses to effectively manage their online
              presence and engage with their target audience.
            </Typography>
            <Typography
              textAlign={"justify"}
              style={{ textIndent: "10%" }}
              paragraph
            >
              Additionally, I contributed to the development of InteliGlas,
              IoT-based solution for automating building management. Through my
              expertise in software development and integration, I helped create
              a seamless system that optimizes energy efficiency, security, and
              comfort within buildings.
            </Typography>
            <Typography
              textAlign={"justify"}
              style={{ textIndent: "10%" }}
              paragraph
            >
              Throughout my tenure at Aximsoft, I have consistently demonstrated
              a proactive and results-oriented approach. I have actively
              participated in code reviews, provided mentorship to fellow
              developers, and contributed to the improvement of internal tools
              and libraries. By leveraging my strong skills in Node.js,
              Express.js, GraphQL, and PostgreSQL, I have played a significant
              role in optimizing API performance, reducing response time, and
              enhancing overall user experience.
            </Typography>
            <Typography
              textAlign={"justify"}
              style={{ textIndent: "10%" }}
              paragraph
            >
              Furthermore, I have been instrumental in fostering effective
              collaboration among cross-functional teams, ensuring seamless
              integration of front-end and back-end components. By utilizing
              technologies such as React, Redux, and Redux-Sagas, I have
              successfully developed interactive dashboards, data visualization
              features, and user-friendly interfaces that have resulted in
              improved engagement and data-driven decision-making.
            </Typography>
            <Typography
              textAlign={"justify"}
              style={{ textIndent: "10%" }}
              paragraph
            >
              At Aximsoft, I have consistently embraced new challenges and
              demonstrated a commitment to continuous learning and growth. By
              staying up to date with emerging technologies and industry trends.
              Working as a software developer at Aximsoft has been a fulfilling
              and rewarding experience.
            </Typography>
            {/* <Box
              display="flex"
              // justifyContent="center"
              alignItems="center"
            >
              <Typography
                color={"rgb(61,143,245)"}
                fontWeight="bold"
                style={{ textDecoration: "underline", cursor: "pointer" }}
                fontStyle="italic"
                align="right"
                variant="h6"
                onClick={() => setState(state === "aximsoft" ? "" : "aximsoft")}
              >
                Contributions
              </Typography>
            </Box> */}
            {state === "aximsoft" && (
              <>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  style={{ textDecoration: "underline" }}
                >
                  Front-end Development
                </Typography>
                <Box marginLeft={"25px"}>
                  <ul>
                    {AXIMSOFT_FRONTEND_DEVELOPMENT?.map((it, ind) => (
                      <li key={ind}>
                        <Typography textAlign={"justify"}>{it}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  style={{ textDecoration: "underline" }}
                >
                  Back-end Development
                </Typography>
                <Box marginLeft={"25px"}>
                  <ul>
                    {AXIMSOFT_BACKEND_DEVELOPMENT?.map((it, ind) => (
                      <li key={ind}>
                        <Typography textAlign={"justify"}>{it}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
      {/* );
        })} */}
      {/* </Grid> */}
    </>
  );
};
export default Aximsoft;
