import React, { Component } from "react";
import { Route } from "react-router-dom";
import IndexPage from "../dashboard/pages/IndexPage";
import Header from "../dashboard/components/Header";
import Sidebar from "../dashboard/components/Sidebar";
import CategoryPage from "../dashboard/pages/CategoryPage";
import GamesPage from "../dashboard/pages/GamesPage";
import NewsPage from "../dashboard/pages/NewsPage";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    document.body.classList.remove('front-site')
    document.body.classList.add('layout-column')
  }

  render() {
    return (
      <div>
        <Header />

        <div id="main" className="layout-row flex">
          <Sidebar />

          <div id="content" className="flex ">
            <Route exact path="/dash" component={IndexPage} />
            <Route exact path="/dash/categories" component={CategoryPage} />
            <Route exact path="/dash/games" component={GamesPage} />
            <Route exact path="/dash/news" component={NewsPage} />
          </div>
        </div>
      </div>
    );
  }
}
