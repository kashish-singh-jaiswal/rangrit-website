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

         <a 
          href="https://wa.me/917049569503?text=Hello%20Rangrit%20Photography,%20I%20would%20like%20to%20inquire%20about%20a%20booking!" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="book-btn">
          Book Now
        </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;