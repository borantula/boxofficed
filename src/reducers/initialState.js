const currentYear = new Date().getFullYear();
//they are not changing much so we are getting from static file to save an api trip to server
const genresObj = require("../static/genres.json");

const thisYear = new Date().getFullYear();
const years = [
  { year: thisYear, title: "This year" },
  { year: thisYear - 1, title: `Since ${thisYear - 1}` },
  { year: thisYear - 5, title: "Last 5 years" },
  { year: 2010, title: "2010's" },
  { year: 2000, title: "2000's" },
  { year: 1990, title: "1990's" },
  { year: 1980, title: "1980's" },
  { year: 1970, title: "1970's" },
  { year: 1960, title: "1960's" },
  { year: 1950, title: "1950's" },
];

const initialState = {
  movies: [],
  genres: genresObj.genres,
  year: currentYear - 1,
  years,
  genre: "",
  displayedMovie: false,
  currentUser: {
    isLoggedIn: false,
    data: {},
  },
  savedMovies: [],
  isFetchingMovies: false,
  ui: {
    showLoginModal: false,
  },
};

export default initialState;
