import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { OtherPage, HomePage, AboutPage } from "../pages";

function NavBar(props) {
  return (
    <Router>
      <div>
        <nav className="navigationContainer">
          <div className="navSeparator">
            <div>
              <p>Aiden Carrie</p>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/" className="nav_link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav_link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/other" className="nav_link">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/other">
            <OtherPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default NavBar;
