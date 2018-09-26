const currentYear = new Date().getFullYear();
//they are not changing much so we are getting from static file to save an api trip to server
const genresObj = require("../static/genres.json");

const initialState = {
  movies: [],
  genres: genresObj.genres,
  year: currentYear,
  genre: "",
  displayedMovie: false,
  currentUser: {
    isLoggedIn: false,
    data: {},
  },
  /**
   * each saved film object planned to be
   * {
   *  id,
   *  img_url,
   *  name,
   *  year,
   *  created_at
   * }
   */
  savedMovies: [],
};

export default initialState;
