import { NavLink } from 'react-router-dom';

function HeaderNavItem({ children, href, dropdownItems, onClick, source, logo, isActiveDropDown, ...props }) {
  return (
    <li
      onClick={onClick ? onClick : null}
      className={isActiveDropDown ? 'parent-list active' : 'parent-list'}
      {...props}
    >
      {logo ? (
        <NavLink id="logo" to="/">
          <img src={source} alt="Logo" />
        </NavLink>
      ) : source ? (
        <img src={source} alt={children} />
      ) : (
        <NavLink to={href}>{children}</NavLink>
      )}

      {dropdownItems && (
        <ul className="dropdown">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item === 'Popular' ? `${item.toLowerCase()}` : '#'}>{item}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default HeaderNavItem;
