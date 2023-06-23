import React from "react";
import { Grid } from "@mui/material";

import Home from "./container/home";
import Education from "./container/education";
import Contact from "./container/contact";
import Footer from "./container/footer";
import Projects from "./container/projects";

import "./index.css";

const App = () => {
  return (
    <>
      <Home />
      <Grid
        className="custom-scrollbar"
        container
        maxWidth={"1300px"}
        marginX="auto"
      >
        <Education />
        <Projects />
        <Contact />
      </Grid>
      <Footer />
    </>
  );
};

export default App;
