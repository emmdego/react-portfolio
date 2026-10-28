function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar-bg">
            <div className="container-fluid px-4 py-2">
                
                {/* Contenido izquierdo: Nombre e información de contacto */}
                <div className="navbar-brand d-flex flex-column text-white m-0">
                    <span className="fs-4 fw-bold">Emmanuel Escudero Arango</span>
                    <div className="d-flex flex-column contact-info text-white-50 mt-1">
                        <span>
                            <i className="bi bi-envelope-fill"></i> emma.escudero.a@gmail.com.com
                        </span>
                        <span>
                            <i className="bi bi-github"></i> <a href="https://github.com/emmdego/" target="_blank"  className="custom-navbar-social-media">GitHub</a>
                        </span>
                        <span>
                            <i className="bi bi-linkedin"></i> <a href="https://www.linkedin.com/in/emmanuel-escudero/" target="_blank" className="custom-navbar-social-media">LinkedIn</a>
                        </span>
                    </div>
                </div>

                {/* Botón de despliegue para pantallas pequeñas (responsive) */}
                <button 
                className="navbar-toggler border-0" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenido derecho: Enlaces de navegación */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-3 align-items-lg-center">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#recommendations">Recommendations</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Header;