import { HeaderWrapper, HeaderNavWrapper } from './styles';
import logo from '@/assets/icons/logo.svg';
import burgerIcon from '@/assets/icons/burger.svg';
import logoMobile from '@/assets/icons/logo2.svg';
import HeaderNavItem from './HeaderNavItem';
import BurgerMenu from './HeaderBurgerMenu';
import { useEffect, useState } from 'react';
import { itemActions, itemsWithDropDown } from './data';
import { HeaderNavItemLogo, HeaderNavItemWrapper } from './HeaderNavItem/styles';
import { NavLink } from 'react-router-dom';

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
        <HeaderNavItemWrapper>
          <NavLink to="/">
            <HeaderNavItemLogo src={logo} alt="Logo" />
          </NavLink>
        </HeaderNavItemWrapper>

        <HeaderNavItemWrapper>
          <HeaderNavItemLogo onClick={handleBurgerToggle} src={burgerIcon} alt={'burger'} />
        </HeaderNavItemWrapper>

        {itemsWithDropDown.map((item, id) => (
          <HeaderNavItem key={id} href={item.href} dropdownItems={item.dropdownItems}>
            {item.label}
          </HeaderNavItem>
        ))}
      </HeaderNavWrapper>

      <HeaderNavWrapper>
        <HeaderNavItemWrapper>
          <HeaderNavItemLogo src={logoMobile} alt="Mobile logo" />
        </HeaderNavItemWrapper>
      </HeaderNavWrapper>

      <HeaderNavWrapper>
        {itemActions.map((item, id) => (
          <HeaderNavItem key={id} source={item.source}>
            {item.label}
          </HeaderNavItem>
        ))}
      </HeaderNavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
