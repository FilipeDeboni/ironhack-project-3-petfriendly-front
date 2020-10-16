import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import SignUp from "./components/SignUp.js";
import Profile from "./components/Profile.js";
import PrivateRoute from "./routeComponents/auth/privateRoute";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const parsedUser = JSON.parse(storedUser || '""');
    setLoggedInUser({ ...parsedUser.user });
  }, []);

  return (
    <div className="container mt-5">
      <BrowserRouter forceRefresh={true}>
        {loggedInUser._id ? (
          <Switch>
            <PrivateRoute
              path="/profile"
              component={Profile}
              user={loggedInUser}
            />
            <Route exact path="/" component={Home} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup" component={SignUp} />
            {/* Verificar se caminho do login está correto */}
            <Route
              path="/"
              render={(props) => {
                return <Home setLoggedInUser={setLoggedInUser} {...props} />;
              }}
            />
            {/* <Route exact path="/" component={Home} /> */}
          </Switch>
        )}
      </BrowserRouter>
    </div>

    // <div className="App">
    //   <BrowserRouter>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/" component={About} />
    //     <Route exact path="/" component={AboutDevs} />
    //     <Route exact path="/signup" component={SignUp} />
    //     <Route exact path="/profile" component={Profile} />
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
