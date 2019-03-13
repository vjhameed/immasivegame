import React, { Component } from "react";

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
          <a href="index.html" className="navbar-brand">
            <img src="/img/loxify_web.png" style={{ height: "30px" }} />
          </a>
          <div
            className="collapse navbar-collapse order-2 order-lg-1"
            id="navbarToggler"
          >
            <ul className="navbar-nav mx-auto" data-nav>
              <li className="nav-item">
                <a href="../html/card.admin.html" className="nav-link">
                  <span className="nav-text">Support</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="../html/card.news.html" className="nav-link">
                  <span className="nav-text">News</span>
                </a>
              </li>
            </ul>
            <form className="input-group m-2 my-lg-0 i-con-h-a ">
              <span className="input-group-prepend">
                <button type="button" className="btn no-shadow no-bg px-0">
                  <i className="i-con i-con-search text-fade w-16" />
                </button>
              </span>
              <input
                type="text"
                className="form-control no-border no-shadow no-bg typeahead"
                placeholder="Search..."
                data-plugin="typeahead"
              />
            </form>
          </div>

          <ul className="nav navbar-menu order-1 order-lg-2">
            <li className="nav-item dropdown">
              <a
                className="nav-link btn btn-sm btn-icon btn-rounded btn-primary float-right"
                data-toggle="dropdown"
                title="Facebook"
              >
                <span className="i-con-h-a">
                  <i className="i-con i-con-plus solid text-white" />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-center mt-3 w animate fadeIn bg-primary">
                <div className="setting px-3">
                  <div className="mb-2">
                    <strong>Add</strong>
                  </div>
                  <div className="mb-3" id="settingLayout">
                    <label className="ui-check my-1 d-block">
                      <a className="dropdown-item i-con-h-a">
                        <i className="i-con i-con-plus" /> Object{" "}
                      </a>
                    </label>
                    <label className="ui-check my-1 d-block">
                      <a className="dropdown-item i-con-h-a">
                        <i className="i-con i-con-plus" /> Owner Doc{" "}
                      </a>
                    </label>
                    <label className="ui-check my-1 d-block">
                      <a className="dropdown-item i-con-h-a">
                        <i className="i-con i-con-plus" /> Personal Doc{" "}
                      </a>
                    </label>
                    <label className="ui-check my-1 d-block">
                      <a className="dropdown-item i-con-h-a">
                        <i className="i-con i-con-plus" /> Action{" "}
                      </a>
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link px-2 i-con-h-a mr-lg-2"
                data-toggle="dropdown"
              >
                <i className="i-con i-con-bell">
                  <i />
                </i>
                <span className="badge badge-pill badge-up bg-primary">4</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right mt-3 w-md animate fadeIn p-0">
                <div
                  className="scrollable hover"
                  style={{ maxHeight: "250px" }}
                >
                  <div className="list list-row animates animates-fadeInUp">
                    <div className="list-item " data-id="14">
                      <div>
                        <a href="#">
                          <span className="w-32 avatar circle bg-warning-lt">
                            L
                          </span>
                        </a>
                      </div>
                      <div className="flex">
                        <div className="item-feed h-2x">
                          Welcome to new ui dashboard, you are almost there
                        </div>
                      </div>
                    </div>
                    <div className="list-item " data-id="9">
                      <div>
                        <a href="#">
                          <span className="w-32 avatar circle bg-info-lt">
                            <img src="/img/a9.jpg" alt="." />
                          </span>
                        </a>
                      </div>
                      <div className="flex">
                        <div className="item-feed h-2x">
                          Added to <a href="#">GameTime</a> team
                        </div>
                      </div>
                    </div>
                    <div className="list-item " data-id="11">
                      <div>
                        <a href="#">
                          <span className="w-32 avatar circle bg-info-lt">
                            K
                          </span>
                        </a>
                      </div>
                      <div className="flex">
                        <div className="item-feed h-2x">
                          Prepare the documentation for the{" "}
                          <a href="#">Fitness app</a>
                        </div>
                      </div>
                    </div>
                    <div className="list-item " data-id="3">
                      <div>
                        <a href="#">
                          <span className="w-32 avatar circle bg-info-lt">
                            <img src="/img/a3.jpg" alt="." />
                          </span>
                        </a>
                      </div>
                      <div className="flex">
                        <div className="item-feed h-2x">
                          <a href="#">@James</a> submit a support ticket
                        </div>
                      </div>
                    </div>
                    <div className="list-item " data-id="6">
                      <div>
                        <a href="#">
                          <span className="w-32 avatar circle bg-danger-lt">
                            <img src="/img/a6.jpg" alt="." />
                          </span>
                        </a>
                      </div>
                      <div className="flex">
                        <div className="item-feed h-2x">
                          Homepage mockup design
                        </div>
                      </div>
                    </div>
                    <div className="list-item " data-id="4">
                      <div>
                        <a href="#">
                          <span className="w-32 avatar circle bg-success-lt">
                            <img src="/img/a4.jpg" alt="." />
                          </span>
                        </a>
                      </div>

                      <div className="flex">
                        <div className="item-feed h-2x">
                          <a href="#">@Eddel</a> upload a media
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex px-3 py-2 b-t">
                  <div className="flex">
                    <span>6 Notifications</span>
                  </div>
                  <a href="setting.html">
                    See all <i className="fa fa-angle-right text-muted" />
                  </a>
                </div>
              </div>
            </li>

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
