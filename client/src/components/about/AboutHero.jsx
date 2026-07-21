import "../../styles/about.css";

function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1800)"
      }}
    >
      <div className="about-overlay">
        <h1>About Rangrit</h1>

        <p>
            At Rangrit, we believe every wedding is a beautiful story waiting to be told. Our passion is to capture genuine emotions, timeless moments, and heartfelt celebrations through artistic photography and cinematic films. With creativity, attention to detail, and a love for storytelling, we transform your most precious memories into treasures that will be cherished for a lifetime.        </p>
      </div>
    </section>
  );
}

export default AboutHero;