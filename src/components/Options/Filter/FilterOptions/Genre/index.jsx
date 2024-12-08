import { FilterOptionHeaderName, FilterHeaderWrapper } from '../../styles';
import { genres } from './data';
import { GenreOption, GenreOptionsWrapper, GenreWrapper } from './styles';

export default function Genre() {
  return (
    <GenreWrapper>
      <FilterHeaderWrapper>
        <FilterOptionHeaderName>Genres</FilterOptionHeaderName>
      </FilterHeaderWrapper>
      <GenreOptionsWrapper>
        {genres.map((genre, id) => (
          <GenreOption key={id} type="button" value={genre} />
        ))}
      </GenreOptionsWrapper>
    </GenreWrapper>
  );
}
