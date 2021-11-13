import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
const Ultra = props => {
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
              Psg ias
            </h1>
          </span>
        </div>
        <hr />
        <div className="psgiasbackgroundImage">
          {" "}
          <p>Role:</p>
          <p>Duration:</p>
          <p>location:</p>
          <p>Title: ULTRA SONIC AIR FLOW MEASUREMENT</p>
          <p>
            Description: To replace the thermos anemometer used in certain
            medical applications to reduce the cost of the equipment and to
            improve the efficiency, we built an ultrasonic air flow sensor.
          </p>
        </div>
      </div>
    </Card>
  );
};
export default Ultra;
