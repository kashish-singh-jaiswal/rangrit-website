import { Link } from "react-router-dom";

function GalleryCard({ item }) {
  return (
    <Link to={`/gallery/${item.slug}`} className="gallery-cover">
      <img
        src={item.image}
        alt={item.slug}
        className="gallery-cover-image"
      />
    </Link>
  );
}

export default GalleryCard;