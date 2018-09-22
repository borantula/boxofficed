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
import { movieAddedToSavedList, movieRemovedFromSavedList } from "../actions";

class Root extends Component {
  handleYearChange = e => this.props.yearChanged(e.target.value);
  handleGenreChange = e => this.props.genreChanged(e.target.value);

  componentDidMount() {
    this.props.resetDisplayedMovie();
    this.props.yearChanged(this.props.year);
  }

  render() {
    const {
      movies,
      genres = [],
      genre,
      year,
      movieAddedToSavedList,
      movieRemovedFromSavedList,
      savedMovies,
    } = this.props;

    return (
      <div className="homepage">
        <Helmet>
          <title>
            Money Maker Movies - Masses could never be wrong, right!
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
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
        <MovieList
          movies={movies}
          savedMovies={savedMovies}
          movieAddedToSavedList={movieAddedToSavedList}
          movieRemovedFromSavedList={movieRemovedFromSavedList}
        />
      </div>
    );
  }
}

Root.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  savedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  resetDisplayedMovie: PropTypes.func.isRequired,
  yearChanged: PropTypes.func.isRequired,
  boundGetGenreList: PropTypes.func.isRequired,
  genreChanged: PropTypes.func.isRequired,
  movieAddedToSavedList: PropTypes.func.isRequired,
  movieRemovedFromSavedList: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { movies, year, genres, genre, savedMovies } = state;
  return {
    movies,
    year,
    genres,
    genre,
    savedMovies,
  };
};

const mapDispatchToProps = {
  resetDisplayedMovie: boundResetDisplayedMovie,
  yearChanged: boundChangeYear,
  boundGetGenreList,
  genreChanged: boundChangeGenre,
  movieAddedToSavedList,
  movieRemovedFromSavedList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
