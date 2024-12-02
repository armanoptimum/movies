import styled from 'styled-components';

const BurgerMenuWrapper = styled.div`
  display: ${({ show }) => {
    return show ? 'block' : 'none';
  }};
  position: absolute;
  top: 70px;
  left: 0;
  height: 100vh;
  width: 100%;
  background: var(--primary-color-burger);
  backdrop-filter: blur(20px);
  z-index: 10;
  padding: var(--padding-medium);

  & ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }

  & .parent-list {
    margin-bottom: 0.7rem;
    font-size: var(--font-size-large);
  }

  & .dropdown {
    font-size: var(--font-size-medium);
    font-weight: 300;
    display: none;
  }

  & .parent-list.active > .dropdown {
    font-size: var(--font-size-medium);
    font-weight: 300;
    display: flex;
  }

  & .other {
    color: var(--text-color-muted-light);
    font-weight: 300;
  }

  & .other p {
    margin-bottom: 0.3rem;
  }
`;

export default BurgerMenuWrapper;
