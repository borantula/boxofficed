import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import truncate from "lodash/truncate";
import { movieAddedToSavedList } from "../../actions/";

const MovieListItem = props => {
  const movie = props.movie;
  console.log("other props", props);
  const desc = truncate(movie.overview, { length: 300, separator: " " });
  const year = movie.release_date.split("-")[0];
  const isInBag = props.savedMovies.find(saved => movie.id === saved.id);
  console.log(isInBag);
  return (
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
          <button onClick={() => props.movieAddedToSavedList(movie)}>
            Put it in the bag!
          </button>
        )}

        {isInBag && (
          <button onClick={() => props.movieAddedToSavedList(movie)}>
            Take it outta my bag!
          </button>
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
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  savedMovies: PropTypes.array.isRequired,
  movieAddedToSavedList: PropTypes.func.isRequired,
};

export default connect(
  state => ({ savedMovies: state.savedMovies }),
  { movieAddedToSavedList }
)(MovieListItem);
