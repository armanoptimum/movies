import { NavLink } from 'react-router-dom';
import { HeaderDropDownItem, HeaderDropDownWrapper, HeaderNavItemLogo, HeaderNavItemWrapper } from './styles';

function HeaderNavItem({ children = '', href = '#', dropdownItems = [], onClick, source, ...props }) {
  return (
    <HeaderNavItemWrapper onClick={onClick ? onClick : null} {...props}>
      {source ? <HeaderNavItemLogo src={source} alt={children} /> : <NavLink to={href}>{children}</NavLink>}
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
