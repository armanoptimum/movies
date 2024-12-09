import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  font-weight: 600;
  font-size: var(--font-size-small);
  color: var(--text-color-light);
  padding: var(--padding-small-extra);
  white-space: nowrap;
  transition: top 0.5s ease;
  position: sticky;
  top: ${({ $sticky }) => ($sticky ? '0' : '-6.25rem')};
  z-index: 100;

  @media (min-width: 62rem) {
    padding: var(--padding-medium) var(--padding-large);
  }
`;

export const HeaderNavWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  gap: 1.3rem;

  &:nth-of-type(3) li:nth-child(2) a {
    border: 0.07rem solid #fff;
    border-radius: 0.2rem;
    padding: 0.1rem 0.2rem;
  }

  &:nth-of-type(1) {
    li:not(:nth-child(2)) {
      display: none;
    }
  }

  &:nth-of-type(3) {
    li:nth-child(-n + 4) {
      display: none;
    }
  }

  @media (min-width: 62.5rem) {
    display: flex;

    &:nth-of-type(1) {
      li:nth-child(-n + 6) {
        display: flex;
      }
    }

    &:nth-of-type(3) {
      li:nth-child(-n + 4) {
        display: flex;
      }
    }

    &:nth-of-type(1) li:nth-child(2),
    &:nth-of-type(2) li:nth-child(1),
    &:nth-of-type(3) li:nth-child(5) {
      display: none;
    }
  }
`;
