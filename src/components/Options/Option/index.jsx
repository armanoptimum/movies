import OptionWrapper from './styles';
import arrowRight from '../../../assets/arrow-right.svg';

export default function Option({ children }) {
  return (
    <OptionWrapper>
      <div className="header">
        <h2 className="name">{children}</h2>
        <span className="drop">
          <img src={arrowRight} alt="options" />
        </span>
      </div>
      <hr />
      <div className="action">
        <h5>Sort Results By</h5>
        <div name="list" id="list">
          <div className="current">
            <p className="active">Popularity Descending</p>
            <p>Popularity Ascending</p>
            <p>Rating Descending</p>
            <p>Rating Ascending</p>
            <p>Release Date Descending</p>
            <p>Release Date Ascending</p>
            <span className="drop">
              <img src={arrowRight} alt="options" />
            </span>
          </div>
        </div>
      </div>
    </OptionWrapper>
  );
}
