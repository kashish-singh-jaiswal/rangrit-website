import { useRef, useState } from "react";
import { FaHeart, FaRegHeart, FaPlay } from "react-icons/fa";

function FilmCard({ film }) {

  const [liked, setLiked] = useState(false);
  const videoRef = useRef(null);

  const openFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="film-card">

      <video
        ref={videoRef}
        poster={film.thumbnail}
        controls
      >
        <source src={film.video} type="video/mp4" />
      </video>

      <button
        className="fullscreen-btn"
        onClick={openFullscreen}
      >
        <FaPlay />
      </button>

      <button
        className="like-btn"
        onClick={() => setLiked(!liked)}
      >
        {liked ? <FaHeart /> : <FaRegHeart />}
      </button>

    </div>
  );
}

export default FilmCard;