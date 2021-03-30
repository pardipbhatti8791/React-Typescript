import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 *
 * @param path
 * @returns {JSX.Element}
 */
export const returnToRoute = (path: string) => {
  return <Redirect to={path} />;
};


/**
 *
 * @param Component
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
// @ts-ignore
const PublicRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state: any) => state.auth.isAuth);

  if (auth) {
    return <Route {...rest} render={props => returnToRoute("/")} />;
  } else {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
};

export default PublicRoute;
