import React from "react";

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        className="movie-item__poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width="150"
        alt={movie.title}
      />
      <div className="movie-item__desc">{movie.overview}</div>
    </div>
  );
};

export default MovieDetail;
