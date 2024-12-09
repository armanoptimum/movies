import { Title } from './styles';
import { Wrapper } from './styles';

export default function NotAvailable({ children = 'Not Found' }) {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
}
