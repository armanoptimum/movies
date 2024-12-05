import { HeaderWrapper, HeaderNavWrapper } from './styles';
import logo from '@/assets/logo.svg';
import burgerIcon from '@/assets/burger.svg';
import logoMobile from '@/assets/logo2.svg';
import HeaderNavItem from './HeaderNavItem';
import BurgerMenu from './HeaderBurgerMenu';
import { useEffect, useState } from 'react';
import { itemActions, itemsWithDropDown } from './data';

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
        {itemsWithDropDown.map((item, id) => (
          <HeaderNavItem key={id} href={item.href} dropdownItems={item.dropdownItems}>
            {item.label}
          </HeaderNavItem>
        ))}
      </HeaderNavWrapper>

      <HeaderNavWrapper>
        <HeaderNavItem logo source={logoMobile} />
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
