import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetail: detailReducer
});

export default rootReducer;
