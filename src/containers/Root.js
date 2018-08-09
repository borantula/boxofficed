import React, { Component } from "react";
import { connect } from "react-redux";
import range from "lodash/range";
import Header from "../components/layout/Header";
import MovieList from "../components/movie/List";
import MovieListFilters from "../components/movie/ListFilters";
import {
  boundChangeYear,
  boundGetGenreList,
  boundChangeGenre
} from "../actions/";

class Root extends Component {
  handleYearChange = e => this.props.yearChanged(e.target.value);
  handleGenreChange = e => this.props.genreChanged(e.target.value);

  componentDidMount() {
    this.props.yearChanged(this.props.year);
  }

  render() {
    const { movies, genres = [] } = this.props;

    return (
      <div className="homepage">
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
)(Root);
