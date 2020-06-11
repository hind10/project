import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { Button } from "@bit/grommet.grommet.button";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Espace from "../../espace/index";
import { NavLink } from "react-router-dom";

export default class Profile extends Component {
  routeChange = () => {
    let path = "/espace";
    let history = useHistory();
    history.push(path);
  };

  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <NavLink to="/espace">Consultez votre espace personnel</NavLink>

        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>

        <BrowserRouter>
          <Route path="/espace" component={Espace} />
        </BrowserRouter>
      </div>
    );
  }
}
