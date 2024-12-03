import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    margin-top: auto;
    max-width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    padding: var(--padding-large);
    justify-content: center;
    gap: 50px;
    background-color: var(--primary-color);
    color: var(--text-color-light);
    
    @media (min-width: 1000px) {
      grid-template-columns: auto auto auto auto auto;
    }
  }
`;
