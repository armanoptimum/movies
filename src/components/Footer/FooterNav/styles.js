import styled from 'styled-components';

export const FooterNavWrapper = styled.ul`
  list-style-type: none;
  position: relative;

  & img {
    width: 7rem;
  }

    & button {
      display: inline-block;
      font-size: var(--font-size-medium);
      font-weight: 600;
      color: var(--secondary-color);
      padding: 0.7rem 1rem;
      border-radius: var(--border-radius);
      border: none;
      margin-top: 1rem;
      background-color: var(--text-color-light);
      cursor: pointer;
    }
  }
`;
