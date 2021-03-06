import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MovieList from "../components/movie/List";
import MovieListFilters from "../components/movie/ListFilters";
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
      "Box Officed! | Movies ranked by revenue, because masses cannot be wrong!";
    this.props.resetDisplayedMovie();
    this.props.yearChanged(this.props.year);
  }

  render() {
    const { movies, genres = [], genre, year, years } = this.props;

    const ListFilters = (
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
    );

    const TitleCard = (
      <Card className="movie-list__title-card">
        <CardContent className="movie-list__title-card-content">
          <Typography variant="display1" gutterBottom>
            Movies ranked by revenue
          </Typography>

          <Typography variant="headline">
            Because masses are never wrong!
          </Typography>
        </CardContent>
      </Card>
    );

    return (
      <div className="homepage">
        <Helmet>
          <title>
            Box Officed! | Movies ranked by revenue, because masses are never
            wrong!
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
            content="Movies ranked by revenue, because masses are
            never wrong!"
          />
          <meta
            property="og:image"
            content="https://boxofficed.com/boxofficed-img.png"
          />
        </Helmet>

        <MovieList
          movies={movies}
          ListFilters={ListFilters}
          TitleCard={TitleCard}
        />
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
