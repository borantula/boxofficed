import React, { Component } from "react";
import ReactDOM from "react-dom";
import range from "lodash/range";
import Header from "../components/layout/Header";
import MovieList from "../components/movie/List";
import MovieListFilters from "../components/movie/ListFilters";

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
        <Header title="Money Maker Movies" />
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

export default Root;
