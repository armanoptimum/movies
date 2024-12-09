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
import { useContext } from 'react';
import { MediaContex } from '@/components/Media/moviePrivider';

export default function RealeaseDate() {
  const { setFromDate, setToDate } = useContext(MediaContex);

  const onSetFromDate = (event) => {
    setFromDate(event.target.value)
  }

  const onSetToDate = (event) => {
    setToDate(event.target.value)
  }

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
            <Date onChange={onSetFromDate} id="from" />
          </DateWrapper>
          <DateWrapper>
            <DateLabel htmlFor="to">to</DateLabel>
            <Date onChange={onSetToDate} id="to" />
          </DateWrapper>
        </Dates>
        
      </RadioCheckboxGroup>
    </RealeaseDataWrapper>
  );
}
