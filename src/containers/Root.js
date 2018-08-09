import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../components/layout/Header";
import range from "lodash/range";

class Root extends Component {
  handleYearChange = e => this.props.yearChanged(e.target.value);
  handleGenreChange = e => this.props.genreChanged(e.target.value);

  componentDidMount() {
    this.props.yearChanged(this.props.year);
  }

  render() {
    const { movies, genres = [] } = this.props;
    const thisYear = new Date().getFullYear();
    return (
      <div className="homepage">
        <Header title={`Money Maker Movies of ${this.props.year}`} />

        <select onChange={this.handleYearChange}>
          <option value={thisYear}>This year</option>
          <option value={thisYear - 1}>Since {thisYear - 1}</option>
          <option value={thisYear - 5}>Last 5 year</option>
          {[2010, 2000, 1990, 1980, 1970, 1960].map(value => (
            <option key={value} value={value}>
              {value}'s
            </option>
          ))}
        </select>
        <select onChange={this.handleGenreChange}>
          <option value="">-- Select a Genre --</option>
          {genres.map(value => (
            <option key={value.id} value={value.id}>
              {value.name}
            </option>
          ))}
        </select>
        <div class="movie-list">
          {this.props.movies &&
            this.props.movies.map(movie => {
              return (
                <div key={movie.id}>
                  <h3>{movie.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    width="100"
                  />
                  <div>{movie.overview}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Root;
