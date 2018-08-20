import { fetchGenres, fetchMovies, fetchMovieDetails } from "./action-creators";
export const UPDATE_MOVIE_LIST = "UPDATE_MOVIE_LIST";
export const REQUEST_MOVIES_BY_YEAR = "REQUEST_MOVIES_BY_YEAR";
export const CHANGE_YEAR = "CHANGE_YEAR";
export const GET_GENRE_LIST = "GET_GENRE_LIST";

export const changeYear = year => ({
  type: CHANGE_YEAR,
  year
});

export const changeGenre = genre => ({
  type: "CHANGE_GENRE",
  genre
});

export const updateMovieList = movies => ({
  type: UPDATE_MOVIE_LIST,
  movies
});

export const getGenreList = genres => ({
  type: GET_GENRE_LIST,
  genres
});

export const displayMovie = movie => ({
  type: "DISPLAY_MOVIE",
  movie
});

export const resetDisplayedMovie = () => ({
  type: "RESET_DISPLAYED_MOVIE"
});

/**
 * Dispatch year change and also start fetching movies
 */
export const boundChangeYear = year => (dispatch, getState) => {
  dispatch(changeYear(parseInt(year, 10)));
  fetchMovies(getState(), dispatch);
};

export const boundChangeGenre = genre => (dispatch, getState) => {
  dispatch(changeGenre(parseInt(genre, 10)));
  fetchMovies(getState(), dispatch);
};
export const boundGetGenreList = () => dispatch => {
  fetchGenres(dispatch);
};

export const boundResetDisplayedMovie = () => dispatch => {
  dispatch(resetDisplayedMovie());
};

export const fetchMovieIfNeeded = movieId => (dispatch, getState) => {
  const selected = getState()["movies"].find(movie => {
    console.log(movie, movie.id, Number(movieId));
    return movie.id === Number(movieId);
  });
  if (selected) {
    dispatch(displayMovie(selected));
  }

  fetchMovieDetails(Number(movieId)).then(movie => {
    dispatch(displayMovie(movie));
  });
};
