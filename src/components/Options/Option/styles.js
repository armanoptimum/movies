import styled from 'styled-components';

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  & .action h5 {
    font-weight: 300;
    margin-bottom: 1rem;
  }

  #list {
    padding: var(--padding-small-extra) var(--padding-small);
    background-color: var(--text-color-muted-light);
    font-size: var(--font-size-small);
    border-radius: 5px;
  }

  #list p {
    display: none;
  }

  #list .active {
    display: block;
  }

  & .drop {
    display: flex;
    align-items: center;
  }

  & .current {
    display: flex;
    justify-content: space-between;
  }
`;

export default OptionWrapper;
