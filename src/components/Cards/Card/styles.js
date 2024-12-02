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

  & #dots:hover {
    filter: brightness(0) saturate(100%) invert(45%) sepia(56%) saturate(700%) hue-rotate(176deg) brightness(95%)
      contrast(105%);
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 3);
  }

  .blur {
    position: relative;
    display: none;
  }

  .blur ul {
    width: 80%;
    background-color: white;
    list-style-type: none;
    position: absolute;
    top: 30px;
    left: 15px;
    font-size: var(--font-size-small);
    color: var(--text-color-muted);
    text-align: center;
    border-radius: 5px;
  }

  .blur ul li {
    padding: var(--padding-small-extra);
    border-bottom: 0.01rem solid var(--text-color-muted);
  }

  .blur ul li:hover {
    background-color: var(--primary-color-light);
    color: var(--text-color-light);
  }

  .blur.active {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
  }

  & img {
    display: inline-block;
    width: 100%;
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

  #dots {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    fill: red;
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
    border: 2px solid #21D07A;
  }

  #per-cent {
    position: absolute;
    font-size: 5px;
    top: 4px;
    right: 6px;
  }
`;

export default CardWrapper;
