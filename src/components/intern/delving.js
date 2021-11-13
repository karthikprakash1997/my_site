import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
const Delving = props => {
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
            src={require("../../assets/png/intern/Delvingrd2.png")}
            alt="achivemens"
          />
          <div>
            <h1 className="text-uppercase" style={{ margin: 20 }}>
              {" "}
              Delving R&D
            </h1>
            <div>
              <p>kkkkk</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="DelvingbackgroundImage">
          <p>Role:</p>

          <p>Duration:</p>

          <p>location:</p>
          <p>Title: IoT BASED DISASTER MANAGEMENT SYSTEM </p>
          <p>
            Descrition: In order to predict the disturbance around the pole and
            distribution line and the location of the pole where the disturbance
            occurs, we developed an IoT based disaster management device.
          </p>
        </div>
      </div>
    </Card>
  );
};
export default Delving;
