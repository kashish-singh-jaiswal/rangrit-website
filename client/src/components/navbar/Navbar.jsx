import { NavLink, Link } from "react-router-dom";
import "../../styles/navbar.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Films", to: "/films" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <span className="logo-copy">
            <strong>RANGRIT</strong>
            <small>Wedding Photography Studio</small>
          </span>
        </Link>

        <nav className="nav-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link className="book-btn" to="/booking">
            Book Now
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;