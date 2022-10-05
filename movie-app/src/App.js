import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Footer from "./components/footer/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/pageNotFound" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    
    </Router>
  );
}

export default App;
