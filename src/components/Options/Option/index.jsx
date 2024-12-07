import { OptionWrapper, OptionHeader, OptionName, Drop, Divider } from './styles';
import { useState } from 'react';
import arrowRight from '@/assets/arrow-right.svg';
import Sort from '../Sort';

export default function Option({ name, activeSortOption, setActiveSortOption, children }) {
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  const openHeaderHandler = () => {
    setIsOpenHeader((prev) => !prev);
  };

  return (
    <OptionWrapper>
      <OptionHeader onClick={openHeaderHandler}>
        <OptionName>{name}</OptionName>
        <Drop $active={isOpenHeader}>
          <img src={arrowRight} alt="options" />
        </Drop>
      </OptionHeader>
      <Divider $active={isOpenHeader} />
      <Sort activeSortOption={activeSortOption} setActiveSortOption={setActiveSortOption} isOpenHeader={isOpenHeader} />
    </OptionWrapper>
  );
}
