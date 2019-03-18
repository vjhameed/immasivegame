import React, { Component } from "react";
import TopadBanner from "../components/TopadBanner";
import Faqitem from "../components/Faqitem";

export default class FaqPage extends Component {
  render() {
    return (
      <div className="container pt-5 p-4  body-cont faq-cont">
        <TopadBanner />
        <div className="card-1">
          <div className="faq-header p-3 ">Welcome TO immasive FAQ page</div>
          <Faqitem />
          <Faqitem />
          <Faqitem />
          <Faqitem />
          <Faqitem />
          <Faqitem />
          <Faqitem />
        </div>
      </div>
    );
  }
}
