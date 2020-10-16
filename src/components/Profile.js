import React, { useState, useEffect } from "react";
import api from "../apis/index";
import Logo from "./images/PetFriendlyLogo.png";
import { Link } from "react-router-dom";
import FeedCard from "./FeedCard";
import Card from "react-bootstrap/Card";

import postList from "../json/posts.json";

function Profile(props) {
  const [state, setState] = useState({});

  // Lista genérica de posts do json
  const [feed, setFeed] = useState({});
  const [user, setUser] = useState({});

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

  // useEffect(() => {
  //   async function fetchPosts() {
  //     try {
  //       const response = await api.get("/posts");
  //       setState({ ...response.data.user });
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    const postArray = postList;
    // console.log(postArray);
    setFeed({ posts: postArray });
  }, []);

  useEffect(() => {
    const userArray = {
      name: "Doge Dog",
      description: "<animal> I love humans </animal>",
      image:
        "https://i.pinimg.com/originals/18/5c/ae/185cae8f0e4a7d6d5f3bb29f23b8cd1d.jpg",
    };

    // console.log(postArray);
    setUser({ ...userArray });
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
          <a className="text-decoration-none" href="/">
            <i className="logout-button fas fa-sign-out-alt" href="/logout"></i>
          </a>
        </div>
      </div>
      <div className="sidebar"></div>
      <div className="row space-bewteen profile-page div-card ">
        <div>
          {/* Profile section */}
          <Card className="post-header mb-3" style={{ width: "16rem" }}>
            <Card.Img variant="top" src={user.image} />
          </Card>
          <Card className="post-header" style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Title className="mb-2">{user.name}</Card.Title>
              <Card.Text>{user.description}</Card.Text>
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
