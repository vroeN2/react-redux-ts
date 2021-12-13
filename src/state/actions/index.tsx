import { ActionType } from "../action-types";
import { CountriesDataType } from "../interfaces/CountriesDataType";

interface SaveAction {
  type: ActionType.SAVE;
  payload: CountriesDataType;
}

interface DeleteAction {
  type: ActionType.DELETE;
  payload: number;
}

export type Action = SaveAction | DeleteAction;
