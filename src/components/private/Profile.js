import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import FeedCard from "./FeedCard";
import FriendCard from "./FriendCard";
import UserPage from "./UserPage";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import api from "../../apis/index.js";
// import Logo from "../images/PetFriendlyLogo.png";
// import ModalCreatePost from "./ModalCreatePost";
import "./Profile.css";

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
    <div className="background-frame">
      <Navbar />
      {pageState.page !== "profile" ? (
        <div className="">
          <Card className="profile-column p-3">
            {/* User section */}
            <Card className="rounded-corners">
              <Card.Body className="profile-card-margin row justify-content-center">
                <Card.Img
                  className="profile-img"
                  variant="top"
                  src={profile.image}
                />
                <Card.Title className="mt-2">{profile.name}</Card.Title>
                <div>
                  <Card.Text className="mb-2">{profile.about}</Card.Text>
                </div>
                <div className="">
                  {/* <Button
                    className=""
                    variant="primary"
                    onClick={() => setModal(true)}
                  >
                    + Post
                  </Button>
                  <ModalCreatePost
                    userID={profile._id}
                    show={modal}
                    onHide={() => setModal(false)}
                  /> */}
                </div>
              </Card.Body>
            </Card>

            {/* Form */}
            <Card className="my-3 rounded-corners">
              <Card.Body>
                <Form>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Find more Pets</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Pet Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Distance"
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
                  <div className="d-flex justify-content-end">
                    <Button type="submit" className="btn-color">
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            <FriendCard deleteOpt={false} friends={profile.friends} />
          </Card>
          <div className="">
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
