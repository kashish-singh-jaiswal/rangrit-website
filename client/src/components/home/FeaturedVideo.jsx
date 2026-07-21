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

              <h2>{film.title}</h2>

            </div>

          ))}

        </div>

        <div className="video-btn">

          <Link to="/films" className="browse-btn">
            View All Films →
          </Link>

        </div>

      </div>
      
      <div className="instagram-section container">

        <h2>Follow us on Instagram</h2>

        <a
          href="https://www.instagram.com/rangrit04/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <span>@rangrit04</span>

          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M169.996 34.048c.001-.064-.001-.128-.003-.192a4.05 4.05 0 0 0-.05-.527c-.009-.057-.015-.114-.027-.171a3.921 3.921 0 0 0-.191-.643c-.02-.05-.046-.097-.068-.147a3.889 3.889 0 0 0-.366-.656 3.941 3.941 0 0 0-.451-.552 3.925 3.925 0 0 0-.727-.563 3.988 3.988 0 0 0-.48-.252c-.05-.022-.098-.049-.149-.069a3.995 3.995 0 0 0-.641-.19c-.058-.012-.117-.018-.175-.027a3.975 3.975 0 0 0-.522-.05c-.065-.002-.13-.004-.195-.003a3.948 3.948 0 0 0-.648.062l-.036.004a3.835 3.835 0 0 0-.548.149L32.656 76.441a3.973 3.973 0 0 0-.302 7.378l58.033 25.792 25.793 58.033a3.97 3.97 0 0 0 3.792 2.356 3.971 3.971 0 0 0 3.587-2.656L169.78 35.28c.063-.181.113-.364.149-.549l.004-.033c.041-.216.059-.433.063-.65zm-19.08 9.419-58.399 58.399-47.78-21.236 106.179-37.163zM119.37 155.264l-21.237-47.781 58.4-58.4-37.163 106.181z"/>
          </svg>

        </a>

      </div>
      
    </section>
    
  );
}

export default FeaturedVideo;