import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display: grid;
    grid-template-columns: auto;
    margin-top: auto;
    max-width: 100%;
    padding: var(--padding-small);
    justify-content: start;
    gap: 50px;
    background-color: var(--primary-color);
   
    @media (min-width: 1030px) {
      grid-template-columns: auto auto auto auto auto;
      padding: var(--padding-large);
      justify-content: center;
    }
  }
`;
