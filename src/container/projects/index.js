import React, { useState } from "react";
import { Box, Typography, Chip, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Heading from "../../components/heading";
import { PROJECTS } from "../../util";

const Projects = ({ myref }) => {
  const useStyles = makeStyles({
    projects: {
      display: "flex",
      alignItems: "stretch",
      gap: 30,
      borderRadius: "1.5rem",
    },
    proImg: {
      width: 121,
      height: 121,
      borderRadius: "100%",
    },
    pinkBackGround: {
      background: "#FE6B8B",
      color: "white",
    },
    whiteBackGround: {
      background: "rgb(238, 238, 238)",
    }
  });

  const classes = useStyles();

  const [readMore, setReadMore] = useState(null);

  return (
    <>
      <Grid ref={myref} container marginTop={"150px"} >
        <Heading heading={"My Works"} />
        {PROJECTS.map((data, index) => {
          let stringLength = 0;
          const description =
            readMore !== index && data?.isReadMore
              ? data?.description?.reduce((acc, curr) => {
                  if (stringLength <= 400) {
                    stringLength += curr.length;
                    const newString = curr.slice(0,400);
                    acc = [...acc, `${newString}......`];
                  }
                  return acc;
                }, [])
              : data?.description;
          return (
            <Box
              className={`project-hldr ${classes.projects} ${
                data?.isPink ? classes.pinkBackGround : classes.whiteBackGround
              }`}
              paddingX={"30px"}
              paddingY={"30px"}
              marginTop={"30px"}
              minHeight={'300px'}
            >
              <Box display={"flex"} alignItems={"center"}>
                <img
                  className={`${classes.proImg}`}
                  src={
                    window.location.origin + `/assets/images/exp/${data?.image}`
                  }
                  alt="projects"
                />
                <Box marginLeft={"5%"}>
                  <Box whiteSpace="nowrap">
                    <Box display={"inline"}>Duration:</Box>
                    <Box>{data?.duration}</Box>
                  </Box>
                  <Box whiteSpace="nowrap" mt="12px">
                    {data?.subtitle && (
                      <Box display={"inline"}>{data?.subtitle}:</Box>
                    )}
                    {data?.subtitleDescription && (
                      <Box>{data?.subtitleDescription}</Box>
                    )}
                  </Box>
                  <Box whiteSpace="nowrap" mt="12px">
                    {data?.secondarySubtitle && (
                      <Box display={"inline"}>{data?.secondarySubtitle}:</Box>
                    )}
                    {data?.secondarySubtitleText && (
                      <Box>{data?.secondarySubtitleText}</Box>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box className={`${classes.description}`}>
                <Typography
                  variant="h4"
                  sx={{ textDecoration: "underline", marginTop: "10px" }}
                >
                  {data?.title}
                </Typography>
                <Box marginLeft={data?.isPara ? "0px" : "25px"}>
                  {!data?.isPara ? (
                    <ul>
                      {description?.map((it, ind) => (
                        <li key={ind}>
                          <Typography textAlign={"justify"}>{it}</Typography>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      {description?.map((it, ind) => (
                        <Typography
                          key={ind}
                          textAlign={"justify"}
                          style={{ textIndent: "10%" }}
                          paragraph
                        >
                          {it}
                        </Typography>
                      ))}
                    </>
                  )}
                  {data?.isReadMore && (
                    <Box width={"100%"}>
                      <Box
                        sx={{
                          fontWeight: "bold",
                          cursor: "pointer",
                          fontStyle: "italic",
                          // fontSize: 22,
                          textDecorationLine: "underline",
                        }}
                        textAlign={"end"}
                        onClick={() =>
                          setReadMore(readMore !== null ? null : index)
                        }
                      >
                        {index !== readMore ? "Read More +" : "Read Less -"}
                      </Box>
                    </Box>
                  )}
                </Box>
                {data?.projects?.length > 0 && (
                  <Box>
                    {data?.projects.map((it, ind) => (
                      <>
                        <Typography
                          key={ind}
                          variant="h6"
                          sx={{
                            textDecoration: "underline",
                            marginTop: "10px",
                          }}
                        >
                          {it.title}
                        </Typography>
                        <Box marginLeft={"25px"}>
                          <ul>
                            {it.description.map((datum, ind) => (
                              <li key={ind}>
                                <Typography textAlign={"justify"}>
                                  {datum}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        </Box>
                      </>
                    ))}
                  </Box>
                )}
                {data?.chipText?.length && (
                  <Box whiteSpace="nowrap" mt="12px">
                    <Box
                      display={"inline"}
                      sx={{ textDecoration: "underline", marginTop: "10px" }}
                    >
                      {data?.chipTitle}:{" "}
                    </Box>
                    <Box
                      display="flex"
                      style={{ flexWrap: "wrap" }}
                      gap="10px"
                      marginTop="5px"
                    >
                      {data?.chipText.map((it, ind) => (
                        <Chip
                          key={ind}
                          label={it}
                          className={`${
                            !data?.isPink
                              ? classes.pinkBackGround
                              : classes.whiteBackGround
                          }`}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
                {data?.additionalChips?.length &&
                  data?.additionalChips.map((it) => (
                    <Box whiteSpace="nowrap" mt="12px">
                      <Box
                        display={"inline"}
                        sx={{ textDecoration: "underline", marginTop: "10px" }}
                      >
                        {it?.chipTitle}:{" "}
                      </Box>
                      <Box
                        display="flex"
                        style={{ flexWrap: "wrap" }}
                        gap="10px"
                        marginTop="5px"
                      >
                        {it?.chipText.map((it, ind) => (
                          <Chip
                            key={ind}
                            label={it}
                            className={`${
                              !data?.isPink
                                ? classes.pinkBackGround
                                : classes.whiteBackGround
                            }`}
                          />
                        ))}
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>
          );
        })}
      </Grid>
    </>
  );
};
export default Projects;
