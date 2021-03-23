import { combineReducers } from "redux";
import repositoriesReducer from "./repositories/reducer/repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
