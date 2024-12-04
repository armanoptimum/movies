import { useContext } from 'react';
import Option from './Option';
import { Wrapper, SearchButton } from './styles';
import { MovieContex } from '../PopularMovies/utils/moviePrivider';

export default function Options({ onSearchHandler }) {
  const { activeSortOption, setActiveSortOption } = useContext(MovieContex);

  return (
    <Wrapper>
      <Option activeSortOption={activeSortOption} setActiveSortOption={setActiveSortOption}>Sort</Option>
      <Option>Filters</Option>
      <SearchButton onClick={onSearchHandler} $active>Search</SearchButton>
    </Wrapper>
  );
}
