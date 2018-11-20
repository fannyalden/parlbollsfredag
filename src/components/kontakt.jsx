import React, { Component } from "react";
import "../App.css";

class Kontakt extends Component {
  state = {};
  render() {
    return (
      <div className="context">
        <p>Mail: parlbollsfredag@gmail.com</p>
        <p>
          {" "}
          Facebook:
          <a href="https://www.facebook.com/pg/parlbollsfredag/posts/">
            Pärlbollsfredag
          </a>
        </p>
      </div>
    );
  }
}

export default Kontakt;
