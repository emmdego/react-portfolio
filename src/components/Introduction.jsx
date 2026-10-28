function Introduction() {
    return (
    <section id="about" className="container hero-section">
      <div className="row align-items-center">
        
        {/* Columna Izquierda: Imagen del Avatar (Responsiva) */}
        <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
          <img 
            src="/public/img/profile_photo.png" /* Reemplaza con la ruta de tu imagen de la desarrolladora con laptop */
            alt="Emmanuel profile photo" 
            className="img-fluid"
          />
        </div>

        {/* Columna Derecha: Título, emoji y texto introductorio */}
        <div className="col-12 col-md-7">
          <h1 className="fw-bold text-custom-purple mb-3">
            Hi, I'm Emmanuel Escudero Arango! <span role="img" aria-label="waving hand">👋</span>
          </h1>
          <p className="text-secondary fs-6 lh-base">
            I'm currently studying Analysis and Software Development at SENA. Passionate about backend engineering, database management, and clean code principles (SOLID). I'm seeking an apprenticeship to apply what I've learned, contribute to real-world projects, and continue growing professionally.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Introduction;