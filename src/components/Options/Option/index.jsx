import OptionWrapper from './styles';
import arrowRight from '../../../assets/arrow-right.svg';
import { useState } from 'react';
import options from './utils';

export default function Option({ children, activeSortOption, setActiveSortOption }) {
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);
  

  function openHeaderHandler() {
    setIsOpenHeader((prev) => !prev);
  }

  function openListHandler() {
    setIsOpenList((prev) => !prev);
  }

  function listOptionClickHandler(event) {
    setActiveSortOption(event.target.innerText);
  }

  return (
    <OptionWrapper>
      <div onClick={children === 'Sort' ? openHeaderHandler : null} className="header">
        <h2 className="name">{children}</h2>
        <span className={isOpenHeader ? 'drop active' : 'drop'}>
          <img src={arrowRight} alt="options" />
        </span>
      </div>
      <hr className={isOpenHeader ? 'active' : ''} />
      <div className={isOpenHeader ? 'active action' : 'action'}>
        <h5>{children} Results By</h5>
        <div onClick={openListHandler} id="list">
          <div className="current">
            <p className="active">{activeSortOption}</p>
            <span className="drop list-drop">
              <img src={arrowRight} alt="options" />
            </span>
            <div onClick={listOptionClickHandler} className={isOpenList ? 'list-options active' : 'list-options'}>
              {children === 'Sort' &&
                options.map((option, id) => (
                  <p className={activeSortOption === option ? 'active' : ''} onClick={listOptionClickHandler} key={id}>
                    {option}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </OptionWrapper>
  );
}
