import { useContext, useState } from 'react';
import { SortActionWrapper, CurrentSortOption, SortHeader } from './styles';
import arrowRight from '@/assets/arrow-right.svg';
import { Drop } from '@/components/Options/Option/styles';
import { DropDownOption, DropDownOptionList, FilterSortByList } from '@/components/Options/styles';
import { sortOptions } from './data';
import { MediaContex } from '@/components/Media/moviePrivider';

export default function Sort() {
  const { activeSortOption, setActiveSortOption } = useContext(MediaContex);
  const [isOpenList, setIsOpenList] = useState(false);

  const openListHandler = () => {
    setIsOpenList((prev) => !prev);
  };

  const listOptionClickHandler = (event) => {
    setActiveSortOption(event.target.innerText);
  };

  return (
    <SortActionWrapper>
      <SortHeader>Sort Results By</SortHeader>
      <FilterSortByList onClick={openListHandler}>
        <CurrentSortOption>
          <p>{activeSortOption}</p>
          <Drop $active>
            <img src={arrowRight} alt="options" />
          </Drop>
        </CurrentSortOption>
        <DropDownOptionList $active={isOpenList}>
          {sortOptions.map((option, id) => (
            <DropDownOption key={id} $active={activeSortOption === option} onClick={listOptionClickHandler}>
              {option}
            </DropDownOption>
          ))}
        </DropDownOptionList>
      </FilterSortByList>
    </SortActionWrapper>
  );
}
