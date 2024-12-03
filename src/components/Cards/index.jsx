import { useContext, useEffect, useRef } from 'react';
import { IMAGE_PREFIX, formatDate } from './utils';
import Card from './Card';
import CardsWrapper from './styles';
import { MovieContex } from '../PopularMovies/utils/moviePrivider';

export default function Cards() {
  const { page, setPage, movies } = useContext(MovieContex);
  const buttonRef = useRef();

  useEffect(() => {
    if (page === 1) return;
    function handleScroll() {
      const buttonPosition = buttonRef.current.getBoundingClientRect();
      const isButtonVisible = buttonPosition.top <= window.innerHeight && buttonPosition.bottom >= 0;
      if (isButtonVisible) {
        buttonRef.current.click();
        window.removeEventListener('scroll', handleScroll);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);

  function loadMoreHandler() {
    setPage((prev) => prev + 1);
  }

  return (
    <CardsWrapper>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          movieName={movie.title}
          img={IMAGE_PREFIX + movie.poster_path}
          rating={Math.ceil(movie.vote_average * 10)}
          date={formatDate(movie.release_date)}
          description={movie.overview}
        />
      ))}
      <button id="load-more" ref={buttonRef} onClick={loadMoreHandler}>
        <span>Load More</span>
      </button>
    </CardsWrapper>
  );
}
