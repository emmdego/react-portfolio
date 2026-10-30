import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="position-relative py-4 bg-light mt-5">
      <div className="container text-center text-muted">
        <p className="small m-0">© {new Date().getFullYear()} Emmanuel Escudero Arango. All rights reserved.</p>
      </div>

      {/* Botón flotante Scroll to Top usando HTML y clases de Bootstrap */}
      <button 
        onClick={scrollToTop} 
        className="btn scroll-to-top-btn"
        title="Go to top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;