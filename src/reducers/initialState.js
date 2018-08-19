const currentYear = new Date().getFullYear();

const initialState = {
  movies: [],
  genres: [],
  year: currentYear,
  genre: "",
  displayedMovie: false
};

export default initialState;
