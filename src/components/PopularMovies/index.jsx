import { useContext, useEffect } from 'react';
import Cards from '../Cards';
import Options from '../Options';
import { PopularMoviesWrapper } from './styles';
import { sortMovies } from '../Options/Option/utils';
import { MovieContex } from './utils/moviePrivider';
import { fetchData } from '../Cards/utils';

export default function PopularMovies() {
  const { activeSortOption, page, movies, setMovies } = useContext(MovieContex);

  useEffect(() => {
    fetchData(page).then((moviesData) => {
      if (moviesData.length > 0) {
        setMovies((prevMovies) => {
          const newMovies = moviesData.filter((movie) => !prevMovies.some((prevMovie) => prevMovie.id === movie.id));
          return [...prevMovies, ...newMovies];
        });
      }
    }).catch((err) => {
      console.log(err);
    })
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
