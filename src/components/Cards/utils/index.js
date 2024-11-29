const IMAGE_PREFIX = 'https://media.themoviedb.org/t/p/w440_and_h660_face';

function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
  return formattedDate;
}

async function fetchData() {
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDk0NzczZTA3YzU1NDQzZDlkMGM0MGU5ZGJmOTM4OSIsIm5iZiI6MTczMjg4NzgzMC43NTg2NTU4LCJzdWIiOiI2NzQ5YzMyNTRhNDg0MTdiODQxNzgzMjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.goSe6sug0KY0VrgSURm8IM2Gfb30d_sZJWjssktm00g'
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
}

export { IMAGE_PREFIX, formatDate, fetchData };
