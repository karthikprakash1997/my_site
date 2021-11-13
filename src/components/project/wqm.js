import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
const Wqm = props => {
  return (
    <Card style={{ margin: 10 }}>
      <div
        style={{
          height: 500,
          margin: 20
        }}
      >
        <div style={{ display: "flex" }}>
          {" "}
          <img
            src={require("../../assets/png/intern/logo.png")}
            alt="achivemens"
          />
          <span>
            <h1 className="text-uppercase" style={{ margin: 20 }}>
              {" "}
              psg ias
            </h1>
          </span>
        </div>
        <hr />
        <div className="psgiasbackgroundImage">
          <p>Role:</p>

          <p>Duration:</p>

          <p>location:</p>
          <p>Title:  DEIVCE TO MEASURE THE WATER QUALITY OF THE FISH TANK</p>
          <p>Description: To make a comfortable and sustainable environment for fishes living
            in tank we designed a device that measures the ph. of the water and
            send the data to the android app we created that would store the
            data in the device and alerts the user about the condition of the
            water in the tank.
          </p>
        </div>
      </div>
    </Card>
  );
};
export default Wqm;
