const { VITE_APP_AUTORIZATION, VITE_APP_API_BASE_URL } = import.meta.env;

const fetchMovies = async (page) => {
  const baseUrl = VITE_APP_API_BASE_URL;
  const endpoint = 'movie/popular'
  const queries = `language=en-US&page=${page}`;
  const url = `${baseUrl}/${endpoint}?${queries}`;
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
    if (!data.results) {
      return [];
    }
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const fetchGenres = async () => {
  const baseUrl = VITE_APP_API_BASE_URL;
  const endpoint = 'genre/movie/list'
  const queries = `language=en-US`;
  const url = `${baseUrl}/${endpoint}?${queries}`;
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
    if (!data.genres) {
      return [];
    }
    return data.genres;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export { fetchMovies, fetchGenres };
