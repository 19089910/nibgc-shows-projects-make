const HowToGetThere = () => {
    return (
      <section className="py-20 px-4 cloud-bg">
        <div className="container max-w-6xl mx-auto">
          <h2 className="section-title text-toy-blue opacity-0 scroll-animate">
            COMO CHEGAR!
          </h2>
          <div className="bg-white p-4 rounded-2xl shadow-lg mx-auto max-w-4xl opacity-0 scroll-animate">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.616355895!2d-38.5332649!3d-3.7349042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7488e12f275d1%3A0x7a7ce57bdbfc4c27!2sFortaleza%2C%20Cear%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1689959913103!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowToGetThere;
  