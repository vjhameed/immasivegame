import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";

class GamesPage extends Component {
  render() {
    return (
      <div className="page-container animate">
        <div className="padding">
          <div className="tab-content mb-4 animate fadeInUp fade">
            <div className="mb-5">
              <h1>Games</h1>
              <div className="toolbar ">
                <button
                  className="btn btn-sm btn-white i-con-h-a"
                  data-toggle="tooltip"
                  title="Trash"
                  id="btn-trash"
                >
                  <i className="i-con i-con-trash text-muted">
                    <i />
                  </i>
                </button>
                <button
                  className="btn btn-sm btn-white i-con-h-a sort "
                  data-sort="item-title"
                  data-toggle="tooltip"
                  title="Sort"
                >
                  <i className="i-con i-con-sort text-muted">
                    <i />
                  </i>
                </button>
                <form className="flex">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm search"
                      placeholder="Search"
                      required
                    />
                    >
                    <span className="input-group-append">
                      <button
                        className="btn btn-white no-shadow btn-sm i-con-h-a"
                        type="button"
                      >
                        <i className="i-con i-con-search text-muted" />
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
                      <th className="text-muted">Image</th>
                      <th
                        className="text-muted sortable"
                        data-toggle-className="asc"
                      >
                        Name
                      </th>
                      <th className="text-muted">Uploaded By</th>
                      <th className="text-muted">No Of Views</th>
                      <th className="text-muted">Category</th>
                      <th className="text-muted">Uploaded At</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" v-middle" data-id="5">
                      <td>
                        <label className="ui-check m-0 ">
                          <input type="checkbox" name="id" value="5" />
                          <i />
                        </label>
                      </td>

                      <td>
                        <a href="#">
                          <span className="w-32 avatar circle bg-warning-lt">
                            <img src="/img/a5.jpg" alt="." />
                          </span>
                        </a>
                      </td>

                      <td className="flex">
                        <a href="#" className="item-author ">
                          Scott Ortega
                        </a>
                        <div className="item-except text-muted h-1x">
                          A light-weight, no-dependency, vanilla JavaScript
                          engine to drive the user's focus across the page
                        </div>
                      </td>

                      <td>
                        <span className="item-amount text-sm ">
                          Hameed Khan
                        </span>
                      </td>

                      <td>
                        <span className="item-amount text-sm ">3</span>
                      </td>
                      <td>
                        <span className="item-amount text-sm ">Action</span>
                      </td>
                      <td>
                        <span className="item-amount text-sm ">10-11-19</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
                <small className="text-muted py-2 mx-2">
                  Total <span id="count">15</span> items
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GamesPage);
