import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 9rem;
  gap: 2rem;

  @media (min-width: 460px) {
    min-width: 16rem;
  }
`;

const SearchButton = styled.button`
  display: block;
  width: 100%;
  border: none;
  border-radius: 50px;
  padding: var(--padding-small) var(--padding-medium);
  font-size: var(--font-size-small-plus);
  font-weight: 600;
  cursor: pointer;
  color: ${({ $active }) => ($active ? '#fff' : 'var(--text-color-muted)')};
  background-color: ${({ $active }) => ($active ? 'var(--secondary-color)' : 'transparent')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? 'var(--primary-color)' : 'var(--text-color-muted-light)')};
  }
`;

export {
  Wrapper,
  SearchButton
}