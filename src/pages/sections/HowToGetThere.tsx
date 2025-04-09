const HowToGetThere = () => {
    return (
      <section className="py-20 px-4 cloud-bg">
        <div className="container max-w-6xl mx-auto">
          <h2 className="section-title text-toy-blue opacity-0 scroll-animate">
            COMO CHEGAR!
          </h2>
          <div className="bg-white p-4 rounded-2xl shadow-lg mx-auto max-w-4xl opacity-0 scroll-animate">
            <iframe  
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1655824635955!2d-59.94639862882166!3d-3.050294576668525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b8d7b61c27d%3A0x1d8b8b78d3186636!2sNova%20Igreja%20Batista%20Grande%20Circular!5e0!3m2!1spt-BR!2sbr!4v1744224347350!5m2!1spt-BR!2sbr"
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
  