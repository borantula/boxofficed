import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import truncate from "lodash/truncate";
import slugify from "slugify";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AddRemoveListButtons from "./AddRemoveListButtons";

const styles = {
  card: {
    margin: "0 1em 1em",
  },
};

class MovieListItem extends Component {
  render() {
    const movie = this.props.movie;
    const classes = this.props.classes;
    const desc = truncate(movie.overview, { length: 180, separator: " " });
    const year = movie.release_date.split("-")[0];
    const movieSlug = slugify(movie.title, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    });
    return (
      <Card className={classes.card}>
        <div className="movie-item">
          <Link
            to={{
              pathname: `/movie/${movie.id}/${movieSlug}`,
            }}
          >
            {/*
          <img
            className="movie-item__poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            />
        */}
          </Link>
          <CardContent>
            <AddRemoveListButtons movie={movie} />
            <h3 className="movie-item__title">
              <Link
                to={{
                  pathname: `/movie/${movie.id}/${movieSlug}`,
                }}
              >
                {movie.title} ({year})
              </Link>
            </h3>
            <div className="movie-item__desc">{desc}</div>
          </CardContent>
        </div>
      </Card>
    );
  }
}

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

//TODO: should not get it via connect but via props from parent
export default withStyles(styles)(MovieListItem);
