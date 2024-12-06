import styled from 'styled-components';

export const CardActionsWrapper = styled.div`
  position: absolute;
  display: ${({ $active }) => ($active ? 'display' : 'none')};
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  z-index: 10;
`;

export const CardActionsList = styled.ul`
  width: 90%;
  background-color: white;
  list-style-type: none;
  position: absolute;
  top: 2rem;
  right: 5%;
  font-size: var(--font-size-small);
  color: var(--text-color-muted);
  text-align: center;
  border-radius: 0.4rem;
  overflow: hidden;
`;
