import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies/movieSlice"


//movieSlice = movieReducer

export const store = configureStore({
    reducer: {
       movies: movieSlice
    },
})