import styled from 'styled-components';

export const HeaderDropDownWrapper = styled.ul`
  display: none;
  gap: 1rem;
  width: 9.3rem;
  position: absolute;
  top: 100%;
  left: 0;
  font-weight: 300;
  background-color: #fff;
  padding: 0.5rem 0;
  list-style-type: none;
  box-shadow: 0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  font-size: var(--font-size-small);
  z-index: 1;

  & a {
    color: #575353;
    padding: 0.2rem 0.5rem;
  }
`;

export const HeaderDropDownItem = styled.li`
  &:hover {
    background-color: var(--text-color-muted-light);
  }
`;

export const HeaderNavItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  cursor: pointer;

  &:hover ${HeaderDropDownWrapper} {
    display: block;
  }
`;

export const HeaderNavItemLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;
