import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";

const Achievement = props => {
  return (
    <Card style={{ margin: 10 }}>
      <div>
        <ul>
          <li>
            Secured{" "}
            <img
              src={require("../assets/png/Achievements/first.png")}
              alt="First Place"
            />{" "}
            in Bio Fest state level Quiz in 2011 conducted by Kongunadu Arts and
            Science College.
          </li>
          <li>
            Received the Topper’s Profeciency Award for one semester from
            Electrical and Electronics Engineering Assosiation (EEEA), P.S.G.
            College of Technology.
          </li>
          <li>Recepient of Yuva Shree Kala rathna award in 2014.</li>
          <li>Recepient of Balarathna Shree Award in 2014</li>
          <li>
            Secured{" "}
            <img
              src={require("../assets/png/Achievements/first.png")}
              alt="First Place"
            />{" "}
            in General Science Quiz in 2011 conducted by T.V. Sekharan memorial
            higher secondary school.
          </li>
          <li>
            Secured{" "}
            <img
              src={require("../assets/png/Achievements/first.png")}
              alt="First Place"
            />
            in Table Tennis in 2014 at Amrita Vidyalayam Matriculation Higher
            Secondary School, Coimbatore.
          </li>
          <li>
            {" "}
            Secured{" "}
            <img
              src={require("../assets/png/Achievements/first.png")}
              alt="First Place"
            />{" "}
            in Elocution in 2012 at Narayana Guru College of technology.
          </li>
          <li>
            Secured{" "}
            <img
              src={require("../assets/png/Achievements/sec.png")}
              alt="Second Place"
            />
            in Tech fix in SRISHTI conducted at P.S.G. College of Technology.
          </li>
        </ul>
      </div>
    </Card>
  );
};
export default Achievement;
