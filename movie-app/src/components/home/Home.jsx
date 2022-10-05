import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from "../../features/movies/movieSlice"
import MovieListing from "../movieListing/MovieListing";
import { APIKEY } from '../../common/apis/movieApiKey';
import axios from 'axios';
import './home.scss'

const Home = () => {
  const movietext= "Harry";
  const dispatch = useDispatch()

  useEffect(() => {
  
    const fetchMovies = async() => {
      try {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movietext}&type=movie`)
        console.log(res)
        dispatch(addMovies(res.data))
        
      } catch (error) {
        console.log(error)
        
      }
   
    
    }
    fetchMovies()
  

  }, [])

  console.log(APIKEY)

  




  return (
    <div className='home'>
        <MovieListing /> 
    </div>
  )
}

export default Home
