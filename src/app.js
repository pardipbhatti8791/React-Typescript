import { BrowserRouter } from "react-router-dom";

import Login from "./pages/public/auth/login/login";
import ProtectedRoute from "./guards/ProtectedRoute";
import PrivateLayout from "./layouts/private/Layout";
import PublicRoute from "./guards/PublicRoute";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useEffect } from "react";
import Loader from "./components/Loader";

const App = () => {
  const { loading, isAuth } = useTypedSelector((state) => state.auth);
  const { me } = useActions();

  useEffect(() => {
    if (isAuth) {
      me();
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <PublicRoute path={"/"} exact component={Login} />
          <PublicRoute path={"/login"} component={Login} />
          <ProtectedRoute path={"/dashboard"} component={PrivateLayout} />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
