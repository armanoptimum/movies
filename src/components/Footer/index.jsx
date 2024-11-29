import logo from '../../assets/logo2.svg';
import FooterNavItem from './NavItem';
import { FooterNavWrapper, FooterWrapper } from './styles';
export default function Footer() {
  return (
    <FooterWrapper>
      <nav>
        <FooterNavWrapper>
          <FooterNavItem img={logo}>Logo</FooterNavItem>
          <FooterNavItem button>Join The Comunity</FooterNavItem>
        </FooterNavWrapper>
        <FooterNavWrapper>
          <FooterNavItem header>The Basics</FooterNavItem>
          <FooterNavItem goTo="#">About TMBD</FooterNavItem>
          <FooterNavItem goTo="#">Contact Us</FooterNavItem>
          <FooterNavItem goTo="#">Support Forums</FooterNavItem>
          <FooterNavItem goTo="#">API</FooterNavItem>
          <FooterNavItem goTo="#">System Status</FooterNavItem>
        </FooterNavWrapper>
        <FooterNavWrapper>
          <FooterNavItem header>Get Involved</FooterNavItem>
          <FooterNavItem goTo="#">Contribution Bible</FooterNavItem>
          <FooterNavItem goTo="#">Add New Movie</FooterNavItem>
          <FooterNavItem goTo="#">Add New TV Show</FooterNavItem>
        </FooterNavWrapper>
        <FooterNavWrapper>
          <FooterNavItem header>Community</FooterNavItem>
          <FooterNavItem goTo="#">Guidelines</FooterNavItem>
          <FooterNavItem goTo="#">Discussion</FooterNavItem>
          <FooterNavItem goTo="#">Leaderboard</FooterNavItem>
        </FooterNavWrapper>
        <FooterNavWrapper>
          <FooterNavItem header>Legal</FooterNavItem>
          <FooterNavItem goTo="#">Terms of Use</FooterNavItem>
          <FooterNavItem goTo="#">API Terms of Use</FooterNavItem>
          <FooterNavItem goTo="#">Privacy Policy</FooterNavItem>
          <FooterNavItem goTo="#">DMCA Policy</FooterNavItem>
        </FooterNavWrapper>
      </nav>
    </FooterWrapper>
  );
}
