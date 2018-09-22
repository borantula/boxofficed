import React from "react";
import PropTypes from "prop-types";
import MovieListItem from "../movie/ListItem";
import "./List.css";

const MovieList = ({
  movies = [],
  movieAddedToSavedList,
  movieRemovedFromSavedList,
  savedMovies,
}) => {
  return (
    <div className="movie-list">
      {movies &&
        movies.map(movie => (
          <MovieListItem
            movie={movie}
            key={movie.id}
            savedMovies={savedMovies}
            movieAddedToSavedList={movieAddedToSavedList}
            movieRemovedFromSavedList={movieRemovedFromSavedList}
          />
        ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  savedMovies: PropTypes.array.isRequired,
  movieAddedToSavedList: PropTypes.func.isRequired,
  movieRemovedFromSavedList: PropTypes.func.isRequired,
};

export default MovieList;
