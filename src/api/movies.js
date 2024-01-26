import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})


export const getTrendingMovies = () => {
    const API_KEY = 'eaa473c2aabcdb92684db8ef78b61bb0';
    return instance.get("/trending/movie/day", {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    })
}

export const searchMovies = (q, page = 1) => {
    const API_KEY = 'eaa473c2aabcdb92684db8ef78b61bb0';
    return instance.get("/search/movie", {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            include_adult: false,
            query: q,
            page,
        }
    })
}

export const getMoviesById = id => {
    const API_KEY = 'eaa473c2aabcdb92684db8ef78b61bb0';
    return instance.get(`movie/${id}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    })
}

export const getMoviesByIdCast = id => {
    const API_KEY = 'eaa473c2aabcdb92684db8ef78b61bb0';
    return instance.get(`movie/${id}/credits`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    })
}

export const getMoviesByIdReviews = id => {
    const API_KEY = 'eaa473c2aabcdb92684db8ef78b61bb0';
    return instance.get(`movie/${id}/reviews`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    })
}
