import React from "react";
import PropTypes from "prop-types";
import MovieListItem from "../movie/ListItem";
//import MovieListItemAd from "../movie/ListItemAd";
import "./List.css";

const MovieList = ({
  movies = [],
  movieAddedToSavedList,
  movieRemovedFromSavedList,
  savedMovies,
}) => {
  //  let counter = 0;
  return (
    <div className="movie-list">
      {movies &&
        movies.map(movie => {
          //counter++;
          return (
            <React.Fragment key={movie.id}>
              <MovieListItem
                movie={movie}
                savedMovies={savedMovies}
                movieAddedToSavedList={movieAddedToSavedList}
                movieRemovedFromSavedList={movieRemovedFromSavedList}
              />
            </React.Fragment>
          );
        })}
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
