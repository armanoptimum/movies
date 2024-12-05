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
  top: ${({ $sticky }) => ($sticky ? '0' : '-100px')};
  z-index: 100;

  @media (min-width: 1000px) {
    padding: var(--padding-small) var(--padding-large);
  }
`;

export const HeaderNavWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  gap: 1.3rem;

  &:nth-of-type(3) li:nth-child(2) a {
    border: 1px solid #fff;
    border-radius: 3px;
    padding: 0.1rem 0.2rem;
  }

  &:nth-of-type(1) li:nth-child(1),
  &:nth-of-type(1) li:nth-child(3),
  &:nth-of-type(1) li:nth-child(4),
  &:nth-of-type(1) li:nth-child(5),
  &:nth-of-type(1) li:nth-child(6) {
    display: none;
  }

  &:nth-of-type(3) li:nth-child(1),
  &:nth-of-type(3) li:nth-child(2),
  &:nth-of-type(3) li:nth-child(3),
  &:nth-of-type(3) li:nth-child(4) {
    display: none;
  }

  @media (min-width: 1000px) {
    display: flex;
    &:nth-of-type(1) li:nth-child(1),
    &:nth-of-type(1) li:nth-child(3),
    &:nth-of-type(1) li:nth-child(4),
    &:nth-of-type(1) li:nth-child(5),
    &:nth-of-type(1) li:nth-child(6),
    &:nth-of-type(3) li:nth-child(1),
    &:nth-of-type(3) li:nth-child(2),
    &:nth-of-type(3) li:nth-child(3),
    &:nth-of-type(3) li:nth-child(4) {
      display: flex;
    }

    &:nth-of-type(1) li:nth-child(2),
    &:nth-of-type(3) li:nth-child(5),
    &:nth-of-type(2) li:nth-child(1) {
      display: none;
    }
  }
`;
