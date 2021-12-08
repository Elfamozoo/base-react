let langue: string = "fr-FR";

const api_key: string = "a42944988ef08836553202a6f37bf004";

const img_url: string = "https://image.tmdb.org/t/p/w500/";

const original_img_url: string = "https://image.tmdb.org/t/p/original";

const translation_url: string =
  "https://api.themoviedb.org/3/configuration/languages?";

const search_url: string = "https://api.themoviedb.org/3/search/movie?";

const base_uri: string = "https://api.themoviedb.org/3/";

const genres_list_http: string =
  "https://api.themoviedb.org/3/genre/movie/list?";

const movie_genres_http: string =
  "https://api.themoviedb.org/3/discover/movie?";

const movie_detail_http: string = "https://api.themoviedb.org/3/movie/";

type TmdbServiceProps = {
  fetchMoviesListByGenre: (id: string, genre: string) => Promise<any>;
  fetchlistGenres: () => Promise<any>;
  fetchMovieInfo: (movie_id: string) => Promise<any>;
  fetchCastings: (movie_id: string) => Promise<any>;
  fetchTrailers: (movie_id: string) => Promise<any>;
  fetchRecommendations: (movie_id: string) => Promise<any>;
  fetchSearch: (query: string, page: string, include_adult: string) => Promise<any>;
};
export const TmdbService: TmdbServiceProps = {
  fetchMoviesListByGenre: (id: string, genre: string) => getMoviesListByGenre(id, genre),

  fetchlistGenres: () => getlistGenres(),

  fetchMovieInfo: (movie_id: string) => getMovieInfo(movie_id),

  fetchCastings: (movie_id: string) => getCastings(movie_id),

  fetchTrailers: (movie_id: string) => getTrailers(movie_id),

  fetchRecommendations: (movie_id: string) => getRecommendations(movie_id),

  fetchSearch: (query: string, page: string, include_adult: string) => getSearch(query, page, include_adult),
};

const getlistGenres = async () => {
  return fetch(
    genres_list_http +
      new URLSearchParams({
        api_key: api_key,
        language: langue,
      })
  ).then((res) => res.json());
};

const getMoviesListByGenre = async (id: string, genre: string) => {
  return fetch(
    movie_genres_http +
      new URLSearchParams({
        api_key: api_key,
        language: langue,
        with_genres: id,
        page: "",
      })
  ).then((res) => res.json());
};

const getMovieInfo = async (movie_id: string) => {
  return fetch(
    `${movie_detail_http}${movie_id}?` +
      new URLSearchParams({
        api_key: api_key,
        language: langue,
      })
  ).then((res) => res.json());
};

const getCastings = async (movie_id: string) => {
  return fetch(
    `${movie_detail_http}${movie_id}/credits?` +
      new URLSearchParams({
        api_key: api_key,
        language: langue,
      })
  ).then((res) => res.json());
};

const getTrailers = async (movie_id: string) => {
  return fetch(
    `${movie_detail_http}${movie_id}/videos?` +
      new URLSearchParams({
        api_key: api_key,
        language: langue,
      })
  ).then((res) => res.json());
};

const getRecommendations = async (movie_id: string) => {
  return fetch(
    `${movie_detail_http}${movie_id}/recommendations?` +
      new URLSearchParams({
        api_key: api_key,
        language: langue,
      })
  ).then((res) => res.json());
};

const getSearch = async (query: string, page: string, include_adult: string) => {
  fetch(
    search_url +
      new URLSearchParams({
        api_key: api_key,
        language: langue,
        query: query,
        page: page,
        include_adult: include_adult,
      })
  ).then((res) => res.json());
};
