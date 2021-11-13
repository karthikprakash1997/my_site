import React from "react";
import { ReactComponent as Apple } from "../../assets/svg/os/apple.svg";
import { ReactComponent as Wind } from "../../assets/svg/os/windows.svg";
import { ReactComponent as Linux } from "../../assets/svg/os/linux.svg";
import { Card } from "react-bootstrap";
import "../../App.css";

const pl = props => {
  return (
    <Card className="skillCard">
      <h4 className="heading">Operating System</h4>
      <div className="pl">
        <Linux></Linux>
        <Wind></Wind>
        <Apple></Apple>
      </div>
    </Card>
  );
};
export default pl;
