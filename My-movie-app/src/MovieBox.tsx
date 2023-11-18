// import React from 'react'
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieBox = ({ results }: any) => {
  return (
    <div className="movie-card">
      <div className="movie-card-card">
        <img
          src={
            IMG_URL + results.poster_path !== "N/A"
              ? IMG_URL + results.poster_path
              : "https://via.placeholder.com/350"
          }
          alt={results.original_title}
          className="image"
        />
        <h2 className="h">{results.original_title}</h2>
        {/* <p className="h">{results.overview}</p> */}
        <h3 className="h">{results.release_date}</h3>
        <p className="h">Popularity: {results.popularity}</p>
      </div>
    </div>
  );
};

export default MovieBox;
