import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../actions-types";
import { Action } from "../actions";

/**
 * @param email
 * @param password
 */
export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search"
      );
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: ActionType.LOGIN_ERROR,
        payload: e.message,
      });
    }
  };
};
