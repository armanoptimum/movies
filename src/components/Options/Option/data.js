const options = [
  'Popularity Descending',
  'Popularity Ascending',
  'Rating Descending',
  'Rating Ascending',
  'Release Date Descending',
  'Release Date Ascending',
];

export const sortMovies = (arr, activeOption) => {
  if (!arr || arr.length === 0) return [];

  const newarr = [...arr];

  const keyMapping = {
    Popularity: 'popularity',
    Rating: 'vote_average',
    'Release Date': 'release_date',
  };

  const parts = activeOption.split(' ');
  const order = parts.pop();
  const key = parts.join(' ');

  const mappedKey = keyMapping[key];
  if (!mappedKey) return newarr;

  return newarr.sort((a, b) => {
    if (!a[mappedKey] || !b[mappedKey]) return 0;
    if (order === 'Descending') {
      return b[mappedKey] > a[mappedKey] ? 1 : b[mappedKey] < a[mappedKey] ? -1 : 0;
    } else if (order === 'Ascending') {
      return a[mappedKey] > b[mappedKey] ? 1 : a[mappedKey] < b[mappedKey] ? -1 : 0;
    }
    return 0;
  });
};

export default options;
