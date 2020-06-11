import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { NavigationBar } from "./components/NavigationBar";
//import "./App.css";
import Guide from "./components/Guide";
import { Notif } from "./Notif";
import { NoMatch } from "./NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/Guide" component={Guide} />
            <Route path="/Notifications" component={Notif} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
