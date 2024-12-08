import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-small) var(--padding-medium);
  gap: 1.7rem;
`;


export const FilterHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const FilterOptionHeaderName = styled.p`
  font-size: var(--font-size-small);
  color: var(--text-color-muted);
`;