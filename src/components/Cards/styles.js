import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-left: 0;
  margin-top: 3rem;
  gap: 2rem;
  width: 100%;
  height: 100%;

  @media (min-width: 56rem) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: var(--padding-medium);
    margin-top: 0;
  }

  @media (min-width: 68rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 75rem) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const LoadMoreButton = styled.button`
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
`;

export const LoadMoreText = styled.span`
  &:hover {
    cursor: pointer;
    color: var(--primary-color);
  }
`;
