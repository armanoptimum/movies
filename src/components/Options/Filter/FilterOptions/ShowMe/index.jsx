import {
  QuestionMark,
  ShowMeWrapper,
  RadioGroup,
  RadioOption,
  RadioInput,
  RadioLabel,
} from './styles';
import { FilterOptionHeaderName, FilterHeaderWrapper } from '../../styles';

export default function ShowMe() {
  return (
    <ShowMeWrapper>
      <FilterHeaderWrapper>
        <FilterOptionHeaderName>Show Me</FilterOptionHeaderName>
        <QuestionMark />
      </FilterHeaderWrapper>

      <RadioGroup>
        <RadioOption>
          <RadioInput id="everything" type="radio" name="movies" value="everything" defaultChecked />
          <RadioLabel htmlFor="everything">Everything</RadioLabel>
        </RadioOption>
        <RadioOption>
          <RadioInput id="havent-seen" type="radio" name="movies" />
          <RadioLabel htmlFor="havent-seen">Movies I Havent Seen</RadioLabel>
        </RadioOption>
        <RadioOption>
          <RadioInput id="seen" type="radio" name="movies" />
          <RadioLabel htmlFor="seen">Movies I Have Seen</RadioLabel>
        </RadioOption>
      </RadioGroup>
    </ShowMeWrapper>
  );
}
