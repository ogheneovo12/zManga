import { handleResponse } from "./interceptor";

export const carouselService = {
    fetchGenre
}

const API_URL = "https://api.jikan.moe/v3/genre/anime";

async function fetchGenre(genreId){
    const response = await fetch(`${API_URL}/${ genreId }/1`);
    return handleResponse(response);
}

