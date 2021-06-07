import { handleResponse } from "./interceptor";

export const animeService = {
    fetchAnime
}

const API_URL = "https://api.jikan.moe/v3/search/anime";

async function fetchAnime(q="", limit = 20, page = 1){
    const response = await fetch(`${API_URL}?q=${ q }&limit=${ limit }&page=${ page }`);
    return handleResponse(response);
}

