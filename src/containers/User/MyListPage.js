import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieList from "../../components/movie/List";
import {
  movieAddedToSavedList,
  movieRemovedFromSavedList,
} from "../../actions";

class MyListPage extends Component {
  render() {
    return (
      <MovieList
        movies={this.props.movies}
        movieAddedToSavedList={this.props.movieAddedToSavedList}
        movieRemovedFromSavedList={this.props.movieRemovedFromSavedList}
      />
    );
  }
}

MyListPage.propTypes = {
  movies: PropTypes.array.isRequired,
  movieAddedToSavedList: PropTypes.func.isRequired,
  movieRemovedFromSavedList: PropTypes.func.isRequired,
};

export default connect(
  state => ({ movies: state.savedMovies }),
  { movieAddedToSavedList, movieRemovedFromSavedList }
)(MyListPage);
