import { NavLink } from 'react-router-dom';

function HeaderNavItem({ children, href, dropdownItems, onClick, source, logo, isActiveDropDown, ...props }) {
  let logoElement;

  if (logo) {
    logoElement = (
      <NavLink to="/">
        <img id="logo" src={source} alt="Logo" />{' '}
      </NavLink>
    );
  } else if (source) {
    logoElement = <img src={source} alt={children} />;
  } else {
    logoElement = <NavLink to={href}>{children}</NavLink>;
  }

  return (
    <li
      onClick={onClick ? onClick : null}
      className={isActiveDropDown ? 'parent-list active' : 'parent-list'}
      {...props}
    >
      {logoElement}

      {dropdownItems && (
        <ul className="dropdown">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item === 'Popular' ? `${item.toLowerCase()}` : '#'}>{item}</NavLink>{' '}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default HeaderNavItem;
