function Services() {
  return (
    <section className="portfolio-page">
      <div className="container-custom">
        <div className="section-heading section-heading--light">
          <span>Services</span>
          <h2>Photography packages shaped like a real portfolio offering</h2>
          <p>
            For a professional brand, this page should show the scope of work,
            process, and the kinds of clients you serve.
          </p>
        </div>

        <div className="portfolio-services__grid">
          <article className="portfolio-service-card">
            <span>01</span>
            <h3>Wedding Coverage</h3>
            <p>Full-day rituals, candid coverage, family portraits, and premium edits.</p>
          </article>
          <article className="portfolio-service-card">
            <span>02</span>
            <h3>Pre-Wedding Shoots</h3>
            <p>Stylized destination concepts with editorial direction and cinematic framing.</p>
          </article>
          <article className="portfolio-service-card">
            <span>03</span>
            <h3>Films & Reels</h3>
            <p>Short films and social cuts tailored for modern couples and brand presence.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;