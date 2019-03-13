import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import AppContainer from "../ui/container/AppContainer";
import DashContainer from "../ui/container/DashContainer";
import ScrollToTop from "../ui/components/ScrollToTop";
import PrivateRoute from "../ui/components/PrivateRoute";

export const renderRoutes = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop>
      <Switch>
        <PrivateRoute path="/dash" component={DashContainer} />
        <Route path="/" component={AppContainer} />
      </Switch>
    </ScrollToTop>
  </Router>
);
