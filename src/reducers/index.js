import { combineReducers } from "redux";
import initialState from "./initialState";

const movies = (state = initialState.movies, action) => {
  switch (action.type) {
    case "UPDATE_MOVIE_LIST":
      return action.movies;
    default:
      return state;
  }
};

const genres = (state = initialState.genres, action) => {
  switch (action.type) {
    case "GET_GENRE_LIST":
      return action.genres;
    default:
      return state;
  }
};

const year = (state = initialState.year, action) => {
  switch (action.type) {
    case "CHANGE_YEAR":
      return action.year;
    default:
      return state;
  }
};

const genre = (state = initialState.genre, action) => {
  switch (action.type) {
    case "CHANGE_GENRE":
      return action.genre;
    default:
      return state;
  }
};

const displayedMovie = (state = initialState.displayedMovie, action) => {
  switch (action.type) {
    case "DISPLAY_MOVIE":
      return action.movie;
    case "RESET_DISPLAYED_MOVIE":
      return false;
    default:
      return state;
  }
};

const currentUser = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      console.log(action);
      return {
        isLoggedIn: true,
        data: action.payload,
      };
    case "USER_LOGGED_OUT":
      return initialState.currentUser;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies,
  year,
  genres,
  genre,
  displayedMovie,
  currentUser,
});

export default rootReducer;
