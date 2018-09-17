const currentYear = new Date().getFullYear();

const initialState = {
  movies: [],
  genres: [],
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
