import React, { Component } from "react";
import Parlboll from "./parlboll";
import "./recept.css";
import Zoom from "react-reveal/Zoom";

class Recept extends Component {
  state = {};
  render() {
    return (
      <div className="recept">
        <Zoom cascade>
          <h1>Recept</h1>
        </Zoom>
        <Parlboll />
      </div>
    );
  }
}

export default Recept;
