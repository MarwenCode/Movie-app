import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
// import userPic from
import "./header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch()
  const searchHandler = (e) => {
   e.preventDefault();
    dispatch(fetchAsyncMovies(term))
    setTerm("")
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <span className="logo">Movie App</span>
        </Link>
      </div>
      <div className="searchBar">
        <form onSubmit={searchHandler}>
          <input
          className="inputTerm"
            type="text"
            value={term}
            placeholder="Search for your movie or show !"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="submit"> <i className="fa fa-search"></i></button>
        </form>
      </div>

      <div className="user-image">
        <img src="./images/user.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;
