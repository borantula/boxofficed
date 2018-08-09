import React from "react";
import { Link } from "react-router-dom";

const MovieListItem = ({ movie }) => {
  return (
    <div key={movie.id} className="movie-item">
      <Link
        to={{
          pathname: `/movie/${movie.id}`
        }}
      >
        <img
          className="movie-item__poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width="150"
          alt={movie.title}
        />
      </Link>
      <h3 className="movie-item__title">
        <Link
          to={{
            pathname: `/movie/${movie.id}`
          }}
        >
          {movie.title}
        </Link>
      </h3>
      <div className="movie-item__desc">{movie.overview}</div>
    </div>
  );
};

export default MovieListItem;
