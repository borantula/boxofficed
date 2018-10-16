import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MovieListItem from "../movie/ListItem";
//import MovieListItemAd from "../movie/ListItemAd";
import "./List.scss";

const MovieList = ({ movies = [], ListFilters = null, TitleCard = null }) => {
  return (
    <div className="movie-list">
      {TitleCard}
      {ListFilters && (
        <Card className="movie-list__filter-card">
          <CardContent className="movie-list__title-card-content">
            {ListFilters}
          </CardContent>
        </Card>
      )}
      {movies &&
        movies.map(movie => {
          return (
            <React.Fragment key={movie.id}>
              <MovieListItem movie={movie} />
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
