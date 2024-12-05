import styled from 'styled-components';

const BurgerMenuWrapper = styled.div`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  left: 0;
  height: 100vh;
  width: 100%;
  background: var(--primary-color-burger);
  backdrop-filter: blur(20px);
  padding: var(--padding-medium);
`;

const BurgerMenuDropDownWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-extra-small);
  margin-bottom: 1rem;
`;

const OtherLinksWrapper = styled.ul`
  list-style-type: none;
  color: var(--text-color-muted-medium);

  & li:last-child {
    margin-top: 1rem;
  }
`;

const OtherLinksItem = styled.li`
  list-style-type: none;
  list-style-type: none;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;
export { BurgerMenuWrapper, OtherLinksWrapper, OtherLinksItem, BurgerMenuDropDownWrapper };
