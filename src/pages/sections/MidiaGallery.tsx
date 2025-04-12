import React from "react";
import InstagramEmbed from "@/components/InstagramEmbed/InstagramEmbed";

const MidiaGallery = ({ midiaGallery }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-toy-blue mb-12 opacity-0 scroll-animate">
          COMPARTILHE NOSSOS VÍDEOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 scroll-animate">
          {midiaGallery.map((url, idx) => (
            <InstagramEmbed key={idx} embedUrl={url} />
          ))}
        </div>
     </div>
    </section>
  );
};

export default MidiaGallery;
