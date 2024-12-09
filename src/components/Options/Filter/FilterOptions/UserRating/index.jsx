import {
  FilterOptionHeaderName,
  FilterHeaderWrapper,
} from '@/components/Options/Filter/styles';
import { UserRatingaWrapper } from './styles';

export default function UserRating() {
  return (
    <UserRatingaWrapper>
      <FilterHeaderWrapper>
        <FilterOptionHeaderName>User Rating</FilterOptionHeaderName>
      </FilterHeaderWrapper>    
    </UserRatingaWrapper>

  );
}
