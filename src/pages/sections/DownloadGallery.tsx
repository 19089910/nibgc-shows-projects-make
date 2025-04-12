import React, { useState } from "react";
import Gallery from "@/components/DownloadGallery/DownloadGallery";

const DownloadGallery = ({ ...props }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const closeGallery = () => setSelectedDate(null);
  return (
    <section 
    className="py-20 px-4"
    style={{
      backgroundImage: `url(${props.freme})`,
      backgroundSize: "cover", // Garante que a imagem cubra toda a área
      backgroundPosition: "center", // Centraliza a imagem
    }}
      >
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-toy-blue opacity-0 scroll-animate">BAIXE SUAS FOTOS AQUI!</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto opacity-0 scroll-animate">
          {props.eventDates.map((date, idx) => (
            <button 
              key={idx} 
              className="calendar-day cursor-pointer hover:bg-toy-blue hover:text-white transition-all duration-300"
              onClick={() => handleDayClick(date)}
              >
                {date}
            </button>
          ))}
        </div>
        <p className="text-center mt-6 text-gray-700 opacity-0 scroll-animate">
          * Clique no dia para ver horários e disponibilidade
        </p>
      </div>

       {/* Galeria exibida ao clicar em uma data */}
       {selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-[90vw] max-h-[90vh] overflow-auto">
            <button
              className="absolute top-2 right-2 text-black bg-white rounded-full px-2 py-1 shadow hover:bg-red-500 hover:text-white transition"
              onClick={closeGallery}
            >
              Fechar
            </button>
            <Gallery selectedDate={selectedDate} />
          </div>
        </div>
      )}
    </section>
  );
};

export default DownloadGallery;
