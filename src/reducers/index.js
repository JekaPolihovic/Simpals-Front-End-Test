import { combineReducers } from "redux";
import posts from "./posts";
// main reducers
export const reducers = combineReducers({
  posts: posts,
});
