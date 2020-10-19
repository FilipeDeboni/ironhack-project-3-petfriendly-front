import React from "react";
import SmallPicture from "../images/frontcatdog.png";

function About() {
  return (
    <div>
      <div className="background-bottom1"></div>
      <div className="half-div-card row">
        <div className="half-max-height pb-2 col-12 col-md-4 order-md-2">
          <img className="others-img-heigh" src={SmallPicture} alt="dogs"></img>
        </div>
        <div className="half-max-height content-center pb-2 col-12 col-md-8 order-md-1">
          <span className="about-session text-white">
            <h4>Pet Friend.ly</h4>
            <p>
              <p>We are a social network for pet lovers.</p>
              <p>
                Create a page, share the best pictures of your pets and follow
                friends with common interests.
              </p>
              <p>
                Here you can find a lot of content about pets and even adopt a
                pet.
              </p>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
