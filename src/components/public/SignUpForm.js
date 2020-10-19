import React, { useState } from "react";
import api from "../../apis/index";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  function handleChange(event) {
    const tempState = { ...state };

    tempState[event.currentTarget.name] = event.currentTarget.value;

    setState(tempState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(state);

    try {
      const result = await api.post("/signup", state);
      console.log(result);
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
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-label-group pb-2">
                  <label>Human name</label>
                  <input
                    type="text"
                    id="inputText"
                    className="form-control"
                    placeholder=""
                    name="name"
                    onChange={handleChange}
                    value={state.name}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-label-group pb-2">
                  <label>Email address</label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder=""
                    name="email"
                    onChange={handleChange}
                    value={state.email}
                    required
                  />
                </div>
                <label>Password</label>
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
                <label>Image</label>
                <div className="form-label-group pb-3">
                  <input
                    type="text"
                    id="inputImage"
                    className="form-control"
                    placeholder="Insert URL image"
                    name="image"
                    onChange={handleChange}
                    value={state.image}
                    required
                  />
                </div>
                {/* <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                </div> */}
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
