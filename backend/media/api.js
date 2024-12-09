import { ENG_LANG_QUERY, GENRES_ENDPOINT, POPULAR_MOVIES_ENDPOINT } from './constants';

const { VITE_APP_AUTORIZATION, VITE_APP_API_BASE_URL } = import.meta.env;

const mediafetch = async (endpoint, queries = '') => {
  const url = `${VITE_APP_API_BASE_URL}/${endpoint}?${queries}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${VITE_APP_AUTORIZATION}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making API call:', error);
    return null;
  }
};

const fetchMovies = async (page = 1) => {
  const endpoint = POPULAR_MOVIES_ENDPOINT;
  const queries = `${ENG_LANG_QUERY}&page=${page}`;
  const data = await mediafetch(endpoint, queries);
  return data?.results || [];
};

const fetchGenres = async () => {
  const endpoint = GENRES_ENDPOINT;
  const queries = ENG_LANG_QUERY;
  const data = await mediafetch(endpoint, queries);
  return data?.genres || [];
};

export { fetchMovies, fetchGenres };
