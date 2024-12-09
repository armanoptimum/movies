import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: var(--padding-medium);
  background-color: #fff;
 
  @media (min-width: 56rem) {
    padding: var(--padding-medium) var(--padding-large);
  }
`;

export const Title = styled.h2`
  font-size: var(--font-size-large);
  padding: var(--padding-small) 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 56rem) {
    flex-direction: row;
  }
`;
