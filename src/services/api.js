import axios from "axios"

const params = {
    KEY: '2f71ced57cfdbcfd1afc0d530836b37a',
    BASE_URL: 'https://api.themoviedb.org/3'
}

export const getTrendingMovies = () => {
    const {KEY, BASE_URL} = params

    const data = axios.get(`${BASE_URL}/trending/all/day?api_key=${KEY}`)
    return data
}

export const getMovieById = (id) => {
    const {KEY, BASE_URL} = params
    
    const data = axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`)
    return data
}

export const getMovieCast = (id) => {
    const {KEY, BASE_URL} = params
    
    const data = axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}`)
    return data
}

export const getMovieReviews = (id) => {
    const {KEY, BASE_URL} = params
    
    const data = axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`)
    return data
}

export const getMovieBySearchQuery = (query) => {
    const {KEY, BASE_URL} = params
    
    const data = axios.get(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`)
    return data
}