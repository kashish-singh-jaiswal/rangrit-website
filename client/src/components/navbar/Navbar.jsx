import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../styles/navbar.css";

// IMPORT YOUR LOGO HERE (Update the path based on your folder structure)
import logoImage from "../../assets/images/hero/gemini-svg.svg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Films", to: "/films" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Event Listener for Glassmorphism Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile Menu Handlers
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-container">
        
        {/* Logo Section */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logoImage} alt="Rangrit Logo" className="navbar-logo-img" />
        </Link>

        {/* Mobile Hamburger Icon */}
        <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isOpen ? "nav-menu--active" : ""}`}>
          <div className="nav-links-container">
            {navItems.map((item, index) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
                // Staggered animation delay for mobile menu items
                style={{ '--animation-order': index }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* WhatsApp Booking Button */}
          <a
            href="https://wa.me/917049569503?text=Hello%20Rangrit%20Photography,%20I%20would%20like%20to%20inquire%20about%20a%20booking!"
            target="_blank"
            rel="noopener noreferrer"
            className="book-btn"
            onClick={closeMenu}
          >
            Book Now
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;