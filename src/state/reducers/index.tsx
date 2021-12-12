import { combineReducers } from "redux";
import countryReducer from "./countryReducer";

const reducers = combineReducers({
  saved: countryReducer,
});

export default reducers;
