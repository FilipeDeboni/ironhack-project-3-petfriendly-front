import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import FriendCard from "./FriendCard";

import api from "../../apis/index.js";

function UserPage(props) {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    image: "",
    about: "",
  });

  let history = useHistory();

  const profile = props.profile;
  // console.log(profile);

  useEffect(() => {
    setForm({
      email: profile.email,
      name: profile.name,
      image: profile.image,
      about: profile.about,
      password: "••••••••",
    });
  }, [profile.about, profile.email, profile.image, profile.name]);

  function handleChange(event) {
    const tempState = { ...form };

    tempState[event.currentTarget.name] = event.currentTarget.value;

    setForm(tempState);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);

    try {
      await api.patch("/user", form);
      // console.log(result);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formImage">
          <img className="friends-image" src={form.image} alt="profile" />
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="image"
            placeholder={form.image}
            onChange={handleChange}
            value={form.image}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" placeholder={form.email} plaintext />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="••••••••"
            onChange={handleChange}
            value={form.password}
          />
        </Form.Group>

        <Form.Group controlId="formAbout">
          <Form.Label>About</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="about"
            onChange={handleChange}
            value={form.about}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>

        <FriendCard deleteOpt={true} />
      </Form>
    </div>
  );
}

export default UserPage;
