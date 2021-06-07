import { animeConstants } from "../_constants";
import { animeService } from "../_services";

export const animeActions = {
  onSearchTermChange,
  fetchAnime,
  loadMore
};

function onSearchTermChange(searchTerm) {
  return (dispatch) => {
    dispatch({ type: animeConstants.CHANGE_SEARCHTERM, searchTerm });
  };
}

function fetchAnime() {
  return async (dispatch, getState) => {
    try{
      const { searchTerm, limit } = getState().animes;
      dispatch(request());  // request reset currPage to 1
      const res = await animeService.fetchAnime(searchTerm, limit);
      dispatch(success(res.results, res.last_page))
    }catch(err){
       dispatch(failure(err?.message || err))
    }
    //read before updating state
  
  };

  function request() {
    return { type: animeConstants.ANIME_REQUEST };
  }
  
}

function loadMore(){
  return async (dispatch, getState) => {
    try{
      const { searchTerm, limit, currPage } = getState().animes;
      dispatch(requestMore()); 
      const res = await animeService.fetchAnime(searchTerm, limit, currPage);
      dispatch(successMore(res.results, res.last_page))
    }catch(err){
       dispatch(failure(err?.message || err))
    }
    //read before updating state
  
  };

  function requestMore() {
    return { type: animeConstants.ANIME_REQUEST_MORE };
  }
  function successMore(fetched, currPage) {
    return { type: animeConstants.ANIME_SUCCESS_MORE, fetched, currPage };
  }
}


function success(fetched, currPage) {
  return { type: animeConstants.ANIME_SUCCESS, fetched, currPage };
}

function failure(error) {
  return { type: animeConstants.ANIME_ERROR, error };
}