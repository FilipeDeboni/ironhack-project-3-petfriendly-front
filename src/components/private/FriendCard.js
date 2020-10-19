import React from "react";
import { useHistory } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import api from "../../apis/index.js";

function FriendCard(props) {
  let history = useHistory();
  const allFriends = props.friends;

  if (typeof allFriends == "undefined" || !allFriends.length) {
    return <div></div>;
  }

  const friendProfile = (event) => {
    const friendID = event.currentTarget.id.split("-")[1];
    console.log("friendID");
    console.log(friendID);
    history.push(`/profile/${friendID}`);
  };

  const deleteFriend = async (event) => {
    const friendID = event.currentTarget.id.split("-")[1];
    await api.delete(`/friend/${friendID}`);
  };

  return (
    <Card className="d-none d-xs-block d-sm-block" border="secondary">
      <ListGroup>
        {allFriends.map((el, i) => (
          <ListGroup.Item key={i}>
            <div className="d-flex align-items-center">
              <Button
                style={{ cursor: "pointer" }}
                onClick={friendProfile}
                id={`goto-${el._id}`}
              >
                <img
                  className="friends-image"
                  src={el.image}
                  alt={`${el.name}`}
                />
                <span className="pl-3">{el.name}</span>
              </Button>
            </div>

            {props.deleteOpt ? (
              <Button id={`delete-${el._id}`} onClick={deleteFriend}>
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
