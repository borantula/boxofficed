import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import MovieList from "../../components/movie/List";
import {
  movieAddedToSavedList,
  movieRemovedFromSavedList,
} from "../../actions";

class MyListPage extends Component {
  render() {
    const {
      movies,
      movieAddedToSavedList,
      movieRemovedFromSavedList,
    } = this.props;
    return (
      <React.Fragment>
        <Typography
          variant="display2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          My List
        </Typography>
        {movies.length > 0 && (
          <Typography align="center" color="textPrimary" gutterBottom>
            Movies you saved hoping you might watch some day...
          </Typography>
        )}
        {movies.length === 0 && (
          <div>
            <Typography align="center" color="textPrimary" gutterBottom>
              You have nothing in your list yet... Go, go with the wind and save
              some movies before it's too late!
            </Typography>
          </div>
        )}
        <MovieList
          movies={movies}
          savedMovies={movies}
          movieAddedToSavedList={movieAddedToSavedList}
          movieRemovedFromSavedList={movieRemovedFromSavedList}
        />
      </React.Fragment>
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
