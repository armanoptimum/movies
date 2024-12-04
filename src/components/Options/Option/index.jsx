import { Wrapper, Header, Name, Drop, Divider, Action, List, Current, ListOptions, OptionItem } from './styles';
import arrowRight from '../../../assets/arrow-right.svg';
import { useState } from 'react';
import options from './data';

export default function Option({ children, activeSortOption, setActiveSortOption }) {
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);

  const openHeaderHandler = () => {
    setIsOpenHeader((prev) => !prev);
  };

  const openListHandler = () => {
    setIsOpenList((prev) => !prev);
  };

  const listOptionClickHandler = (event) => {
    setActiveSortOption(event.target.innerText);
  };

  return (
    <Wrapper>
      <Header onClick={children === 'Sort' ? openHeaderHandler : null}>
        <Name>{children}</Name>
        <Drop $active={isOpenHeader}>
          <img src={arrowRight} alt="options" />
        </Drop>
      </Header>
      <Divider $active={isOpenHeader} />
      <Action $active={isOpenHeader}>
        <h5>{children} Results By</h5>
        <List onClick={openListHandler}>
          <Current>
            <p>{activeSortOption}</p>
            <Drop>
              <img src={arrowRight} alt="options" />
            </Drop>
          </Current>
          <ListOptions $active={isOpenList}>
            {children === 'Sort' &&
              options.map((option, id) => (
                <OptionItem key={id} $active={activeSortOption === option} onClick={listOptionClickHandler}>
                  {option}
                </OptionItem>
              ))}
          </ListOptions>
        </List>
      </Action>
    </Wrapper>
  );
}
