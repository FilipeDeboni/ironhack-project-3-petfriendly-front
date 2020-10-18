import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FeedCard from "./FeedCard";
import FriendCard from "./FriendCard";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import api from "../../apis/index.js";
import Logo from "../images/PetFriendlyLogo.png";

function Profile() {
  const [pageState, setPageState] = useState({ page: "home" });

  const [profile, setProfile] = useState({});

  const [feed, setFeed] = useState({});

  let history = useHistory();

  const doge = {
    adoption: false,
    comments: [
      "5f8b4ee70f79632ff06e33cf",
      "5f8b4ee80f79632ff06e403b",
      "5f8b4ee90f79632ff06e4905",
      "5f8b4ee90f79632ff06e4b84",
      "5f8b4eea0f79632ff06e4f8c",
    ],
    description: "Many description. Such website. Much wow. ",
    image:
      "https://i.pinimg.com/originals/18/5c/ae/185cae8f0e4a7d6d5f3bb29f23b8cd1d.jpg",
    likes: [
      "5f8b4ced0f79632ff06e2681",
      "5f8b4ced0f79632ff06e26d2",
      "5f8b4ced0f79632ff06e276c",
    ],
    petName: "Doge Dog",
    tag: [],
    userID: "5f8b4ced0f79632ff06e2610",
  };

  // Gets user profile
  useEffect(() => {
    (async () => {
      const response = await api.get("/profile");
      setProfile(response.data);
    })();
  }, []);

  // Gets friend posts
  useEffect(() => {
    (async () => {
      const response = await api.get("/friendsposts");
      setFeed(response.data);
      // console.log(response.data);
    })();
  }, []);

  const changeTab = (event) => {
    (async () => {
      if (event.currentTarget.id === "home") {
        const response = await api.get("/friendsposts");
        // console.log(response.data);
        setFeed(response.data);
        setPageState({ page: event.currentTarget.id });
        //
      } else if (event.currentTarget.id === "posts") {
        const response = await api.get("/post");
        const newFeed = [...response.data.posts, doge];
        // console.log(response.data);
        // setFeed(newFeed);
        setFeed({ posts: newFeed });
        setPageState({ page: event.currentTarget.id });
        //
      } else {
        // console.log("PROFILE");
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
            <i className="header-option header-option-active fas fa-home"></i>
          </Button>
          <Button variant="primary" onClick={changeTab} id="posts">
            <i className="header-option header-option-active fas fa-clone"></i>
          </Button>
          <Button variant="primary" onClick={changeTab} id="profile">
            <i className="header-option header-option-active fas fa-user-cog"></i>
          </Button>
        </div>
        <div className="header-right">
          <Button variant="primary" onClick={handleLogout}>
            {/* <a className="text-decoration-none" href="/"> */}
            <i className="logout-button fas fa-sign-out-alt" href="/logout"></i>
            {/* </a> */}
          </Button>
        </div>
      </div>

      <div className="profile-columns pt-3">
        <div className="profile-columns-padding">
          {/* Profile section */}

          <Card className="profile-leftdiv-size" border="secondary">
            <Card.Body className="div-profile">
              <div className="profile-img-name">
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
          <Card className="profile-leftdiv-size mt-3" border="secondary">
            <Card.Body>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Pet Name" />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      size="sm"
                      type="email"
                      placeholder="Especies"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control size="sm" as="select" defaultValue="Male">
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Avaiable for Adoption" />
                </Form.Group>
                <Button type="submit" className="mb-2">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
          {/* <Card className="profile-leftdiv-size mt-3 mb-3" border="secondary">
            <Card.Body> */}
          <FriendCard></FriendCard>
          {/* </Card.Body>
          </Card> */}
        </div>
        <div className="profile-columns-padding">
          {pageState.page === "home" ? (
            <FeedCard feed={feed} user={profile} />
          ) : pageState.page === "posts" ? (
            <FeedCard feed={feed} user={profile} />
          ) : (
            <FeedCard feed={feed} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
