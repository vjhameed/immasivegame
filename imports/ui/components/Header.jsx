import React, { Component } from "react";
import { Link } from "react-router-dom";
import Authentication from "./Authentication";

export default class Header extends Component {
  state = {
    darkhead: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.pageYOffset >= 200) {
      this.setState({
        darkhead: true
      });
    } else {
      this.setState({
        darkhead: false
      });
    }
  }

  render() {
    return (
      <nav
        className={`front-site-navbar navbar navbar-expand-lg ${
          this.state.darkhead ? "darkHeader" : ""
        }`}
      >
        <a className="navbar-brand" href="#">
          <img src="images/logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-4 w-100">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                CATEGORIES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                SUPPORT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li> */}
            <li className="nav-item ml-auto">
              <Link className="btn glory-header-button button" to="/dashboard">
                Upload Now
              </Link>
            </li>
            <Authentication />
          </ul>
        </div>
      </nav>
    );
  }
}
