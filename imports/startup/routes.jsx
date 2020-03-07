import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import "antd/dist/antd.css";

import AppContainer from "../ui/container/AppContainer";
import PrivateRoute from "../ui/components/PrivateRoute";
import DashContainer from "../ui/container/DashContainer";
import UserContainer from "../ui/container/UserContainer";
import ScrollToTop from "../ui/components/ScrollToTop";
export default class RenderRoutes extends Component {
  render() {
    const { user } = this.props;
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <Switch>
            <PrivateRoute path="/dashboard" component={DashContainer} />
            {/* <PrivateRoute path="/user" component={UserContainer} /> */}
            <Route path="/" component={AppContainer} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
