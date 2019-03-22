import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NewsShow from "./NewsShow";
import ImageFile from "../../api/ImageFile/model";
import News from "../../api/News/model";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import moment from "moment";

class NewsContainer extends Component {
  state = {
    data: "",
    link: ""
  };

  renderArticles() {
    var parent = this;
    return this.props.arts.map(item => {
      return (
        <NewsItem data={item} itemClicked={parent.newsItemClicked.bind(this)} />
      );
    });
  }

  newsItemClicked(data, link) {
    console.log("sindie news item clicked");
    this.setState({
      data,
      link
    });
  }

  render() {
    return (
      <div className="news-section my-4">
        <div data-aos="fade-up" className="row content-news my-4 mx-0 mb-5">
          <div className="col-md-6 p-0 over-y nano">
            <div className="nano-content">{this.renderArticles()}</div>
          </div>
          <div className="col-md-6 p-0 over-y nano">
            <NewsShow data={this.state.data} link={this.state.link} />
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe("news.all");
  const arts = News.find().fetch();
  const filesHandle = Meteor.subscribe("news.images.all");
  const docsReadyYet = filesHandle.ready();
  const files = ImageFile.find({}, { sort: { name: 1 } }).fetch();

  return { arts, docsReadyYet, files };
}, NewsContainer);
