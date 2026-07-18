import GalleryCard from "../components/gallery/GalleryCard";
import gallery from "../data/galleryData";
import "../styles/gallery.css";

function Gallery() {
  return (
    <section className="gallery-page">

      <div className="gallery-grid">

        {gallery.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}

      </div>

    </section>
  );
}

export default Gallery;