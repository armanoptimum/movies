import { useContext, useEffect } from 'react';
import Cards from '../Cards';
import Options from '../Options';
import { PopularMoviesWrapper } from './styles';
import { sortMovies } from '../Options/Option/utils';
import { fetchData } from '../Cards/utils';
import { MovieContex } from './utils/moviePrivider';

export default function PopularMovies() {
  const { activeSortOption, page, movies, setMovies } = useContext(MovieContex);

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
  }, [page, setMovies]);

  const onSearchHandler = () => {
    setMovies(sortMovies(movies, activeSortOption));
  };

  return (
    <PopularMoviesWrapper>
      <h2>Popular Movies</h2>
      <div className="content">
        <Options onSearchHandler={onSearchHandler} />
        <Cards />
      </div>
    </PopularMoviesWrapper>
  );
}
