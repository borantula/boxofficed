import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MovieList from "../../components/movie/List";
import {
  movieAddedToSavedList,
  movieRemovedFromSavedList,
} from "../../actions";

const styles = {
  filterCard: {
    display: "inline-flex",
  },
};

class MyListPage extends Component {
  render() {
    const {
      movies,
      movieAddedToSavedList,
      movieRemovedFromSavedList,
      classes,
    } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.filterCard}>
          <CardContent>
            <Typography
              variant="display2"
              align="center"
              color="inherit"
              gutterBottom
            >
              My Bag
            </Typography>
            {movies.length > 0 && (
              <Typography align="center" color="inherit" gutterBottom>
                Movies you bagged hoping you might watch some day...
              </Typography>
            )}
            {movies.length === 0 && (
              <div>
                <Typography align="center" color="inherit" gutterBottom>
                  You have nothing in your bag yet... Go, go with the wind and
                  bag some movies before it's too late!
                </Typography>
              </div>
            )}
          </CardContent>
        </Card>
        <MovieList
          movies={movies}
          savedMovies={movies}
          movieAddedToSavedList={movieAddedToSavedList}
          movieRemovedFromSavedList={movieRemovedFromSavedList}
        />
      </React.Fragment>
    );
  }
}

MyListPage.propTypes = {
  movies: PropTypes.array.isRequired,
  movieAddedToSavedList: PropTypes.func.isRequired,
  movieRemovedFromSavedList: PropTypes.func.isRequired,
};

export default connect(
  state => ({ movies: state.savedMovies }),
  { movieAddedToSavedList, movieRemovedFromSavedList }
)(withStyles(styles)(MyListPage));
