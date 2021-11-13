import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";

const Hobbies = props => {
  return (
    <Card style={{ margin: 10 }}>
      <ul>
        <li>
          <div style={{ margin: 10 }}>
            <img
              src={require("../assets/png/Hobbies/book.png")}
              alt="reading books"
            ></img>
            <span style={{ margin: 10 }}>Reading Books</span>
          </div>
        </li>

        <li>
          <div style={{ margin: 10 }}>
            <img
              src={require("../assets/png/Hobbies/draw.png")}
              alt="creative writing"
            ></img>
            <span style={{ margin: 10 }}>Creative Writing</span>
          </div>
        </li>
        <li>
          <div style={{ margin: 10 }}>
            <img
              src={require("../assets/png/Hobbies/chess.png")}
              alt="playing chess"
            ></img>
            <span style={{ margin: 10 }}>Playing Chess</span>
          </div>
        </li>

        <li>
          <div style={{ margin: 10 }}>
            <img
              src={require("../assets/png/Hobbies/badminton.png")}
              alt="playing badminton"
            ></img>
            <span style={{ margin: 10 }}>Playing Badminton</span>
          </div>
        </li>
      </ul>
    </Card>
  );
};
export default Hobbies;
