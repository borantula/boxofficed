import React from "react";
import PropTypes from "prop-types";
import MovieListItem from "../movie/ListItem";
import "./List.css";

const MovieList = ({ movies = [] }) => {
  return (
    <div className="movie-list">
      {movies &&
        movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
