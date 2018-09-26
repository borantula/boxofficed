import React from "react";
import PropTypes from "prop-types";
import MovieListItem from "../movie/ListItem";
import MovieListItemAd from "../movie/ListItemAd";
import "./List.css";

const MovieList = ({ movies = [], savedMovies }) => {
  let counter = 0;
  return (
    <div className="movie-list">
      {movies &&
        movies.map(movie => {
          counter++;
          return (
            <React.Fragment key={movie.id}>
              <MovieListItem movie={movie} />
              {counter % 5 === 0 && <MovieListItemAd />}
            </React.Fragment>
          );
        })}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
