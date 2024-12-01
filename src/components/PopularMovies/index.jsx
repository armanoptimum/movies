import Cards from '../Cards';
import Options from '../Options';
import { PopularMoviesWrapper } from './styles';

export default function PopularMovies() {
  return (
    <PopularMoviesWrapper>
      <h2>Popular Movies</h2>
      <div className="content">
        <Options />
        <Cards />
      </div>
    </PopularMoviesWrapper>
  );
}
