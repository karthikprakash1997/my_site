import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CRIBBO } from "../../util";

const Cribbo = ({ myref }) => {
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
            src={window.location.origin + `/assets/images/exp/empty.jpeg`}
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
                  Backend Developer
                </Typography>
                <Typography
                  variant="h6"
                  color={"rgb(61,143,245)"}
                  fontWeight="bold"
                  // sx={{ marginTop: "10px" }}
                >
                  Cribbo Technologies INC
                </Typography>

                <Typography variant="h6" 
                  fontWeight={"bold"}
                  >Toronto, ON, Canada</Typography>
                <Typography variant="h6">April 2023 - Present</Typography>
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
                  Backend Developer
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle1"
                  fontStyle={"italic"}
                >
                  April 2023 - Present
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
                  Cribbo Technologies INC
                </Typography>
                <Typography
                  align="right"
                  variant="subtitle1"
                  fontStyle={"italic"}
                  fontWeight={"bold"}

                >
                  Toronto, ON, Canada
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
              Being a part of the Cribbo team was an incredible experience that
              allowed me to contribute to the development of a robust and
              scalable backend infrastructure. Collaborating with the
              development team, I played a key role in designing servers,
              MongoDB databases, and microservices using the Moleculer JS
              framework. This architectural foundation ensured enhanced
              scalability and performance of the application. Additionally, I
              actively participated in the brainstorming sessions and suggested
              innovative features and improvements that were subsequently
              implemented, further enhancing the functionality and user
              experience of the application. My time at Cribbo was invaluable
              for refining my backend skills and immersing myself in the
              prop-tech startup culture.{" "}
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
              style={{ textDecoration: "underline", cursor: "pointer" }}
              fontStyle="italic"
              align="right"
              variant="h6"
              onClick={() => handleClick(state === "cribbo"? '':"cribbo")}
            >
              Contributions
            </Typography>
          </Box>

          {state === "cribbo" && (
            <Box marginLeft={"25px"}>
              <ul>
                {CRIBBO?.map((it, ind) => (
                  <li key={ind}>
                    <Typography textAlign={"justify"} fontStyle={"italic"}>
                      {it}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export default Cribbo;
