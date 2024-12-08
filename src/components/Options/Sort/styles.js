import styled from 'styled-components';

export const SortActionWrapper = styled.div`
  z-index: 2;
  padding: var(--padding-small) var(--padding-medium);
  font-size: var(--font-size-medium);
`;

export const SortyByList = styled.div`
  padding: var(--padding-small-extra) var(--padding-small);
  background-color: var(--text-color-muted-light);
  font-size: var(--font-size-small);
  border-radius: 0.3rem;
  position: relative;
`;

export const CurrentSortOption = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SortHeader = styled.h5`
  margin-bottom: 1rem;
  color: var(--text-color-muted);
`;
