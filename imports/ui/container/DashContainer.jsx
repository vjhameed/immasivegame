import React, { Component, PropTypes } from "react";
import { Route, Redirect } from "react-router-dom";
import IndexPage from "../dashboard/pages/IndexPage";
import Header from "../dashboard/components/Header";
import Sidebar from "../dashboard/components/Sidebar";
import CategoryPage from "../dashboard/pages/CategoryPage";
import GamesPage from "../dashboard/pages/GamesPage";
import NewsPage from "../dashboard/pages/NewsPage";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import { Roles } from "meteor/alanning:roles";

class DashContainer extends Component {
  constructor(props) {
    super(props);
    document.body.classList.remove("front-site");
    document.body.classList.add("layout-column");
  }

  authenticateSecure() {
    const { user } = this.props;
    if (user && Roles.userIsInRole(user._id, "admin")) {
      {
        return (
          <div>
            <Header />

            <div
              id="main"
              className="layout-row flex"
              style={{ height: "100vh" }}
            >
              <Sidebar />

              <div id="content" className="flex ">
                <Route exact path="/dashboard" component={IndexPage} />
                <Route
                  exact
                  path="/dashboard/categories"
                  component={CategoryPage}
                />
                <Route exact path="/dashboard/games" component={GamesPage} />
                <Route exact path="/dashboard/news" component={NewsPage} />
              </div>
            </div>
          </div>
        );
      }
    } else if (user && !Roles.userIsInRole(user._id, "admin")) {
      return <Redirect to={"/"} />;
    } else {
      return <div />;
    }
  }

  render() {
    return <div>{this.authenticateSecure()}</div>;
  }
}

export default createContainer(() => {
  const user = Meteor.user() || null;
  return { user };
}, DashContainer);
