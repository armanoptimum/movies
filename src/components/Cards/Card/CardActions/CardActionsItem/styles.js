import styled from 'styled-components';

const CardActionsItemWrapper = styled.li`
    padding: var(--padding-small-extra);
    border-bottom: 0.01rem solid var(--text-color-muted);
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    &:hover {
    background-color: var(--primary-color-light);
    color: var(--text-color-light);
    }

     &:hover img {
        filter: brightness(0) saturate(100%) invert(100%);
    }
  }
`;

const CardActionsImg = styled.img`
    width: 13%;
`

const CardActionsTitle = styled.span`
    font-size: var(--font-size-small)
`

export {
    CardActionsItemWrapper,
    CardActionsImg,
    CardActionsTitle,   
}