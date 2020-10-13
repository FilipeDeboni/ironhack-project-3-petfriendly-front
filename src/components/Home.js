import React from "react";
import LogIn from "./LogIn";
import image from "./Images/DogCat.jpeg";
import Logo from "./Images/PetFriendlyLogo.jpg";

function Home() {
  return (
    <div className="pageCard row justify-content-center">
      <div className="divHeight pb-2 col-12 col-md-6 order-md-2">
        <img className="logoHeight" src={Logo} alt=""></img>

        <div className="formHeight bg-dark d-flex align-items-center">
          <LogIn></LogIn>
        </div>
      </div>

      <div className="divHeight pb-2 col-12 col-md-6 order-md-1">
        <img className="petImgHeight" src={image} alt=""></img>
      </div>
    </div>
  );
}

export default Home;
