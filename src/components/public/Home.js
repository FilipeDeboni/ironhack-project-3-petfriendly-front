import React, { useState } from "react";
import api from "../../apis/index.js";
import { Link, useHistory } from "react-router-dom";
import Logo from "../images/PetFriendlyLogo.png";
import About from "./About";
import AboutDevs from "./AboutDevs";

function Home(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  function handleChange(event) {
    const tempState = { ...state };

    tempState[event.currentTarget.name] = event.currentTarget.value;

    setState(tempState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await api.post("/login", state);
      localStorage.setItem("loggedInUser", JSON.stringify(result.data));
      // redirect to profile
      history.push("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="home-background"></div>
      <div className="div-card row justify-content-center">
        <div className="max-height pb-2 col-12 col-md-6 order-md-2">
          <img className="logo-height" src={Logo} alt=""></img>

          <div
            className="form-height d-flex align-items-center"
            id="background"
          >
            {/* Formulário de LogIn */}
            <div className="container">
              <div className="row">
                <div className="mx-auto my-auto">
                  <div className="card card-signin my-5">
                    <div className="card-body ">
                      <h4 className="card-title text-center">Log In</h4>
                      <form className="form-signin" onSubmit={handleSubmit}>
                        <div className="form-label-group pb-2">
                          <label htmlFor="inputEmail">Email address</label>
                          <input
                            type="email"
                            id="inputEmail"
                            className="form-control"
                            placeholder=""
                            name="email"
                            onChange={handleChange}
                            value={state.email}
                            required
                            autoFocus
                          />
                        </div>
                        <label htmlFor="inputPassword">Password</label>
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
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
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
          </div>
        </div>

        <div className="max-height pb-2 col-12 col-md-6 order-md-1 d-none d-md-block">
          <img
            className="first-img-height"
            src="http://placeimg.com/1920/1080/animals"
            alt="animal"
          ></img>
        </div>
      </div>

      <About />
      <AboutDevs />
    </div>
  );
}

export default Home;
