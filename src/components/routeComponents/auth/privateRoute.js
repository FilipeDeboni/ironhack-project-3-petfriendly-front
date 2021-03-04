import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        // console.log(user);
        if (user._id) {
          return <Component {...props} {...rest} loggedInUser={user} />;
        } else {
          // redirecionar para login
          return <Redirect to="/" />;
        }
      }}
    />
  );
}
export default PrivateRoute;
