import { useState } from 'react';
import HeaderNavItem from '../HeaderNavItem';
import { BurgerMenuWrapper, BurgerNavItemWrapper, OtherLinksItem, OtherLinksWrapper } from './styles';
import { additionalLiks, navItems } from './data';

export default function BurgerMenu({ burgerActive }) {
  const [activeDropdowns, setActiveDropdowns] = useState([]);

  const toggleDropdown = (index) => {
    setActiveDropdowns((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };
  return (
    <BurgerMenuWrapper $show={burgerActive}>
      <BurgerNavItemWrapper>
        {navItems.map((item, id) => (
          <HeaderNavItem
            key={id}
            onClick={() => toggleDropdown(id)}
            isActiveDropDown={activeDropdowns.includes(id)}
            href={item.href}
            dropdownItems={item.dropdownItems}
          >
            {item.name}
          </HeaderNavItem>
        ))}
      </BurgerNavItemWrapper>
      <OtherLinksWrapper>
        {additionalLiks.map((name, id) => (
          <OtherLinksItem key={id}>{name}</OtherLinksItem>
        ))}
      </OtherLinksWrapper>
    </BurgerMenuWrapper>
  );
}
