import React, { useState, useEffect } from "react";

import ListGroup from "react-bootstrap/ListGroup";

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
    <div>
      <ListGroup>
        {friends.map((el, i) => (
          <ListGroup.Item key={i}>
            <img className="friends-image" src={el.image} alt={`${el.name}`} />
            <p>{el.name}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default FriendCard;
