
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import Countdown from "@/components/Countdown";
import {formatEventDate} from '@/utils/formatEventDate'
import { eventDates } from "@/data/eventDates";

const Hero = ({...props}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate');
      scrollElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight - 100;
        if (isInViewport) {
          el.classList.add('animate-slide-up');
          el.classList.add('opacity-100');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  //first and last day of your list eventDates
  const eventDateText = formatEventDate(eventDates);
  
  return (
    <section 
      ref={props.heroRef} 
      className="relative min-h-[90vh] flex items-center justify-center western-bg py-20 px-4"
      style={{ 
        backgroundImage: `url(/lovable-uploads/e02ce502-2933-47f6-a939-2b73994893cd.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 to-orange-800/60"></div>
      <div className={`container relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Western Sheriff Badge Style */}
        <div className="relative mb-8 md:mb-12">
          <div className="western-badge mx-auto mb-6">
            <div className="western-star">
              <div className="star-content">
                <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">FAROESTE</h1>
                <h2 className="text-lg md:text-xl font-bold text-amber-900">NA PALAVRA</h2>
              </div>
            </div>
          </div>
          
          <p className="western-date animate-float mb-6 md:mb-8 text-lg md:text-xl font-bold text-white bg-amber-900/80 px-4 py-2 rounded-lg inline-block">{eventDateText}</p>
          
          <div className="mb-8 md:mb-12 relative"> 
            <img
              src={props.logo}
              alt="As Aventuras dos Brinquedos" 
              className="max-w-[70%] md:max-w-[60%] lg:max-w-[50%] mx-auto animate-float western-logo"
            />
            <div className="absolute -left-4 bottom-60 md:left-20 md:bottom-60 w-[100px] md:w-[150px] animate-float " style={{ animationDelay: "0.5s" }}>
              <img src={props.logoEnterprise} alt="Woody" className="w-full h-auto western-shadow" />
            </div>
            <div className="absolute -left-4 md:left-20 w-[100px] md:w-[150px] animate-float " style={{ bottom: '13rem', animationDelay: "0.5s" }}>
              <img src={props.apresenta} alt="Woody" className="w-full h-auto western-shadow" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a 
            href="https://www.google.com/maps?q=NOVA+Igreja+Batista+Grande+Circular" 
            target="_blank" 
            rel="noopener noreferrer"
            className="western-button primary flex items-center"
          >
          <MapPin size={18} className="inline-block mr-1" />
            NOVA Igreja Batista Grande Circular
          </a>
          <p className="western-button secondary" style={{ animationDelay: "0.2s" }}>
            <Countdown targetDate="2025-04-13T17:30:00" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
