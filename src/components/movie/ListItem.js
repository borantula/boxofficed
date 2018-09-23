import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import truncate from "lodash/truncate";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  card: {
    margin: "0 1em 1em",
  },
};

const MovieListItem = props => {
  const movie = props.movie;
  const classes = props.classes;
  const desc = truncate(movie.overview, { length: 180, separator: " " });
  const year = movie.release_date.split("-")[0];
  const isInBag = props.savedMovies.find(saved => movie.id === saved.id);
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className="movie-item">
          <Link
            to={{
              pathname: `/movie/${movie.id}`,
            }}
          >
            <img
              className="movie-item__poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width="150"
              alt={movie.title}
            />
          </Link>
          <div>
            {!isInBag && (
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => props.movieAddedToSavedList(movie)}
              >
                <Icon>playlist_add</Icon> Put it in my bag!
              </Button>
            )}

            {isInBag && (
              <Button
                variant="outlined"
                size="small"
                onClick={() => props.movieRemovedFromSavedList(movie)}
              >
                <Icon>playlist_add_check</Icon>
                Take it outta my bag!
              </Button>
            )}
          </div>
          <h3 className="movie-item__title">
            <Link
              to={{
                pathname: `/movie/${movie.id}`,
              }}
            >
              {movie.title} ({year})
            </Link>
          </h3>
          <div className="movie-item__desc">{desc}</div>
        </div>
      </CardContent>
    </Card>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  savedMovies: PropTypes.array.isRequired,
  movieAddedToSavedList: PropTypes.func.isRequired,
  movieRemovedFromSavedList: PropTypes.func.isRequired,
};

//TODO: should not get it via connect but via props from parent
export default withStyles(styles)(MovieListItem);
