import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

export default (PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (Meteor.userId() ? <Component {...props} /> : <Redirect to="/" />)}
  />
));
