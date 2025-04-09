import React from "react";

const Calendar = ({ eventDates }) => {
  return (
    <section className="py-20 px-4 cloud-bg">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-toy-blue opacity-0 scroll-animate">ESCOLHA O SEU DIA!</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto opacity-0 scroll-animate">
          {eventDates.map((date, idx) => (
            <div key={idx} className="calendar-day">
              {date}
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-gray-700 opacity-0 scroll-animate">
          * Clique no dia para ver horários e disponibilidade
        </p>
      </div>
    </section>
  );
};

export default Calendar;
