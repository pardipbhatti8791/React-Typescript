import React from "react";

const Dashboard = React.lazy(() => import("../pages/private/dashboard"));
/**
 * @returns {JSX.Element}
 * @constructor
 */
const NoPageFound = () => {
  return <h1>404 Page not found</h1>;
};

const routes = [
  { path: "/", exact: true, name: "home", component: Dashboard },
  { path: "/dashboard", exact: true, name: "home", component: Dashboard },
  { path: "**", component: NoPageFound },
];

export default routes;
