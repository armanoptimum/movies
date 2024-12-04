import styled from "styled-components";

const FooterNavItemWrapper = styled.li`
    color: var(--text-color-light);
`

const FooterNavItemLink = styled.a``

const FooterNavItemImg = styled.img`
    display: none;
    width: 7rem;

    @media (min-width: 1030px) {
        display: block;
        position: absolute;
        top: -20px;
        left: 5.5rem;
    }
`

const FooterNavItemButton = styled.button`
    display: inline-block;
      font-size: var(--font-size-medium);
      font-weight: 600;
      color: var(--secondary-color);
      padding: 0.7rem 1rem;
      border-radius: var(--border-radius);
      border: none;
      margin-top: 6.3rem;
      background-color: var(--text-color-light);
      cursor: pointer;
`

export {
    FooterNavItemWrapper,
    FooterNavItemLink,
    FooterNavItemImg,
    FooterNavItemButton
}