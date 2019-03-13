import React, { Component } from "react";
import { withRouter } from "react-router";

class Navigation extends Component {
  render() {
    return (
      <div className="card">
        <div
          className="card-header bg-secondary bg-img p-0 no-border"
          data-stellar-background-ratio="0.5"
          data-plugin="stellar"
        >
          <div className="bg-dark-overlay r-2x no-r-b">
            <div className="p-4">
              <div className="row no-gutters justify-content-between">
                <a href="#" className="btn btn-icon i-con-h-a text-white">
                  <span>
                    <i className="i-con i-con-mail">
                      <i />
                    </i>
                  </span>
                </a>
                <a href="#" className="avatar mx-2 mt-3 w-96">
                  <img src="/img/mike.jpg" alt="." />
                </a>
                <a href="#" className="btn btn-icon i-con-h-a text-white">
                  <span>
                    <i className="i-con i-con-more">
                      <i />
                    </i>
                  </span>
                </a>
              </div>
              <div className="text-center py-4">
                <a href="#" className="h6 text-white">
                  Frank Smith
                </a>{" "}
                <br />
                <p className="badge badge-lg badge-success mt-3">
                  HolmÃ¥kravÃ¤gen 24
                </p>
                <div className="mt-4">
                  <a href="#" className="text-white p-1">
                    <strong>1</strong>{" "}
                    <span className="text-fade">Residence</span>
                  </a>
                  <a href="#" className="text-white p-1">
                    <strong>86</strong>{" "}
                    <span className="text-fade">Objects</span>
                  </a>
                  <a href="#" className="text-white p-1">
                    <strong>2</strong>{" "}
                    <span className="text-fade">Vehicles</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="d-flex nav-active-border nav-active-text-primary b-primary">
            <ul className="nav mx-auto" id="myTab" role="tablist">
              <li className="nav-item py-2">
                <a
                  className={`nav-link py-3 ${
                    this.props.location.pathname.includes("private")
                      ? "active"
                      : ""
                  }`}
                  id="private-tab"
                  data-toggle="tab"
                  href="#"
                  role="tab"
                  aria-controls="private"
                  aria-selected="true"
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.push("/private");
                  }}
                >
                  Private
                </a>
              </li>
              <li className="nav-item py-2">
                <a
                  className={`nav-link py-3 ${
                    this.props.location.pathname.includes("work")
                      ? "active"
                      : ""
                  }`}
                  id="work-tab"
                  data-toggle="tab"
                  href="#"
                  role="tab"
                  aria-controls="work"
                  aria-selected="false"
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.push("/work");
                  }}
                >
                  Work
                </a>
              </li>
              <li className="nav-item py-2">
                <a
                  className={`nav-link py-3 ${
                    this.props.location.pathname.includes("economy")
                      ? "active"
                      : ""
                  }`}
                  id="economy-tab"
                  data-toggle="tab"
                  href="#economy"
                  role="tab"
                  aria-controls="economy"
                  aria-selected="false"
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.push("/economy");
                  }}
                >
                  Economy
                </a>
              </li>
              <li className="nav-item py-2">
                <a
                  className={`nav-link py-3 ${
                    this.props.location.pathname.includes("security")
                      ? "active"
                      : ""
                  }`}
                  id="security-tab"
                  data-toggle="tab"
                  href="#security"
                  role="tab"
                  aria-controls="security"
                  aria-selected="false"
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.push("/security");
                  }}
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
