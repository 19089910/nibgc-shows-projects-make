import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Gallery = ({ images }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-toy-blue mb-12 opacity-0 scroll-animate">GALERIA DE FOTOS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 opacity-0 scroll-animate">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-md h-[200px] hover:shadow-lg transition-all duration-300">
              <img 
                src={img} 
                alt={`Gallery Image ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button className="toy-button secondary">
            <Download size={18} /> BAIXE SUAS FOTOS AQUI!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;