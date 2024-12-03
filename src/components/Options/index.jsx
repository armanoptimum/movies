import { useContext } from 'react';
import Option from './Option';
import OptionsWrapper from './styles';
import { MovieContex } from '../PopularMovies/utils/moviePrivider';

export default function Options({ onSearchHandler }) {
  const { activeSortOption, setActiveSortOption } = useContext(MovieContex);
  return (
    <OptionsWrapper>
      <Option activeSortOption={activeSortOption} setActiveSortOption={setActiveSortOption}>
        Sort
      </Option>
      <Option>Filters</Option>
      <button onClick={onSearchHandler} className="search active">
        Search
      </button>
    </OptionsWrapper>
  );
}
