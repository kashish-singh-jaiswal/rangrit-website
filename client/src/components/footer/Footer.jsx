import "../../styles/footer.css";
import hut from "../../assets/images/Hut_edited.avif";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaArrowRight,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Films", to: "/films" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Booking", to: "/booking" },
];

const services = [
  "Wedding Photography",
  "Pre-Wedding Shoots",
  "Cinematic Films",
  "Destination Coverage",
];


function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-shell">
        <div className="footer-hero">
          <div>
            <span className="footer-kicker">Rangrit Photography</span>
            <h2 className="footer-title">A refined visual studio for timeless wedding stories.</h2>
          </div>

          <a 
           href="https://wa.me/919039079507?text=Hello%20Rangrit%20Photography,%20I%20would%20like%20to%20inquire%20about%20a%20booking!" 
           target="_blank" 
           rel="noopener noreferrer" 
          className="footer-cta">
           Start Your Story
         <FaArrowRight />
          </a>   
        </div>

        <div className="footer-grid">
          <div className="footer-brand-card">
            <h3>About the Studio</h3>
            <p>
              We create elegant, cinematic photography with a modern eye for
              detail, emotion, and premium presentation across every screen.
            </p>

            <div className="footer-location">
              <img src={hut} alt="Studio location" className="footer-hut" />
              <div>
                <strong>Bhopal, India</strong>
                <span>Available for worldwide assignments</span>
              </div>
            </div>
          </div>

          <div className="footer-links-card">
            <h3>Quick Links</h3>
            <nav aria-label="Footer quick links" className="footer-links-list">
              {quickLinks.map((item) => (
                <Link key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-links-card">
            <h3>Core Services</h3>
            <ul className="footer-services-list">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-card">
            <h3>Contact</h3>

            <a href="tel:+917049569503">+91-7049569503</a>
            <a href="mailto:rangrit01@gmail.com">rangrit01@gmail.com</a>

            <div className="footer-social">
              <a href="https://www.instagram.com/rangritfilms/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>©2026 Rangrit Photography</span>
          <span>Wedding Photography • Films • Portraits</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;