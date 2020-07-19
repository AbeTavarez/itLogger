import { combineReducers } from "redux";
import logreducer from "./logReducer";

export default combineReducers({
  log: logreducer,
});
