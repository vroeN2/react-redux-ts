import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";

export const saveCountry = (details: {}) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAVE,
      payload: details,
    });
  };
};

export const deleteCountry = (details: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE,
      payload: details,
    });
  };
};
