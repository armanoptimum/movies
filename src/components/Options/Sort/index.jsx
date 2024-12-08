import { useState } from 'react';
import { SortActionWrapper, SortyByList, CurrentSortOption, SortHeader } from './styles';
import arrowRight from '@/assets/arrow-right.svg';
import { Drop } from '@/components/Options/Option/styles';
import { DropDownOption, DropDownOptionList } from '@/components/Options/styles';
import { sortOptions } from './data';

export default function Sort({ activeSortOption, setActiveSortOption }) {
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
      <SortyByList onClick={openListHandler}>
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
      </SortyByList>
    </SortActionWrapper>
  );
}
