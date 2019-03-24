import React, { Component } from "react";
import News from "../../../api/News/model";
import ImageFile from "../../../api/ImageFile/model";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import moment from "moment";

class GamesPage extends Component {
  state = {
    modal: false,
    title: "",
    desc: "",
    deleteart: [],
    inProgress: false
  };

  componentWillMount() {
    document.addEventListener("mousedown", this.handleclick.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener(
      "mousedown",
      this.handleclick.bind(this),
      false
    );
  }

  handleclick(e) {
    if (!this.node.contains(e.target)) {
      this.setState({ modal: false });
    }
  }

  createArticle(e) {
    e.preventDefault();
    this.uploadIt(this.fileinput);
  }

  uploadIt(input) {
    let self = this;

    if (input.files && input.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = input.files[0];

      if (file) {
        let uploadInstance = ImageFile.insert(
          {
            file: file,
            meta: {
              locator: self.props.fileLocator,
              userId: Meteor.userId() // Optional, used to check on server for file tampering
            },
            streams: "dynamic",
            chunkSize: "dynamic",
            allowWebWorkers: true // If you see issues with uploads, change this to false
          },
          false
        );

        // These are the event functions, don't need most of them, it shows where we are in the process
        uploadInstance.on("start", function() {
          console.log("Starting");

          self.setState({
            inProgress: true
          });
        });

        uploadInstance.on("end", function(error, fileObj) {
          console.log("On end File Object: ", fileObj);
        });

        uploadInstance.on("uploaded", function(error, fileObj) {
          console.log("uploaded: ", fileObj);

          // Remove the filename from the upload box
          self.fileinput.value = "";

          // Reset our state for the next file
          self.setState({
            inProgress: false
          });

          Meteor.call(
            "artCreate",
            [self.state.title, self.state.desc, fileObj._id],
            function(err, resp) {
              if (err) self.setState({ arterror: err.error });
              if (resp) console.log("yeah success");
            }
          );
        });

        uploadInstance.on("error", function(error, fileObj) {
          console.log("Error during upload: " + error);
        });

        uploadInstance.on("progress", function(progress, fileObj) {
          console.log("Upload Percentage: " + progress);
        });

        uploadInstance.start(); // Must manually start the upload
      }
    }
  }

  setArtDelete(e) {
    const inputval = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      this.setState(prev => ({
        deleteart: prev.deleteart.concat(inputval)
      }));
    } else {
      var temparr = this.state.deleteart.filter(item => {
        return item !== inputval;
      });

      this.setState({
        deleteart: temparr
      });
    }
  }

  deleteArticles() {
    Meteor.call("artDelete", this.state.deleteart);
  }

  renderArticles() {
    return this.props.arts.map(item => {
      var link = "";
      if (this.props.files && this.props.docsReadyYet) {
        link = ImageFile.findOne({ _id: item.image }).link();
      }

      return (
        <tr className=" v-middle" data- id="6" key={item._id}>
          <td>
            <label className="ui-check m-0 ">
              <input
                type="checkbox"
                name="id"
                value={item._id}
                onChange={this.setArtDelete.bind(this)}
              />
              <i />
            </label>
          </td>
          <td>
            <a href="#">
              <span className="w-32 avatar circle bg-warning-lt">
                <img src={link} alt="." />
              </span>
            </a>
          </td>

          <td className="flex">
            <a href="#" className="item-author ">
              {item.title}
            </a>
            <div className="item-except text-muted h-1x">{item.desc}</div>
          </td>

          <td>{moment(item.posted_at, "MM-DD-YYYY").format()}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="page-container animate">
        <div className="padding">
          <div className="tab-content mb-4 animate fadeInUp fade">
            <div className="mb-5">
              <h1>Games </h1>
              <div
                className="toolbar"
                style={{ justifyContent: "space-between" }}
              >
                <button
                  className="btn btn-sm btn-white i-con-h-a"
                  data-toggle="tooltip"
                  title="Trash"
                  id="btn-trash"
                  onClick={this.deleteArticles.bind(this)}
                >
                  <i className="i-con i-con-trash text-muted">
                    <i />
                  </i>
                </button>
                <button
                  className="btn btn-raised btn-wave mb-2 w-xs bg-white float-right"
                  style={{ width: "auto" }}
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ modal: true });
                  }}
                >
                  Add New Game
                </button>
              </div>
              <div className="table-responsive">
                <table className="table table-theme table-row v-middle">
                  <thead>
                    <tr>
                      <th style={{ width: "20px" }}>
                        <label className="ui-check m-0">
                          <input type="checkbox" />
                          <i />
                        </label>
                      </th>
                      <th className="text-muted" style={{ width: "6%" }}>
                        Image
                      </th>
                      <th className="text-muted">Content</th>
                      <th className="text-muted" style={{ width: "20%" }}>
                        Posted At
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" v-middle" data- id="6">
                      <td>
                        <label className="ui-check m-0 ">
                          <input type="checkbox" name="id" />
                          <i />
                        </label>
                      </td>
                      <td>
                        <a href="#">
                          <span className="w-32 avatar circle bg-warning-lt">
                            <img src="/public" alt="." />
                          </span>
                        </a>
                      </td>

                      <td className="flex">
                        <a href="#" className="item-author ">
                          Head title
                        </a>
                        <div className="item-except text-muted h-1x">
                          Description
                        </div>
                      </td>

                      <td>12:10:21</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`modal ${
            this.state.modal ? "fade show" : "fade"
          } article-modal `}
          id="article-add-modal"
          data-backdrop="true"
          data-classname="modal-open-aside"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-right w-xl bg-white b-l"
            ref={node => (this.node = node)}
          >
            <div className="d-flex flex-column h-100" id="chat-list">
              <div className="navbar white lt box-shadow d-flex">
                <span className="text-md text-ellipsis">Add a new Game</span>
              </div>
              <div className="p-3 b-t" id="chat-form">
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Title</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.title}
                      onChange={e => this.setState({ title: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Description</label>
                  <div className="col-sm-8">
                    <textarea
                      row="6"
                      className="form-control"
                      onChange={e => this.setState({ desc: e.target.value })}
                      value={this.state.desc}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Game Image</label>
                  <div className="col-sm-8">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        ref={file => (this.fileinput = file)}
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Game Files</label>
                  <div className="col-sm-8">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        ref={file => (this.fileinput = file)}
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-raised btn-wave mb-2 w-xs blue"
                  onClick={this.createArticle.bind(this)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe("games.all");
  const arts = News.find().fetch();
  const filesHandle = Meteor.subscribe("images.all");
  const docsReadyYet = filesHandle.ready();
  const files = ImageFile.find({}, { sort: { name: 1 } }).fetch();

  return { arts, docsReadyYet, files };
}, GamesPage);
