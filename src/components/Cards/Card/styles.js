import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow);
  background-color: var(--text-color-light);
  border-radius: var(--border-radius);
  border: 2px solid var(--border-color);
  overflow: hidden;
  font-size: var(--font-size-extra-small);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;

  & #dots:hover {
    filter: brightness(0) saturate(100%) invert(45%) sepia(56%) saturate(700%) hue-rotate(176deg) brightness(95%)
      contrast(105%);
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 3);
  }

  & img {
    display: inline-block;
    width: 100%;
  }

  & .info {
    padding: var(--padding-medium);
  }

  & h2 a {
    font-weight: 700;
    color: var(--text-color-dark);
  }

  & p {
    color: var(--text-color-muted);
  }

  #dots {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    fill: red;
  }
`;

export default CardWrapper;
