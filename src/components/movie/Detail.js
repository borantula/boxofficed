import React from "react";
import "./Detail.css";

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h4>{movie.tagline}</h4>
      <h1 className="movie-detail__title">{movie.title}</h1>

      <img
        className="movie-item__poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width="150"
        alt={movie.title}
      />
      <div>Budget: ${movie.budget.toLocaleString("en")}</div>
      <div>Revenue: ${movie.revenue.toLocaleString("en")}</div>
      <div> {movie.runtime} min.</div>
      <div className="movie-detail__desc">{movie.overview}</div>
    </div>
  );
};

export default MovieDetail;
