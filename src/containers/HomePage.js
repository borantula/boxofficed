import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MovieList from "../components/movie/List";
import MovieListFilters from "../components/movie/ListFilters";
import * as routes from "../constants/routes";
import {
  boundChangeYear,
  boundChangeGenre,
  boundResetDisplayedMovie,
  requestRandomList,
} from "../actions";

const styles = {
  filterCard: {
    display: "inline-flex",
  },
  smallerTitle: {
    fontSize: "2.5em",
    fontWeight: 300,
    marginTop: "0.4em",
  },
  smallerSubtitle: {
    fontSize: "1em",
  },
};

class HomePage extends Component {
  handleYearChange = e => this.props.yearChanged(e.target.value);
  handleGenreChange = e => this.props.genreChanged(e.target.value);

  componentDidMount() {
    document.title =
      "Box Officed! | Movies ranked by their revenues, because masses cannot be wrong!";
    this.props.resetDisplayedMovie();
    this.props.yearChanged(this.props.year);
  }

  render() {
    const {
      movies,
      genres = [],
      genre,
      year,
      years,
      classes,
      user,
    } = this.props;

    return (
      <div className="homepage">
        <Helmet>
          <title>
            Box Officed! | Movies ranked by their revenues, because masses are
            never wrong!
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta property="og:url" content="https://boxofficed.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Box Officed!" />
          <meta
            property="og:description"
            content="Movies ranked by their revenues, because masses are
            never wrong!"
          />
          <meta
            property="og:image"
            content="https://boxofficed.com/boxofficed-img.png"
          />
        </Helmet>

        <Card className={classes.filterCard}>
          <CardContent>
            <Typography
              variant="display1"
              className={classes.smallerTitle}
              gutterBottom
              color="textPrimary"
            >
              Movies ranked by their revenues
            </Typography>

            <Typography
              variant="headline"
              color="textSecondary"
              className={classes.smallerSubtitle}
            >
              Because masses are never wrong!
            </Typography>

            {user.isLoggedIn === false && (
              <div>
                <Typography style={{ margin: "20px 0" }} color="textPrimary">
                  Login to do cool stuff like <br />
                  saving movies that makes you say "yeah I'll definitely watch
                  it"
                </Typography>
                <Link className="my-list-btn" to={routes.SIGNIN}>
                  <Button color="primary" variant="raised">
                    Login
                  </Button>
                </Link>
              </div>
            )}
            <MovieListFilters
              handleYearChange={this.handleYearChange}
              handleGenreChange={this.handleGenreChange}
              requestRandomList={this.props.requestRandomList}
              genres={genres}
              years={years}
              genre={genre}
              year={year}
              movieCount={movies.length}
            />
          </CardContent>
        </Card>

        <MovieList movies={movies} />
      </div>
    );
  }
}

HomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  years: PropTypes.arrayOf(PropTypes.object).isRequired,
  resetDisplayedMovie: PropTypes.func.isRequired,
  yearChanged: PropTypes.func.isRequired,
  genreChanged: PropTypes.func.isRequired,
  requestRandomList: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { movies, year, genres, genre, years } = state;
  return {
    movies,
    year,
    genres,
    genre,
    years,
    user: state.currentUser,
  };
};

const mapDispatchToProps = {
  resetDisplayedMovie: boundResetDisplayedMovie,
  yearChanged: boundChangeYear,
  genreChanged: boundChangeGenre,
  requestRandomList,
};

export default compose(
  withRouter,
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage);
