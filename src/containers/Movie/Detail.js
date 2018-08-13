import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Helmet } from "react-helmet";
import { fetchMovieIfNeeded } from "../../actions/";

class MovieDetail extends Component {
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.props.fetchMovieIfNeeded(movieId);
  }

  render() {
    const movie = this.props.displayedMovie;
    return (
      <div>
        <Link to="/">&laquo; Back</Link>
        {movie && (
          <div>
            <Helmet>
              <title>{movie.title} - Money Maker Movies</title>
            </Helmet>
            <h1>{movie.title}</h1>
            <img
              className="movie-item__poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width="150"
              alt={movie.title}
            />
            <div className="movie-item__desc">{movie.overview}</div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { displayedMovie } = state;
  return {
    displayedMovie
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { fetchMovieIfNeeded }
  )
)(MovieDetail);
