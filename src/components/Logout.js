import React, { useEffect } from "react";

function Logout(props) {
  // const history = useHistory();
  useEffect(() => {
    (() => {
      try {
        localStorage.removeItem("loggedInUser");
        props.setLoggedInUser({});
        // history.push("/");
      } catch (err) {
        console.error(err);
      }
    })();
  }, [props]);
  return <div></div>;
}

export default Logout;
