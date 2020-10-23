import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ModalTextAdopt from "./ModalTextAdopt";
import ModalFormAdopt from "./ModalFormAdopt";
import "./FeedCard.css";

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
  // console.log(props.user);
  const allPosts = props.feed.posts;
  // console.log(props);

  const userID = props.user._id;
  if (typeof allPosts == "undefined") {
    return <div></div>;
  }

  return (
    <div>
      <div className="header-line"></div>
      <div className="feed-card-margin">
        {allPosts.map((el, i) => (
          <div className="feed-center">
            <Card
              key={`${i}`}
              border="none"
              // border={`${el.adoption ? "warning" : "none"}`}
              className={`${
                el.adoption
                  ? "rounded-corners feed-each-card adoption-background post-header mb-3"
                  : "rounded-corners feed-each-card post-header mb-3"
              }`}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={el.image}
                  className="mb-3 feed-img"
                />

                <div className="d-flex justify-content-between">
                  <Card.Subtitle className="mb-2 pet-name-text">
                    {el.petName}
                  </Card.Subtitle>

                  {el.userID.name ? (
                    <Card.Subtitle className="mb-2">
                      <span className="text-muted">by </span>
                      <img
                        src={el.userID.image}
                        className="image-post-creator"
                      ></img>
                      {el.userID.name}
                    </Card.Subtitle>
                  ) : (
                    ""
                  )}
                </div>
                <Card.Text>{el.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <div className="">
                    <Button
                      className="button-interaction"
                      variant="primary"
                      id={el._id}
                      onClick={props.handleLike}
                    >
                      <i className="icon far fa-heart"></i>
                      {el.likes.length}
                      <span className="text-interaction"> likes</span>
                    </Button>
                    <Button
                      className="button-interaction"
                      variant="primary"
                      id={el._id}
                      onClick={props.handleComments}
                    >
                      <i className="icon fas fa-feather"></i>
                      {el.comments.length}
                      <span className="text-interaction"> comments</span>
                    </Button>
                    <Button className="button-interaction" variant="primary">
                      <i className="icon fas fa-egg"></i>
                      <span className="text-interaction"> share</span>
                    </Button>
                    {/* <FacebookShareButton url={shareUrl}/> */}
                  </div>
                  <div>
                    {el.userID === userID ? (
                      <>
                        <Button
                          variant="danger"
                          id={el._id}
                          onClick={props.deletePost}
                        >
                          Delete
                        </Button>
                      </>
                    ) : el.adoption ? (
                      <>
                        <Button
                          className=""
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
                          user={props.user}
                          pet={el}
                          onHide={() =>
                            setModalShow({ ...modalShow, form: false })
                          }
                        />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedCard;
