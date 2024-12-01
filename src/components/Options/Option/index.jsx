import OptionWrapper from './styles';
import arrowRight from '../../../assets/arrow-right.svg';

export default function Option({ children }) {
  return (
    <OptionWrapper>
      <h2 className="name">{children}</h2>
      <span className="drop">
        <img src={arrowRight} alt="options" />
      </span>
    </OptionWrapper>
  );
}
