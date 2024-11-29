function NavItem({ children, href, dropdownItems, source, logo, ...props }) {
  return (
    <li {...props}>
      {logo ? (
        <a style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} href="/">
          <img src={source} alt="Logo" />
        </a>
      ) : source ? (
        <img src={source} alt={children} />
      ) : (
        <a href={href || '#'}>{children}</a>
      )}

      {dropdownItems && (
        <ul className="dropdown">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavItem;
