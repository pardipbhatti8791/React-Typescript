import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

/**
 * @ Loading Component
 */
import Loader from "../../components/Loader";

/**
 * @ dynamic routes
 */
import routes from "../../routes/routes";

const PrivateContent: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route: any, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <>
                    <route.component {...props} />
                  </>
                )}
              />
            )
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default PrivateContent;
