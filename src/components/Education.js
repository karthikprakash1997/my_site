import React from "react";
import "../App.css";
import BE from "./education/BE";
import Tenth from "./education/Tenth";
import Twelth from "./education/Twelth";
const Education = props => {
  return (
    <div style={{ display: "flex", height: "400px" }}>
      <Tenth />
      <Twelth />
      <BE />
    </div>
  );
};

export default Education;
