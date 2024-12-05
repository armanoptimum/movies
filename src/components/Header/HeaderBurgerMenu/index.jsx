import { useState } from 'react';
import { BurgerMenuDropDownWrapper, BurgerMenuWrapper, OtherLinksItem, OtherLinksWrapper } from './styles';
import { additionalLiks, navItemsWithDropDown } from './data';
import BurgerDropDown from './BurgerDropDown';

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
      <BurgerMenuDropDownWrapper>
        {navItemsWithDropDown.map((item, id) => (
          <BurgerDropDown
            isActiveDropDown={activeDropdowns.includes(id)}
            handleToggleDropdown={() => toggleDropdown(id)}
            href={item.href}
            key={id}
            dropDownItems={item.dropdownItems}
          >
            {item.name}
          </BurgerDropDown>
        ))}
      </BurgerMenuDropDownWrapper>

      <OtherLinksWrapper>
        {additionalLiks.map((name, id) => (
          <OtherLinksItem key={id}>{name}</OtherLinksItem>
        ))}
      </OtherLinksWrapper>
    </BurgerMenuWrapper>
  );
}
