import { combineReducers } from "redux";
import { animes } from "./anime.reducer";
import { carousel } from "./carousel.reducer"
const rootReducer = combineReducers({
   animes,
   carousel
});

export { rootReducer };
