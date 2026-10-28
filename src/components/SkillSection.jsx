import React from 'react';
import SkillCards from './SkillCards';

// Importa los íconos o rutas correspondientes de tus tecnologías
import pythonIcon from '../assets/py.png';
import jsIcon from '../assets/js.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import bootstrapIcon from '../assets/bootstrap.jpeg';
import mysqlIcon from '../assets/mysql.png';
import postgresIcon from '../assets/postgresql.png';
import gitIcon from '../assets/git.jpeg';
import linuxIcon from '../assets/linux.jpeg';

const SkillsSection = () => {
  // Lista de habilidades basada exactamente en tu perfil y README de GitHub
  const skillsList = [
    { name: 'Python', experience: 'Backend & OOP', icon: pythonIcon, link: 'https://github.com/emmdego/python-oop-solid' },
    { name: 'JavaScript', experience: 'Essentials', icon: jsIcon, link: 'https://github.com/emmdego/javascript-essentials' },
    { name: 'MySQL', experience: 'Database', icon: mysqlIcon, link: 'https://github.com/emmdego/sql-query-practice' },
    { name: 'PostgreSQL', experience: 'Database', icon: postgresIcon, link: 'https://github.com/emmdego/PostgreSQL-Complex-Business-Logic' },
    { name: 'HTML5', experience: 'Frontend Basics', icon: htmlIcon, link: 'https://github.com/emmdego/frontend-basics' },
    { name: 'CSS3', experience: 'Frontend Basics', icon: cssIcon, link: 'https://github.com/emmdego/frontend-basics' },
    { name: 'Bootstrap', experience: 'UI Framework', icon: bootstrapIcon, link: 'https://github.com/emmdego/frontend-basics' },
    { name: 'Git', experience: 'Tools', icon: gitIcon, link: 'https://github.com/emmdego/Git' },
    { name: 'Linux', experience: 'Environment', icon: linuxIcon, link: '' },
  ];

  return (
    <section id="skills" className="container py-5">
      <h2 className="fw-bold text-custom-purple mb-4">Skills & Tools</h2>
      
      {/* Cuadrícula responsiva con Bootstrap Row y Col */}
      <div className="row">
        {skillsList.map((skill, index) => (
          <SkillCards 
            key={index} 
            name={skill.name} 
            experience={skill.experience} 
            icon={skill.icon}
            link={skill.link}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;