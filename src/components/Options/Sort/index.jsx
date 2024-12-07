import { useState } from 'react';
import { SortActionWrapper, SortyByList, CurrentSortOption, SortOptionList, SortOption, SortHeader } from './styles';
import arrowRight from '@/assets/arrow-right.svg';
import { Drop } from '../Option/styles';
import { options } from './utility';

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
        <SortOptionList $active={isOpenList}>
          {options.map((option, id) => (
            <SortOption key={id} $active={activeSortOption === option} onClick={listOptionClickHandler}>
              {option}
            </SortOption>
          ))}
        </SortOptionList>
      </SortyByList>
    </SortActionWrapper>
  );
}
