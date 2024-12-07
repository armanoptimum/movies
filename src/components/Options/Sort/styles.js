import styled from 'styled-components';

export const SortActionWrapper = styled.div`
  z-index: 2;
  padding: var(--padding-small) var(--padding-medium);
  font-size: var(--font-size-medium);
  display: ${({ $active }) => ($active ? 'block' : 'none')};
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

export const SortOptionList = styled.div`
  display: ${({ $active }) => ($active ? 'block' : 'none')};
  background-color: #fff;
  width: 100%;
  position: absolute;
  top: 2.8rem;
  left: 0rem;
  border: 0.06rem solid var(--text-color-muted-light);
  border-radius: 0.5rem;
  padding: var(--padding-small) 0;
  box-shadow: var(--box-shadow);
`;

export const SortOption = styled.p`
  padding: var(--padding-small-extra);
  font-size: var(--font-size-small-plus);
  background-color: ${({ $active }) => ($active ? 'var(--secondary-color)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--text-color-light)' : 'var(--primary)')};
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? 'var(--primary-color)' : 'var(--text-color-muted-light)')};
  }
`;

export const SortHeader = styled.h5`
  margin-bottom: 1rem;
  color: var(--text-color-muted);
`;
