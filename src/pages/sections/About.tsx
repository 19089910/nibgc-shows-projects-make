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
            <h2 className="text-3xl font-bold text-toy-blue mb-6">VIVA A PÁSCOA: NO MUSEU DA VIDA</h2>
            <p className="text-gray-700 mb-6">
              O espetáculo Viva Páscoa – No Museu da Vida é uma viagem emocionante pelo significado da Páscoa, trazendo uma mistura envolvente de aprendizado e emoção. A história se desenrola dentro de um museu especial, onde os personagens embarcam em uma jornada cheia de descobertas.</p>
            <p className="text-gray-700 mb-6">
              Com cenários encantadores e efeitos especiais incríveis, Mais do que um espetáculo, a peça nos leva a refletir sobre o amor incondicional de Jesus e a transformação que Sua ressurreição traz para aqueles que creem. Diversão garantida para toda a família!
            </p>
            {//<Button className="toy-button primary">SAIBA MAIS <ArrowRight size={18} /></Button>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
