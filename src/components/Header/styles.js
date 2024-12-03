import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  font-weight: 600;
  font-size: var(--font-size-small-plus);
  color: var(--text-color-light);
  padding: var(--padding-medium);
  white-space: nowrap;
  position: relative;
  top: 0;

  @media (min-width: 1000px) {
    padding: var(--padding-medium) var(--padding-large);
  }

  #logo {
    display: flex;
    align-items: center;
    justify-content: center;
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

  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    cursor: pointer;
  }

  .dropdown {
    display: none;
    gap: 1rem;
    width: 150px;
    position: absolute;
    top: 100%;
    left: 0;
    font-weight: 300;
    background-color: #fff;
    padding: 0.5rem 0;
    list-style-type: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    font-size: var(--font-size-small);
    z-index: 1;
  }

  .dropdown a {
    color: #575353;
    padding: 0.2rem 0.5rem;
  }

  li:hover .dropdown,
  .dropdown:hover {
    display: block;
  }

  .dropdown li:hover {
    background-color: #ebebeb;
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
