import { useState, useEffect } from "react";
import { Info, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = ({ faqs }) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleFaqs = isMobile && !showAll ? faqs.slice(0, 3) : faqs;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-toy-blue opacity-0 scroll-animate">
          PERGUNTAS FREQUENTES
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleFaqs.map((faq) => (
            <div
              key={faq.id}
              className="faq-card opacity-0 scroll-animate"
              style={{ animationDelay: `${0.1 * faq.id}s` }}
            >
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
        {isMobile && (
          <div className="text-center mt-6">
            <Button
              className="toy-button.primary primary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  VER MENOS <ArrowLeft size={18} />
                </>
              ) : (
                <>
                  VER MAIS <ArrowRight size={18} />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;