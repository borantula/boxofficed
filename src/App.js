import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Root from "./containers/Root";
import {
  boundChangeYear,
  boundGetGenreList,
  boundChangeGenre
} from "./actions/";

class App extends Component {
  componentDidMount() {
    document.title = "Movie Site That Rocks";

    //get genre list
    this.props.boundGetGenreList();
  }

  render() {
    const { yearChanged, movies, year, genres, genreChanged } = this.props;
    return (
      <Root
        yearChanged={yearChanged}
        genreChanged={genreChanged}
        movies={movies}
        year={year}
        genres={genres}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { movies, year, genres } = state;
  return {
    movies,
    year,
    genres
  };
};

export default connect(
  mapStateToProps,
  {
    yearChanged: boundChangeYear,
    boundGetGenreList,
    genreChanged: boundChangeGenre
  }
)(App);
