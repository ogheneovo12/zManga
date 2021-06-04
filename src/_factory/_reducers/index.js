import { combineReducers } from "redux";
import { animes } from "./anime.reducer";

const rootReducer = combineReducers({
   animes
});

export { rootReducer };
