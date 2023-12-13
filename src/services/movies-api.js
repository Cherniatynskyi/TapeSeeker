import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'f331f91cb9692f1df13f3cba648b2743'
const TRAND_URL = '/trending/all/day'

export const getTrandMovies = async () => {
    const response = await axios({ url: `${BASE_URL}${TRAND_URL}?api_key=${API_KEY}`, method: "GET" })
    return response.data.results
}

export const getMovieDetails = async(movieId, type) => {
    const response = await axios({ url: `${BASE_URL}/movie/${movieId}${type}?api_key=${API_KEY}`, method: "GET" })
    return response.data
}

