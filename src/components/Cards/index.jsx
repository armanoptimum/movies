import { useContext, useEffect, useRef } from 'react';
import { formatDate, calculateRating } from './utils.js';
import Card from './Card';
import { CardsWrapper, LoadMoreButton, LoadMoreText } from './styles';
import { MediaContex } from '@/components/Media/moviePrivider.jsx';
const { VITE_APP_IMAGE_PREFIX } = import.meta.env;

export default function Cards() {
  const { page, setPage, movies } = useContext(MediaContex);
  const buttonRef = useRef();

  useEffect(() => {
    if (page === 1) return;
    function handleScroll() {
      const buttonPosition = buttonRef.current.getBoundingClientRect();
      const isButtonVisible = buttonPosition.top <= window.innerHeight && buttonPosition.bottom >= 0;
      if (isButtonVisible) {
        loadMoreHandler();
        window.removeEventListener('scroll', handleScroll);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [movies]);

  const loadMoreHandler = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <CardsWrapper>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          movieName={movie.title}
          img={VITE_APP_IMAGE_PREFIX + movie.poster_path}
          rating={calculateRating(movie.vote_average)}
          date={formatDate(movie.release_date)}
          description={movie.overview}
        />
      ))}
      <LoadMoreButton ref={buttonRef} onClick={loadMoreHandler}>
        <LoadMoreText>Load More</LoadMoreText>
      </LoadMoreButton>
    </CardsWrapper>
  );
}
