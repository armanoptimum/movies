import { NavLink } from 'react-router-dom';
import { HeaderDropDownItem, HeaderDropDownWrapper, HeaderNavItemLogo, HeaderNavItemWrapper } from './styles';

function HeaderNavItem({ children, href, dropdownItems, onClick, source, ...props }) {
  let logoElement;

  if (source) {
    logoElement = <HeaderNavItemLogo src={source} alt={children} />;
  } else {
    logoElement = <NavLink to={href}>{children}</NavLink>;
  }

  return (
    <HeaderNavItemWrapper onClick={onClick ? onClick : null} {...props}>
      {logoElement}
      {dropdownItems && (
        <HeaderDropDownWrapper>
          {dropdownItems.map((item, index) => (
            <HeaderDropDownItem key={index}>
              <NavLink to={href + '/' + item.href}>{item.name}</NavLink>
            </HeaderDropDownItem>
          ))}
        </HeaderDropDownWrapper>
      )}
    </HeaderNavItemWrapper>
  );
}

export default HeaderNavItem;
