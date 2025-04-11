import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = ({...props}) => {
  return (
    <section className="py-20 px-4 cloud-bg">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center direction-rtl">
          <div className="flex justify-center">
            <img 
              src={props.aboutImg} 
              alt="Toy Story Characters" 
              className="max-w-full h-auto rounded-2xl shadow-xl opacity-0 scroll-animate" 
            />
          </div>
          <div className="opacity-0 scroll-animate">
            <div className="bg-toy-yellow inline-block rounded-full px-5 py-2 text-toy-blue font-bold mb-4">
              UM POUCO SOBRE O NOSSO ESPETÁCULO
            </div>
            <h2 className="text-3xl font-bold text-toy-blue mb-6">{props.aboutContent.title}</h2>
            <p className="text-gray-700 mb-6">{props.aboutContent.description1}</p>
            <p className="text-gray-700 mb-6">{props.aboutContent.description2}</p>
            {
              //<Button className="toy-button primary">SAIBA MAIS <ArrowRight size={18} /></Button>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
