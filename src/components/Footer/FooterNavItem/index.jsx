import { FooterNavItemLink, FooterNavItemWrapper } from './styles';

function FooterNavItem({ children, goTo, header, ...props }) {
  return (
    <FooterNavItemWrapper $isHeader={header} {...props}>
      <FooterNavItemLink href={goTo}>{children}</FooterNavItemLink>
    </FooterNavItemWrapper>
  );
}

export default FooterNavItem;
