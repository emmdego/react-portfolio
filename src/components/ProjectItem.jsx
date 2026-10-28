import React from 'react';

const ProjectItem = ({ title, description, link }) => {
  const cardContent = (
    <div className="card shadow-lg h-100 border-1 p-2">
      <div className="card-body d-flex flex-column justify-content-between p-3">
        <div>
          <h4 className="card-title fw-bold text-custom-purple mb-3">{title}</h4>
          <p className="card-text text-secondary lh-base m-0">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
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

export default ProjectItem;