import { Link } from "react-router-dom";

import "../../styles/HeroGallery.css";

import hero1 from "../../assets/images/hero/hero1.jpg";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.jpg";
import img1 from "../../assets/images/gallery/gallery1.jpg";
import img2 from "../../assets/images/gallery/gallery2.jpg";
import img3 from "../../assets/images/gallery/gallery3.jpg";

const highlights = [
  {
    title: "Wedding Stories",
    text: "Emotion-first frames for rituals, vows, and grand family moments.",
  },
  {
    title: "Portrait Direction",
    text: "Clean, modern posing with a premium editorial finish.",
  },
  {
    title: "AI-Assisted Polish",
    text: "Cinematic tone and retouch-ready previews for a sharper first impression.",
  },
];

const storyCards = [
  {
    image: img1,
    label: "Pre-wedding",
    title: "Soft light, clean styling, timeless chemistry.",
  },
  {
    image: img2,
    label: "Wedding Day",
    title: "Fast-moving moments framed with calm precision.",
  },
  {
    image: img3,
    label: "Candid Frames",
    title: "Natural expressions that feel honest and cinematic.",
  },
];

function HeroGallery() {
  return (
    <section className="hero-gallery">
      <div className="hero-gallery__glow hero-gallery__glow--left" />
      <div className="hero-gallery__glow hero-gallery__glow--right" />

      <div className="container-custom hero-gallery__inner">
        <div className="hero-gallery__copy">
          <span className="hero-gallery__kicker">Rangrit Photography</span>

          <h1>
            Shaadi ho ya professional shoot, har frame ko premium feel do.
          </h1>

          <p className="hero-gallery__lede">
            Elegant wedding photography with cinematic lighting, candid energy,
            and a polished visual style that looks sharp on every screen.
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
        </div>

        <div className="hero-gallery__visual">
          <div className="hero-gallery__main-card">
            <img src={hero1} alt="Elegant bride portrait" />

            <div className="hero-gallery__main-badge">
              <span>Featured Story</span>
              <strong>Luxury Wedding Portraits</strong>
            </div>
          </div>

          <div className="hero-gallery__floating-card hero-gallery__floating-card--top">
            <img src={hero2} alt="Couple in cinematic light" />
            <div>
              <span>Cinematic tone</span>
              <strong>Warm, modern color grading</strong>
            </div>
          </div>

          <div className="hero-gallery__floating-card hero-gallery__floating-card--bottom">
            <img src={hero3} alt="Professional portrait with soft lighting" />
            <div>
              <span>AI-assisted polish</span>
              <strong>Preview-ready concept frame</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-gallery__story-strip">
        <div className="container-custom hero-gallery__story-grid">
          {storyCards.map((item) => (
            <article className="hero-gallery__story-card" key={item.label}>
              <img src={item.image} alt={item.label} />
              <div className="hero-gallery__story-overlay">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroGallery;