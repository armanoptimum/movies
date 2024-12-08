import { QuestionMark, ShowMeWrapper } from './styles';
import {
  FilterOptionHeaderName,
  FilterHeaderWrapper,
  RadioCheckboxGroup,
  RadioCheckboxOption,
  Radio,
  Label,
} from '../../styles';

export default function ShowMe() {
  return (
    <ShowMeWrapper>
      <FilterHeaderWrapper>
        <FilterOptionHeaderName>Show Me</FilterOptionHeaderName>
        <QuestionMark />
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
