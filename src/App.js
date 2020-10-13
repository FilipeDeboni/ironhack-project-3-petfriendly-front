import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AboutDevs from "./components/AboutDevs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={AboutDevs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
