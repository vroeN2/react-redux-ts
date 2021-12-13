import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { SavedType } from "../interfaces/SavedType";

const countryReducer = (state: SavedType[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.SAVE:
      const newItem: SavedType = {
        id: action.payload.area,
        details: action.payload,
      };
      return (state = [...state, newItem]);

    case ActionType.DELETE:
      return state.filter((item: SavedType) => item.id !== action.payload);

    default:
      return state;
  }
};

export default countryReducer;
