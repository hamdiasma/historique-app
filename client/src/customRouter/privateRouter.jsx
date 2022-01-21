import React from "react";
import { Route, Redirect } from "react-router-dom";
function privateRouter({ props }) {
  const docialLogged = localStorage.getItem("socialLogged");
  return docialLogged ? <Route {...props} /> : <Redirect to="/" />;
}

export default privateRouter;
