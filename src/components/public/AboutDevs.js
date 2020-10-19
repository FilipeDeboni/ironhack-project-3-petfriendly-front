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
          <span className="text-white">
            <h4>Developers</h4>
            <span className="row">
              <span className="col px-1">
                <h5>Arthur Farneze</h5>
                <p>
                  Apaixonado por computação, tecnologia e curiosidades em geral.
                  Engenheiro Elétrico e Full-Stack Web Dev.
                </p>
              </span>
              <span className="col px-1">
                <h5>Filipe Deboni</h5>
                <p>
                  A Front-End Web Dev with a background in Psychology and
                  Strategic Planning in Technology. Also, a lifelong learning
                  enthusiast wich loves games.
                </p>
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutDevs;
