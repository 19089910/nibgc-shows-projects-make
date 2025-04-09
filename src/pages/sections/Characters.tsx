import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Characters = ({ characters }) => {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="section-title text-toy-blue opacity-0 scroll-animate">
            CONHEÇA NOSSOS PERSONAGENS
          </h2>
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
    );
  };
  
  export default Characters;
  