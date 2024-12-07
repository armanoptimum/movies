import { useContext } from 'react';
import Option from './Option';
import { Wrapper, SearchButton } from './styles';
import { MediaContex } from '@/components/Media/moviePrivider';

export default function Options({ onSearchHandler }) {
  const { activeSortOption, setActiveSortOption } = useContext(MediaContex);

  return (
    <Wrapper>
      <Option name='Sort' activeSortOption={activeSortOption} setActiveSortOption={setActiveSortOption} />
      <Option name='Filters' />
      <SearchButton onClick={onSearchHandler} $active>
        Search
      </SearchButton>
    </Wrapper>
  );
}
