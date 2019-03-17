import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import CategoryPage from "../pages/CategoryPage";
import FaqPage from "../pages/FaqPage";
import GamePage from "../pages/GamePage";
import CategoriesPage from "../pages/CategoriesPage";

export default class AppContainer extends Component {
  constructor(props, context) {
    super(props, context);
    AOS.init();
    document.body.classList.add("front-site");
    document.body.classList.remove("layout-column");
  }
  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <div class="body-wrapper">
        <Header />
        <Route exact={true} path="/categories" component={CategoriesPage} />
        <Route exact={true} path="/category" component={CategoryPage} />
        <Route exact={true} path="/faq" component={FaqPage} />
        <Route exact={true} path="/game" component={GamePage} />
        <Route exact={true} path="/" component={HomePage} />
        <Footer />
      </div>
    );
  }
}
