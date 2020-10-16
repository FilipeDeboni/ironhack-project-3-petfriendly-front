import React from "react";
import LogInForm from "./LogInForm";
import Logo from "./images/PetFriendlyLogo.png";
import About from "./About";
import AboutDevs from "./AboutDevs";

function Home() {
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
            <LogInForm></LogInForm>
          </div>
        </div>

        <div className="max-height pb-2 col-12 col-md-6 order-md-1 d-none d-md-block">
          <img
            className="first-img-height"
            src="http://placeimg.com/1920/1080/animals"
          ></img>
        </div>
      </div>

      <About />
      <AboutDevs />
    </div>
  );
}

export default Home;
