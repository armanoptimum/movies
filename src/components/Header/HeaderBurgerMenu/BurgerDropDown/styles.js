import styled from 'styled-components';

const BurgerDropDownWrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const BurgerDropDownName = styled.h3`
  font-size: var(--font-size-medium);
  margin-bottom: 0.3rem;
`;

const BurgerDropDownLinkWrapper = styled.div`
  display: ${({ $isActiveDropDown }) => ($isActiveDropDown ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.5rem;
`;

const BurgerDropDownLink = styled.a`
  font-weight: 300;
  font-size: var(--font-size-small);
`;
export { BurgerDropDownWrapper, BurgerDropDownName, BurgerDropDownLinkWrapper, BurgerDropDownLink };
