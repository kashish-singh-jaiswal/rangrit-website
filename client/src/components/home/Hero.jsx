import { Link } from "react-router-dom";

import "../../styles/HeroGallery.css";

import hero1 from "../../assets/images/hero/hero1.jpg";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.jpg";

const highlights = [
  {
    title: "Editorial storytelling",
    text: "Clean direction, natural emotion, and an elevated finish.",
  },
  {
    title: "Cinematic tones",
    text: "Soft contrast and a timeless color palette across every frame.",
  },
  {
    title: "Mobile-first gallery",
    text: "A smooth visual experience that feels refined on every screen.",
  },
];

const metrics = [
  { value: "250+", label: "events covered" },
  { value: "Worldwide", label: "destination travel" },
  { value: "Premium", label: "editorial finish" },
];

function Hero() {
  return (
    <section className="hero-gallery">
      <div className="hero-gallery__glow hero-gallery__glow--left" />

      <div className="container-custom hero-gallery__inner">
        <div className="hero-gallery__copy">
          <span className="hero-gallery__kicker">Rangrit Photography</span>

          <h1>
            Professional wedding photography with a clean, modern, premium feel.
          </h1>

          <p className="hero-gallery__lede">
            Simple, elegant, and mobile-friendly presentation for couples who
            want timeless photos and a calm, premium experience.
          </p>

          <div className="hero-gallery__actions">
            <Link to="/gallery" className="hero-btn hero-btn--primary">
              View Gallery
            </Link>
            <Link to="/booking" className="hero-btn hero-btn--ghost">
              Book a Shoot
            </Link>
          </div>

          <div className="hero-gallery__highlights">
            {highlights.map((item) => (
              <article className="hero-gallery__highlight" key={item.title}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="hero-gallery__metrics">
            {metrics.map((item) => (
              <div className="hero-gallery__metric" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-gallery__visual">
          <div className="hero-gallery__main-card">
            <img src={hero1} alt="Elegant bride portrait" />

            <div className="hero-gallery__main-badge">
              <span>Featured Story</span>
              <strong>Elegant wedding coverage</strong>
            </div>
          </div>

          <div className="hero-gallery__floating-card hero-gallery__floating-card--top">
            <img src={hero2} alt="Couple in cinematic light" />
            <div>
              <span>Style</span>
              <strong>Modern, editorial portraits</strong>
            </div>
          </div>

          <div className="hero-gallery__floating-card hero-gallery__floating-card--bottom">
            <img src={hero3} alt="Professional portrait with soft lighting" />
            <div>
              <span>Delivery</span>
              <strong>Fast, polished, ready to share</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;