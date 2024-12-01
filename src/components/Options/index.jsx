import Option from './Option';
import OptionsWrapper from './styles';

export default function Options() {
  return (
    <OptionsWrapper>
      <Option>Sort</Option>
      <Option>Filters</Option>
      <button className="search active">Search</button>
    </OptionsWrapper>
  );
}
