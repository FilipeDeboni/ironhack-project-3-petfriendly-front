import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FeedCard from "./FeedCard";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import api from "../../apis/index.js";
import Logo from "../images/PetFriendlyLogo.png";

function Profile(props) {
  const [profile, setProfile] = useState({});

  const [feed, setFeed] = useState({});

  let history = useHistory();

  // Gets user profile
  useEffect(() => {
    (async () => {
      const response = await api.get("/profile");
      setProfile(response.data);
    })();
  }, []);

  // Retrieves user's friends posts
  useEffect(() => {
    (async () => {
      const response = await api.get("/friendsposts");
      // console.log(response.data);
      setFeed(response.data);
    })();
  }, []);

  const handleLogout = () => {
    // props.setUser({ user: {}, token: "" });
    localStorage.clear("loggedInUser");
    history.push("/");
  };

  return (
    <div className="">
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
          <a className="text-decoration-none" href="/">
            <i className="logout-button fas fa-sign-out-alt" href="/logout"></i>
          </a>
        </div>
      </div>

      <div className="profile-columns pt-3">
        <div className="profile-columns-padding ">
          {/* Profile section */}

          <Card className="post-header profile-user-column">
            <Card.Body className="responsive-small-column">
              <div className="d-flex pic-name-div">
                <Card.Img
                  className="profile-image"
                  variant="top"
                  src={profile.image}
                />
                <Card.Title className="profile-name">{profile.name}</Card.Title>
              </div>
              <div>
                <Card.Text className="profile-description">
                  {profile.description}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <p>Search Form</p>
          <p>Friends</p>
        </div>
        <div className="profile-columns-padding">
          <FeedCard feed={feed} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
