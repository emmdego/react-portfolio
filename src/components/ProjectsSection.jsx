import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectsSection = () => {
  // Lista de tus proyectos con sus respectivos enlaces opcionales
  const projectsList = [
    {
      title: 'VisionVial — Hackathon (1st Place)',
      description: 'Urban mobility platform built with FastAPI, React, Django ORM, and MySQL/MariaDB. Contributed to project documentation.',
      link: 'https://github.com/Emmanuel-ui-oss/hackaton'
    },
    {
      title: 'Tienda Evelyn',
      description: 'Business management system designed for inventory control, sales tracking, supplier management, and automated reporting.',
      link: '' 
    },
    {
      title: 'Python Video Game',
      description: 'Personal project focused on practicing Object-Oriented Programming (OOP), advanced programming logic, and robust code structure.',
      link: 'https://github.com/emmdego/python-oop-solid/tree/main/POO/EstructuracionGPT/ejercicio1' 
    }
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="fw-bold text-custom-purple mb-4">Projects</h2>
      
      {/* Contenedor Row y Col para la distribución responsiva */}
      <div className="row">
        {projectsList.map((project, index) => (
          <ProjectItem 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;