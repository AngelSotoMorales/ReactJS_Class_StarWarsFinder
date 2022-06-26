import characters from "./reducer-character";
import favoriteCharacter from "./reducer-favoriteCharacter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  characters,
  favoriteCharacter
});
export default rootReducer;
