import React, { Component } from "react";
import Categories from "../../../api/Categories/model";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

class CategoryPage extends Component {
  state = {
    catvalue: "",
    caterror: "",
    deletecat: []
  };

  createNewCat(e) {
    e.preventDefault();
    const parent = this;
    Meteor.call("catCreate", this.state.catvalue, function(err, resp) {
      if (err) parent.setState({ caterror: err.error });
      if (resp) console.log("yeah success");
    });
  }

  setCatDelete(e) {
    const inputval = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      this.setState(prev => ({
        deletecat: prev.deletecat.concat(inputval)
      }));
    } else {
      var temparr = this.state.deletecat.filter(item => {
        return item !== inputval;
      });

      this.setState({
        deletecat: temparr
      });
    }
  }

  deleteCategories() {
    Meteor.call("catDelete", this.state.deletecat);
  }

  render() {
    return (
      <div className="page-container animate">
        <div className="padding">
          <div className="tab-content mb-4 animate fadeInUp fade">
            <div className="mb-5">
              <h1>Categories</h1>
              <div className="toolbar ">
                <button
                  onClick={this.deleteCategories.bind(this)}
                  className="btn btn-sm btn-white i-con-h-a"
                  data-toggle="tooltip"
                  title="Trash"
                  id="btn-trash"
                >
                  <i className="i-con i-con-trash text-muted">
                    <i />
                  </i>
                </button>

                <form className="flex" onSubmit={this.createNewCat.bind(this)}>
                  <span className="text-danger">{this.state.caterror}</span>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm search"
                      placeholder="Add Category"
                      value={this.state.catvalue}
                      onChange={e =>
                        this.setState({ catvalue: e.target.value })
                      }
                    />
                    <span className="input-group-append">
                      <button
                        className="btn btn-white no-shadow btn-sm i-con-h-a"
                        type="submit"
                      >
                        <i className="i-con i-con-plus text-muted" />
                      </button>
                    </span>
                  </div>
                </form>
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
                      <th
                        className="text-muted sortable"
                        data-toggle-className="asc"
                      >
                        Category Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cats.map(item => {
                      return (
                        <tr className=" v-middle" key={item._id}>
                          <td>
                            <label className="ui-check m-0 ">
                              <input
                                type="checkbox"
                                name="id"
                                value={item._id}
                                onChange={this.setCatDelete.bind(this)}
                              />
                              <i />
                            </label>
                          </td>

                          <td className="flex">
                            <a href="#" className="item-author ">
                              {item.title}
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe("categories.all");
  const cats = Categories.find().fetch();
  return { cats };
}, CategoryPage);
