import Cards from '../Cards';
import { PopularMoviesWrapper } from './styles';

export default function PopularMovies() {
  return (
    <PopularMoviesWrapper>
      <h2>Popular Movies</h2>
      
      <Cards />
    </PopularMoviesWrapper>
  );
}
