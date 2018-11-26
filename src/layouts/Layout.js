import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Feedback from "../pages/Feedback";
import Comments from "../pages/Comments";
import Logo from "../components/Logo";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <ul className="menu">
            <Logo />
            <li>
              <Link to="/about">
                <a href="#">About us</a>
              </Link>
            </li>
            <li>
              <Link to="/contacts">
                <a href="#">Contacts</a>
              </Link>
            </li>
            <li>
              <Link to="/feedback">
                <a href="#">Feedback</a>
              </Link>
            </li>
            <li>
              <Link to="/comments">
                <a href="#">Comments</a>
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/comments" component={Comments} />
        </Switch>
      </div>
    );
  }
}
