import React from "react";
import { Grid } from '@mui/material';

import Header from './container/header';
import Home from './container/home';
import Education from "./container/education";
// import Skills from "./container/skills";
import Contact from "./container/contact";
import Projects from "./container/projects";
import Footer from "./container/footer";
import About from './container/about';

// import { makeStyles } from "@mui/styles";
import './index.css';
// import './container/about/about.css';

const App = () => {

  // const useStyles = makeStyles({
  //   root: {},
  //   mainContainer: {
  //     background: 'url(src/assets/images/bg-img.jpg) no-repeat center',
  //     '&.MuiGrid-container': {
  //       paddingTop: 70,
  //     }
  //   }
  // })


  // const [selectedComp, setSelectedComp] = useState(HEADER[0].value);
  // const classes = useStyles();
  return (
    <>
        <Grid container maxWidth={'1400px'} marginX='auto' paddingRight={'50px'} paddingLeft={'50px'} >
          <Header />
          <Home />
          <About />
          <Education />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Grid>
    </>
  )
}

export default App;

