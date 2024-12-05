import styled from 'styled-components';

const BurgerMenuWrapper = styled.div`
  display: ${({ $show }) =>  $show ? 'block' : 'none'};
  position: absolute;
  top: 60px;
  left: 0;
  height: 100vh;
  width: 100%;
  background: var(--primary-color-burger);
  backdrop-filter: blur(20px);
  padding: var(--padding-medium);

  & ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }

  & .dropdown {

    font-size: var(--font-size-medium);
    font-weight: 300;
    display: none;
    gap: 5px;
  }

  & .parent-list.active > .dropdown {
    font-size: var(--font-size-small);
    font-weight: 400;
    display: flex;
  }

`;

const BurgerNavItemWrapper = styled.ul`
    flex-direction: column;
    list-style-type: none;
    font-size: var(--font-size-medium);
    font-weight: 300;
    display: none;
    gap: 5px;
    margin-bottom: 1rem;
    font-size: var(--font-size-large);
`


const OtherLinksWrapper = styled.ul`
  list-style-type: none;
    color: var(--text-color-muted-light);
  font-weight: 300;
`

const OtherLinksItem = styled.li`
  list-style-type: none;
  list-style-type: none;
  margin-bottom: 0.3rem;
`
export {
  BurgerMenuWrapper,
  BurgerNavItemWrapper,
  OtherLinksWrapper,
  OtherLinksItem
}

