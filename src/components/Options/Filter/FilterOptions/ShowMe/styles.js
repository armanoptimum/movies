import styled from 'styled-components';

export const ShowMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShowMeHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-small);
  gap: 0.5rem;
  color: var(--text-color-muted);
  margin-bottom: 0.5rem;
`;

export const ShowMeHeaderName = styled.p`
`;

export const ShowMeHeaderQuestionMark = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  background-image: url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-635-circle-question-58cc1ee10fd7a11546f8e97b1b5590b2d6e0c883acaea64a5f4c2c5b60f9f364.svg');
  background-size: cover;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  opacity: 0.4;
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    content: "Log in to filter items you've watched.";
    visibility: visible;
    opacity: 1;
    position: absolute;
    bottom: 135%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: var(--font-size-small);
    white-space: nowrap;
    z-index: 10;
  }

  &:hover::before {
    content: '';
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0.5rem;
    border-style: solid;
    border-color: var(--primary-color) transparent transparent transparent;
    z-index: 9;
    filter: brightness(90%);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;


export const RadioInput = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 0.15rem solid var(--text-color-muted-light);
  border-radius: 50%;  
  cursor: pointer;
  transition: border-color 0.3s ease; 

  &:checked {
    border: 0.30rem solid var(--secondary-color); 
  }
`;


export const RadioLabel = styled.label`
 font-size: var(--font-size-small);
  color: var(--text-color-dark-light);
`;