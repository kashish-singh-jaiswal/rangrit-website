import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../../styles/hero.css";

import hero1 from "../../assets/images/hero/hero1.jpg";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.jpg";
import hero4 from "../../assets/images/hero/hero4.jpg";

const slides = [
  {
    image: hero1,
    title: "Capturing Love Stories That Last Forever",
    subtitle: "Luxury Wedding Photography",
  },
  {
    image: hero2,
    title: "Every Frame Tells A Beautiful Story",
    subtitle: "Pre-Wedding Shoots",
  },
  {
    image: hero3,
    title: "Creating Timeless Memories",
    subtitle: "Portrait Sessions",
  },
  {
    image: hero4,
    title: "Your Moments. Our Passion.",
    subtitle: "Events & Celebrations",
  },
];

function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="hero-slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <div className="container">
                <div className="hero-content">
                  <span>{slide.subtitle}</span>

                  <h1>{slide.title}</h1>

                  <p>
                    Wedding • Pre-Wedding • Portrait • Cinematic Films
                  </p>

                  <div className="hero-buttons">
                    <Link to="/portfolio" className="btn-gold">
                      View Portfolio
                    </Link>

                    <Link to="/booking" className="btn-outline">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-indicator">
              Scroll ↓
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;