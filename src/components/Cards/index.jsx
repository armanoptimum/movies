import { useEffect, useRef, useState } from 'react';
import { IMAGE_PREFIX, formatDate, fetchData } from './utils';
import Card from './Card';
import CardsWrapper from './styles';

export default function Cards() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const buttonRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        const moviesData = await fetchData(page);
        if (moviesData.length > 0) {
          setMovies((prevMovies) => [...prevMovies, ...moviesData]); 
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

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
  }, [movies])

  function loadMoreHandler() { 
    setPage((prev) => prev + 1);
  }

  return (
    <CardsWrapper>
      {movies.map((movie, id) => 
        <Card
        key={id}
        movieName={movie.title}
        img={IMAGE_PREFIX + movie.poster_path}
        date={formatDate(movie.release_date)}
      />
      )}
      <button ref={buttonRef} onClick={loadMoreHandler}>Load More</button>
    </CardsWrapper>
  );
}
