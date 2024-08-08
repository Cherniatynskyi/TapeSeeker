import axios from "axios";

export const instance = axios.create({baseURL: 'http://localhost:3004/api'})

export const setToken = (token) =>{
    instance.defaults.headers.common['Authorization'] = token
}

export const deleteToken = ()=>{
    delete instance.defaults.headers.common['Authorization']
}

export const signUp = (body) =>{
   return instance.post('/users/register', body)
}

export const logIn = async(body) =>{
    const {data} = await instance.post('/users/login', body)
    setToken(`Bearer ${data.token}`)
    return data
 }

export const logOut = () =>{
    const {data} = instance.post('/users/logout')
    deleteToken()
    return data
 }

export const getProfile = async() =>{
    const {data} = await instance.get('/users/current')
    return data
 }

export const getFavoritesMovies = async() =>{
     const {data} = await instance.get('movies/favorites')
     return data
}

export const getWatchLaterMovies = async() =>{
   const {data} = await instance.get('movies/watchlater')
   return data
}

export const getScoredMovies = async() =>{
   const {data} = await instance.get('movies/scored')
   return data
}
 
export const addMovie = async (data) => {
     return await instance.post('/movies', data) 
}
 
export const deleteMovies = async (id) => {
     return await instance.delete(`/movies/${id}`)
}
 
export const updateMovie = async(id, data)=>{
    return await instance.put(`/movies/${id}`, data)
}