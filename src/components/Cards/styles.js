import styled from 'styled-components';

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 0;
  margin-top: 3rem;
  gap: 2rem;
  width: 100%;

  #load-more {
    grid-column: 1 / -1;
    padding: var(--padding-small);
    background-color: var(--secondary-color);
    color: var(--text-color-light);
    border: none;
    font-size: var(--font-size-large);
    font-weight: bold;
    border-radius: var(--border-radius);
    text-align: center;
    transition: background-color var(--transition);
  }

  #load-more span:hover {
    cursor: pointer;
    color: var(--primary-color);
  }

  @media (min-width: 890px) {
    grid-template-columns: 1fr 1fr;
    padding-left: var(--padding-medium);
    margin-top: 0;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default CardsWrapper;
