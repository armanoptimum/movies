import { OptionWrapper, OptionHeader, OptionName, Drop, Divider } from './styles';
import { useState } from 'react';
import arrowRight from '@/assets/arrow-right.svg';
import Sort from '../Sort';

export default function Option({ children, activeSortOption, setActiveSortOption }) {
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  const openHeaderHandler = () => {
    setIsOpenHeader((prev) => !prev);
  };

  return (
    <OptionWrapper>
      {/* type */}
      <OptionHeader onClick={openHeaderHandler}>
        <OptionName>{children}</OptionName>
        <Drop $active={isOpenHeader}>
          <img src={arrowRight} alt="options" />
        </Drop>
      </OptionHeader>
      {/* type */}
      <Divider $active={isOpenHeader} />
      <Sort activeSortOption={activeSortOption} setActiveSortOption={setActiveSortOption} isOpenHeader={isOpenHeader} />
    </OptionWrapper>
  );
}
