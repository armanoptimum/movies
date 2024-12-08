import { useState } from 'react';
import { OptionWrapper, OptionHeader, OptionName, Drop, Divider } from './styles';
import arrowRight from '@/assets/arrow-right.svg';

export default function Option({ children, name }) {
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
      {isOpenHeader && children}
    </OptionWrapper>
  );
}
