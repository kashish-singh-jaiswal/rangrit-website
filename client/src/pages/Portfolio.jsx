import gallery from "../data/galleryData";

function Portfolio() {
  return (
    <section className="portfolio-page">
      <div className="container-custom">
        <div className="section-heading section-heading--light">
          <span>Portfolio</span>
          <h2>A curated visual archive of wedding stories</h2>
          <p>
            A professional portfolio page should feel intentional and allow the
            work to speak first.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.slice(0, 6).map((item) => (
            <article className="gallery-card" key={item.id}>
              <img src={item.image} alt={item.couple} />
              <div className="overlay">
                <h3>{item.couple}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;