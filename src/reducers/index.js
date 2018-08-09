import { combineReducers } from "redux";

const movies = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_MOVIE_LIST":
      return action.movies;
    default:
      return state;
  }
};

const genres = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "GET_GENRE_LIST":
      return action.genres;
    default:
      return state;
  }
};

const year = (state = 2018, action) => {
  switch (action.type) {
    case "CHANGE_YEAR":
      return action.year;
    default:
      return state;
  }
};

const genre = (state = "", action) => {
  console.log("genre", action);
  switch (action.type) {
    case "CHANGE_GENRE":
      return action.genre;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies,
  year,
  genres,
  genre
});

export default rootReducer;
