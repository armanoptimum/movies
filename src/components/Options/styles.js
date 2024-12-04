import styled from 'styled-components';

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 9rem;
  gap: 2rem;

  & .search {
    display: block;
    width: 100%;
    border: none;
    border-radius: 50px;
    padding: var(--padding-small) var(--padding-medium);
    font-size: var(--font-size-small-plus);
    color: var(--text-color-muted);
    font-weight: 600;
    cursor: pointer;
  }

  & .search.active {
    color: #fff;
    background-color: var(--secondary-color);
  }

  & .search.active:hover {
    background-color: var(--primary-color);
  }

  @media (min-width: 460px) {
    min-width: 16rem;
  }
`;
export default OptionsWrapper;
