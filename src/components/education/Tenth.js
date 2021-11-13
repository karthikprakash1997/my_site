import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
const Tenth = props => {
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

        ></img>
        </div >

        <div style={{ marginLeft: 20}}>
          <p>AMRITA VIDYALAYAM</p>
          <p>STD:10</p>
          <p>Board:STATE BOARD</p>
          <p>Marks:470/500</p>
          <p>Percentage:94%</p>
        </div>

    </Card>
  );
};
export default Tenth;
