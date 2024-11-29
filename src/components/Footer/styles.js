import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: auto;
  max-width: 100%;

  & nav {
    display: grid;
    grid-template-columns: auto auto;
    padding: 3rem;
    justify-content: center;
    gap: 50px;
    background-color: #042541;
    color: #fff;
  }

  & nav ul:nth-child(1) {
    text-align: start;
  }

  @media (min-width: 1000px) {
    & nav {
      grid-template-columns: auto auto auto auto auto;
    }
      
    & nav ul:nth-child(1) {
      text-align: end;
    }
  }
`;

export const FooterNavWrapper = styled.ul`
  list-style-type: none;
    
  & img {
    width: 7rem;
  }

  & button {
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 600;
    color: #05B4E4;
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
    border: none; 
    margin-top: 1rem;  
    background-color: #fff;
    cursor: pointer;
  }
}
`;
