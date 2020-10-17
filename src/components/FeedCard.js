import React from "react";
import Card from "react-bootstrap/Card";

function FeedCard(props) {
  const allPosts = props.feed.posts;
  if (typeof allPosts == "undefined") {
    return <div></div>;
  }
  return (
    <div>
      {allPosts.map((el, i) =>
        i % 23 == 1 ? (
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
              <Card.Text>{el.description}</Card.Text>
              <div className="icons-div">
                <a variant="primary">
                  <i class="pr-2 fas fa-paw"></i>
                </a>
                <a variant="primary">
                  <i class="px-2 fas fa-feather"></i>
                </a>
                <a variant="primary">
                  <i class="fas fa-egg"></i>
                  <i class="px-2 fas fa-share-alt"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default FeedCard;
