import Hero from "../components/home/Hero";
import FeaturedGallery from "../components/home/FeaturedGallery";
import HomeSlider from "../components/home/HeroSlider";

function Home() {
  return (
    <>
      <Hero />
      <HomeSlider />
      <FeaturedGallery />
    </>
  );
}

export default Home;