import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Helmet } from "react-helmet";
import MovieDetail from "../../components/movie/Detail";
import { fetchMovieIfNeeded } from "../../actions/";

class MovieDetailPage extends Component {
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.props.fetchMovieIfNeeded(movieId);
  }

  render() {
    const movie = this.props.displayedMovie;
    return (
      <div>
        {movie && (
          <Helmet>
            <title>{movie.title} - Money Maker Movies</title>
          </Helmet>
        )}
        <Link to="/">&laquo; Back</Link>
        {movie && <MovieDetail movie={movie} />}
      </div>
    );
  }
}

MovieDetailPage.propTypes = {
  displayedMovie: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  fetchMovieIfNeeded: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { displayedMovie } = state;
  return {
    displayedMovie,
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { fetchMovieIfNeeded }
  )
)(MovieDetailPage);
