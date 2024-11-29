import styled from 'styled-components';

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  & button {
    grid-column: 1 / -1;
    padding: var(--padding-medium);
    background-color: var(--secondary-color);
    color: var(--text-color-light);
    border: none;
    cursor: pointer;
    font-size: var(--font-size-large);
    font-weight: bold;
    border-radius: var(--border-radius);
    text-align: center;
    transition: background-color var(--transition);
  }

  button:hover {
    opacity: 0.8;
  }

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default CardsWrapper;
