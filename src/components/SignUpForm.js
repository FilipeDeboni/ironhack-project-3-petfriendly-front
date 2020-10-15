import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [state, setState] = useState({
    name: "",
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
      const result = await Axios.post("/api/signup", state);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto my-auto">
          <div className="card card-signup my-5">
            <div className="card-body ">
              <h4 className="card-title text-center">Sign Up</h4>
              <form className="form-signin" onSubmit="">
                <div className="form-label-group pb-2">
                  <label for="inputText">Human name</label>
                  <input
                    type="text"
                    id="inputText"
                    className="form-control"
                    placeholder=""
                    name="name"
                    onChange={handleChange}
                    value={state.name}
                    required
                    autofocus
                  />
                </div>
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
                <div className="form-label-group pb-1">
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
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                </div>
                <button
                  className="btn btn-lg btn-color btn-hover btn-block mb-3"
                  type="submit"
                >
                  Create account
                </button>
                <Link
                  className="btn btn-lg btn-secondary btn-hover btn-block"
                  type="submit"
                  to="/"
                >
                  Back to Home
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
