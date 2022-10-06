import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies, fetchAsyncMovies,fetchAsyncShows } from "../../features/movies/movieSlice";
import MovieListing from "../movieListing/MovieListing";
import { APIKEY } from "../../common/apis/movieApiKey";
import axios from "axios";
import "./home.scss";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, []);


  return (
    <div className="home">
      <MovieListing />
    </div>
  );
};

export default Home;
