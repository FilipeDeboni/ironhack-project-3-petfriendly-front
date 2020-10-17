import React from "react";
import SignUpForm from "./SignUpForm";
import Logo from "../images/PetFriendlyLogo.png";

function SignUp() {
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
            <SignUpForm></SignUpForm>
          </div>
        </div>

        <div className="max-height pb-2 col-12 col-md-6 order-md-1 d-none d-md-block">
          <img
            className="first-img-height"
            src="http://placeimg.com/1920/1080/animals"
            alt="animals"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
