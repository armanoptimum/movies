import styled from 'styled-components';

export const GenreWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GenreOptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const GenreOption = styled.input`
  border-radius: 3rem;
  border: 0.01rem solid var(--text-color-muted);
  padding: var(--padding-small-extra-extra) var(--padding-small-extra);

  &:hover {
    color: var(--text-color-light);
    background-color: var(--secondary-color);
    border: 0.01rem solid var(--secondary-color);
    cursor: pointer;
  }
`;
