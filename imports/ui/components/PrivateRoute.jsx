import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import { Meteor } from "meteor/meteor";

export default AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Meteor.userId() ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);
