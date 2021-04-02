import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage, AboutPage } from "../pages";
import resume from "../assets/CV-Aiden-Carrie2021.pdf";

function NavBar(props) {
  return (
    <Router>
      <div>
        <nav className="navigationContainer">
          <div className="navSeparator">
            <div>
              <p style={{ marginLeft: "15px" }}>Aiden Carrie</p>
            </div>
            <div className="linksBar">
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
                  {/* <Link to={"/other"} className="nav_link">
                    Resume
                  </Link> */}
                  <a href={resume} className="nav_link">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default NavBar;
