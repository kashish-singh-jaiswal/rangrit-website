import "../../styles/HeroGallery.css";

import img1 from "../../assets/images/gallery/gallery1.jpg";
import img2 from "../../assets/images/gallery/gallery2.jpg";
import img3 from "../../assets/images/gallery/gallery3.jpg";
import img4 from "../../assets/images/gallery/gallery4.jpg";
import img5 from "../../assets/images/gallery/gallery5.jpg";
import img6 from "../../assets/images/gallery/gallery6.jpg";

const images = [
  { image: img1, title: "Pre Wedding" },
  { image: img2, title: "Wedding" },
  { image: img3, title: "Bride Portrait" },
  { image: img4, title: "Haldi Ceremony" },
  { image: img5, title: "Reception" },
  { image: img6, title: "Candid Moments" },
];

function HeroGallery() {
  return (
    <section className="hero-gallery">
      <div className="gallery-grid">
        {images.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <h3>{item.title}</h3>
              <button>View Story</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroGallery;