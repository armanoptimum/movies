import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow);
  background-color: var(--text-color-light);
  border-radius: var(--border-radius-medium);
  border: 0.15rem solid var(--border-color);
  overflow: hidden;
  font-size: var(--font-size-extra-small);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;

  @media (max-width: 56rem) {
    flex-direction: row;
    height: 10rem;
  }
`;

export const ThreeDots = styled.img`
  position: absolute;
  display: none;
  top: 0.3rem;
  right: 0.3rem;
  width: 1.25rem;
  z-index: 11;

  &:hover {
    filter: brightness(0) saturate(100%) invert(45%) sepia(56%) saturate(700%) hue-rotate(176deg) brightness(95%)
      contrast(105%);
  }

  @media (min-width: 56rem) {
    display: block;
  }
`;

export const MovieImg = styled.img`
  min-height: 100%;

  @media (min-width: 56rem) {
    min-height: 12rem;
  }
`;
