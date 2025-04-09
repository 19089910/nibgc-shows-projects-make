import { useEffect, useState } from "react";
import { MapPin, Calendar } from "lucide-react";

const Hero = ({heroRef}) => {
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

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[90vh] flex items-center justify-center cloud-bg py-20 px-4"
      style={{ 
        backgroundImage: "url('https://i.imgur.com/1LQDlni.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-toy-blue/50 to-toy-blue/30"></div>
      <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <p className="event-date animate-float mb-6 md:mb-8 text-lg md:text-xl">19 a 27 OUTUBRO</p>
        <div className="mb-8 md:mb-12 relative">
          <img 
            src="https://i.imgur.com/TnF968E.png" 
            alt="As Aventuras dos Brinquedos" 
            className="max-w-[70%] md:max-w-[60%] lg:max-w-[50%] mx-auto animate-float" 
          />
          <div className="absolute -right-4 top-[40%] md:right-20 md:top-1/3 w-[100px] md:w-[150px] animate-bounce" style={{ animationDelay: "0.3s" }}>
            <img src="https://i.imgur.com/JyZxBwk.png" alt="Buzz Lightyear" className="w-full h-auto" />
          </div>
          <div className="absolute -left-4 bottom-0 md:left-20 md:bottom-0 w-[100px] md:w-[150px] animate-float" style={{ animationDelay: "0.5s" }}>
            <img src="https://i.imgur.com/8M3VuJY.png" alt="Woody" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <p className="bg-white/90 px-4 py-3 rounded-full text-toy-blue font-bold shadow-lg animate-fade-in">
            <span className="inline-block mr-1">
              <MapPin size={18} className="inline-block mr-1" />
            </span>
            NOVA Igreja Batista Grande Circular
          </p>
          <p className="bg-white/90 px-4 py-3 rounded-full text-toy-blue font-bold shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block mr-1">
              <Calendar size={18} className="inline-block mr-1" />
            </span>
            ESTREIA EM: 30 DIAS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
