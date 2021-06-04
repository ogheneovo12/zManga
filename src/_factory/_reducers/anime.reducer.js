import { animeConstants } from "../_constants";

const initialState = {
  fetched: [],
  currPage: 0,
  limit: 10,
  loading: false,
  searchTerm: "",
};

export function animes(state = initialState, action) {
  switch (action.type) {
    case animeConstants.ANIME_SUCCESS:
      return {
        ...state,
        fetched: action.fetched,
      };
    default:
      return state;
  }
}
