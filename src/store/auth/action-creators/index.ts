import {Dispatch} from "redux";
import {ActionType} from "../actions-types";
import {Action} from "../actions";
import {apiUri} from "../../../services/apiEndPoints";
import {LoginInterface} from "../../../pages/public/auth/interfaces/login.interface";
import service from "../../../services/service";

/**
 *
 * @param uData
 */
export const login = (uData: LoginInterface) => {
    return async (dispatch: Dispatch<Action | any>) => {
        dispatch({
            type: ActionType.LOGIN,
        });
        try {
            await service.post(apiUri.auth.login, uData);
            dispatch(me());
        } catch (e){
            dispatch({
                type: ActionType.LOGIN_ERROR,
                payload: e.message,
            });
        }
    };
};

export const me = () => async (dispatch: Dispatch<Action>) => {
    try {
        const {data} = await service.get(apiUri.auth.me);
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
