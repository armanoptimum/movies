import styled from 'styled-components';

export const FooterNavItemWrapper = styled.li`
  color: var(--text-color-light);
`;

export const FooterNavItemLink = styled.a``;

export const FooterNavItemImg = styled.img`
  display: none;
  width: 7rem;

  @media (min-width: 64rem) {
    display: block;
    position: absolute;
    top: -1.25rem;
    left: 5.5rem;
  }
`;

export const FooterNavItemButton = styled.button`
  display: inline-block;
  font-size: var(--font-size-medium);
  font-weight: 600;
  color: var(--secondary-color);
  padding: 0.7rem 1rem;
  border-radius: var(--border-radius);
  border: none;
  margin-top: 1rem;
  background-color: var(--text-color-light);
  cursor: pointer;

  @media (min-width: 64rem) {
    margin-top: 6.3rem;
  }
`;
