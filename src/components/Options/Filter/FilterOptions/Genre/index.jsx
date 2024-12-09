import { FilterOptionHeaderName, FilterHeaderWrapper } from '@/components/Options/Filter/styles';
import { GenreOption, GenreOptionsWrapper, GenreWrapper } from './styles';
import { useContext, useEffect } from 'react';
import { MediaContex } from '@/components/Media/moviePrivider';
import { fetchGenres } from '@backend/media/api';

export default function Genre() {
  const { selectedGenres, setSelectedGenres, genres, setGenres } = useContext(MediaContex);
  useEffect(() => {
    fetchGenres()
      .then((genres) => {
        setGenres(genres);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [selectedGenres]);
 

  const handleClick = (event) => {
    const genreId = event.target.id;
    const genreName = event.target.value;
  
    setSelectedGenres((prev) => {
      const isGenreSelected = prev.some((genre) => genre.id === genreId);
      if (isGenreSelected) {
        return prev.filter((genre) => genre.id !== genreId);
      } else {
        return [...prev, { id: genreId, name: genreName }];
      }
    });
  };

  return (
    <GenreWrapper>
      <FilterHeaderWrapper>
        <FilterOptionHeaderName>Genres</FilterOptionHeaderName>
      </FilterHeaderWrapper>
      <GenreOptionsWrapper>
        {genres.map(({ name, id }) => (
          <GenreOption $active={selectedGenres.some(genre => +genre.id === id)} onClick={handleClick} id={id} key={id} type="button" value={name} />
        ))}
      </GenreOptionsWrapper>
    </GenreWrapper>
  );
}
