import React, { Component } from "react";
import { LoginForm } from "./Login/LoginForm";
import { SignupForm } from "./Register/SignupForm";
import { Formik } from "formik";
import LoginvalidationSchema from "../components/Login/validation";
import RegistervalidationSchema from "../components/Register/validation";
import { withRouter } from "react-router";
import { Roles } from "meteor/alanning:roles";

class Authentication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: 1
    };
  }

  componentDidMount() {
    this.button = document.getElementById("signinbutton");
  }

  openForm() {
    this.button.className = "active";
  }

  closeForm() {
    this.button.className = "";
  }

  checkInput(input) {
    if (input.target.value.length > 0) {
      input.target.className = "active";
    } else {
      input.target.className = "";
    }
  }

  formSwitch(param) {
    this.setState({
      form: param
    });
  }

  handleLogin = ({ email, password }) => {
    parent = this;

    console.log(email, password);
    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        Meteor.userId();
        console.log(err.reason);
        this.setState({
          logerror: err.reason
        });
      } else {
        // const id = Meteor.userId();
        // if (Roles.userIsInRole(id, "simple-new-user"))
        //   this.props.history.push("/user");
        // else if (Roles.userIsInRole(id, "admin"))
        this.props.history.push("/dashboard");
        // else console.log("not in roles");
      }
    });
  };

  // submit function
  handleSignup = ({ username, email, password }) => {
    console.log(username, email, password);
    Accounts.createUser(
      { email: email, username: username, password: password },
      err => {
        if (err) {
          console.log(err);
          this.setState({
            reserror: err.reason
          });
        } else {
          // const id = Meteor.userId();
          // if (Roles.userIsInRole(id, "simple-new-user"))
          //   this.props.history.push("/user");
          // else if (Roles.userIsInRole(id, "admin"))
          //   this.props.history.push("/dash");
          // else console.log("not in roles");
          this.props.history.push("/dashboard");
        }
      }
    );
  };

  handleLogout(e) {
    e.preventDefault();
    Meteor.logout(err => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push("/");
      }
    });
  }

  render() {
    const loginvalues = { email: "", password: "" };
    const signupvalues = { email: "", password: "", userame: "" };

    const loggedIn = Meteor.userId() ? true : false;

    return (
      <li className="nav-item ">
        {loggedIn ? (
          <button
            type="button"
            onClick={this.handleLogout.bind(this)}
            className="btn glory-header-button button"
          >
            LOGOUT
          </button>
        ) : (
          <button
            type="button"
            onClick={this.openForm.bind(this)}
            className="btn glory-header-button button"
          >
            SIGNIN / SIGNUP
          </button>
        )}
        <div id="signinbutton">
          <div className="modal">
            <div className="close-button" onClick={this.closeForm.bind(this)}>
              x
            </div>
            {this.state.form == 1 ? (
              <Formik
                render={props => (
                  <LoginForm
                    {...props}
                    logerr={this.state.logerror}
                    switchForm={this.formSwitch.bind(this)}
                    inputCheck={this.checkInput.bind(this)}
                  />
                )}
                initialValues={loginvalues}
                validationSchema={LoginvalidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  this.handleLogin(values);
                  setSubmitting(false);
                }}
              />
            ) : (
              <Formik
                render={props => (
                  <SignupForm
                    {...props}
                    reserr={this.state.reserror}
                    switchForm={this.formSwitch.bind(this)}
                    inputCheck={this.checkInput.bind(this)}
                  />
                )}
                initialValues={signupvalues}
                validationSchema={RegistervalidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  this.handleSignup(values);
                  setSubmitting(false);
                }}
              />
            )}
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(Authentication);
