
import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, MapPin, Calendar, Clock, Share2, Download, Video, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Sample character data
const characters = [
  {
    id: 1,
    name: "Xerife Woody",
    image: "https://i.imgur.com/8M3VuJY.png",
    description: "O líder do grupo, um boneco caubói que ganha vida. Corajoso e leal, ele lidera os brinquedos e se preocupa com o bem-estar de todos."
  },
  {
    id: 2,
    name: "Buzz Lightyear",
    image: "https://i.imgur.com/JyZxBwk.png",
    description: "Um patrulheiro espacial de brinquedo que inicialmente acreditava ser um herói real. Determinado e aventureiro, tornou-se o melhor amigo de Woody."
  },
  {
    id: 3,
    name: "Jessie",
    image: "https://i.imgur.com/5MZRlxR.png",
    description: "Uma animada caubói de brinquedo com personalidade energética. Foi abandonada por sua dona original, o que a deixou com medo de ser esquecida."
  },
  {
    id: 4,
    name: "Rex",
    image: "https://i.imgur.com/dkK6Nvr.png",
    description: "Um dinossauro de brinquedo ansioso que tenta ser assustador, mas tem um coração doce. Está sempre tentando superar seus medos."
  }
];

// FAQ data
const faqs = [
  {
    id: 1,
    question: "Qual é a faixa etária recomendada?",
    answer: "O evento é adequado para crianças de 3 a 12 anos, mas todos são bem-vindos!"
  },
  {
    id: 2,
    question: "Os pais precisam comprar ingressos?",
    answer: "Sim, todos os participantes precisam de ingressos, incluindo adultos acompanhantes."
  },
  {
    id: 3,
    question: "Haverá alimentação no local?",
    answer: "Sim, teremos opções de lanches e bebidas disponíveis para compra."
  },
  {
    id: 4,
    question: "Como funciona o encontro com os personagens?",
    answer: "Os personagens estarão disponíveis para fotos em horários específicos anunciados durante o evento."
  },
  {
    id: 5,
    question: "Posso tirar fotos durante o evento?",
    answer: "Sim! Incentivamos que registre seus momentos especiais."
  },
  {
    id: 6,
    question: "O que está incluído no ingresso?",
    answer: "Acesso a todas as atividades, shows e áreas temáticas do evento."
  }
];

// Event dates
const eventDates = [
  "19 Outubro", "20 Outubro", "21 Outubro", "22 Outubro", "23 Outubro",
  "24 Outubro", "25 Outubro", "26 Outubro", "27 Outubro"
];

// Photo gallery
const galleryImages = [
  "https://i.imgur.com/vqO4N5j.jpg",
  "https://i.imgur.com/NMnNZsG.jpg",
  "https://i.imgur.com/JrFqAWo.jpg",
  "https://i.imgur.com/kPuTx0A.jpg",
  "https://i.imgur.com/6Npt5H8.jpg",
  "https://i.imgur.com/OYgQHSl.jpg",
  "https://i.imgur.com/nZyGMeN.jpg",
  "https://i.imgur.com/YR0uMOk.jpg",
  "https://i.imgur.com/H7oK2Lf.jpg"
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
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
        <div className={`container relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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

      {/* Characters Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="section-title text-toy-blue opacity-0 scroll-animate">CONHEÇA NOSSOS PERSONAGENS</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {characters.map((character) => (
                <CarouselItem key={character.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <div className="character-card h-full flex flex-col">
                    <div className="bg-toy-yellow p-6 flex justify-center items-center h-[200px]">
                      <img 
                        src={character.image} 
                        alt={character.name} 
                        className="h-[180px] object-contain mx-auto" 
                      />
                    </div>
                    <div className="p-6 flex-grow bg-white">
                      <h3 className="text-xl font-bold text-toy-blue mb-2">{character.name}</h3>
                      <p className="text-gray-700 text-sm">{character.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-toy-blue text-white hover:bg-blue-700" />
            <CarouselNext className="bg-toy-blue text-white hover:bg-blue-700" />
          </Carousel>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 cloud-bg">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/Y1AfWNx.png" 
                alt="Toy Story Characters" 
                className="max-w-full h-auto rounded-2xl shadow-xl opacity-0 scroll-animate" 
              />
            </div>
            <div className="opacity-0 scroll-animate">
              <div className="bg-toy-yellow inline-block rounded-full px-5 py-2 text-toy-blue font-bold mb-4">
                UM POUCO SOBRE O NOSSO ESPETÁCULO
              </div>
              <h2 className="text-3xl font-bold text-toy-blue mb-6">A MAIOR AVENTURA DOS BRINQUEDOS!</h2>
              <p className="text-gray-700 mb-6">
                Venha se divertir em uma experiência inesquecível onde brinquedos ganham vida! Nosso espetáculo traz as aventuras mais emocionantes dos seus personagens favoritos em um show cheio de música, diversão e lições de amizade.
              </p>
              <p className="text-gray-700 mb-6">
                Com cenários encantadores e efeitos especiais incríveis, as crianças vão se sentir parte deste universo mágico onde a imaginação não tem limites. Diversão garantida para toda a família!
              </p>
              <Button className="toy-button primary">SAIBA MAIS <ArrowRight size={18} /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="section-title text-toy-blue opacity-0 scroll-animate">PERGUNTAS FREQUENTES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-card opacity-0 scroll-animate" style={{ animationDelay: `${0.1 * faq.id}s` }}>
                <div className="flex items-start gap-3">
                  <div className="bg-toy-red rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <Info size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-toy-blue mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get There */}
      <section className="py-20 px-4 cloud-bg">
        <div className="container max-w-6xl mx-auto">
          <h2 className="section-title text-toy-blue opacity-0 scroll-animate">COMO CHEGAR!</h2>
          <div className="bg-white p-4 rounded-2xl shadow-lg mx-auto max-w-4xl opacity-0 scroll-animate">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.616355895!2d-38.5332649!3d-3.7349042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7488e12f275d1%3A0x7a7ce57bdbfc4c27!2sFortaleza%2C%20Cear%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1689959913103!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="400" 
              style={{border: 0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="section-title text-toy-blue mb-12 opacity-0 scroll-animate">GALERIA DE FOTOS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 opacity-0 scroll-animate">
            {galleryImages.map((img, idx) => (
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

      {/* Calendar Section */}
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

      {/* About Church Section */}
      <section className="py-20 px-4 bg-toy-blue text-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="section-title text-white opacity-0 scroll-animate">CONHEÇA UM POUCO SOBRE A NOSSA IGREJA</h2>
          <div className="max-w-3xl mx-auto bg-white/10 p-6 rounded-2xl backdrop-blur-sm opacity-0 scroll-animate">
            <div className="relative pb-[56.25%] overflow-hidden rounded-xl">
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Igreja Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="text-center mt-6">
              <Button className="toy-button red">
                <Video size={18} /> ASSISTIR NO YOUTUBE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-toy-darkblue text-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <img 
                src="https://i.imgur.com/TnF968E.png" 
                alt="As Aventuras dos Brinquedos" 
                className="max-w-[200px] mx-auto md:mx-0" 
              />
            </div>
            <div className="text-center">
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:underline transition-all duration-300">REDES SOCIAIS DA IGREJA</a>
                <a href="#" className="hover:underline transition-all duration-300">REDES SOCIAIS DO EVENTO</a>
                <a href="#" className="hover:underline transition-all duration-300">REDES SOCIAIS DA IGREJA</a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <img 
                src="https://i.imgur.com/g9jhDro.png" 
                alt="Igreja Logo" 
                className="max-w-[120px] mx-auto md:ml-auto" 
              />
              <p className="mt-4 text-sm opacity-75">@NIB GRANDE CIRCULAR</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Share Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-toy-yellow text-toy-blue rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-all duration-300 animate-bounce" style={{ animationDuration: '3s' }}>
          <Share2 size={24} />
        </button>
      </div>
    </div>
  );
};

export default Index;
