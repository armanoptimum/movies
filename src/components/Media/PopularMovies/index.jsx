import { useContext, useEffect } from 'react';
import Cards from '@/components/Cards';
import Options from '@/components/Options';
import { Wrapper, Title, Content } from './styles';
import { sortMovies } from '@/components/Options/Sort/utility';
import { MediaContex } from '../moviePrivider';
import { fetchMovies } from '@backend/media/api';
import { filterByDateRange, filterByGenres } from './utility';

export default function PopularMovies() {
  const { activeSortOption, page, movies, setMovies, selectedGenres, fromDate, toDate } = useContext(MediaContex);

  useEffect(() => {
    fetchMovies(page)
      .then((moviesData) => {
        if (moviesData.length > 0) {
          setMovies((prevMovies) => {
            let newMovies = moviesData.filter((movie) => !prevMovies.some((prevMovie) => prevMovie.id === movie.id));
            newMovies = filterByGenres(newMovies, selectedGenres);
            newMovies = filterByDateRange(newMovies, fromDate, toDate);
            newMovies = sortMovies(newMovies, activeSortOption);
            return [...prevMovies, ...newMovies];
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page, setMovies]);

  const onSearchHandler = () => {
    let filteredMovies = [...movies];
    filteredMovies = filterByGenres(filteredMovies, selectedGenres);
    filteredMovies = filterByDateRange(filteredMovies, fromDate, toDate);
    filteredMovies = sortMovies(filteredMovies, activeSortOption);
    setMovies(filteredMovies);
  };

  return (
    <Wrapper>
      <Title>Popular Movies</Title>
      <Content>
        <Options onSearchHandler={onSearchHandler} />
        <Cards />
      </Content>
    </Wrapper>
  );
}
