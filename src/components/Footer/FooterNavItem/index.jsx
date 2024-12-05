import { FooterNavItemButton, FooterNavItemImg, FooterNavItemLink, FooterNavItemWrapper } from './styles';

function FooterNavItem({ children, header, button, img, goTo, ...props }) {
  let content;

  if (img) {
    content = (
      <FooterNavItemLink href="/">
        <FooterNavItemImg src={img} alt={children} />
      </FooterNavItemLink>
    );
  } else if (button) {
    content = <FooterNavItemButton>{children}</FooterNavItemButton>;
  } else if (header) {
    content = <h3>{children}</h3>;
  } else {
    content = <FooterNavItemLink href={goTo}>{children}</FooterNavItemLink>;
  }
  return <FooterNavItemWrapper {...props}>{content}</FooterNavItemWrapper>;
}

export default FooterNavItem;
