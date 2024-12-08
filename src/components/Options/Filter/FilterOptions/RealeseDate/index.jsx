import {
  FilterOptionHeaderName,
  FilterHeaderWrapper,
  RadioCheckboxGroup,
  Checkbox,
  Label,
  RadioCheckboxOption,
} from '../../styles';
import { RealeaseDataWrapper } from './styles';

export default function RealeaseDate() {
  return (
    <RealeaseDataWrapper>
      <FilterHeaderWrapper>
        <FilterOptionHeaderName>Realease Dates</FilterOptionHeaderName>
      </FilterHeaderWrapper>

      <RadioCheckboxGroup>
        <RadioCheckboxOption>
          <Checkbox type="checkbox" id="all-realeses" name="all-realeses" value="all-realeses" />
          <Label htmlFor="all-realeses">Search All Realeses?</Label>
        </RadioCheckboxOption>
      </RadioCheckboxGroup>
    </RealeaseDataWrapper>
  );
}
