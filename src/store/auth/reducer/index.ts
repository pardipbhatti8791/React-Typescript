import { Action } from "../actions";
import { ActionType } from "../actions-types";

interface RepositoriesStateInterface {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

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
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducere;
