import { showMeOptions } from './data';
import { ShowMeWrapper } from './styles';
import {
  QuestionMark,
  FilterOptionHeaderName,
  FilterHeaderWrapper,
  RadioCheckboxGroup,
  RadioCheckboxOption,
  Radio,
  Label,
} from '@/components/Options/Filter/styles';

export default function ShowMe() {
  return (
    <ShowMeWrapper>
      <FilterHeaderWrapper>
        <FilterOptionHeaderName>Show Me</FilterOptionHeaderName>
        <QuestionMark data-tooltip="Log in to filter items you've watched." />
      </FilterHeaderWrapper>

      <RadioCheckboxGroup>
        {showMeOptions.map(({ id, value, label, defaultChecked }) => (
          <RadioCheckboxOption key={id}>
            <Radio id={id} type="radio" name="show-me" value={value} defaultChecked={defaultChecked} />
            <Label htmlFor={id}>{label}</Label>
          </RadioCheckboxOption>
        ))}
      </RadioCheckboxGroup>
    </ShowMeWrapper>
  );
}
