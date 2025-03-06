import React from 'react';
import './ProjectCard.css';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ title, description, imageName, demoLink, codeLink, technologies }) => {
  const { t } = useTranslation();
  return (
    <div className="project-card">
      <div className="project-image">
      <img src={imageName} alt={title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            {t("ver_demo")}
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link code-link">
            {t("Código")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
