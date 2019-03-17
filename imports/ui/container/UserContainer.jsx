import React, { Component, PropTypes } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../dashboard/components/Header";
import Sidebar from "../userdashboard/components/Sidebar";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import { Roles } from "meteor/alanning:roles";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    document.body.classList.remove("front-site");
    document.body.classList.add("layout-column");
  }

  authenticateSecure() {
    const { user } = this.props;
    if (user && Roles.userIsInRole(user._id, "simple-new-user")) {
      {
        return (
          <div>
            <Header />

            <div id="main" className="layout-row flex">
              <Sidebar />

              <div id="content" className="flex " />
            </div>
          </div>
        );
      }
    } else if (user && !Roles.userIsInRole(user._id, "simple-new-user")) {
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
}, UserContainer);
