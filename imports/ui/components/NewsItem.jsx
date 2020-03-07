import React, { Component } from "react";
import moment from "moment";
import ImageFile from "../../api/ImageFile/model";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

class NewsItem extends Component {
  state = { link: "" };
  file = "";

  render() {
    const { title, desc, posted_at, image, id } = this.props.data;
    console.log(this.props.files);
    return (
      <div className="nk-news-box-item nk-news-box-item-active">
        <div className="nk-news-box-item-img">
          <img src={image} />
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
