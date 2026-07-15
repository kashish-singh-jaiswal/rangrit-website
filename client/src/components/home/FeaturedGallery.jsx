import { Link } from "react-router-dom";

const galleryItems = [
  {
    id: 1,
    title: "Wedding",
    image: "/src/assets/images/portfolio/wedding.jpg",
  },
  {
    id: 2,
    title: "Portrait",
    image: "/src/assets/images/portfolio/portrait.jpg",
  },
  {
    id: 3,
    title: "Pre-Wedding",
    image: "/src/assets/images/portfolio/prewedding.jpg",
  },
  {
    id: 4,
    title: "Events",
    image: "/src/assets/images/portfolio/events.jpg",
  },
];

function FeaturedGallery() {
  return (
    <section className="featured-gallery">
      <div className="container-custom">
        <p className="section-subtitle">Featured Portfolio</p>

        <h2>Capturing Moments That Matter</h2>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link className="btn-gold" to="/portfolio">
            View Complete Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGallery;