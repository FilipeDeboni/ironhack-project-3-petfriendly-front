import React, { useState, useEffect } from "react";
import api from "../apis/index";
import Logo from "./images/PetFriendlyLogo.png";
import { Link } from "react-router-dom";

function Profile(props) {
  const [state, setState] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/profile");
        setState({ ...response.data.user });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const handleLogout = () => {
    // setLoggedInUser({ user: {}, token: "" });
    console.log(props);
  };

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
          <Link to="/">
            <i class="header-option fas fa-sign-out-alt"></i>
            {handleLogout}
          </Link>
        </div>
      </div>
      <div className="sidebar"></div>
      <div>
        <p>Profile</p>
        <p>Search Form</p>
        <p>Friends</p>
      </div>
    </div>
  );
}

export default Profile;
