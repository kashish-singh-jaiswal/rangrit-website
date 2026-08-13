import React from "react";
import { Link } from "react-router-dom";
import gallery from "../../data/galleryData";
import "../../styles/featuredStories.css";

function FeaturedStories() {
  return (
    <section className="featured-stories">
      {/* Title Section */}
      <div className="section-title fade-up">
        <span className="subtitle">Our Stories</span>
        {/* Added a title-glow class for an animated gradient effect */}
        <h2 className="title-glow">Featured Wedding Stories</h2>
        <p>
          Every wedding is unique. Explore some of our favourite love stories
          captured through timeless photography.
        </p>
      </div>

      {/* Grid Section */}
      <div className="stories-grid">
        {gallery.map((story, index) => (
          <Link
            to={`/gallery/${story.slug}`}
            className="story-card fade-up"
            key={story.id}
            // Dynamically staggers the entrance animation for each card
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="image-wrapper">
              <img src={story.image} alt={story.couple} loading="lazy" />
            </div>

            <div className="story-overlay">
              <div className="overlay-content">
                <span className="location-tag">{story.location}</span>
                <h3>{story.couple}</h3>
                <span className="view-story">
                  View Story <i className="arrow">→</i>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Action Button Section */}
      <div 
        className="featured-gallery__actions fade-up" 
        style={{ animationDelay: `${gallery.length * 0.15 + 0.2}s` }}
      >
        <Link to="/gallery" className="browse-btn">
          <span>Browse our work</span>
          <span className="btn-arrow">→</span>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedStories;