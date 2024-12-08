import { FilterOptionHeaderName, FilterHeaderWrapper } from '@/components/Options/Filter/styles';
import { KeywordInput, KeywordsnWrapper } from './styles';

export default function Keywords() {
  return (
    <KeywordsnWrapper>
      <FilterHeaderWrapper>
        <FilterOptionHeaderName>Keywords</FilterOptionHeaderName>
      </FilterHeaderWrapper>
      <KeywordInput type="input" placeholder="Filter by keywords..." />
    </KeywordsnWrapper>
  );
}
