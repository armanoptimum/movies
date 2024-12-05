import { useContext, useEffect } from 'react';
import Cards from '../Cards';
import Options from '../Options';
import { Wrapper, Title, Content } from './styles';
import { MovieContex } from './moviePrivider';
import { fetchData } from '../Cards/utils';
import { sortMovies } from '../Options/Option/data';

export default function PopularMovies() {
  const { activeSortOption, page, movies, setMovies } = useContext(MovieContex);

  useEffect(() => {
    fetchData(page)
      .then((moviesData) => {
        if (moviesData.length > 0) {
          setMovies((prevMovies) => {
            const newMovies = moviesData.filter((movie) => !prevMovies.some((prevMovie) => prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page, setMovies]);

  const onSearchHandler = () => {
    setMovies(sortMovies(movies, activeSortOption));
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
