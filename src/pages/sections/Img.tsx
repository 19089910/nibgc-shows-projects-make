import React from "react";

const Img = ({ ...props }) => {
  return (
    <section className="py-20 px-4 flex flex-col items-center text-center">
      <div className="container max-w-6xl">
        <div className="opacity-0 scroll-animate">
          <div className="bg-toy-yellow inline-block rounded-full px-5 py-2 text-toy-blue font-bold mb-4">
            UM POUCO SOBRE O NOSSO ESPETÁCULO
          </div>
          <h2 className="text-3xl font-bold text-toy-blue mb-6">{props.aboutContent.title}</h2>
        </div>
        <div className="text-left">
          <p className="text-gray-700 mb-6">{props.aboutContent.description1}</p>
          <p className="text-gray-700 mb-6">{props.aboutContent.description2}</p>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <img 
          src={props.aboutImg} 
          alt="Toy Story Characters" 
          className="max-w-full h-auto rounded-2xl shadow-xl opacity-0 scroll-animate" 
        />
      </div>
    </section>
  );
};

export default Img;
