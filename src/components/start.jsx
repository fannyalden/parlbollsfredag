import React, { Component } from "react";
import Clock from "./clock";
import Zoom from "react-reveal/Zoom";

class Start extends Component {
  state = {
    date: new Date()
  };
  render() {
    const condition = this.state.date.getDay() === 5;
    return (
      <div className="status">
        {condition ? (
          <Zoom cascade>
            <p>Äntligen </p>
            <p>pärlbollsfredag!</p>
          </Zoom>
        ) : (
          <div className="clock">
            <Clock date={this.state.date} />
          </div>
        )}
      </div>
    );
  }
}

export default Start;
