import React, { Component } from "react";
import GameImages from "../../../api/GameImage/model";
import GameFile from "../../../api/GameFile/model";
import Games from "../../../api/Games/model";
import Categories from "../../../api/Categories/model";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import moment from "moment";
import Loader from "react-loader-spinner";
import axios from "axios";
import message from "antd/lib/message";
import CheckboxGroup from "antd/lib/checkbox/Group";

class GamesPage extends Component {
  state = {
    modal: false,
    title: "",
    desc: "",
    gamecat: "",
    gamefile: null,
    gameimage: null,
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
    console.log(this.state);
    if (!this.state.gameimage)
      message.error("Please select an image for the game");
    else if (!this.state.title)
      message.error("Please enter a title for the game");
    else if (!this.state.gamecat)
      message.error("Please select a category for the game");
    else if (!this.state.gamefile)
      message.error("Please a zip file of the game");
    else if (!this.state.desc)
      message.error("Please enter a description of the game");
    else this.createGame();
  }

  uploadImage() {
    const upload = GameImages.insert(
      {
        file: this.state.gameimage,
        streams: "dynamic",
        chunkSize: "dynamic"
      },
      false
    );
    upload.on("start", function() {});

    var endProm = new Promise((res, rej) => {
      upload.on("end", function(error, fileObj) {
        console.log(fileObj);
        console.log(error);

        if (error) {
          rej(error);
        } else {
          res(fileObj._id);
        }
      });
    });

    upload.start();

    return endProm;
  }

  uploadGame() {
    var form = new FormData();
    form.append("gamefile", this.state.gamefile);
    // https://immasivegameupload.herokuapp.com/uploadgame

    return axios
      .post("http://localhost:5000/uploadgame", form, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data;`
        }
      })
      .then(response => {
        console.log(response);
        return response.data.link;
      })
      .catch(error => {
        //handle error
      });
  }

  async createGame() {
    var self = this;
    this.setState({
      inProgress: true
    });

    const gameimage = await this.uploadImage()
      .then(res => res)
      .catch(err => message.error(err));
    const gamelink = await this.uploadGame()
      .then(res => res)
      .catch(err => message.error(err));
    Meteor.call(
      "gameCreate",
      [
        this.state.title,
        this.state.desc,
        this.state.gamecat,
        gameimage,
        gamelink
      ],
      function(err, resp) {
        self.setState({
          imageobj: "",
          gameobj: "",
          title: "",
          desc: "",
          gamecat: "",
          gamefile: "",
          gameimage: "",
          inProgress: false,
          modal: false
        });
      }
    );
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
    Meteor.call("gameDelete", this.state.deleteart);
  }
  renderGames() {
    return this.props.games.map(item => {
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
                <img src={item.image} alt="." />
              </span>
            </a>
          </td>

          <td className="flex">
            <a href="#" className="item-author ">
              {item.title}
            </a>
            <div className="item-except text-muted h-1x">{item.desc}</div>
          </td>
          <td>{item.category}</td>

          <td>{moment(item.posted_at, "MM-DD-YYYY").format()}</td>
        </tr>
      );
    });
  }

  renderFormCats() {
    return this.props.cats.map(item => {
      return <option value={item.title}>{item.title}</option>;
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
                      <th className="text-muted">Category</th>
                      <th className="text-muted" style={{ width: "20%" }}>
                        Posted At
                      </th>
                    </tr>
                  </thead>
                  <tbody>{this.renderGames()}</tbody>
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
              <form
                onSubmit={this.createArticle.bind(this)}
                className="p-3 b-t"
                id="chat-form"
              >
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Title</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.title}
                      onChange={e => this.setState({ title: e.target.value })}
                      required
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
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label">Category</label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      onChange={e => this.setState({ gamecat: e.target.value })}
                      value={this.state.gamecat}
                      required
                    >
                      {this.renderFormCats()}
                    </select>
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
                        onChange={e =>
                          this.setState({ gameimage: e.target.files[0] })
                        }
                        required
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        {this.state.gameimage
                          ? this.state.gameimage.name
                          : "Choose file"}
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
                        onChange={e =>
                          this.setState({ gamefile: e.target.files[0] })
                        }
                        required
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        {this.state.gamefile
                          ? this.state.gamefile.name
                          : "Choose file"}
                      </label>
                    </div>
                  </div>
                </div>
                {this.state.inProgress == true ? (
                  <Loader
                    type="Ball-Triangle"
                    color="#00BFFF"
                    height="100"
                    width="100"
                    className="custom"
                  />
                ) : (
                  <button
                    type="submit"
                    className="btn btn-raised btn-wave mb-2 w-xs blue"
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe("games.all");
  Meteor.subscribe("categories.all");
  const cats = Categories.find().fetch();
  const games = Games.find().fetch();
  const filesHandle = Meteor.subscribe("game.images.all");
  const docsReadyYet = filesHandle.ready();
  const files = GameImages.find({}, { sort: { name: 1 } }).fetch();
  const gamefilesHandle = Meteor.subscribe("game.files.all");
  const gamedocsReadyYet = gamefilesHandle.ready();
  const gamefiles = GameFile.find({}, { sort: { name: 1 } }).fetch();

  return { games, docsReadyYet, files, gamefiles, gamedocsReadyYet, cats };
}, GamesPage);
