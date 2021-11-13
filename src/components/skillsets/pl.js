import React from "react";
import { ReactComponent as C } from "../../assets/svg/programmingLang/c.svg";
import { ReactComponent as Cp } from "../../assets/svg/programmingLang/c++.svg";
import { ReactComponent as Js } from "../../assets/svg/programmingLang/js.svg";
import { ReactComponent as Csh } from "../../assets/svg/programmingLang/c#.svg";
import { ReactComponent as Css } from "../../assets/svg/programmingLang/css.svg";
import { ReactComponent as Html } from "../../assets/svg/programmingLang/html.svg";
import { ReactComponent as Ts } from "../../assets/svg/programmingLang/ts.svg";

import { Card } from "react-bootstrap";
import "../../App.css";

const pl = props => {
  return (
    <Card className="skillCard">
      <h4 className="heading">Programming Languages</h4>
      <div className="pl">
        <C />
        <Cp />
        <Csh />
        <Css />
        <Html />
        <Js />
        <Ts />
      </div>
    </Card>
  );
};
export default pl;
