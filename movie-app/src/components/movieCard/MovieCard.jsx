import React from 'react';
import "./movieCard.scss"

function MovieCard({ data }) {
  return (
    <div className='card-item'>
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4 className='title'>{data.Title}</h4>
            <p className='year'>{data.Year}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MovieCard