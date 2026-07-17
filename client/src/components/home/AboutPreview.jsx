import { Link } from "react-router-dom";
import photographer from "../../assets/images/about/photographer.jpg";
import "../../styles/about.css";

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={photographer}
              alt="Rangrit Photography"
              className="about-image img-fluid"
            />
          </div>

          <div className="col-lg-6">

            <span className="section-subtitle">
              About Rangrit
            </span>

            <h2>
              We Capture Emotions,
              <br />
              Not Just Photographs.
            </h2>

            <p>
              At Rangrit, we believe every wedding has its own unique story.
              Our passion is to preserve your most precious moments with
              creativity, elegance, and authenticity.
            </p>

            <p>
              From intimate ceremonies to grand celebrations, we create
              timeless memories that you'll cherish forever.
            </p>

            <Link to="/about" className="btn-gold">
              Know More
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPreview;