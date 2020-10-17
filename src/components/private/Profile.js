import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FeedCard from "./FeedCard";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import api from "../../apis/index.js";
import Logo from "../images/PetFriendlyLogo.png";
import postList from "../../json/posts.json";

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
    // friendsposts
    // const postArray = postList;
    // // console.log(postArray);
    // setFeed({ posts: postArray });
  }, []);

  const handleLogout = () => {
    // props.setUser({ user: {}, token: "" });
    localStorage.clear("loggedInUser");
    history.push("/");
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
          {/* <a className="text-decoration-none" href="/"> */}
          <Button variant="light" onClick={handleLogout}>
            <i className="logout-button fas fa-sign-out-alt" href="/logout"></i>
            {/* </a> */}
          </Button>
        </div>
      </div>
      <div className="sidebar"></div>
      <div className="row space-bewteen profile-page div-card ">
        <div>
          {/* Profile section */}
          <Card className="post-header mb-3" style={{ width: "16rem" }}>
            <Card.Img variant="top" src={profile.image} />
          </Card>
          <Card className="post-header" style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Title className="mb-2">{profile.name}</Card.Title>
              <Card.Text>{profile.about}</Card.Text>
            </Card.Body>
          </Card>
          <p>Search Form</p>
          <p>Friends</p>
        </div>
        <div className="col">
          <FeedCard feed={feed} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
