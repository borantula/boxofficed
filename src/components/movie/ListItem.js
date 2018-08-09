import React from "react";

const MovieListItem = ({ movie }) => {
  return (
    <div key={movie.id} class="movie-item">
      <img
        class="movie-item__poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width="150"
        alt={movie.title}
      />
      <h3 class="movie-item__title">{movie.title}</h3>
      <div class="movie-item__desc">{movie.overview}</div>
    </div>
  );
};

export default MovieListItem;
