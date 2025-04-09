import { sectionsConfig } from "../utils/sectionsConfig";
import Hero from "./sections/Hero";
import Characters from "./sections/Characters";
import About from "./sections/About";
import FAQ from "./sections/FAQ";
import HowToGetThere from "./sections/HowToGetThere";
import Gallery from "./sections/Gallery";
import Calendar from "./sections/Calendar";
import AboutChurch from "./sections/AboutChurch";
import Footer from "./sections/Footer";
import ShareButton from "./sections/ShareButton";

import { characters } from "../data/characters";
import { faqs } from "../data/faqs";
import { eventDates } from "../data/eventDates";
import { galleryImages } from "../data/galleryImages";
import { videoUrl } from "../data/videoUrl";

import React, { useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
      
  return (
    <div>
      {sectionsConfig.hero && <Hero heroRef={heroRef} />}
      {sectionsConfig.characters && <Characters characters={characters}/>}
      {sectionsConfig.about && <About />}
      {sectionsConfig.faq && <FAQ faqs={faqs}/>}
      {sectionsConfig.howToGetThere && <HowToGetThere />}
      {sectionsConfig.gallery && <Gallery images={galleryImages} />}
      {sectionsConfig.calendar && <Calendar eventDates={eventDates} />}
      {sectionsConfig.aboutChurch && <AboutChurch videoUrl={videoUrl} />}
      {sectionsConfig.footer && <Footer />}
      {sectionsConfig.shareButton && <ShareButton />}
    </div>
  );
};

export default Index;