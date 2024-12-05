import styled from 'styled-components';

export const BurgerDropDownWrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

export const BurgerDropDownName = styled.h3`
  font-size: var(--font-size-medium);
  margin-bottom: 0.2rem;
`;

export const BurgerDropDownLinkWrapper = styled.div`
  display: ${({ $isActiveDropDown }) => ($isActiveDropDown ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const BurgerDropDownLink = styled.a`
  font-weight: 300;
  font-size: var(--font-size-small);
`;
