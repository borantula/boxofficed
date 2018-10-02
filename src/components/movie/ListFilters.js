import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
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
  movieCount,
}) => {
  return (
    <div className="movie-list-filters">
      You are viewing {movieCount} movies from
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={year}
          onChange={handleYearChange}
          input={<Input name="year" id="age-native-helper" />}
        >
          {years.map(value => (
            <option key={value.year} value={value.year}>
              {value.title.toLowerCase()}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      and
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={genre}
          onChange={handleGenreChange}
          input={<Input name="genre" id="genre-native-helper" />}
          className={classes.selectEmpty}
        >
          <option value="">all genres</option>
          {genres.map(value => (
            <option key={value.id} value={value.id}>
              {value.name.toLowerCase()}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <div className={classes.buttonContainer}>
        <Button
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
  movieCount: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieListFilters);
