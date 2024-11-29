import { useEffect, useState } from 'react';
import Card from './Card';
import CardsWrapper from './styles';
import { IMAGE_PREFIX, formatDate, fetchData } from './utils';

export default function Cards() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      try {
          const moviesData = await fetchData();
          if (moviesData.length > 0) {
            setMovies(moviesData);
          }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <CardsWrapper>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          movieName={movie.title}
          img={IMAGE_PREFIX + movie.poster_path}
          date={formatDate(movie.release_date)}
        />
      ))}
      <button>Load More</button>
    </CardsWrapper>
  );
}
