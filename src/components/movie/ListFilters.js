import React from "react";
import PropTypes from "prop-types";

const MovieListFilters = ({
  handleYearChange,
  handleGenreChange,
  genres,
  year,
  genre,
}) => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="movie-list-filters">
      <select onChange={handleYearChange} value={year}>
        <option value={thisYear}>This year</option>
        <option value={thisYear - 1}>Since {thisYear - 1}</option>
        <option value={thisYear - 5}>Last 5 year</option>
        {[2010, 2000, 1990, 1980, 1970, 1960, 1950].map(value => (
          <option key={value} value={value}>
            {value}
            's
          </option>
        ))}
      </select>
      <select onChange={handleGenreChange} value={genre}>
        <option value="">All genres</option>
        {genres.map(value => (
          <option key={value.id} value={value.id}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
};

PropTypes.propTypes = {
  handleYearChange: PropTypes.func.isRequired,
  handleGenreChange: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MovieListFilters;
