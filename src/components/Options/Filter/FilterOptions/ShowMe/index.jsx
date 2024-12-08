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
        <RadioCheckboxOption>
          <Radio id="everything" type="radio" name="movies" value="everything" defaultChecked />
          <Label htmlFor="everything">Everything</Label>
        </RadioCheckboxOption>
        <RadioCheckboxOption>
          <Radio id="havent-seen" type="radio" name="movies" />
          <Label htmlFor="havent-seen">Movies I Havent Seen</Label>
        </RadioCheckboxOption>
        <RadioCheckboxOption>
          <Radio id="seen" type="radio" name="movies" />
          <Label htmlFor="seen">Movies I Have Seen</Label>
        </RadioCheckboxOption>
      </RadioCheckboxGroup>
    </ShowMeWrapper>
  );
}
