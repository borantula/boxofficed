import React, { Component } from "react";
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
)(MovieDetailPage);
