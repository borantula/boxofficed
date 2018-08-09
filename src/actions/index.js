import axios from "axios";
import querystring from "querystring";
export const UPDATE_MOVIE_LIST = "UPDATE_MOVIE_LIST";
export const REQUEST_MOVIES_BY_YEAR = "REQUEST_MOVIES_BY_YEAR";
export const CHANGE_YEAR = "CHANGE_YEAR";
export const GET_GENRE_LIST = "GET_GENRE_LIST";

export const changeYear = year => ({
  type: CHANGE_YEAR,
  year
});

export const changeGenre = genre => ({
  type: "CHANGE_GENRE",
  genre
});

export const updateMovieList = movies => ({
  type: UPDATE_MOVIE_LIST,
  movies
});

export const getGenreList = genres => ({
  type: GET_GENRE_LIST,
  genres
});

/**
 * Dispatch year change and also start fetching movies
 */
export const boundChangeYear = year => (dispatch, getState) => {
  dispatch(changeYear(parseInt(year)));
  fetchMovies(getState(), dispatch);
};

export const boundChangeGenre = genre => (dispatch, getState) => {
  dispatch(changeGenre(parseInt(genre)));
  fetchMovies(getState(), dispatch);
};

export const boundGetGenreList = () => dispatch => {
  fetchGenres().then(response => {
    dispatch(getGenreList(response.data.genres));
  });
};

const fetchMovies = ({ year, genre }, dispatch) => {
  const yearEnd = year + 11;
  let params = {
    certification_country: "US",
    with_original_language: "en",
    sort_by: "revenue.desc",
    include_video: true,
    "primary_release_date.gte": year + "-01-01",
    "primary_release_date.lte": yearEnd + "-01-01",
    api_key: "f4ff8d4cb5499ad87a50e9da9cd9850c"
  };

  if (genre) {
    params.with_genres = genre;
  }

  const query = querystring.stringify(params);

  const url = `https://api.themoviedb.org/3/discover/movie?${query}`;

  //TODO error handling
  return axios.get(url).then(response => {
    const movies = response.data.results;
    dispatch(updateMovieList(movies));
  });
};

const fetchGenres = () => {
  let params = {
    api_key: "f4ff8d4cb5499ad87a50e9da9cd9850c",
    language: "en-US"
  };

  const query = querystring.stringify(params);

  const url = `https://api.themoviedb.org/3/genre/movie/list?${query}`;

  //TODO error handling
  return axios.get(url);
};
