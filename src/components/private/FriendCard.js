import React, { useState, useEffect } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import api from "../../apis/index.js";

function FriendCard(props) {
  const [friends, setFriends] = useState({});

  useEffect(() => {
    (async () => {
      const response = await api.get("/userfriends");
      // console.log(response.data.friends);
      setFriends(response.data.friends);
    })();
  }, []);

  if (typeof friends == "undefined" || !friends.length) {
    return <div></div>;
  }

  const deleteFriend = async (event) => {
    const friendID = event.currentTarget.id;
    await api.delete(`/friend/${friendID}`);
    console.log(friendID);
  };
  return (
    <Card className="d-none d-xs-block d-sm-block" border="secondary">
      <ListGroup>
        {friends.map((el, i) => (
          <ListGroup.Item key={i}>
            <div className="d-flex align-items-center">
              <img
                className="friends-image"
                src={el.image}
                alt={`${el.name}`}
              />
              <span className="pl-3">{el.name}</span>
            </div>
            {props.deleteOpt ? (
              <Button id={el._id} onClick={deleteFriend}>
                Delete
              </Button>
            ) : (
              ""
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default FriendCard;
