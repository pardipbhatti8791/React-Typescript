import { Dispatch } from "redux";
import { ActionType } from "../actions-types";
import { Action } from "../actions";
import { apiUri } from "../../../services/apiEndPoints";
import { LoginInterface } from "../../../pages/public/auth/interfaces/login.interface";
import service from "../../../services/service";

/**
 *
 * @param uData
 */
export const login = (uData: LoginInterface) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN,
    });
    try {
      const { data } = await service.post(apiUri.auth.login, uData);
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
      });
    } catch (e) {
      console.log(e.message);
      dispatch({
        type: ActionType.LOGIN_ERROR,
        payload: e.message,
      });
    }
  };
};
