import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import repositoriesReducer from "./repositories/reducer/repositoriesReducer";
import auth from "./auth/reducer";


const reducers = combineReducers({
  repositories: repositoriesReducer,
  toastr: toastrReducer,
  auth
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
