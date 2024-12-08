import { useContext, useState } from 'react';
import { Drop } from '@/components/Options/Option/styles';
import { LanguageWrapper, CurrentFilterOption } from './styles';
import { QuestionMark, FilterOptionHeaderName, FilterHeaderWrapper } from '@/components/Options/Filter/styles';
import arrowRight from '@/assets/arrow-right.svg';
import { DropDownOption, DropDownOptionList, FilterSortByList } from '@/components/Options/styles';
import { languageOptions } from './data';
import { MediaContex } from '@/components/Media/moviePrivider';

export default function Language() {
  const { activeLanguageOption, setActiveLanguageOption } = useContext(MediaContex);
  const [isOpenList, setIsOpenList] = useState(false);

  const openListHandler = () => {
    setIsOpenList((prev) => !prev);
  };

  const listOptionClickHandler = (event) => {
    setActiveLanguageOption(event.target.innerText);
  };

  return (
    <LanguageWrapper>
      <FilterHeaderWrapper>
        <FilterOptionHeaderName>Language</FilterOptionHeaderName>
        <QuestionMark data-tooltip="Filter items based on their original language." />
      </FilterHeaderWrapper>

      <FilterSortByList onClick={openListHandler}>
        <CurrentFilterOption>
          <p>{activeLanguageOption}</p>
          <Drop $active>
            <img src={arrowRight} alt="options" />
          </Drop>
        </CurrentFilterOption>

        <DropDownOptionList $active={isOpenList}>
          {languageOptions.map((option, id) => (
            <DropDownOption key={id} $active={activeLanguageOption === option} onClick={listOptionClickHandler}>
              {option}
            </DropDownOption>
          ))}
        </DropDownOptionList>
      </FilterSortByList>
    </LanguageWrapper>
  );
}
