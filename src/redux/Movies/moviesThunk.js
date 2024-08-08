import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFavoritesMovies, getWatchLaterMovies, getScoredMovies, deleteMovies, addMovie, updateMovie } from "services/serverApi";

export const getFavoritesThunk = createAsyncThunk('movies/getFavorite', async()=>{
    const data = await getFavoritesMovies()
    return data
})

export const getWatchLaterThunk = createAsyncThunk('movies/getWatchLater', async()=>{
    return await getWatchLaterMovies()
})

export const getScoredThunk = createAsyncThunk('movies/getScored', async()=>{
    return await getScoredMovies()
})

export const addMovieThunk = createAsyncThunk('movies/addMovie', async(data)=>{
    const contacts = await addMovie(data);
    return contacts.data
})

export const deleteMovieThunk = createAsyncThunk('movies/deleteMovie', async(id)=>{
    const contacts = await deleteMovies(id);
    return contacts.data
})

export const updateMovieThunk = createAsyncThunk('movies/updateMovie', async({_id, data})=>{
    const contacts = await updateMovie(_id, data)
    return contacts.data
})