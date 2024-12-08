import { ShowMeHeader, ShowMeHeaderName, ShowMeHeaderQuestionMark, ShowMeWrapper } from './styles';

export default function ShowMe() {
  return (
    <ShowMeWrapper>
      <ShowMeHeader>
        <ShowMeHeaderName>Show Me</ShowMeHeaderName>
        <ShowMeHeaderQuestionMark />
      </ShowMeHeader>
    </ShowMeWrapper>
  );
}
