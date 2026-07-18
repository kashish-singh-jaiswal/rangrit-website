import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <Link to="/">
            <h2>RANGRIT</h2>
            <span>Wedding Photography</span>
          </Link>
        </div>

        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/films">Films</Link>
          <Link to="/about">About Us</Link>
          <Link className="book-btn" to="/booking">
            Book Now
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;