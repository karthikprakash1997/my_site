import React from "react";
import { ReactComponent as Mongo } from "../../assets/svg/tools/mongo.svg";
import { ReactComponent as Node } from "../../assets/svg/tools/node.svg";
import { ReactComponent as Reactjs } from "../../assets/svg/tools/react.svg";
import { ReactComponent as Unity } from "../../assets/svg/tools/unity.svg";
import { ReactComponent as Arduino } from "../../assets/svg/tools/arduino.svg";
import { ReactComponent as Rn } from "../../assets/svg/tools/react-original.svg";
import { Card } from "react-bootstrap";
import "../../App.css";

const Tools = props => {
  return (
    <Card className="skillCard">
      <h4 className="heading">Tools</h4>
      <div className="pl">
        <Card className="skillCard">
          <h4 className="heading">Web Development</h4>
          <div className="pl">
            <Reactjs />
            <Node />
            <Mongo />
          </div>
        </Card>
        <Card className="skillCard">
          <h4 className="heading">App Development</h4>
          <div className="pl">
            <Rn />
            <Mongo />
          </div>
        </Card>
        <Card className="skillCard">
          <h4 className="heading">IoT Development</h4>
          <div className="pl">
            <Reactjs />
            <Node />
            <Mongo />
            <Arduino />
            <Rn />
          </div>
        </Card>
        <Card className="skillCard">
          <h4 className="heading">AR-VR Development</h4>
          <div className="pl">
            <Unity />
          </div>
        </Card>
      </div>
    </Card>
  );
};
export default Tools;
