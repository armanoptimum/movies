import { HeaderWrapper, NavWrapper } from './styles';
import searchIcon from '../../assets/search.svg';
import plusIcon from '../../assets/add.svg';
import logo from '../../assets/logo.svg'
import NavItem from './NavItem';

const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <NavItem logo source={logo} />
        <NavItem dropdownItems={['Popular', 'Now Playing', 'Upcoming', 'Top Rated']}> Movies </NavItem>
        <NavItem dropdownItems={['Popular', 'Airing Today', 'On TV', 'Top Rated']}>TV Shows</NavItem>
        <NavItem dropdownItems={['Popular People']}>People</NavItem>
        <NavItem dropdownItems={['Discussion', 'LeaderBoard', 'Support', 'API']}>More</NavItem>
      </NavWrapper>
      <NavWrapper>
        <NavItem source={plusIcon} />
        <NavItem>Lang-Icon</NavItem>
        <NavItem>Login</NavItem>
        <NavItem>Join TMDB</NavItem>
        <NavItem source={searchIcon} />
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
