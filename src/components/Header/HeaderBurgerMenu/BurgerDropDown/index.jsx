import { BurgerDropDownLink, BurgerDropDownLinkWrapper, BurgerDropDownName, BurgerDropDownWrapper } from './styles';

export default function BurgerDropDown({ dropDownItems, children, href, isActiveDropDown, handleToggleDropdown }) {
  return (
    <BurgerDropDownWrapper $isActiveDropDown>
      <BurgerDropDownName onClick={handleToggleDropdown}>{children}</BurgerDropDownName>
      <BurgerDropDownLinkWrapper $isActiveDropDown={isActiveDropDown}>
        {dropDownItems.map((item, id) => {
          return (
            <BurgerDropDownLink href={href} key={id}>
              {item}
            </BurgerDropDownLink>
          );
        })}
      </BurgerDropDownLinkWrapper>
    </BurgerDropDownWrapper>
  );
}
