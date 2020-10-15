import React from "react";
import Logo from "./Images/PetFriendlyLogo.png";

function Profile() {
  return (
    <div className="">
      <div className="profile-background"></div>
      <div className="header">
        <div className="header-left">
          <img src={Logo} alt="Pet Friendly logo" className="header-left" />
        </div>
        <div className="header-middle">
          <i className="header-option header-option-active fas fa-home"></i>
          <i className="header-option header-option-active fas fa-clone"></i>
          <i className="header-option header-option-active fas fa-user-cog"></i>
        </div>
        <div className="header-right">
          <span>Hello Fulano</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
