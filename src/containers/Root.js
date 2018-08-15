import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import range from "lodash/range";
import Header from "../components/layout/Header";
import MovieList from "../components/movie/List";
import MovieListFilters from "../components/movie/ListFilters";
import {
  boundChangeYear,
  boundGetGenreList,
  boundChangeGenre,
  boundResetDisplayedMovie
} from "../actions/";

class Root extends Component {
  handleYearChange = e => this.props.yearChanged(e.target.value);
  handleGenreChange = e => this.props.genreChanged(e.target.value);

  componentDidMount() {
    this.props.resetDisplayedMovie();
    this.props.yearChanged(this.props.year);
  }

  render() {
    const { movies, genres = [] } = this.props;

    return (
      <div className="homepage">
        <Helmet>
          <title>
            Money Maker Movies - Masses could never be wrong, right!
          </title>
          <link
            rel="icon"
            type="image/png"
            href="{require('./favicon-movie.png')}"
          />
        </Helmet>
        <MovieListFilters
          handleYearChange={this.handleYearChange}
          handleGenreChange={this.handleGenreChange}
          genres={genres}
        />
        <MovieList movies={movies} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const { movies, year, genres } = state;
  return {
    ...ownProps,
    movies,
    year,
    genres
  };
};

const mapDispatchToProps = {
  resetDisplayedMovie: boundResetDisplayedMovie,
  yearChanged: boundChangeYear,
  boundGetGenreList,
  genreChanged: boundChangeGenre
};
/*
yearChanged: boundChangeYear,
  boundGetGenreList,
  genreChanged: boundChangeGenre,
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
