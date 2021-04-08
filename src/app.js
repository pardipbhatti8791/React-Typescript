import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";
import "bootstrap/dist/css/bootstrap.min.css";

import { store } from "./store";

import Login from "./pages/public/auth/login/login";
import ProtectedRoute from "./guards/ProtectedRoute";
import PrivateLayout from "./layouts/private/Layout";
import PublicRoute from "./guards/PublicRoute";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          getState={(state) => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        <BrowserRouter>
          <PublicRoute path={"/"} exact component={Login} />
          <PublicRoute path={"/login"} component={Login} />
          <ProtectedRoute path={"/dashboard"} component={PrivateLayout} />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
