import { useContext, useEffect } from 'react';
import Cards from '@/components/Cards';
import Options from '@/components/Options';
import { Wrapper, Title, Content } from './styles';
import { fetchData } from '@/components/Cards/utils';
import { sortMovies } from '@/components/Options/Option/data';
import { MediaContex } from '../moviePrivider';

export default function PopularMovies() {
  const { activeSortOption, page, movies, setMovies } = useContext(MediaContex);

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
