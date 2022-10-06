import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKEY } from '../../common/apis/movieApiKey';
import axios from 'axios';

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async() => {
    const movietext= "Harry";
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movietext}&type=movie`)
    console.log(res)
    return res.data
});

export const fetchAsyncShows = createAsyncThunk("shows/fetchAsyncShows", async() => {
    const showstext= "friends";
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${showstext}&type=movie`)
    console.log(res)
    return res.data
})

const initialState = {
    movies: {},
    shows: {},

}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, action) => {
            console.log("Fetched successfully")
            return {...state, movies: action.payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, action) => {
            console.log("Fetched successfully")
            return {...state, shows: action.payload}
        },
     
    }
});

export const { addMovies } = movieSlice.actions;
//state + movies( name of slice) + initialState 
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;

