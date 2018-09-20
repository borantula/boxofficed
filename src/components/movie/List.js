import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MovieListItem from "../movie/ListItem";
import "./List.css";

const styles = {
  card: {
    margin: "0 1em 1em",
  },
};

const MovieList = ({
  movies = [],
  movieAddedToSavedList,
  movieRemovedFromSavedList,
  classes,
}) => {
  return (
    <div className="movie-list">
      {movies &&
        movies.map(movie => (
          <Card className={classes.card}>
            <CardContent>
              <MovieListItem
                key={movie.id}
                movie={movie}
                movieAddedToSavedList={movieAddedToSavedList}
                movieRemovedFromSavedList={movieRemovedFromSavedList}
              />
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  movieAddedToSavedList: PropTypes.func.isRequired,
  movieRemovedFromSavedList: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieList);
