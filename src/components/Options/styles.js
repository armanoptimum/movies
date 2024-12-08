import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 17rem;
  max-width: 100%;
  gap: 2rem;

  @media (min-width: 56rem) {
    max-width: 17rem;
  }
`;

export const SearchButton = styled.button`
  display: block;
  width: 100%;
  border: none;
  border-radius: 3rem;
  padding: var(--padding-small) var(--padding-medium);
  font-size: var(--font-size-medium);
  font-weight: 600;
  cursor: pointer;
  color: ${({ $active }) => ($active ? '#fff' : 'var(--text-color-muted)')};
  background-color: ${({ $active }) => ($active ? 'var(--secondary-color)' : 'transparent')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? 'var(--primary-color)' : 'var(--text-color-muted-light)')};
  }
`;

export const DropDownOptionList = styled.div`
  display: ${({ $active }) => ($active ? 'block' : 'none')};
  background-color: #fff;
  width: 100%;
  position: absolute;
  top: 2.8rem;
  left: 0rem;
  border: 0.06rem solid var(--text-color-muted-light);
  border-radius: 0.5rem;
  padding: var(--padding-small) 0;
  box-shadow: var(--box-shadow);
`;

export const DropDownOption = styled.p`
  padding: var(--padding-small-extra);
  font-size: var(--font-size-small-plus);
  background-color: ${({ $active }) => ($active ? 'var(--secondary-color)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--text-color-light)' : 'var(--primary)')};
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: ${({ $active }) => ($active ? 'var(--primary-color)' : 'var(--text-color-muted-light)')};
  }
`;
