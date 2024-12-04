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

  
  & #description {
    width: 100%;
    margin-top: 1rem;
    display: none;
    -webkit-line-clamp: 2; /* Number of lines to show */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text-color-dark);
    font-size: var(--font-size-small);
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

  @media (max-width: 890px) {
    flex-direction: row;
    height: 10rem;

    .rating,
    #dots {
      display: none;
    }

    #description {
      display: -webkit-box;
    }
  }
`;



export const ThreeDots = styled.img`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    z-index: 11;

  &:hover {
    filter: brightness(0) saturate(100%) invert(45%) sepia(56%) saturate(700%) hue-rotate(176deg) brightness(95%)
    contrast(105%);
`



export default CardWrapper;
