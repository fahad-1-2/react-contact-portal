function Header({ title, links }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">{title}</span>
        <ul className="navbar-nav flex-row gap-3">
          {links.map((link, i) => (
            <li className="nav-item" key={i}>
              <a className="nav-link" href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;