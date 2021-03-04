import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Home from "./public/Home";
import LogIn from "./public/LogIn.js";
import SignUp from "./public/SignUp.js";
import Profile from "./private/Profile.js";
import PrivateRoute from "./routeComponents/auth/privateRoute";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const parsedUser = JSON.parse(storedUser || '""');
    setLoggedInUser({ ...parsedUser.user });
  }, []);

  return (
    <div className="">
      <BrowserRouter forceRefresh={true}>
        {loggedInUser._id ? (
          <Switch>
            <PrivateRoute
              path="/profile/:id"
              component={Profile}
              user={loggedInUser}
            />
            <Route>
              <Redirect to={`/profile/${loggedInUser._id}`} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={Home} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
