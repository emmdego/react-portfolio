import React from 'react';

function SkillCards({ name, experience, icon, link }) {
    // Si hay un link, envolvemos la tarjeta en un <a>. Si no, solo mostramos la tarjeta.
    const cardContent = (
        <div className="card skill-card h-100 text-center p-3">
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img src={icon} alt={name} className="skill-icon mb-3" style={{ height: '40px', objectFit: 'contain' }} />
                <h5 className="card-title fw-bold text-dark fs-6 mb-2">{name}</h5>
                <p className="card-text text-muted small m-0">{experience}</p>
            </div>
        </div>
    );

    return (
        <div className="col-6 col-md-4 col-lg-3 mb-4">
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    {cardContent}
                </a>
            ) : (
                <div style={{ cursor: 'default' }}>
                    {cardContent}
                </div>
            )}
        </div>
    );
};

export default SkillCards;