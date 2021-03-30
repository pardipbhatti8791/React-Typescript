import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// @ts-ignore
const ProtectedRoute = ({ any: Component, ...rest }) => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuth);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
