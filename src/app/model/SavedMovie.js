/**
 * Movie model created from movie object
 * @param {*} movie
 */
export default function(movie) {
  const year = movie.release_date.split("-")[0];
  return {
    id: movie.id,
    img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    title: movie.title,
    year,
    created_at: new Date(),
  };
}
