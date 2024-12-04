import styled from 'styled-components';

const Wrapper = styled.main`
  padding: var(--padding-medium);
  background-color: #fff;

  @media (min-width: 890px) {
    padding: var(--padding-medium) var(--padding-large);
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-large);
  padding: var(--padding-small) 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 890px) {
    flex-direction: row;
  }
`;

export { Wrapper, Title, Content };
