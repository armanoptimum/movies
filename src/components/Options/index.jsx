import { useContext } from 'react';
import Option from './Option';
import { Wrapper, SearchButton } from './styles';
import { MediaContex } from '@/components/Media/moviePrivider';
import Sort from './Sort';
import Filter from './Filter';

export default function Options({ onSearchHandler }) {
  const { activeSortOption, setActiveSortOption } = useContext(MediaContex);
  return (
    <Wrapper>
      <Option name="Sort">
        <Sort activeSortOption={activeSortOption} setActiveSortOption={setActiveSortOption} />
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
