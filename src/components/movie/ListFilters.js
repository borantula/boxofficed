import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const MovieListFilters = ({
  handleYearChange,
  handleGenreChange,
  genres,
  year,
  genre,
  classes,
}) => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="movie-list-filters">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="year-native-helper">Year</InputLabel>
        <NativeSelect
          value={year}
          onChange={handleYearChange}
          input={<Input name="year" id="age-native-helper" />}
        >
          <option value={thisYear}>This year</option>
          <option value={thisYear - 1}>Since {thisYear - 1}</option>
          <option value={thisYear - 5}>Last 5 year</option>
          {[2010, 2000, 1990, 1980, 1970, 1960, 1950].map(value => (
            <option key={value} value={value}>
              {value}
              's
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>From when?</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="genre-native-helper">
          Genre
        </InputLabel>
        <NativeSelect
          value={genre}
          onChange={handleGenreChange}
          input={<Input name="genre" id="genre-native-helper" />}
          className={classes.selectEmpty}
        >
          <option value="">All genres</option>
          {genres.map(value => (
            <option key={value.id} value={value.id}>
              {value.name}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>What kinda?</FormHelperText>
      </FormControl>
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

export default withStyles(styles)(MovieListFilters);
