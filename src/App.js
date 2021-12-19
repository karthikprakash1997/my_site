import React from "react";
import { Grid } from '@mui/material';

import Header from './container/header';
import Home from './container/home';
import Education from "./container/education";
import Skills from "./container/skills";
import Contact from "./container/contact";
import Projects from "./container/projects";
import About from "./container/about";

// import Footer from "./container/footer";

import { makeStyles } from "@mui/styles";
import "./main.css";

const App = () => {

  const useStyles = makeStyles({
    root: {},
    mainContainer: {
      background: 'url(src/assets/images/bg-img.jpg) no-repeat center',
      '&.MuiGrid-container': {
        paddingTop: 70,
      }
    }
  })


  // const [selectedComp, setSelectedComp] = useState(HEADER[0].value);
  const classes = useStyles();
  return (
    <>

      <Header />
      <Grid container rowSpacing={2} className={`${classes.mainContainer} main-container`}>
        <Home />
        <About />
        <div class="titles title-grey" style={{ textAlign: 'center', width: '100%', paddingTop: '5%' }}>
                <h2 class="title education-exp"><div className='inner-txt'> Education & Experience</div></h2>
                {/* <div class="subtitle"><span> My Story </span></div> */}
            </div>
        <Education />
        <Skills />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </Grid>

    </>
  )
}

export default App;

