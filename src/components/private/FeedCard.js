import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ModalTextAdopt from "./ModalTextAdopt";
import ModalFormAdopt from "./ModalFormAdopt";

// import {
//   EmailShareButton,
//   FacebookShareButton,
//   LinkedinShareButton,
//   LivejournalShareButton,
//   PinterestShareButton,
//   RedditShareButton,
//   TelegramShareButton,
//   TumblrShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
// } from "react-share";

function FeedCard(props) {
  // const [modalShow, setModalShow] = useState(false);
  const [modalShow, setModalShow] = useState({ state: false, form: false });

  const allPosts = props.feed.posts;

  if (typeof allPosts == "undefined") {
    return <div></div>;
  }

  return (
    <div>
      {allPosts.map((el, i) => (
        <Card
          key={`${i}`}
          className="post-header mb-3"
          border={`${el.adoption ? "warning" : "secondary"}`}
        >
          <Card.Body>
            <Card.Img variant="top" src={el.image} className="mb-3 rounded" />
            <Card.Subtitle className="mb-2 text-muted">
              {el.petName}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {el.userID.name}
            </Card.Subtitle>
            <Card.Text>{el.description}</Card.Text>
            <div className="icons-div">
              <Button variant="primary">
                {el.likes.length}
                <i className="pr-2 fas fa-paw"></i>
              </Button>
              <Button variant="primary">
                {el.comments.length}
                <i className="px-2 fas fa-feather"></i>
              </Button>
              <Button variant="primary">
                <i className="fas fa-egg"></i>
                <i className="px-2 fas fa-share-alt"></i>
              </Button>
              {/* <FacebookShareButton url={shareUrl}/> */}
              {el.adoption ? (
                <>
                  <Button
                    variant="primary"
                    onClick={() => setModalShow({ ...modalShow, state: true })}
                  >
                    Adopt
                  </Button>
                  <ModalTextAdopt
                    show={modalShow.state}
                    onHide={() => setModalShow({ ...modalShow, state: false })}
                    onAccept={() => setModalShow({ form: true, state: false })}
                  />
                  <ModalFormAdopt
                    show={modalShow.form}
                    user={props.user}
                    pet={el}
                    onHide={() => setModalShow({ ...modalShow, form: false })}
                  />
                </>
              ) : (
                ""
              )}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FeedCard;
