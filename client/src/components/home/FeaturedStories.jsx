import { Link } from "react-router-dom";
import gallery from "../../data/galleryData";
import "../../styles/featuredStories.css";

function FeaturedStories() {
  return (
    <section className="featured-stories">

      <div className="section-title">

        <span>OUR STORIES</span>

        <h2>Featured Wedding Stories</h2>

        <p>
          Every wedding is unique. Explore some of our favourite love stories
          captured through timeless photography.
        </p>

      </div>

      <div className="stories-grid">

        {gallery.map((story) => (

          <Link
            to={`/gallery/${story.slug}`}
            className="story-card"
            key={story.id}
          >

            <img src={story.image} alt={story.couple} />

            <div className="story-overlay">

              <span>{story.location}</span>

              <h3>{story.couple}</h3>

            </div>

          </Link>

        ))}

        </div>
        <div className="featured-gallery__actions">
          <Link to="/gallery" className="browse-btn">
            Browse our work
            <span>→</span>
          </Link>
        </div>

    </section>
  );
}

export default FeaturedStories;