import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: var(--font-size-extra-small);
  border-radius: 0.6rem;
  border: 0.06rem solid var(--border-color);
  box-shadow: var(----box-shadow);
`;

export const Header = styled.div`
  padding: var(--padding-small) var(--padding-medium);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.h2`
  font-size: var(--font-size-small-plus);
  font-weight: 600;
`;

export const Drop = styled.span`
  display: flex;
  align-items: center;
  transform: ${({ $active }) => ($active ? 'rotate(90deg)' : 'none')};
  transition: transform 0.3s ease;
`;

export const Divider = styled.hr`
  border: 0.02rem solid var(--text-color-muted);
  opacity: 0.2;
  display: ${({ $active }) => ($active ? 'block' : 'none')};
`;

export const Action = styled.div`
  padding: var(--padding-small) var(--padding-medium);
  font-size: var(--font-size-medium);
  display: ${({ $active }) => ($active ? 'block' : 'none')};
`;

export const OptionName = styled.h5`
  font-weight: 300;
  margin-bottom: 1rem;
  color: var(--text-color-muted);
`;

export const List = styled.div`
  padding: var(--padding-small-extra) var(--padding-small);
  background-color: var(--text-color-muted-light);
  font-size: var(--font-size-small);
  border-radius: 0.3rem;
  position: relative;
`;

export const Current = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListOptions = styled.div`
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

export const OptionItem = styled.p`
  padding: var(--padding-small-extra);
  font-size: var(--font-size-small-plus);
  background-color: ${({ $active }) => ($active ? 'var(--secondary-color)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--text-color-light)' : 'inherit')};
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? 'var(--primary-color)' : 'var(--text-color-muted-light)')};
  }
`;
