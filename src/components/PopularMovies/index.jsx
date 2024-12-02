import { useEffect, useState } from 'react';
import Cards from '../Cards';
import Options from '../Options';
import { PopularMoviesWrapper } from './styles';
import options, { sortMovies } from '../Options/Option/utils';
import { fetchData } from '../Cards/utils';

export default function PopularMovies() {
  const [activeSortOption, setActiveSortOption] = useState(options[0]);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const moviesData = await fetchData(page);
        if (moviesData.length > 0) {
          setMovies((prevMovies) => {
            const newMovies = moviesData.filter((movie) => !prevMovies.some((prevMovie) => prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  function onSearchHandler() {
    setMovies(sortMovies(movies, activeSortOption));
  }

  return (
    <PopularMoviesWrapper>
      <h2>Popular Movies</h2>
      <div className="content">
        <Options
          onSearchHandler={onSearchHandler}
          activeSortOption={activeSortOption}
          setActiveSortOption={setActiveSortOption}
        />
        <Cards movies={movies} page={page} setPage={setPage} />
      </div>
    </PopularMoviesWrapper>
  );
}
