import logo from '@/assets/icons/logo2.svg';
import FooterNav from './FooterNav';
import FooterNavItem from './FooterNavItem';
import { FooterWrapper } from './styles';
import footerData from './data';
import { FooterNavItemButton, FooterNavItemImg, FooterNavItemLink, FooterNavItemWrapper } from './FooterNavItem/styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterNav>
        <FooterNavItemWrapper>
          <FooterNavItemLink href="/">
            <FooterNavItemImg src={logo} alt={'logo'} />
          </FooterNavItemLink>
        </FooterNavItemWrapper>

        <FooterNavItemWrapper>
          <FooterNavItemButton>Join The Comunity</FooterNavItemButton>
        </FooterNavItemWrapper>
      </FooterNav>

      {footerData.map((section, index) => (
        <FooterNav key={index}>
          <FooterNavItem header>{section.section}</FooterNavItem>
          {section.items.map((item, itemIndex) => (
            <FooterNavItem key={itemIndex} goTo={item.goTo}>
              {item.name}
            </FooterNavItem>
          ))}
        </FooterNav>
      ))}
    </FooterWrapper>
  );
}
