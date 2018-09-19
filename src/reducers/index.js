import { combineReducers } from "redux";
import initialState from "./initialState";
// import savedMovieModel from "../app/model/SavedMovie";

const movies = (state = initialState.movies, action) => {
  switch (action.type) {
    case "UPDATE_MOVIE_LIST":
      return action.payload;
    default:
      return state;
  }
};

const genres = (state = initialState.genres, action) => {
  switch (action.type) {
    case "GET_GENRE_LIST":
      return action.payload;
    default:
      return state;
  }
};

const year = (state = initialState.year, action) => {
  switch (action.type) {
    case "CHANGE_YEAR":
      return action.payload;
    default:
      return state;
  }
};

const genre = (state = initialState.genre, action) => {
  switch (action.type) {
    case "CHANGE_GENRE":
      return action.payload;
    default:
      return state;
  }
};

const displayedMovie = (state = initialState.displayedMovie, action) => {
  switch (action.type) {
    case "DISPLAY_MOVIE":
      return action.payload;
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

/**
 * saved movie action
 * @param {*} state
 * @param {*} action
 */
const savedMovies = (state = initialState.savedMovies, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_SAVED_LIST":
      //already on the list
      if (state.filter(saved => action.payload.id === saved.id).length) {
        return state;
      }
      return [...state, action.payload];
    case "REMOVE_MOVIE_FROM_SAVED_LIST":
      //TODO do it with slicing, this goes over all of them
      return [...state.filter(movie => movie.id !== action.payload.id)];
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
  savedMovies,
});

export default rootReducer;
