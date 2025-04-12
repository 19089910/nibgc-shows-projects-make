import { sectionsConfig } from "../utils/sectionsConfig";
import { Hero, Characters, About, FAQ, HowToGetThere, MidiaGallery, DownloadGallery, AboutChurch, Footer, ShareButton, Img } from "./sections";
import { backgroundImage, logo, logoEnterprise, apresenta, aboutImg, freme } from "../assets/LpId"

import { characters } from "../data/characters";
import { faqs } from "../data/faqs";
import { eventDates } from "../data/eventDates";
import { midiaGallery } from "../data/midiaGallery";
import { videoUrl } from "../data/videoUrl";
import { aboutContent } from "../data/aboutContent"

import React, { useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
      
  return (
    <div>
      {sectionsConfig.hero && <Hero 
        heroRef={heroRef} 
        backgroundImage={backgroundImage} 
        logo={logo} 
        logoEnterprise={logoEnterprise}
        apresenta={apresenta}
      />}
      {sectionsConfig.characters && <Characters characters={characters}/>}
      {sectionsConfig.about && <About aboutImg={aboutImg} aboutContent={aboutContent}/>}
      {sectionsConfig.img && <Img  aboutImg={aboutImg} aboutContent={aboutContent}/>}
      {sectionsConfig.faq && <FAQ faqs={faqs}/>}
      {sectionsConfig.howToGetThere && <HowToGetThere />}
      {sectionsConfig.gallery && <MidiaGallery midiaGallery={midiaGallery} />}
      {sectionsConfig.calendar && <DownloadGallery eventDates={eventDates} freme={freme}/>}
      {sectionsConfig.aboutChurch && <AboutChurch videoUrl={videoUrl} />}
      {sectionsConfig.footer && <Footer />}
      {sectionsConfig.shareButton && <ShareButton />}
    </div>
  );
};

export default Index;