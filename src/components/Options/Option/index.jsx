import OptionWrapper from './styles';
import arrowRight from '../../../assets/arrow-right.svg';
import { useState } from 'react';
import options from './utils';

export default function Option({ children }) {
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);
  const [activeOption, setActiveOption] = useState(options[0]);

  function openHeaderHandler() {
    setIsOpenHeader((prev) => !prev);
  }

  function openListHandler() {
    setIsOpenList((prev) => !prev);
  }

  function listOptionClickHandler(event) {
    setActiveOption(event.target.innerText);
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
            <p className="active">{activeOption}</p>
            <span className="drop list-drop">
              <img src={arrowRight} alt="options" />
            </span>
            <div onClick={listOptionClickHandler} className={isOpenList ? 'list-options active' : 'list-options'}>
              {children === 'Sort' &&
                options.map((option, id) => (
                  <p className={activeOption === option ? 'active' : ''} onClick={listOptionClickHandler} key={id}>
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
