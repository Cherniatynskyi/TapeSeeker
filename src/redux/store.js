import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Auth/authSlice";
import { moviesSlide } from "./Movies/moviesSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['access_token', 'favorites', 'scored', 'watchLater']
}

const persistedUsersReducer = persistReducer(persistConfig, authSlice.reducer)
const persistedMoviesReducer = persistReducer(persistConfig, moviesSlide.reducer)


export const store = configureStore({
    reducer: {
        // movies: contactsSlice.reducer,
        auth: persistedUsersReducer,
        movies: persistedMoviesReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)