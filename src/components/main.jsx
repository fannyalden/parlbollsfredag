import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Start from "./start";
import Recept from "./recept/recept";
import Om from "./om/om";
import Kontakt from "./kontakt";

class Main extends Component {
  state = {};
  render() {
    return (
      <main className="content">
        <Router>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/recept" component={Recept} />
            <Route path="/om" component={Om} />
            <Route path="/kontakt" component={Kontakt} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default Main;
