import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// @ts-ignore
const ProtectedRoute = ({ any: Component, ...rest }) => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuth);

  return isAuthenticated ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
