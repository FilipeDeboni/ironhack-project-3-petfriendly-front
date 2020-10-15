import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AboutDevs from "./components/AboutDevs";
import SignUp from "./components/SignUp.js";
import Profile from "./components/Profile.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={AboutDevs} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
