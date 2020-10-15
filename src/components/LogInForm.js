import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function LogInForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const tempState = { ...state };

    tempState[event.currentTarget.name] = event.currentTarget.value;

    setState(tempState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await Axios.post("/api/login", state);
      // redirect to profile
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto my-auto">
          <div className="card card-signin my-5">
            <div className="card-body ">
              <h4 className="card-title text-center">Log In</h4>
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-label-group pb-2">
                  <label for="inputEmail">Email address</label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder=""
                    name="email"
                    onChange={handleChange}
                    value={state.email}
                    required
                    autofocus
                  />
                </div>
                <label for="inputPassword">Password</label>
                <div className="form-label-group pb-2">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder=""
                    name="password"
                    onChange={handleChange}
                    value={state.password}
                    required
                  />
                </div>

                <div className="custom-control custom-checkbox mb-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" for="customCheck1">
                    Remember password
                  </label>
                </div>
                <button
                  className="btn btn-lg btn-color btn-hover btn-block mb-3"
                  type="submit"
                >
                  Log in
                </button>

                <label className="d-flex justify-content-center">
                  Don't have an account?
                </label>
                <Link
                  className="btn btn-lg btn-color btn-hover btn-block"
                  type="submit"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInForm;
