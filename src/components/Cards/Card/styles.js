import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow);
  background-color: var(--text-color-light);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  overflow: hidden;
  font-size: var(--font-size-extra-small);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;

  #dots {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
  }

  #dots:hover {
    filter: brightness(0) saturate(100%) invert(45%) sepia(56%) saturate(700%) hue-rotate(176deg) brightness(95%)
      contrast(105%);
  }

  .blur {
    position: relative;
    display: none;
  }

  .blur.active {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
  }

  .blur ul {
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
  }

  & .info {
    position: relative;
    padding: var(--padding-medium);
  }

  & h2 a {
    font-weight: 700;
    color: var(--text-color-dark);
  }

  & p {
    color: var(--text-color-muted);
  }

  .rating {
    position: absolute;
    top: -15px;
    left: 5px;
    background-color: #081c22;
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    color: var(--text-color-light);
    text-align: center;
    display: flex;
    font-weight: bold;
    justify-content: center; /* Center horizontally */
    align-items: center;
    border: 2px solid #21d07a;
  }

  #per-cent {
    position: absolute;
    font-size: 5px;
    top: 4px;
    right: 6px;
  }
`;

export default CardWrapper;
