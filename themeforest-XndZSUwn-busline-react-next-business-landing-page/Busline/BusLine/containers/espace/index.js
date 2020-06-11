import React, { Component } from "react";
import "./index.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";

class Espace extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
export default Espace;
