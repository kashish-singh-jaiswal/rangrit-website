import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import WhatWeDo from "../components/about/WhatWeDo";
import WhyChoose from "../components/about/WhyChoose";
import CTA from "../components/about/CTA";

import "../styles/about.css";

function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhatWeDo />
      <WhyChoose />
      <CTA />
    </>
  );
}

export default About;