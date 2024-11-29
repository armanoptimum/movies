import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: auto;
  max-width: 100%;

  & nav {
    display: grid;
    grid-template-columns: auto auto;
    padding: var(--padding-large);
    justify-content: center;
    gap: 50px;
    background-color: var(--primary-color);
    color: var(--text-color-light);
  }

  & nav ul:nth-child(1) {
    text-align: start;
  }

  @media (min-width: 1000px) {
    & nav {
      grid-template-columns: auto auto auto auto auto;
    }

    & nav ul:nth-child(1) {
      text-align: end;
    }
  }
`;

export const FooterNavWrapper = styled.ul`
  list-style-type: none;

  & img {
    width: 7rem;
  }

  & button {
    display: inline-block;
    font-size: var(--font-size-medium);
    font-weight: 600;
    color: var(--secondary-color);
    padding: 0.7rem 1rem;
    border-radius: var(--border-radius);
    border: none;
    margin-top: 1rem;
    background-color: var(--text-color-light);
    cursor: pointer;
  }
`;
