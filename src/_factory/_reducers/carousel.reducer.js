import { carouselConstants } from "../_constants";

const genres = {
  action: {
    id: 1,
    animes: [],
    wallPaperUrl: "https://wallpaperaccess.com/full/5013214.jpg",
  },
  adventures: {
    id: 2,
    animes: [],
    wallPaperUrl: "https://wallpaperaccess.com/full/3329.jpg",
  },
  cars: {
    id: 3,
    animes: [],
    wallPaperUrl: "https://wallpaperaccess.com/full/1371822.jpg",  
  },
  comedy: {
    id: 4,
    animes: [],
    wallPaperUrl: "https://wallpaperaccess.com/full/1086783.jpg",  
  },
};

export function carousel(
  state = {
    genres,
    selectedGenre: "action",
    selectedIndex: 0,
    loading: false,
    error: "",
  },
  action
) {
  switch (action.type) {
    case carouselConstants.REQUEST_ALL_GENRES:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case carouselConstants.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        genres: action.genres,
        error: "",
      };
    case carouselConstants.REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case carouselConstants.PICKED_ANIME:
      return {
        ...state,
        selectedIndex: action.index,
      };
    case carouselConstants.SELECT_GENRES:
      return {
        ...state,
        selectedGenre: action.genre,
      };

    default:
      return state;
  }
}
