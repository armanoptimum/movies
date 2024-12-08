import Certification from './FilterOptions/Certification';
import Genre from './FilterOptions/Genre';
import Keywords from './FilterOptions/Keywords';
import Language from './FilterOptions/Language';
import RealeaseDate from './FilterOptions/RealeseDate';
import ShowMe from './FilterOptions/ShowMe';
import { FilterWrapper } from './styles';

export default function Filter() {
  return (
    <FilterWrapper>
      <ShowMe />
      <RealeaseDate />
      <Genre />
      <Certification />
      <Language />
      <Keywords />
    </FilterWrapper>
  );
}
