import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

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
  buttonContainer: {
    margin: "20px 0",
  },
});

const MovieListFilters = ({
  handleYearChange,
  handleGenreChange,
  genres,
  year,
  years,
  genre,
  classes,
  requestRandomList,
}) => {
  return (
    <div className="movie-list-filters">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="year-native-helper">Year</InputLabel>
        <NativeSelect
          value={year}
          onChange={handleYearChange}
          input={<Input name="year" id="age-native-helper" />}
        >
          {years.map(value => (
            <option key={value.year} value={value.year}>
              {value.title}
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
      <div className={classes.buttonContainer}>
        <Button
          variant="raised"
          size="small"
          color="secondary"
          onClick={() => requestRandomList()}
        >
          Make Random Combination
        </Button>
      </div>
    </div>
  );
};

PropTypes.propTypes = {
  handleYearChange: PropTypes.func.isRequired,
  handleGenreChange: PropTypes.func.isRequired,
  requestRandomList: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  years: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieListFilters);
