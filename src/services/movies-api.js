import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'f331f91cb9692f1df13f3cba648b2743'

export const getMovies = async (type) =>{
    const trendMovies = await axios({ url: `${BASE_URL}${type}?api_key=${API_KEY}`, method: "GET" })
    return trendMovies.data.results;

}

export const getMoviesList = async (type , page) =>{
    const movieList = await axios({ url: `${BASE_URL}${type}?api_key=${API_KEY}&page=${page}`, method: "GET" })
    return movieList.data.results;

}

export const getMovieDetails = async(movieId, type) => {
    const response = await axios({ url: `${BASE_URL}/movie/${movieId}${type}?api_key=${API_KEY}`, method: "GET" })
    return response.data
}

export const searchMovies = async(query, page) => {
    const response = await axios({ url: `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`, method: "GET" })
    return response.data.results
}

