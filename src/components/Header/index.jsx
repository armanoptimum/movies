import { HeaderWrapper, HeaderNavWrapper } from './styles';
import searchIcon from '../../assets/search.svg';
import personIcon from '../../assets/person.svg';
import addIcon from '../../assets/add.svg';
import logo from '../../assets/logo.svg';
import burgerIcon from '../../assets/burger.svg';
import logoMobile from '../../assets/logo2.svg';
import NavItem from './NavItem';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNavWrapper>
        <NavItem logo source={logo} />
        <NavItem logo source={burgerIcon} />
        <NavItem dropdownItems={['Popular', 'Now Playing', 'Upcoming', 'Top Rated']}> Movies </NavItem>
        <NavItem dropdownItems={['Popular', 'Airing Today', 'On TV', 'Top Rated']}>TV Shows</NavItem>
        <NavItem dropdownItems={['Popular People']}>People</NavItem>
        <NavItem dropdownItems={['Discussion', 'LeaderBoard', 'Support', 'API']}>More</NavItem>
      </HeaderNavWrapper>

      <HeaderNavWrapper>
        <NavItem logo source={logoMobile} />
      </HeaderNavWrapper>

      <HeaderNavWrapper>
        <NavItem source={addIcon} />
        <NavItem>Lang-Icon</NavItem>
        <NavItem>Login</NavItem>
        <NavItem>Join TMDB</NavItem>
        <NavItem source={personIcon} />
        <NavItem source={searchIcon} />
      </HeaderNavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
