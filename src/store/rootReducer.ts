import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import repositoriesReducer from "./repositories/reducer/repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
  toastr: toastrReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
