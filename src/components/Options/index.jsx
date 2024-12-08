import Option from './Option';
import { Wrapper, SearchButton } from './styles';
import Sort from './Sort';
import Filter from './Filter';

export default function Options({ onSearchHandler }) {
  return (
    <Wrapper>
      <Option name="Sort">
        <Sort />
      </Option>
      <Option name="Filters">
        <Filter />
      </Option>
      <SearchButton onClick={onSearchHandler} $active>
        Search
      </SearchButton>
    </Wrapper>
  );
}
