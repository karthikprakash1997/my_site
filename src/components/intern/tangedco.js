import React from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
const Tangedco = props => {
  return (
    <Card style={{ margin: 10 }}>
      <div
        style={{
          height: 500,
          margin: 20
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={require("../../assets/png/intern/TANGEDCO3.png")}
            alt="achivemens"
          />
          <span>
            <h1 className="text-uppercase" style={{ margin: 12 }}>
              Tangedco
            </h1>
          </span>
        </div>
        <hr />
        <div className="TnebbackgroundImage">
          <p>Role:</p>

          <p>Duration:</p>

          <p>location:</p>
          <p>
            Title: MONITORING AND CONTROLLING OF SUBSTSTION USING ANDROID
            APPLICATION
          </p>
          <p>
           Description: To monitor the circuit elements such as voltage, current, power
            etc.., in a power station wirelessly we developed an android
            application and built a prototype model to monitor and control the
            circuit breaker manually and receiver data (voltage, current) and
            the status of the relay wirelessly using WI-FI module and store the
            collected data in the cloud storage.
          </p>
        </div>
      </div>
    </Card>
  );
};
export default Tangedco;
