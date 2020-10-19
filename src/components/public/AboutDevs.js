import React from "react";
import SmallPicture from "../images/petsrunning.jpg";

function AboutDevs() {
  return (
    <div>
      <div className="background-bottom2"></div>
      <div className="half-div-card row">
        <div className="half-max-height pb-2 col-12 col-md-4">
          <img className="others-img-heigh" src={SmallPicture} alt="dogs"></img>
        </div>
        <div className="half-max-height content-center pb-2 col-12 col-md-8 order-md-1">
          <span className="about-session text-white">
            <h4>Devs</h4>
            <div className="row">
              <span className="col">
                <h5>Arthur Franeze</h5>
                <span>
                  We are a social network for pet lovers. Here you can find a
                  lot of content about pets and even adopt a pet.
                </span>
              </span>
              <span className="col">
                <h5>Filipe Deboni</h5>
                <span>
                  A Front-End Web Dev with a background in Psychology and
                  Strategic Planning in Technology. Also, a lifelong learning
                  enthusiast.
                </span>
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutDevs;
