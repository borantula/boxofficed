import { fetchGenres, fetchMovies, fetchMovieDetails } from "./action-creators";
import * as types from "../constants/action-types";

export const changeYear = year => ({
  type: types.CHANGE_YEAR,
  payload: year,
});

export const changeGenre = genre => ({
  type: types.CHANGE_GENRE,
  payload: genre,
});

export const updateMovieList = movies => ({
  type: types.UPDATE_MOVIE_LIST,
  payload: movies,
});

export const getGenreList = genres => ({
  type: types.GET_GENRE_LIST,
  payload: genres,
});

export const displayMovie = movie => ({
  type: types.DISPLAY_MOVIE,
  payload: movie,
});

export const resetDisplayedMovie = () => ({
  type: types.RESET_DISPLAYED_MOVIE,
});

export const userLoggedIn = userData => ({
  type: types.USER_LOGGED_IN,
  payload: userData,
});

export const movieAddedToSavedList = movie => ({
  type: types.ADD_MOVIE_TO_SAVED_LIST,
  payload: movie,
});

export const movieRemovedFromSavedList = movie => ({
  type: types.REMOVE_MOVIE_FROM_SAVED_LIST,
  payload: movie,
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
    return movie.id === Number(movieId);
  });
  if (selected) {
    dispatch(displayMovie(selected));
  }

  fetchMovieDetails(Number(movieId)).then(movie => {
    dispatch(displayMovie(movie));
  });
};

export const setCurrentUser = userData => dispatch => {
  dispatch(userLoggedIn(userData));
};
