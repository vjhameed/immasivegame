import React, { Component } from "react";
import moment from "moment";
import ImageFile from "../../api/ImageFile/model";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

class NewsItem extends Component {
  state = { link: "" };
  file = "";
  renderImage() {
    if (this.props.docsReadyYet && this.props.files) {
      var link = ImageFile.findOne({ _id: this.props.data.image }).link();
      this.file = link;
      return link;
    }
  }

  render() {
    const { title, desc, posted_at, id } = this.props.data;
    console.log(this.props.files);
    return (
      <div className="nk-news-box-item nk-news-box-item-active">
        <div className="nk-news-box-item-img">
          <img src={this.renderImage()} />
        </div>
        <h3 className="nk-news-box-item-title">{title}</h3>

        <div className="nk-news-box-item-text">
          <p>{desc}</p>
        </div>
        <div className="nk-news-box-item-date">
          <span className="fa fa-calendar" />{" "}
          {moment(posted_at, "MM-DD-YYYY").format()}
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe("news.all");
  const arts = News.find().fetch();
  const filesHandle = Meteor.subscribe("images.all");
  const docsReadyYet = filesHandle.ready();
  const files = ImageFile.find({}, { sort: { name: 1 } }).fetch();

  return { arts, docsReadyYet, files };
}, NewsItem);
