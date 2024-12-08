import { LanguageWrapper } from './styles';
import { QuestionMark, FilterOptionHeaderName, FilterHeaderWrapper } from '@/components/Options/Filter/styles';

export default function Language() {
  return (
    <LanguageWrapper>
      <FilterHeaderWrapper>
        <FilterOptionHeaderName>Language</FilterOptionHeaderName>
        <QuestionMark data-tooltip="Filter items based on their original language." />
      </FilterHeaderWrapper>
    </LanguageWrapper>
  );
}
