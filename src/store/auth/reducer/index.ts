import { Action } from "../actions";
import { ActionType } from "../actions-types";
import { getCookie, setCookie } from "../../../utils/cookies";

interface RepositoriesStateInterface {
  loading: boolean;
  error: string | null;
  data: string[];
  isAuth: boolean;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
  isAuth: getCookie({ key: "isAuth" }) === "true",
};

/**
 * @param state
 * @param action
 */
const reducere = (
  state: RepositoriesStateInterface = initialState,
  action: Action
): RepositoriesStateInterface => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.LOGIN_SUCCESS:
      setCookie({ key: "isAuth", value: true });
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
        isAuth: true,
      };
    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
        isAuth: false,
      };
    default:
      return state;
  }
};

export default reducere;
