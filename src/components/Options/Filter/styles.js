import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-small) var(--padding-medium);
  gap: 1.7rem;
  font-size: var(--font-size-small);
`;

export const FilterHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const FilterOptionHeaderName = styled.p`
  font-size: var(--font-size-small);
  color: var(--text-color-muted);
`;

export const RadioCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const RadioCheckboxOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Radio = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 0.15rem solid var(--text-color-muted-light);
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:checked {
    border: 0.3rem solid var(--secondary-color);
  }
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 0.1rem solid var(--text-color-muted-light);
  background-color: white;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease;
  cursor: pointer;
  background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27var%28--kendo-color-on-primary%2C%20%23ffffff%29%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6%2010l3%203l6-6%27/%3e%3c/svg%3e');

  &:checked {
    background-color: var(--secondary-color);
    border: none;
  }
`;

export const Date = styled.input.attrs({
  type: 'date',
})`
  width: 9rem;
  padding: 0.6rem;
  border-radius: 0.3125rem;
  border: 0.05rem solid #ccc;
  font-size: var(--font-size-small);
  text-align: center;
  background-color: var(--text-color-light);
  color: #333;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
  }
`;

export const Label = styled.label`
  color: var(--text-color-dark-light);
  cursor: pointer;
`;

export const QuestionMark = styled.span`
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
    content: attr(data-tooltip);
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
