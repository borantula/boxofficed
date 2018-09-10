import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import MovieList from "../components/movie/List";
import MovieListFilters from "../components/movie/ListFilters";
import FilterSentence from "../components/movie/FilterSentence";
import {
  boundChangeYear,
  boundGetGenreList,
  boundChangeGenre,
  boundResetDisplayedMovie,
} from "../actions/";

class Root extends Component {
  handleYearChange = e => this.props.yearChanged(e.target.value);
  handleGenreChange = e => this.props.genreChanged(e.target.value);

  componentDidMount() {
    this.props.resetDisplayedMovie();
    this.props.yearChanged(this.props.year);
  }

  render() {
    const { movies, genres = [], genre, year } = this.props;

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
          genre={genre}
          year={year}
        />

        <FilterSentence genre={genre} year={year} genres={genres} />
        <MovieList movies={movies} />
      </div>
    );
  }
}

Root.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  resetDisplayedMovie: PropTypes.func.isRequired,
  yearChanged: PropTypes.func.isRequired,
  boundGetGenreList: PropTypes.func.isRequired,
  genreChanged: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { movies, year, genres, genre } = state;
  return {
    movies,
    year,
    genres,
    genre,
  };
};

const mapDispatchToProps = {
  resetDisplayedMovie: boundResetDisplayedMovie,
  yearChanged: boundChangeYear,
  boundGetGenreList,
  genreChanged: boundChangeGenre,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
