import axios from "axios";
import querystring from "querystring";
import { updateMovieList, getGenreList } from "./index";

export const fetchMovies = async ({ year, genre }, dispatch) => {
  const yearEnd = year + 11;
  let params = {
    certification_country: "US",
    with_original_language: "en",
    sort_by: "revenue.desc",
    include_video: true,
    "primary_release_date.gte": year + "-01-01",
    "primary_release_date.lte": yearEnd + "-01-01",
    //we dont want short weird movies popup
    "with_runtime.gte":60,
    api_key: "f4ff8d4cb5499ad87a50e9da9cd9850c"
  };

  if (genre) {
    params.with_genres = genre;
  }

  const query = querystring.stringify(params);

  const url = `https://api.themoviedb.org/3/discover/movie?${query}`;

  //TODO error handling
  const response = await axios.get(url);

  if (response) {
    const movies = response.data.results;
    dispatch(updateMovieList(movies));
  }
};

export const fetchMovieDetails = async movieId => {
  let params = {
    language: "en_US",
    api_key: "f4ff8d4cb5499ad87a50e9da9cd9850c"
  };

  const query = querystring.stringify(params);

  const url = `https://api.themoviedb.org/3/movie/${movieId}?${query}`;

  //TODO error handling
  const response = await axios.get(url);

  if (response.status === 200) {
    return response.data;
  }
};

export const fetchGenres = async dispatch => {
  let params = {
    api_key: "f4ff8d4cb5499ad87a50e9da9cd9850c",
    language: "en-US"
  };

  const query = querystring.stringify(params);

  const url = `https://api.themoviedb.org/3/genre/movie/list?${query}`;

  //TODO error handling
  const response = await axios.get(url);
  if (response.data.genres) {
    dispatch(getGenreList(response.data.genres));
  }
};
