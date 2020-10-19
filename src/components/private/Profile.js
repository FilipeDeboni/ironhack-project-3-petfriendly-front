import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FeedCard from "./FeedCard";
import FriendCard from "./FriendCard";
import UserPage from "./UserPage";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import api from "../../apis/index.js";
import Logo from "../images/PetFriendlyLogo.png";

import ModalCreatePost from "./ModalCreatePost";

function Profile(props) {
  const [modal, setModal] = useState(false);

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
    userID: "5f8ccafa81c35c4e400c1d81",
  };

  const { id } = { ...props.match.params };

  const profileID = id;

  useEffect(() => {
    (async () => {
      const response = await api.get(`/profile/${profileID}`);
      setProfile(response.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await api.get(`/friendsposts/${profileID}`);
      setFeed(response.data);
    })();
  }, []);

  const changeTab = (event) => {
    (async () => {
      const eventID = event.currentTarget.id;

      if (event.currentTarget.id === "home") {
        const response = await api.get(`/friendsposts/${profileID}`);
        const sorted = sortResponse(response);
        const newFeed = [...sorted, doge];
        setFeed({ posts: newFeed });
        setPageState({ page: eventID });
      } else if (event.currentTarget.id === "posts") {
        const response = await api.get("/post");
        const sorted = sortResponse(response);
        const newFeed = [...sorted, doge];
        setFeed({ posts: newFeed });
        setPageState({ page: eventID });
        //
      } else {
        setPageState({ page: eventID });
      }
    })();
  };

  const handleLogout = () => {
    localStorage.clear("loggedInUser");
    history.push("/");
  };

  const sortResponse = (response) => {
    const sorted = response.data.posts.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      }
      if (a.updatedAt < b.updatedAt) {
        return 1;
      }
      return 0;
    });
    return sorted;
  };

  const deletePost = async (event) => {
    const postID = event.currentTarget.id;

    try {
      await api.delete(`/post/${postID}`);
      // const result = await api.post("/post", form);
      // history.push("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  const handleLike = async (event) => {
    const postID = event.currentTarget.id;
    try {
      await api.post(`/postlike/${postID}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleComments = async (event) => {
    const postID = event.currentTarget.id;

    try {
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="">
      <div className="header">
        <div className="header-left">
          <img src={Logo} alt="Pet Friendly logo" className="header-left" />
        </div>
        <div className="header-middle">
          <button
            className="header-button header-button-active"
            onClick={changeTab}
            id="home"
          >
            <i className="fas fa-home"></i>
          </button>
          <button
            className="header-button header-button-active"
            onClick={changeTab}
            id="posts"
          >
            <i className="fas fa-clone"></i>
          </button>
          <button
            className="header-button header-button-active"
            onClick={changeTab}
            id="profile"
          >
            <i className="fas fa-user-cog"></i>
          </button>
        </div>
        <div className="header-right">
          <Button
            className="logout-button btn-color btn-hover "
            variant="primary"
            onClick={handleLogout}
          >
            {/* <a className="text-decoration-none" href="/"> */}
            <i className="fas fa-sign-out-alt" href="/logout"></i>
            {/* </a> */}
          </Button>
        </div>
      </div>
      {pageState.page !== "profile" ? (
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
                  <Card.Title className="profile-name">
                    {profile.name}
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="profile-description">
                    {profile.about}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <>
              <Button variant="primary" onClick={() => setModal(true)}>
                + Post
              </Button>
              <ModalCreatePost
                userID={profile._id}
                show={modal}
                onHide={() => setModal(false)}
              />
            </>
            <Card className="profile-leftdiv-size my-3" border="secondary">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Pet Name"
                    />
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
                  <Button type="submit" className="btn-color btn-hover mb-2">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            {/* <Card className="profile-leftdiv-size mt-3 mb-3" border="secondary">
              <Card.Body> */}
            <FriendCard deleteOpt={false} friends={profile.friends} />
            {/* </Card.Body>
            </Card> */}
          </div>
          <div className="profile-columns-padding">
            {pageState.page === "home" ? (
              <FeedCard
                feed={feed}
                user={profile}
                handleComments={handleComments}
                handleLike={handleLike}
                deletePost={deletePost}
              />
            ) : pageState.page === "posts" ? (
              <FeedCard
                feed={feed}
                user={profile}
                handleComments={handleComments}
                handleLike={handleLike}
                deletePost={deletePost}
              />
            ) : (
              <FeedCard feed={feed} />
            )}
          </div>
        </div>
      ) : (
        <UserPage
          profile={profile}
          setProfile={setProfile}
          friends={profile.friends}
        />
      )}
    </div>
  );
}

export default Profile;
