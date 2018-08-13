import React from "react";
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

export default MovieList;
