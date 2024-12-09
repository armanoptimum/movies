import logo from '@/assets/icons/logo2.svg';
import FooterNavItem from './FooterNavItem';
import { FooterWrapper, FooterNavWrapper } from './styles';
import footerData from './data';
import { FooterNavItemButton, FooterNavItemImg, FooterNavItemLink, FooterNavItemWrapper } from './FooterNavItem/styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterNavWrapper>
        <FooterNavItemWrapper>
          <FooterNavItemLink href="/">
            <FooterNavItemImg src={logo} alt={'logo'} />
          </FooterNavItemLink>
        </FooterNavItemWrapper>

        <FooterNavItemWrapper>
          <FooterNavItemButton>Join The Comunity</FooterNavItemButton>
        </FooterNavItemWrapper>
      </FooterNavWrapper>

      {footerData.map((section, index) => (
        <FooterNavWrapper key={index}>
          <FooterNavItem header>{section.section}</FooterNavItem>
          {section.items.map((item, itemIndex) => (
            <FooterNavItem key={itemIndex} goTo={item.goTo}>
              {item.name}
            </FooterNavItem>
          ))}
        </FooterNavWrapper>
      ))}
    </FooterWrapper>
  );
}
