export const filterByGenres = (movies, selectedGenres) => {
    if (selectedGenres.length === 0) return movies;
  
    const selectedGenreIds = selectedGenres.map((genre) => +genre.id);
    return movies.filter((movie) => movie.genre_ids.some((genre_id) => selectedGenreIds.includes(genre_id)));
};
  
export const filterByDateRange = (movies, fromDate, toDate) => {
    return movies.filter((movie) => {
      const releaseDate = movie.release_date;
  
      if (fromDate && toDate) {
        return releaseDate >= fromDate && releaseDate <= toDate;
      }
  
      if (fromDate) {
        return releaseDate >= fromDate;
      }
  
      if (toDate) {
        return releaseDate <= toDate;
      }
  
      return true;
    });
  };