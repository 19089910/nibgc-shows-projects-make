import React, { useState } from "react";
import Gallery from "@/components/DownloadGallery/DownloadGallery";
import { eventDates } from "@/data/eventDates";
import { freme } from "@/assets/LpId";

const DownloadGallery = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const closeGallery = () => setSelectedDate(null);

  return (
    <section
      className="min-h-screen w-full py-20 px-4 flex items-center justify-center"
      style={{
        backgroundImage: `url(${freme})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 w-full max-w-6xl mx-auto">
        <h2 className="section-title text-toy-blue text-center text-3xl font-bold mb-8">
          BAIXE SUAS FOTOS AQUI!
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {eventDates.map((date, idx) => (
            <button
              key={idx}
              className="calendar-day cursor-pointer bg-white border border-toy-blue text-toy-blue px-4 py-2 rounded-lg hover:bg-toy-blue hover:text-white transition-all duration-300"
              onClick={() => handleDayClick(date)}
            >
              {date}
            </button>
          ))}
        </div>
        <p className="text-center mt-6 text-gray-700 text-sm">
          * Clique no dia para ver horários e disponibilidade
        </p>
      </div>

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
