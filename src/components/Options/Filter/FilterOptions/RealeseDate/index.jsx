import {
  FilterOptionHeaderName,
  FilterHeaderWrapper,
  RadioCheckboxGroup,
  Checkbox,
  Label,
  RadioCheckboxOption,
  Date,
} from '@/components/Options/Filter/styles';
import { RealeaseDataWrapper, DateWrapper, DateLabel, Dates } from './styles';

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

        <Dates>
          <DateWrapper>
            <DateLabel htmlFor="from">from</DateLabel>
            <Date id="from" />
          </DateWrapper>
          <DateWrapper>
            <DateLabel htmlFor="to">to</DateLabel>
            <Date id="to" />
          </DateWrapper>
        </Dates>
      </RadioCheckboxGroup>
    </RealeaseDataWrapper>
  );
}
