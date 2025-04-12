import React from "react";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const AboutChurch = ({ videoUrl }) => {
  return (
    <section className="py-20 px-4 bg-toy-blue text-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-white opacity-0 scroll-animate">
          CONHEÇA UM POUCO SOBRE A NOSSA IGREJA
        </h2>
        <div className="max-w-3xl mx-auto bg-white/10 p-6 rounded-2xl backdrop-blur-sm opacity-0 scroll-animate">
          <div className="relative pb-[56.25%] overflow-hidden rounded-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="Igreja Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
              <Button className="toy-button red">
                <Video size={18} /> ASSISTIR NO YOUTUBE
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChurch;