function FooterNavItem({ children, header, button, img, goTo, ...props }) {
  return (
    <li {...props}>
      {img ? (
        <a href="/">
          <img src={img} alt={children} />{' '}
        </a>
      ) : button ? (
        <button>{children}</button>
      ) : header ? (
        <h3>{children}</h3>
      ) : (
        <a href={goTo}>{children}</a>
      )}
    </li>
  );
}

export default FooterNavItem;
