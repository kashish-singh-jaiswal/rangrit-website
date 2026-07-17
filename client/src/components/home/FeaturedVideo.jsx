import "../../styles/video.css";

function FeaturedVideo() {
  return (
    <section className="featured-video">

      <div className="container">

        <div className="video-header">

          <p className="section-subtitle">
            Wedding Films
          </p>

          <h2>
            Every Love Story Deserves
            <br />
            A Beautiful Film
          </h2>

        </div>

        <div className="video-wrapper">

          <video
            controls
            poster="/images/video-cover.jpg"
            preload="metadata"
          >
            <source
              src="/videos/wedding-film.mp4"
              type="video/mp4"
            />

            Your browser does not support video.
          </video>

        </div>

      </div>

    </section>
  );
}

export default FeaturedVideo;