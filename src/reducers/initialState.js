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
};

export default initialState;
