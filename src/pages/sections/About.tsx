import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
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
  );
};

export default About;
