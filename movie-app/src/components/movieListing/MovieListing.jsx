import React from 'react';
import MovieCard from "../movieCard/MovieCard"
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import "./movieListing.scss"

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows)
  let renderMovies, renderShows =""
 
 console.log(movies)
 //get movies
renderMovies =
  movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );

  //get shows
  renderShows =
  shows.Response === "True" ? (
    shows.Search.map((show, index) => (
      <MovieCard key={index} data={show} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{shows.Error}</h3>
    </div>
  );

return (
  <div className="movie-wrapper">
    <div className="movie-list">
      <h2>Movies</h2>
      <div className="movie-container">{renderMovies}</div>
    </div>
    <div className="movie-list">
      <h2>shows</h2>
      <div className="movie-container">{renderShows}</div>
    </div>
    </div>
  )
}

export default MovieListing
