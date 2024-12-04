import { HeaderWrapper, HeaderNavWrapper } from './styles';
import searchIcon from '../../assets/search.svg';
import personIcon from '../../assets/person.svg';
import addIcon from '../../assets/add.svg';
import logo from '../../assets/logo.svg';
import burgerIcon from '../../assets/burger.svg';
import logoMobile from '../../assets/logo2.svg';
import HeaderNavItem from './HeaderNavItem';
import BurgerMenu from './HeaderBurgerMenu';
import { useEffect, useState } from 'react';

const Header = () => {
  const [burgerToggle, setBurgerToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  function handleBurgerToggle() {
    setBurgerToggle((prev) => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper $sticky={isSticky}>
      <BurgerMenu burgerActive={burgerToggle} />
      <HeaderNavWrapper>
        <HeaderNavItem logo source={logo} />
        <HeaderNavItem onClick={handleBurgerToggle} source={burgerIcon} />
        <HeaderNavItem href="popular" dropdownItems={['Popular', 'Now Playing', 'Upcoming', 'Top Rated']}>
          Movies
        </HeaderNavItem>
        <HeaderNavItem dropdownItems={['Popular Show', 'Airing Today', 'On TV', 'Top Rated']}>TV Shows</HeaderNavItem>
        <HeaderNavItem dropdownItems={['Popular People']}>People</HeaderNavItem>
        <HeaderNavItem dropdownItems={['Discussion', 'LeaderBoard', 'Support', 'API']}>More</HeaderNavItem>
      </HeaderNavWrapper>

      <HeaderNavWrapper>
        <HeaderNavItem logo source={logoMobile} />
      </HeaderNavWrapper>

      <HeaderNavWrapper>
        <HeaderNavItem source={addIcon} />
        <HeaderNavItem>EN</HeaderNavItem>
        <HeaderNavItem>Login</HeaderNavItem>
        <HeaderNavItem>Join TMDB</HeaderNavItem>
        <HeaderNavItem source={personIcon} />
        <HeaderNavItem source={searchIcon} />
      </HeaderNavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
