import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import auth from "./auth/reducer";

const reducers = combineReducers({
  toastr: toastrReducer,
  auth,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
