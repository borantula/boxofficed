import React from "react";
import PropTypes from "prop-types";
import "./Detail.css";

const MovieDetail = ({ movie }) => {
  const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const backdropPath = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  return (
    <div className="movie-detail">
      <h1 className="movie-detail__title">{movie.title}</h1>
      <h4>{movie.tagline ? movie.tagline : "&nbsp;"}</h4>
      <img
        className="movie-item__poster"
        src={posterPath}
        width="300"
        alt={movie.title}
      />
      <div>Budget: ${movie.budget && movie.budget.toLocaleString("en")}</div>
      <div>Revenue: ${movie.budget && movie.revenue.toLocaleString("en")}</div>
      <div> {movie.runtime} min.</div>
      <div className="movie-detail__desc">{movie.overview}</div>
      <img
        className="movie-item__poster"
        src={backdropPath}
        width=""
        alt={movie.title}
      />
    </div>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetail;
