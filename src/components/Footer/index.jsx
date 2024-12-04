import logo from '../../assets/logo2.svg';
import FooterNav from './FooterNav';
import FooterNavItem from './FooterNavItem';
import { FooterWrapper } from './styles';
import footerData from './data';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterNav>
        <FooterNavItem img={logo}>Logo</FooterNavItem>
        <FooterNavItem button>Join The Comunity</FooterNavItem>
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
