import styled from 'styled-components';

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;

  cursor: pointer;
  font-size: var(--font-size-extra-small);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  box-shadow: var(----box-shadow);

  & .header {
    padding: var(--padding-small) var(--padding-medium);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & hr {
    border: 0.3px solid var(--text-color-muted);
    opacity: 0.2;
  }
  & .action {
    padding: var(--padding-small) var(--padding-medium);
    font-size: var(--font-size-medium);
  }

  & .action,
  & hr {
    display: none;
  }

  & .action.active,
  & hr.active {
    display: block;
  }

  & .action h5 {
    font-weight: 300;
    margin-bottom: 1rem;
    color: var(--text-color-muted);
  }

  #list {
    padding: var(--padding-small-extra) var(--padding-small);
    background-color: var(--text-color-muted-light);
    font-size: var(--font-size-small);
    border-radius: 5px;
    position: relative;
  }

  #list .active {
    display: block;
  }

  & .current {
    display: flex;
    justify-content: space-between;
  }

  & .drop {
    display: flex;
    align-items: center;
  }

  & .drop.active,
  & .current .list-drop {
    transform: rotate(90deg);
  }

  & .list-options {
    display: none;
    background-color: #fff;
    width: 100%;
    position: absolute;
    top: 45px;
    left: 0px;
    border: 1px solid var(--text-color-muted-light);
    border-radius: 0.5rem;
    padding: var(--padding-small) 0;
    box-shadow: var(--box-shadow);
  }

  #list.active {
    display: block;
  }

  & .list-options p {
    padding: var(--padding-small-extra);
    font-size: var(--font-size-small-plus);
  }

  & .list-options p:hover {
    padding: var(--padding-small-extra);
    background-color: var(--text-color-muted-light);
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
  }

  & .list-options p.active {
    background-color: var(--secondary-color);
    color: var(--text-color-light);
  }

  & .list-options p.active:hover {
    background-color: var(--primary-color);
    transition:
      background-color 0.3s ease,
      transform 0.3s ease;
  }
`;

export default OptionWrapper;
