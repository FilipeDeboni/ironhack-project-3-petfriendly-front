import React, { useState, useEffect } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import api from "../../apis/index.js";

function FriendCard() {
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
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default FriendCard;
