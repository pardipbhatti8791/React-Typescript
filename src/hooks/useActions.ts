import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, authActionCreators } from "../store";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    Object.assign({}, actionCreators, authActionCreators),
    dispatch
  );
};
