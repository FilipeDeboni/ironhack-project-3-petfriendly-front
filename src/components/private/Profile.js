import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FeedCard from "./FeedCard";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import api from "../../apis/index.js";
import Logo from "../images/PetFriendlyLogo.png";

function Profile() {
  const [pageState, setPageState] = useState({ page: "home" });

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

  useEffect(() => {
    (async () => {
      const response = await api.get("/friendsposts");
      setFeed(response.data);
    })();
  }, []);

  const changeTab = (event) => {
    (async () => {
      if (event.currentTarget.id === "home") {
        const response = await api.get("/friendsposts");
        setFeed(response.data);
        setPageState({ page: event.currentTarget.id });
        //
      } else if (event.currentTarget.id === "posts") {
        const response = await api.get("/post");
        setFeed(response.data);
        setPageState({ page: event.currentTarget.id });
        //
      } else {
        console.log("PROFILE");
        setPageState({ page: event.currentTarget.id });
      }
    })();
  };

  const handleLogout = () => {
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
          <Button variant="primary" onClick={changeTab} id="home">
            <i className="header-option header-option-active fas fa-home" />
          </Button>
          <Button variant="primary" onClick={changeTab} id="posts">
            <i className="header-option header-option-active fas fa-clone" />
          </Button>
          <Button variant="primary" onClick={changeTab} id="profile">
            <i className="header-option header-option-active fas fa-user-cog" />
          </Button>
        </div>
        <div className="header-right">
          <Button variant="primary" onClick={handleLogout}>
            <i className="logout-button fas fa-sign-out-alt" href="/logout"></i>
          </Button>
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
                  {profile.about}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <p>Search Form</p>
          <p>Friends</p>
        </div>
        <div className="profile-columns-padding">
          {pageState.page === "home" ? (
            <FeedCard feed={feed} />
          ) : pageState.page === "posts" ? (
            <FeedCard feed={feed} />
          ) : (
            <FeedCard feed={feed} />
          )}
          {/* <FeedCard feed={feed} /> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
