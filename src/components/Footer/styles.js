import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(1, auto);
  margin-top: auto;
  max-width: 100%;
  padding: var(--padding-small);
  justify-content: start;
  gap: 3.1rem;
  background-color: var(--primary-color);

  @media (min-width: 64rem) {
    grid-template-columns: repeat(5, auto);
    padding: var(--padding-large);
    justify-content: center;
  }
`;

export const FooterNavWrapper = styled.ul`
  list-style-type: none;
  position: relative;
`;
