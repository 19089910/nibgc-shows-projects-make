import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-toy-darkblue text-white">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo do evento */}
          <div className="text-center md:text-left">
          </div>

          {/* Links de redes sociais */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex justify-center gap-6 text-white text-xl">
              <a
                href="https://www.facebook.com/NIBGrandeCircular"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/nibgrandecircular/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://www.youtube.com/@NIBGrandeCircular"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube />
              </a>
            </div>
          </div>

          {/* Informações de contato */}
          <div className="text-center md:text-right">
            <p className="mt-4 text-sm leading-relaxed">
              Avenida Autaz Mirim, 7761<br />
              Tancredo Neves, Manaus - AM<br />
              <a
                href="https://wa.me/5592984590712"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm block mt-1"
              >
                +55 92 98459-0712
              </a>
              <span className="block mt-1">secretaria@nibgrandecircular.com</span>
            </p>
          </div>
        </div>

        {/* Créditos */}
        <div className="mt-10 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} <strong>NIB Grande Circular</strong>. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido por <span className="underline">Lucas B. Ferreira</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
