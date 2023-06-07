import React from "react";
import Typed from "react-typed";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
// import WrapperSection from "../../components/section";
import { Download, LinkedIn, Email, GitHub } from "@mui/icons-material";

const Home = ({ myref }) => {
  const useStyles = makeStyles({
    sectionHome: {
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      // backgroundColor: "#040C18",
      // objectFit:'cover',
     
    },
    backGroundImage:{
      background: `url(${window.location.origin}/assets/images/myself/myself.jpg) `,
      backgroundPosition: "center",
      transform:"scaleX(-1)",
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: -1,
    },
    profile: {
      borderRadius: 10,
    },
    profileName: {
      fontSize: "75px !important",
      fontWeight: "800px !important",
      "@media (max-width:576px)": {
        fontSize: "34px !important",
      },
    },
    gradName: {
      fontSize: 20,
      fontWeight: 700,
    },
    linearText: {
      lineHeight:1
      // background:
      //   "-webkit-linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
      // WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
    },
    csvBtn: {
      maxWidth: "max-content",
      borderColor: "#FE6B8B !important",
      height: "max-content",
      marginTop: "20px !important",
      padding: "8px !important",
    },
    csvHldr: {
      "@media(max-width: 576px)": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
  });

  const classes = useStyles();

  const handleClick = async () => {
    fetch(
      "https://docs.google.com/document/u/0/export?format=pdf&id=1o1x9grNFMCheyPo1h3BNM8T0YZwMhpbmPPgisVLqp9o&token=AC4w5VhF_HIExO5VwsDG3EELo966C4J0lw%3A1674926020940&ouid=115286562721012512514&includes_info_params=true&usp=drive_web&cros_files=false"
    ).then((response) =>
      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const createdDoc = document.createElement("a");
        createdDoc.href = url;
        createdDoc.download = `karthik_prakash_sivakumar_resume.pdf`;
        createdDoc.click();
        createdDoc.remove();
      })
    );

    fetch(
      "https://docs.google.com/document/u/0/export?format=pdf&id=1hpZWkuc285xZPmLiyw4Nksyd59i0wdK2X-wTc9gSzSQ&token=AC4w5Vgf-La_R9m_PYPESXXRQq9Y75nOjg%3A1674927200528&ouid=115286562721012512514&includes_info_params=true&usp=drive_web&cros_files=false"
    ).then((response) =>
      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const createdDoc = document.createElement("a");
        createdDoc.href = url;
        createdDoc.download = `karthik_prakash_sivakumar_cover_letter.pdf`;
        createdDoc.click();
        createdDoc.remove();
      })
    );
  };

  return (
    <Grid
      ref={myref}
      container
      className={`${classes.sectionHome}`}
      spacing={2}
      paddingTop={"80px"}
      paddingRight={"10%"}
      paddingLeft={"10%"}
    >
        <div className={`${classes.backGroundImage}`}></div>
      <Grid
        className="custom-scrollbar"
        container
        maxWidth={"1300px"}
        marginX="auto"
        paddingRight={"5%"}
        paddingLeft={"5%"}
      >
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" flexDirection="column" color="#ffffff">
            <Box>
              <Typography
                fontSize="30px"
                className={`${classes.linearText} ${classes.greeting}`}
              >
                👋, I am{" "}
              </Typography>
              <Typography
              lineHeight={1}
                className={`${classes.profileName} ${classes.linearText}`}
              >
                Karthik Prakash Sivakumar
              </Typography>
              {/* கார்த்திக் பிரகாஷ் சிவகுமார் */}
              <Typed
                strings={[
                  "Full Stack Devleoper",
                  "AI/ML Enthusiast",
                  "Bibliophile",
                ]}
                typeSpeed={30}
                className={`${classes.linearText} ${classes.gradName}`}
                backSpeed={30}
                loop
              />
            </Box>
            <Box
              display="flex"
              columnGap="20px"
              marginTop="20px"
              className={`${classes.csvHldr}`}
            >
              <Box
                marginTop={"20px"}
                className="skill-list"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <GitHub
                  cursor="pointer"
                  onClick={() =>
                    window.open("https://www.github.com/karthikprakash1997")
                  }
                  fontSize="large"
                  sx={{ color: "white", height: "42px" }}
                />
                <LinkedIn
                  cursor="pointer"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/karthik-prakash-s")
                  }
                  fontSize="large"
                  sx={{ color: "white", height: "42px" }}
                />
                <Email
                  cursor="pointer"
                  onClick={() =>
                    window.open("mailto:karthiksiva1997@gmail.com")
                  }
                  fontSize="large"
                  sx={{ color: "white", height: "42px" }}
                />
              </Box>
            </Box>
            <Box
              textAlign="center"
              fontSize="large"
              color="#ffffff"
              display="flex"
              columnGap="20px"
              marginTop="20px"
            >
              "Curiosity is the most powerful thing you own."
            </Box>
            <Box
              textAlign="center"
              fontSize="large"
              color="#ffffff"
              columnGap="20px"
              marginTop="20px"
            >
              - James Cameron
            </Box>
          </Box>
        </Grid>
        
      </Grid>
    </Grid>
  );
};

export default Home;
