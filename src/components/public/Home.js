import React, { useState } from "react";
import api from "../../apis/index.js";
import { Link, useHistory } from "react-router-dom";
import Logo from "../images/PetFriendlyLogo.png";
import "./Home.css";

function Home(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function goLogIn() {
    history.push("/login");
  }

  function goSignUp() {
    history.push("/signup");
  }

  let history = useHistory();

  function handleChange(event) {
    const tempState = { ...state };

    tempState[event.currentTarget.name] = event.currentTarget.value;

    setState(tempState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(state);
    try {
      const result = await api.post("/login", state);
      console.log(JSON.stringify(result.data));
      localStorage.setItem("loggedInUser", JSON.stringify(result.data));
      history.push("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="home-card"></div>
      <div className="row">
        <div className="home-first-square first-img col-12">
          <div className="logo-div">
            <div className="logo-height">
              <h1 className="home-logo title-color-2 mx-5">Pet</h1>
              <h1 className="home-logo title-color-2 mx-5">Friend.ly</h1>
            </div>
            <div className="d-flex flex-column">
              <a onClick={goLogIn} className="home-button">
                Log In
              </a>
              <a onClick={goSignUp} className="home-button">
                Sign Up
              </a>
            </div>
          </div>
        </div>

        <div className="home-small-square third-img col-12 col-md-6 col-lg-4">
          <h1 className="home-title title-color-1">Adopt a Pet</h1>
        </div>
        <div className="home-small-square sec-img col-12 col-md-6 col-lg-4">
          <h1 className="home-title title-color-2">Make Friends</h1>
        </div>
        <div className="home-small-square fourth-img col-12 col-md-12 col-lg-4">
          <h1 className="home-title title-color-3">Find Cute Pictures</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
