import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddRemoveListButtons from "./AddRemoveListButtons";
import "./Detail.css";

const MovieDetail = ({ movie, backLink }) => {
  const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const backdropPath = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const year = movie.release_date.split("-")[0];

  return (
    <div className="movie-detail">
      <Card>
        <CardContent>
          <div className="text-left">{backLink}</div>
          <h1 className="movie-detail__title">{movie.title}</h1>
          <h4>{movie.tagline ? movie.tagline : "&nbsp;"}</h4>

          <div className="movie-detail__list-btn">
            <AddRemoveListButtons movie={movie} />
          </div>
          <img
            className="movie-item__poster"
            src={posterPath}
            width="300"
            alt={movie.title}
          />
          <div className="movie-detail__meta">
            <Typography variant="title" gutterBottom>
              Year: {year}
            </Typography>
            <Typography variant="title" gutterBottom>
              Budget: ${movie.budget && movie.budget.toLocaleString("en")}
            </Typography>
            <Typography variant="title" gutterBottom>
              Revenue: ${movie.budget && movie.revenue.toLocaleString("en")}
            </Typography>
            <Typography variant="title" gutterBottom>
              Runtime: {movie.runtime} min.
            </Typography>

            {movie.imdb_id && (
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                See on IMDB
              </a>
            )}
          </div>

          <div className="movie-detail__list-btn-2">
            <AddRemoveListButtons movie={movie} />
          </div>
          <div className="movie-detail__desc">{movie.overview}</div>
          <img
            className="movie-item__poster"
            src={backdropPath}
            width=""
            alt={movie.title}
          />
        </CardContent>
      </Card>
    </div>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetail;
