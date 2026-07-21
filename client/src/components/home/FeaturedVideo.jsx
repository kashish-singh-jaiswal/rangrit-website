import { Link } from "react-router-dom";
import "../../styles/video.css";

import thumb1 from "../../assets/images/films/film1.jpg";
import thumb2 from "../../assets/images/films/film2.jpg";
import thumb3 from "../../assets/images/films/film3.jpg";

const films = [
  {
    id: 1,
    title: "Jay & Linda",
    video: "/videos/film1.mp4",
    thumbnail: thumb1,
  },
  {
    id: 2,
    title: "Ashish & Vaishnavi",
    video: "/videos/film2.mp4",
    thumbnail: thumb2,
  },
  {
    id: 3,
    title: "Vivek & Vaishali",
    video: "/videos/film3.mp4",
    thumbnail: thumb3,
  },
];

function FeaturedVideo() {
  return (
    <section className="featured-video">

      <div className="container">

        <div className="video-header">

          <p className="section-subtitle">
            CINEMATIC WEDDING FILMS
          </p>

          <h2>
            Stories That Move Beyond
            <br />
            Beautiful Photographs
          </h2>

          <p className="video-text">
            Every wedding has a rhythm of its own. Our films preserve every
            smile, every tear and every celebration with a timeless cinematic
            experience that lets you relive your special day forever.
          </p>

        </div>

        <div className="featured-video-grid">

          {films.map((film) => (

            <div className="featured-film-card" key={film.id}>

              <video
                controls
                preload="metadata"
                poster={film.thumbnail}
              >
                <source src={film.video} type="video/mp4" />
              </video>

              <h3>{film.title}</h3>

            </div>

          ))}

        </div>

        <div className="video-btn">

          <Link to="/films" className="browse-btn">
            View All Films →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default FeaturedVideo;