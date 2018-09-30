import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Helmet } from "react-helmet";
import Button from "@material-ui/core/Button";
import MovieDetail from "../../components/movie/Detail";
import { fetchMovieIfNeeded } from "../../actions/";

class MovieDetailPage extends Component {
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    this.props.fetchMovieIfNeeded(movieId);

    this.triggerGoogleAnalytics();
  }

  triggerGoogleAnalytics() {
    console.log(this.props.match.url, window.ga);
    if (window.ga) {
      window.ga("set", "page", this.props.match.url);
      window.ga("send", "pageview");
    }
  }

  render() {
    const movie = this.props.displayedMovie;
    const BackLink = (
      <Link to="/" className="detail-back-link">
        <Button variant="contained" color="primary">
          &laquo; Back
        </Button>
      </Link>
    );
    return (
      <div>
        {movie && (
          <Helmet>
            <title>{movie.title} - Box Officed!</title>
          </Helmet>
        )}

        {movie && <MovieDetail movie={movie} backLink={BackLink} />}
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
