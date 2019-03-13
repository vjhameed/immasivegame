import React, { Component } from "react";

export const LoginForm = props => {
  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const {
    values: { email, password },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    classes,
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off" className='justify-content-center'>
      <div className="form-title">Sign In</div>

      <span className="d-block text-center has-error text-danger">
        {props.logerr}
      </span>

      <div className="input-group ">

        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onBlur={e => props.inputCheck(e)}
          onChange={change.bind(null, "email")}
        />
        <label htmlFor="name">Email</label>
        <span className="has-error text-danger">
          {touched.email ? errors.email : ""}
        </span>
      </div>
      <div className="input-group ">
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onBlur={e => props.inputCheck(e)}
          onChange={change.bind(null, "password")}
        />
        <label htmlFor="password">Password</label>
        <span className="has-error text-danger">
          {touched.password ? errors.password : ""}
        </span>
      </div>
      <button disabled={!isValid} type="submit" className="form-button">
        Go
      </button>
      <span className="mt-3 login-link-change">
        Don't have an account yet ?{" "}
        <a
          onClick={e => {
            e.preventDefault();
            props.switchForm(2);
          }}
          href="#"
        >
          Register Now
        </a>
      </span>
    </form>
  );
};
