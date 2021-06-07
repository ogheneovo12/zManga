import { animeConstants } from "../_constants";
import { dataList } from "./dummyData";

const initialState = {
  fetched: dataList,
  currPage: 1,
  limit: 10,
  loading: false,
  searchTerm: "naruto",
  isLoadingMore:false,
};

export function animes(state = initialState, action) {
  switch (action.type) {
    case animeConstants.ANIME_REQUEST:
      return {
        ...state,
        loading: true,
        error:"",
        currPage: 1,
      };
    case animeConstants.ANIME_REQUEST_MORE:
      return {
        ...state,
        error:"",
        isLoadingMore: true,
      };
    case animeConstants.ANIME_SUCCESS:
      return {
        ...state,
        fetched: action.fetched,
        currPage: action.currPage,
        loading:false,
      };
      case animeConstants.ANIME_SUCCESS_MORE:
        return {
          ...state,
          fetched:state.fetched.concat(action.fetched),
          currPage: action.currPage,
          isLoadingMore:false
        };
    case animeConstants.ANIME_ERROR:
      return {
        ...state,
        error: action.error,
        loading:false,
        isLoadingMore:false
      };
    case animeConstants.CHANGE_SEARCHTERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
}
