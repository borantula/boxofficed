import React from "react";

const MovieListFilters = ({ handleYearChange, handleGenreChange, genres }) => {
  const thisYear = new Date().getFullYear();
  return (
    <div class="movie-list-filters">
      <select onChange={handleYearChange}>
        <option value={thisYear}>This year</option>
        <option value={thisYear - 1}>Since {thisYear - 1}</option>
        <option value={thisYear - 5}>Last 5 year</option>
        {[2010, 2000, 1990, 1980, 1970, 1960].map(value => (
          <option key={value} value={value}>
            {value}'s
          </option>
        ))}
      </select>
      <select onChange={handleGenreChange}>
        <option value="">-- Select a Genre --</option>
        {genres.map(value => (
          <option key={value.id} value={value.id}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieListFilters;
