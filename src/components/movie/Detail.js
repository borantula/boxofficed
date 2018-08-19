import React from "react";
import "./Detail.css";

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h1 className="movie-detail__title">{movie.title}</h1>
      <h4>{movie.tagline ? movie.tagline : "&nbsp;"}</h4>
      <img
        className="movie-item__poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width="150"
        alt={movie.title}
      />
      <div>Budget: ${movie.budget && movie.budget.toLocaleString("en")}</div>
      <div>Revenue: ${movie.budget && movie.revenue.toLocaleString("en")}</div>
      <div> {movie.runtime} min.</div>
      <div className="movie-detail__desc">{movie.overview}</div>
      <img
        className="movie-item__poster"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        width=""
        alt={movie.title}
      />
    </div>
  );
};

export default MovieDetail;
