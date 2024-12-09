import styled from 'styled-components';

export const KeywordsnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const KeywordInput = styled.input`
  padding: var(--padding-small-extra);
  border: 0.01rem solid var(--text-color-muted-medium);
  border-radius: 0.3rem;

  &::placeholder {
    color: var(--text-color-dark);
  }

  &:focus {
    outline: none;
    border: 0.01rem solid var(--secondary-color);
  }
`;
