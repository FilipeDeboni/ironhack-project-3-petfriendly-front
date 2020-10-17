import React, { useState, useEffect } from "react";
import api from "../apis/index";
import Logo from "./images/PetFriendlyLogo.png";
import { Link } from "react-router-dom";
import FeedCard from "./FeedCard";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
      name: "Doge Dog oioioioiooioi",
      description: "<animal> I love humans </animal> oioioioioioiooi",
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
        <div className="profile-columns-padding">
          {/* Profile section */}

          <Card className="profile-leftdiv-size" border="secondary">
            <Card.Body className="div-profile">
              <div className="profile-img-name">
                <Card.Img
                  className="profile-image"
                  variant="top"
                  src={user.image}
                />
                <Card.Title className="profile-name">{user.name}</Card.Title>
              </div>
              <div>
                <Card.Text className="profile-description">
                  {user.description}
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
          <Card className="profile-leftdiv-size mt-3 mb-3" border="secondary">
            <Card.Body>
              <p>Friends</p>
            </Card.Body>
          </Card>
        </div>
        <div className="profile-columns-padding">
          <FeedCard feed={feed} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
