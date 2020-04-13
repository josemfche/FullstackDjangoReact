import { combineReducers } from "redux";
import leads from "./leads.js";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  leads,
  errors,
  messages,
});
