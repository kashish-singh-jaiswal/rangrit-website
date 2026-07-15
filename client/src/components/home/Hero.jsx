import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container-custom hero-content">
          <p className="hero-subtitle">Photography & Cinematography</p>

          <h1>Capturing Timeless Stories</h1>

          <p className="hero-text">
            Wedding • Pre-Wedding • Portrait • Fashion • Events
          </p>

          <div className="hero-buttons">
            <Link to="/portfolio" className="btn-gold">
              Explore Portfolio
            </Link>

            <Link to="/booking" className="btn-outline">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;