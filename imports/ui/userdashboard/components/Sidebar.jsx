import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";

class Sidebar extends Component {
  logout(e) {
    e.preventDefault();
    Meteor.logout(err => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push("/");
      }
    });
  }

  render() {
    return (
      <div
        id="aside"
        className="page-sidenav no-shrink  nav-expand  animate fadeInLeft fade"
        aria-hidden="true"
      >
        <div className="sidenav h-100 modal-dialog bg-white box-shadow m-0">
          <div className="flex scrollable hover">
            <div className="nav-border b-primary" data-nav>
              <ul className="nav bg">
                <li className="nav-header hidden-folded">
                  <span>User Dashboard</span>
                </li>
                <li>
                  <Link to={"/dash"} className="i-con-h-a">
                    <span className="nav-icon">
                      <i className="i-con i-con-home">
                        <i />
                      </i>
                    </span>
                    <span className="nav-text">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/dash/categories"}>
                    <span className="nav-icon">
                      <i className="i-con i-con-grid">
                        <i />
                      </i>
                    </span>
                    <span className="nav-text">Categories</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/dash/games"}>
                    <span className="nav-icon">
                      <i className="i-con i-con-grid">
                        <i />
                      </i>
                    </span>
                    <span className="nav-text">Games</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/dash/news"}>
                    <span className="nav-icon">
                      <i className="i-con i-con-grid">
                        <i />
                      </i>
                    </span>
                    <span className="nav-text">News</span>
                  </Link>
                </li>
                <li>
                  <a href="" onClick={this.logout.bind(this)}>
                    <span className="nav-icon">
                      <i className="i-con i-con-lock">
                        <i />
                      </i>
                    </span>
                    <span className="nav-text">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="no-shrink ">
            <div className="text-sm p-3 b-t">
              <div className="hidden-folded text-sm">
                <div className="text-muted">
                  <small className="text-muted">
                    &copy; Copyright 2019, Immasive
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
