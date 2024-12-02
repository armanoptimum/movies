import Option from './Option';
import OptionsWrapper from './styles';

export default function Options({ activeSortOption, setActiveSortOption, onSearchHandler }) {
  return (
    <OptionsWrapper>
      <Option activeSortOption={activeSortOption} setActiveSortOption={setActiveSortOption}>Sort</Option>
      <Option>Filters</Option>
      <button onClick={onSearchHandler} className="search active">Search</button>
    </OptionsWrapper>
  );
}
