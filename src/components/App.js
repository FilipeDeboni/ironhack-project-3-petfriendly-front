import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Home from "./public/Home";
import SignUp from "./public/SignUp.js";
import Profile from "./private/Profile.js";
import PrivateRoute from "./routeComponents/auth/privateRoute";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const parsedUser = JSON.parse(storedUser || '""');
    // console.log(parsedUser);
    setLoggedInUser({ ...parsedUser.user });
  }, []);

  return (
    <div className="">
      <BrowserRouter forceRefresh={true}>
        {loggedInUser._id ? (
          <Switch>
            <PrivateRoute
              path="/profile"
              component={Profile}
              user={loggedInUser}
            />
            <Route>
              <Redirect to="/profile" />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup" component={SignUp} />
            {/* login path */}
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
