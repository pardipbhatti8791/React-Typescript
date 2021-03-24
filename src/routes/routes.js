import React from "react";

const Dashboard = React.lazy(() => import("../pages/private/dashboard"));
const PackageList = React.lazy(() => import("../pages/private/package-lists"));

/**
 * @returns {JSX.Element}
 * @constructor
 */
const NoPageFound = () => {
  return <h1>404 Page not found</h1>;
};

const routes = [
  { path: "/", exact: true, name: "home", component: Dashboard },
  { path: "/home", exact: true, name: "home", component: Dashboard },
  { path: "/packages-list", exact: true, name: "Firewall", component: PackageList },
  { path: "**", component: NoPageFound },
];

export default routes;
