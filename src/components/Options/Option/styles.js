import styled from 'styled-components';

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: var(--font-size-extra-small);
  border-radius: 0.6rem;
  border: 0.1rem solid var(--border-color);
  box-shadow: var(----box-shadow);
`;

export const OptionHeader = styled.div`
  padding: var(--padding-small) var(--padding-medium);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionName = styled.h2`
  font-size: var(--font-size-medium);
  font-weight: 600;
`;

export const Drop = styled.span`
  display: flex;
  align-items: center;
  transform: ${({ $active }) => ($active ? 'rotate(90deg)' : 'none')};
  transition: transform 0.3s ease;
  z-index: 1;
`;

export const Divider = styled.hr`
  border: 0.02rem solid var(--text-color-muted);
  opacity: 0.2;
  display: ${({ $active }) => ($active ? 'block' : 'none')};
`;
