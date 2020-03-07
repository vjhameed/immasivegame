import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <header
        id="header"
        className="page-header bg-white box-shadow animate fadeInDown"
      >
        <div className="navbar navbar-expand-lg">
          <a
            className="d-lg-none i-con-h-a px-1"
            data-toggle="modal"
            data-target="#aside"
          >
            <i className="i-con i-con-menu text-muted" />
          </a>
          <Link className="navbar-brand">
            <img src="/img/loxify_web.png" style={{ height: "30px" }} />
          </Link>
          <div
            className="collapse navbar-collapse order-2 order-lg-1"
            id="navbarToggler"
          />

          <ul className="nav navbar-menu order-1 order-lg-2">
            <li className="nav-item dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                className="nav-link d-flex align-items-center py-0 px-lg-0 px-2 text-color"
              >
                <span className=" mx-2 d-none l-h-1x d-lg-block text-right">
                  <small className="text-fade d-block mb-1">
                    Hello, Welcome
                  </small>
                  <span>Garrett Winters</span>
                </span>
                <span className="avatar w-36">
                  <img src="/img/a3.jpg" alt="..." />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right w pt-0 mt-3 animate fadeIn">
                <div className="row no-gutters mb-2 text-center r-t b-b">
                  <div className="col-4 b-r">
                    <a href="app.user.html" className="py-3 d-block i-con-h-a">
                      <i className="i-con i-con-users">
                        <i />
                      </i>
                    </a>
                  </div>
                  <div className="col-4 b-r">
                    <a href="app.mail.html" className="py-3 d-block i-con-h-a">
                      <i className="i-con i-con-mail">
                        <i />
                      </i>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="app.message.html"
                      className="py-3 d-block i-con-h-a"
                    >
                      <i className="i-con i-con-comment">
                        <i />
                      </i>
                    </a>
                  </div>
                </div>
                <a className="dropdown-item" href="page.profile.html">
                  <span>Profile</span>
                </a>
                <a className="dropdown-item" href="page.setting.html">
                  <span>Account Settings</span>
                </a>
                <a className="dropdown-item" href="page.price.html">
                  <span className="badge bg-success text-uppercase">
                    Upgrade
                  </span>
                  <span>to Pro</span>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="page.faq.html">
                  Need help?
                </a>
                <a className="dropdown-item" href="signin.html">
                  Sign out
                </a>
              </div>
            </li>
            <li className="nav-item d-lg-none">
              <a
                href="#"
                className="nav-link i-con-h-a px-1"
                data-toggle="collapse"
                data-toggle-class
                data-target="#navbarToggler"
              >
                <i className="i-con i-con-nav text-muted">
                  <i />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
