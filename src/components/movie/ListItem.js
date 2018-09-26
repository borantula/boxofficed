import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import truncate from "lodash/truncate";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AddRemoveListButtons from "./AddRemoveListButtons";

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
          <AddRemoveListButtons movie={movie} />
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
};

//TODO: should not get it via connect but via props from parent
export default withStyles(styles)(MovieListItem);
