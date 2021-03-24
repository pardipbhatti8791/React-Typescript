import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxToastr from "react-redux-toastr";
import { store } from "./store";
import Login from "./pages/public/auth/login/login";


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
          <Route path={"/"} component={Login} />
          <Route path={"/login"} component={Login} />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
