import { carouselConstants } from "../_constants";
import { carouselService } from "../_services";

export const carouselActions = {
  fetchAllGenres,
  selectGenre,
  pickAnime
};

function fetchAllGenres() {
  return async (dispatch, getState) => {
    try {
      let genresPromises = [];
      const { genres } = getState().carousel;
      const newGenres = Object.assign({}, genres);
      //create multiple promise
      for (const genre in newGenres) {
        genresPromises.push(carouselService.fetchGenre(newGenres[genre]?.id));
      }
      dispatch({ type: carouselConstants.REQUEST_ALL_GENRES });
      const fetchedGenres = await Promise.allSettled(genresPromises);
      for (const genre in newGenres) {
        const currentGenre = newGenres[genre];
        const { status, value } = fetchedGenres[currentGenre?.id - 1] || {};
        //    console.log("current", currentGenre)
        //    console.log("equiv", fetchedGenres[  currentGenre?.id - 1])
        if (status === "fulfilled") {
          newGenres[genre] = { ...currentGenre, animes: value?.anime || [] };
        }
      }
      dispatch({ type: carouselConstants.REQUEST_SUCCESS, genres:newGenres });
    } catch (err) {
      dispatch({
        type: carouselConstants.REQUEST_SUCCESS,
        error: err?.message || err,
      });
    }
  };
}

function selectGenre(genre){
    return (dispatch) =>{
        dispatch({ type:carouselConstants.SELECT_GENRES, genre })
    }
}
function pickAnime(index){
    return (dispatch) =>{
        dispatch({ type:carouselConstants.PICKED_ANIME, index })
    }
}

