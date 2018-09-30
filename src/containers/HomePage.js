import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MovieList from "../components/movie/List";
import MovieListFilters from "../components/movie/ListFilters";
import FilterSentence from "../components/movie/FilterSentence";
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
};

class HomePage extends Component {
  handleYearChange = e => this.props.yearChanged(e.target.value);
  handleGenreChange = e => this.props.genreChanged(e.target.value);

  componentDidMount() {
    document.title =
      "Box Officed! | Movies ranked by their revenues, because masses cannot be wrong, right?";
    this.props.resetDisplayedMovie();
    this.props.yearChanged(this.props.year);

    this.setState({
      doneRender: false,
    });
  }

  componentDidUpdate() {
    if (this.state.doneRender === false) {
      this.setState({
        doneRender: true,
      });

      this.triggerGoogleAnalytics();
    }
  }

  triggerGoogleAnalytics() {
    const data = {
      event: "pageview",
      page: {
        path: this.props.match.url,
        title: document.title,
      },
    };

    window.dataLayer.push(data);
  }

  render() {
    const { movies, genres = [], genre, year, years, classes } = this.props;

    return (
      <div className="homepage">
        <Helmet>
          <title>
            Box Officed! | Movies ranked by their revenues, because masses
            cannot be wrong, right?
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

        <Card className={classes.filterCard}>
          <CardContent>
            <Typography variant="display1" gutterBottom color="textPrimary">
              Movies ranked by their revenues
            </Typography>

            <Typography variant="headline" color="textSecondary">
              Because masses could never be wrong, right!
            </Typography>
            <MovieListFilters
              handleYearChange={this.handleYearChange}
              handleGenreChange={this.handleGenreChange}
              requestRandomList={this.props.requestRandomList}
              genres={genres}
              years={years}
              genre={genre}
              year={year}
            />
            <FilterSentence genre={genre} year={year} genres={genres} />
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
