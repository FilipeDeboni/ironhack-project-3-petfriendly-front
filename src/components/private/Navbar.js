import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import api from "../../apis/index.js";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="">
      <div className="header-navbar">
        <div className="">
          <button className="add-post-btn btn-color btn-hover pt-3">
            <i class="fas fa-plus"></i>
          </button>
        </div>

        <div className="header-middle-nav">
          <button
            className="header-button-nav"
            //   onClick={changeTab}
            id="home"
          >
            <i className="fas fa-home"></i>
          </button>
          <button
            className="header-button-nav"
            //   onClick={changeTab}
            id="posts"
          >
            <i className="fas fa-clone"></i>
          </button>
          <button
            className="header-button-nav"
            //   onClick={changeTab}
            id="profile"
          >
            <i className="fas fa-user-cog"></i>
          </button>
        </div>

        <div className="header-top">
          <button
            className="logout-button btn-color btn-hover pb-3"
            variant="primary"
            //   onClick={handleLogout}
          >
            <i className="fas fa-sign-out-alt" href="/logout"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
