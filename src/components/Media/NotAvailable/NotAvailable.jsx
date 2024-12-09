import { Title } from './styles';
import { Wrapper } from './styles';

export default function NotAvailable({ children }) {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
}
