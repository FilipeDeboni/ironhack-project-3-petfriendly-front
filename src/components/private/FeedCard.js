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
          border="secondary"
          // border={`${el.adoption ? "warning" : "secondary"}`}
          className={`${
            el.adoption
              ? "adoption-background post-header mb-3"
              : "post-header mb-3"
          }`}
        >
          <Card.Body>
            <Card.Img variant="top" src={el.image} className="mb-3 rounded" />
            <div className="d-flex justify-content-between">
              <Card.Subtitle className="mb-2">{el.petName}</Card.Subtitle>

              <Card.Subtitle className="mb-2">
                <span className="text-muted">by </span>
                {el.userID.name}
              </Card.Subtitle>
            </div>

            <Card.Text>{el.description}</Card.Text>
            <div className="icons-div d-flex justify-content-between">
              <div>
                <Button className="post-icon" variant="primary">
                  <i className="pr-1 fas fa-paw"></i>
                  {el.likes.length}
                  <span className=""> likes</span>
                </Button>
                <Button className="post-icon" variant="primary">
                  <i className="pr-1 fas fa-feather"></i>
                  {el.comments.length}
                  <span className=""> comments</span>
                </Button>
                <Button className="post-icon" variant="primary">
                  <i className="pr-1 fas fa-egg"></i>
                  <span className=""> share</span>
                </Button>
                {/* <FacebookShareButton url={shareUrl}/> */}
              </div>
              <div>
                {el.adoption ? (
                  <>
                    <Button
                      className="btn-color btn-hover"
                      variant="primary"
                      onClick={() =>
                        setModalShow({ ...modalShow, state: true })
                      }
                    >
                      Adopt
                    </Button>
                    <ModalTextAdopt
                      show={modalShow.state}
                      onHide={() =>
                        setModalShow({ ...modalShow, state: false })
                      }
                      onAccept={() =>
                        setModalShow({ form: true, state: false })
                      }
                    />
                    <ModalFormAdopt
                      show={modalShow.form}
                      onHide={() => setModalShow({ ...modalShow, form: false })}
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FeedCard;
