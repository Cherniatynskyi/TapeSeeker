import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import { getFavoritesThunk, getWatchLaterThunk, getScoredThunk, addMovieThunk, deleteMovieThunk, updateMovieThunk } from "./moviesThunk";

const handlePending = (state) => {
    state.isLoading = true
}

const handleFulfilledGetFavorites = (state,{payload}) => {
    state.isLoading = false
    state.favorites = payload
    state.error = ''
}

const handleFulfilledGetWatchLater = (state,{payload}) => {
    state.isLoading = false
    state.watchLater = payload
    state.error = ''
}

const handleFulfilledGetScored = (state,{payload}) => {
    state.isLoading = false
    state.scored = payload
    state.error = ''
}

const handleFulfilledAdd = (state, {payload}) => {
    state.isLoading = false
    state[payload.type].push(payload.body)
    state.error = ''
}

const handleFulfilledDel = (state,{payload}) => {
    state.isLoading = false
    state.favorites = state.favorites.filter(el=>el._id!==payload?._id)
    state.watchLater = state.watchLater.filter(el=>el._id!==payload?._id)
    state.scored = state.scored.filter(el=>el._id!==payload?._id)
    state.error = ''
}

const handleFulfilledUpdate = (state,{payload}) => {
    state.isLoading = false
    state[payload.type] = state[payload.type].map(movie =>
        movie._id === payload.body._id ? { ...movie, ...payload.body } : movie
      );
    state.error = ''
}

const handleRejected = (state, {error}) => {
    state.error = error.message
    state.isLoading = false
}

export const moviesSlide = createSlice({
    name: 'movies',
    initialState: {
        favorites:[],
        watchLater:[],
        scored:[],
        isLoading: false,
        error: '',
        currentContact: null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getFavoritesThunk.fulfilled, handleFulfilledGetFavorites)
        .addCase(getWatchLaterThunk.fulfilled, handleFulfilledGetWatchLater)
        .addCase(getScoredThunk.fulfilled, handleFulfilledGetScored)
        .addCase(addMovieThunk.fulfilled, handleFulfilledAdd)
        .addCase(deleteMovieThunk.fulfilled, handleFulfilledDel)
        .addCase(updateMovieThunk.fulfilled, handleFulfilledUpdate)
        .addMatcher(isAnyOf(getFavoritesThunk.pending, getWatchLaterThunk.pending, getScoredThunk.pending, addMovieThunk.pending, deleteMovieThunk.pending, updateMovieThunk.pending), handlePending)
        .addMatcher(isAnyOf(getFavoritesThunk.rejected, getWatchLaterThunk.rejected, getScoredThunk.rejected, addMovieThunk.rejected, deleteMovieThunk.rejected, updateMovieThunk.rejected), handleRejected)
    }
})

// export const {clearContacts, setCurrentContact, clearCurrentContact} = moviesSlide.actions