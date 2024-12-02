import styled from 'styled-components';

export const PopularMoviesWrapper = styled.main`
  padding: var(--padding-large-extra);
  background-color: #fff;

  & > h2 {
    font-size: var(--font-size-large);
    padding: var(--padding-large) 0;
  }

  & .content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 890px) {
    & .content {
      flex-direction: row;
    }
  }
`;
