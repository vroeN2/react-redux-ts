import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const countryReducer = (state: {}[], action: Action) => {
  switch (action.type) {
    case ActionType.SAVE:
      const newItem = {
        id: parseInt(action.payload.area),
        details: action.payload,
      };
      return (state = [...state, newItem]);

    case ActionType.DELETE:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default countryReducer;
