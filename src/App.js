import React from "react";
// import Profile from "./components/Profile";
// import About from "./components/About";
// import Work from "./components/Work";
// import Skills from "./components/Skills";
// import Education from "./components/Education";
// import "./App.css";
// import Project from "./components/Project";
// import Intern from "./components/Intern";
// import Achievements from "./components/Achievements";
// import Hobbies from "./components/Hobbies";
// import { useSpring, animated } from "react-spring";
// import { Card, Accordion, Container, Row } from "react-bootstrap";
// import Download from "./components/download/download";
import Main from './components/content/index';
// import Loader from './components/loader';
import "./main.css";

const App = props => {
  // const profileData = props.jsonObj.basics;
  // // const aboutData = profileData.summary;
  // // const workData = props.jsonObj.work;
  // // const educationData = props.jsonObj.education;

  return (
    <>
    {/* <Loader /> */}
    <Main />
    </>
    // <animated.div style={prop}>
    //   <Container>
    //     <Row>
    //       <aside className="col-md-4">
    //         <Card className="cards ">
    //           <Profile profileData={profileData} />
    //         </Card>
    //       </aside>
    //       <main className="col-md-8">
    //         <Card className="cards1">
    //           <Accordion>
    //             <Card style={{ backgroundColor: "transparent" }}>
    //               <Accordion.Toggle
    //                 as={Card.Header}
    //                 eventKey="0"
    //                 style={{ height: "68px" }}
    //               >
    //                 <div style={{ display: "flex" }}>
    //                   <img
    //                     src={require("../src/assets/png/b1.png")}
    //                     style={{ height: "60%" }}
    //                     alt="achivemens"
    //                   />
    //                   <span>
    //                     <h2
    //                       className="text-uppercase"
    //                       style={{ color: "white", marginLeft: 10 }}
    //                     >
    //                       {" "}
    //                       About
    //                     </h2>
    //                   </span>
    //                 </div>{" "}
    //               </Accordion.Toggle>
    //               <Accordion.Collapse eventKey="0">
    //                 <About aboutData={aboutData} />
    //               </Accordion.Collapse>
    //             </Card>

    //             <Card style={{ backgroundColor: "transparent" }}>
    //               <Accordion.Toggle
    //                 as={Card.Header}
    //                 eventKey="1"
    //                 style={{ height: "68px" }}
    //               >
    //                 <div style={{ display: "flex" }}>
    //                   <img
    //                     src={require("../src/assets/png/e1.png")}
    //                     style={{ height: "60%" }}
    //                     alt="edu"
    //                   />{" "}
    //                   <span>
    //                     {" "}
    //                     <h2
    //                       className="text-uppercase"
    //                       style={{ color: "white", marginLeft: 10 }}
    //                     >
    //                       {" "}
    //                       Education
    //                     </h2>
    //                   </span>
    //                 </div>
    //               </Accordion.Toggle>
    //               <Accordion.Collapse eventKey="1">
    //                 <Education educationData={educationData} />
    //               </Accordion.Collapse>
    //             </Card>

    //             <Card style={{ backgroundColor: "transparent" }}>
    //               <Accordion.Toggle
    //                 as={Card.Header}
    //                 eventKey="2"
    //                 style={{ height: "68px" }}
    //               >
    //                 <div style={{ display: "flex" }}>
    //                   <img
    //                     src={require("../src/assets/png/c1.png")}
    //                     style={{ height: "60%" }}
    //                     alt="skills"
    //                   />
    //                   <span>
    //                     <h2
    //                       className="text-uppercase"
    //                       style={{ color: "white", marginLeft: 10 }}
    //                     >
    //                       {" "}
    //                       Skills
    //                     </h2>
    //                   </span>
    //                 </div>
    //               </Accordion.Toggle>
    //               <Accordion.Collapse eventKey="2">
    //                 <Skills />
    //               </Accordion.Collapse>
    //             </Card>

    //             <Card style={{ backgroundColor: "transparent" }}>
    //               <Accordion.Toggle
    //                 as={Card.Header}
    //                 eventKey="3"
    //                 style={{ height: "68px" }}
    //               >
    //                 <div style={{ display: "flex" }}>
    //                   <img
    //                     src={require("../src/assets/png/i1.png")}
    //                     style={{ height: "60%" }}
    //                     alt="achivemens"
    //                   />
    //                   <span>
    //                     <h2
    //                       className="text-uppercase"
    //                       style={{ color: "white", marginLeft: 10 }}
    //                     >
    //                       {" "}
    //                       Projects
    //                     </h2>
    //                   </span>
    //                 </div>{" "}
    //               </Accordion.Toggle>
    //               <Accordion.Collapse eventKey="3">
    //                 <Project aboutData={aboutData} />
    //               </Accordion.Collapse>
    //             </Card>

    //             <Card style={{ backgroundColor: "transparent" }}>
    //               <Accordion.Toggle
    //                 as={Card.Header}
    //                 eventKey="4"
    //                 style={{ height: "68px" }}
    //               >
    //                 <div style={{ display: "flex" }}>
    //                   <img
    //                     src={require("../src/assets/png/s1.png")}
    //                     style={{ height: "60%" }}
    //                     alt="achivemens"
    //                   />
    //                   <span>
    //                     <h2
    //                       className="text-uppercase"
    //                       style={{ color: "white", marginLeft: 10 }}
    //                     >
    //                       {" "}
    //                       Intern
    //                     </h2>
    //                   </span>
    //                 </div>{" "}
    //               </Accordion.Toggle>
    //               <Accordion.Collapse eventKey="4">
    //                 <Intern aboutData={aboutData} />
    //               </Accordion.Collapse>
    //             </Card>

    //             <Card style={{ backgroundColor: "transparent" }}>
    //               <Accordion.Toggle
    //                 as={Card.Header}
    //                 eventKey="5"
    //                 style={{ height: "68px" }}
    //               >
    //                 <div style={{ display: "flex" }}>
    //                   <img
    //                     src={require("../src/assets/png/w1.png")}
    //                     style={{ height: "60%" }}
    //                     alt="achivemens"
    //                   />
    //                   <span>
    //                     <h2
    //                       className="text-uppercase"
    //                       style={{ color: "white", marginLeft: 10 }}
    //                     >
    //                       {" "}
    //                       Work
    //                     </h2>
    //                   </span>
    //                 </div>{" "}
    //               </Accordion.Toggle>
    //               <Accordion.Collapse eventKey="5">
    //                 <Work workData={workData} />
    //               </Accordion.Collapse>
    //             </Card>

    //             <Card style={{ backgroundColor: "transparent" }}>
    //               <Accordion.Toggle
    //                 as={Card.Header}
    //                 eventKey="6"
    //                 style={{ height: "68px" }}
    //               >
    //                 <div style={{ display: "flex" }}>
    //                   <img
    //                     src={require("../src/assets/png/tr1.png")}
    //                     style={{ height: "60%" }}
    //                     alt="achivemens"
    //                   />
    //                   <span>
    //                     <h2
    //                       className="text-uppercase"
    //                       style={{ color: "white", marginLeft: 10 }}
    //                     >
    //                       {" "}
    //                       Achievements
    //                     </h2>
    //                   </span>
    //                 </div>
    //               </Accordion.Toggle>
    //               <Accordion.Collapse eventKey="6">
    //                 <Achievements aboutData={aboutData} />
    //               </Accordion.Collapse>
    //             </Card>

    //             <Card style={{ backgroundColor: "transparent" }}>
    //               <Accordion.Toggle
    //                 as={Card.Header}
    //                 eventKey="7"
    //                 style={{ height: "65px" }}
    //               >
    //                 <div style={{ display: "flex" }}>
    //                   <img
    //                     src={require("../src/assets/png/t1.png")}
    //                     style={{ height: "60%" }}
    //                     alt="hobbies"
    //                   />{" "}
    //                   <span>
    //                     {" "}
    //                     <h2
    //                       className="text-uppercase"
    //                       style={{ color: "white", marginLeft: 10 }}
    //                     >
    //                       {" "}
    //                       Hobbies
    //                     </h2>
    //                   </span>
    //                 </div>
    //               </Accordion.Toggle>
    //               <Accordion.Collapse eventKey="7">
    //                 <Hobbies aboutData={aboutData} />
    //               </Accordion.Collapse>
    //             </Card>
    //           </Accordion>
    //         </Card>
    //       </main>
    //     </Row>
    //   </Container>

    //   <Download />
    // </animated.div>
  );
};

export default App;
