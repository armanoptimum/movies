import styled from 'styled-components';

export const GenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GenreOptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

export const GenreOption = styled.input`
  background-color: ${({ $active }) => ($active ? 'var(--secondary-color)' : 'var(--text-color-light)')};
  border-radius: 3rem;
  color: ${({ $active }) => ($active ? 'var(--text-color-light)' : '')};
  border: 0.01rem solid var(--text-color-muted);
  padding: var(--padding-small-extra-extra) var(--padding-small-extra);

  &:hover {
    color: var(--text-color-light);
    background-color: var(--secondary-color);
    border: 0.01rem solid var(--secondary-color);
    cursor: pointer;
  }
`;
