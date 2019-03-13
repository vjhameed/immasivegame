import React from "react";
import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import "../imports/startup/loadfonts.js";
import "./scripts/jquery.min.js";

// add render routes function
import { renderRoutes } from "../imports/startup/routes.jsx";
import "./theme";

// render routes after DOM has loaded
Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.querySelector("#react-target"));
});
