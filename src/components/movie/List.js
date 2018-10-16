import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MovieListItem from "../movie/ListItem";
//import MovieListItemAd from "../movie/ListItemAd";
import "./List.scss";

const MovieList = ({ movies = [], ListFilters = null }) => {
  return (
    <div className="movie-list">
      <Card>
        <CardContent>
          <Typography variant="display1" gutterBottom color="textPrimary">
            Movies ranked by their revenues
          </Typography>

          <Typography variant="headline" color="textSecondary">
            Because masses are never wrong!
          </Typography>
          {ListFilters}
        </CardContent>
      </Card>
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
