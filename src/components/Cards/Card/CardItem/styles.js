import styled from 'styled-components';

const CardItemWrapper = styled.li`
    padding: var(--padding-small-extra);
    border-bottom: 0.01rem solid var(--text-color-muted);
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    & img {
        width: 10%;
    }

    &:hover img {
        filter: brightness(0) saturate(100%) invert(100%);
    }

    &:hover {
    background-color: var(--primary-color-light);
    color: var(--text-color-light);
    }
  }
`;

export default CardItemWrapper;
