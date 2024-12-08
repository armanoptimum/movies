import { ShowMeHeader, ShowMeHeaderName, ShowMeHeaderQuestionMark, ShowMeWrapper, RadioGroup, RadioOption, RadioInput, RadioLabel } from './styles';

export default function ShowMe() {
  return (
    <ShowMeWrapper>
      <ShowMeHeader>
        <ShowMeHeaderName>Show Me</ShowMeHeaderName>
        <ShowMeHeaderQuestionMark />
      </ShowMeHeader>

      <RadioGroup>
        <RadioOption>
          <RadioInput type="radio" name="movies" value="everything" defaultChecked />
          <RadioLabel>Everything</RadioLabel>
        </RadioOption>
        <RadioOption>
          <RadioInput type="radio" name="movies" value="not-seen" />
          <RadioLabel>Movies I Havent Seen</RadioLabel>
        </RadioOption>
        <RadioOption>
          <RadioInput type="radio" name="movies" value="seen" />
          <RadioLabel>Movies I Have Seen</RadioLabel>
        </RadioOption>
      </RadioGroup>

    </ShowMeWrapper>
  );
}
