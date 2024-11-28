import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #042541;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  padding: 1.5rem;
  white-space: nowrap;
`;

export const NavWrapper = styled.ul`
  display: none;
  align-items: center;
  list-style-type: none;
  gap: 1.7rem;
  li {
    display: flex;
    align-items: center;
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
    background-color: #fff;
    padding: 0.5rem 0;
    list-style-type: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    z-index: 1;
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
  }
`;
