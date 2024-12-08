import RealeaseDate from './FilterOptions/RealeseDate';
import ShowMe from './FilterOptions/ShowMe';
import { FilterWrapper } from './styles';

export default function Filter() {
  return (
    <FilterWrapper>
      <ShowMe />
      <RealeaseDate />
    </FilterWrapper>
  );
}
