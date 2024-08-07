import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, logIn, setToken } from "services/serverApi";

export const loginThunk = createAsyncThunk('auth/login', async(body) =>{
    return await logIn(body)
})

export const getProfileThunk = createAsyncThunk('auth/profile', async()=>{
    // const token = `Bearer ${state.auth.access_token}`
    return await getProfile()
})

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async(_, thunkAPI)=>{
    const state = thunkAPI.getState()
    const token = `Bearer ${state.auth.access_token}`
    if(!token){
        return
    }
    setToken(token)
    const data = await getProfile()
    return data
})