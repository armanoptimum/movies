import styled from "styled-components";

const CardActionsWrapper = styled.div`
    ${({ $active }) => {
        return $active
          ? `
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              backdrop-filter: blur(20px);
              z-index: 10;
          `
          : `
              display: none;
          `;
    }}
`

const CardActionsList = styled.ul`
    width: 90%;
    background-color: white;
    list-style-type: none;
    position: absolute;
    top: 2rem;
    right: 5%;
    font-size: var(--font-size-small);
    color: var(--text-color-muted);
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
`
export {
    CardActionsList,
    CardActionsWrapper,
}
