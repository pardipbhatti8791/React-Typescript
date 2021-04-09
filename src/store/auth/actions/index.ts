import { ActionType } from "../actions-types";

interface LoginAction {
  type: ActionType.LOGIN;
}

interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: string[];
}

interface LoginErrorAction {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}

interface MeAction {
  type: Function;
}

export type Action =
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | MeAction;
