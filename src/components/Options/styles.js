import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 19rem;
  gap: 2rem;
`;

export const SearchButton = styled.button`
  display: block;
  width: 100%;
  border: none;
  border-radius: 3rem;
  padding: var(--padding-small) var(--padding-medium);
  font-size: var(--font-size-medium);
  font-weight: 600;
  cursor: pointer;
  color: ${({ $active }) => ($active ? '#fff' : 'var(--text-color-muted)')};
  background-color: ${({ $active }) => ($active ? 'var(--secondary-color)' : 'transparent')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? 'var(--primary-color)' : 'var(--text-color-muted-light)')};
  }
`;
