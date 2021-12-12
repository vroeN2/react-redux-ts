import { ActionType } from "../action-types";

interface SaveAction {
  type: ActionType.SAVE;
  payload: {};
}

interface DeleteAction {
  type: ActionType.DELETE;
  payload: number;
}

export type Action = SaveAction | DeleteAction;
