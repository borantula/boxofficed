import { combineReducers } from "redux";
import initialState from "./initialState";
import * as types from "../constants/action-types";

//TODO divide into multiple reducers for readability

const movies = (state = initialState.movies, action) => {
  switch (action.type) {
    case types.UPDATE_MOVIE_LIST:
      return action.payload;
    default:
      return state;
  }
};

const genres = (state = initialState.genres, action) => {
  switch (action.type) {
    case types.GET_GENRE_LIST:
      return action.payload;
    default:
      return state;
  }
};

const year = (state = initialState.year, action) => {
  switch (action.type) {
    case types.CHANGE_YEAR:
      return action.payload;
    default:
      return state;
  }
};

const genre = (state = initialState.genre, action) => {
  switch (action.type) {
    case types.CHANGE_GENRE:
      return action.payload;
    default:
      return state;
  }
};

const displayedMovie = (state = initialState.displayedMovie, action) => {
  switch (action.type) {
    case types.DISPLAY_MOVIE:
      return action.payload;
    case types.RESET_DISPLAYED_MOVIE:
      return false;
    default:
      return state;
  }
};

const currentUser = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return {
        isLoggedIn: true,
        data: action.payload,
      };
    case types.USER_LOGGED_OUT:
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
    case types.ADD_MOVIE_TO_SAVED_LIST:
      //already on the list
      if (state.filter(saved => action.payload.id === saved.id).length) {
        return state;
      }
      return [...state, action.payload];

    case types.UPDATE_SAVED_MOVIES_LIST_FROM_SERVER:
      return [...action.payload];
    case types.REMOVE_MOVIE_FROM_SAVED_LIST:
      //TODO do it with slicing, this goes over all of them
      return [...state.filter(movie => movie.id !== action.payload.id)];
    default:
      return state;
  }
};

const years = (state = initialState.years) => state;

const rootReducer = combineReducers({
  movies,
  year,
  genres,
  genre,
  years,
  displayedMovie,
  currentUser,
  savedMovies,
});

export default rootReducer;
