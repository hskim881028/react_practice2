import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

//루투 리듀서
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

// 스토어
