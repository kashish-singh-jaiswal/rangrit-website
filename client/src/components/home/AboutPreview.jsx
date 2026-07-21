import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/about/about-hero.jpg";
import "../../styles/aboutPreview.css";

function AboutPreview() {
  return (
    <section className="about-preview">

      <div className="about-image">
        <img src={aboutImg} alt="Rangrit Photography" />
      </div>

      <div className="about-content">

        <span>ABOUT RANGRIT</span>

        <h2>Capturing Love Beyond Photographs</h2>

        <p>
          At Rangrit, we believe every wedding is more than an event—it's a
          story filled with emotions, traditions, and unforgettable moments.
          Through timeless photography and cinematic films, we preserve every
          smile, every tear, and every celebration so you can relive them
          forever.
        </p>

        <Link to="/about" className="about-btn">
          Read More
        </Link>

      </div>

    </section>
  );
}

export default AboutPreview;