import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
const Twelth = props => {
  return (
    <Card style={{ margin: 10, width: "30%" }}>
      <div
        style={{
          
          margin: 20,
          display:"flex",
          justifyContent:"center"
        }}
      >
        <img
          src={require("../../assets/png/intern/amrita3.jpg")}
          alt="Amrita Vidyalayam"
          style={{ diaplay: "block" }}
        ></img>
         </div>
        <div style={{marginLeft:20}}>
          <p>AMRITA VIDYALAYAM</p>
          <p>STD:12</p>
          <p>Board:STATE BOARD</p>
          <p>Marks:1144/1200</p>
          <p>Percentage:95.3%</p>
        </div>
     
    </Card>
  );
};
export default Twelth;
